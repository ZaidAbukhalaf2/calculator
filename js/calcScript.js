document.getElementById("population_options").onchange = () => getResult();
document.getElementById("outcome_options").onchange = () => getResult();
document.getElementById("time").onkeyup = () => getResult();
document.getElementById("patient_number").onkeyup = () => getResult();

defaultOutcome = 'All Cause Mortality';
document.querySelector('#number .outcome_view').innerHTML = defaultOutcome;
document.querySelector('#cv_death .outcome_view').innerHTML = defaultOutcome;
document.querySelector('#less_txt .outcome_view').innerHTML = defaultOutcome;
document.querySelector('#mean .outcome_view').innerHTML = defaultOutcome;

// this function is invoked on change in any input values
function getResult(){
    // fetching input values
    let population = document.getElementById("population_options").value;
    let viewOutcome = document.getElementById("outcome_options").value;
    let timeHorizon = document.getElementById("time").value;
    let patientNo = document.getElementById("patient_number").value;
    let outcomeDist = "Weibull";
    let acmDist = "Weibull";
    let acmAdjust = "Adjusted";

    const specialChars = /[^0-9]/g; //any non-digit character regex pattern

    // validate for any special characters in timeHorizon input
    if(timeHorizon.match(/[^0-9]/)){
        document.getElementById("time").value = timeHorizon.replaceAll(specialChars,"");
        return;
    }

    // validate for any special characters in patientNo input
    if(patientNo.match(/[^0-9]/)){
        document.getElementById("patient_number").value = patientNo.replaceAll(specialChars,"");
        return;
    }

    timeHorizon = (timeHorizon === "") ? timeHorizon : parseInt(timeHorizon);
    patientNo = (patientNo === "") ? patientNo : parseInt(patientNo);

    viewOutcome = (viewOutcome == "All Cause Mortality") ? "ACM" : viewOutcome;

    // validating input values
    if(!validateInput(population, viewOutcome, timeHorizon, patientNo, outcomeDist, acmDist, acmAdjust))
        return;

    // fetching survival parameter values from survivalParams.js
    let survivalParamObj = survivalParams[population][viewOutcome][outcomeDist];
    let param1 = (survivalParamObj["Parameter1"]);
    let param2 = (survivalParamObj["Parameter2"]);
    let dapagliflozin = (survivalParamObj["Dapagliflozin"]);

    // params object to pass input values as an object across different function parameters
    let params = {
        population,
        viewOutcome,
        timeHorizon,
        patientNo,
        outcomeDist,
        acmDist,
        acmAdjust,
        param1,
        param2,
        dapagliflozin
    }

    // fetch result by invoking the respective function based on viewOutcome and acmAdjust
    let result = (params.viewOutcome == "ACM")?getACM(params):(params.acmAdjust == "Adjusted")?getAdjusted(params):getUnadjusted(params);
    viewOutcome = (viewOutcome == "ACM") ? "All Cause Mortality" : viewOutcome;

    // display fetched result in UI
    document.getElementById("dapaValue1").innerHTML = (result.dapagliflozin.val).toFixed();
    document.getElementById("placeboValue1").innerHTML = (result.placebo.val).toFixed();
    document.getElementById("incrementalValue1").innerHTML = (result.dapagliflozin.val - result.placebo.val).toFixed();

    document.getElementById("dapaValue2").innerHTML = result.dapagliflozin.meanVal===0?result.dapagliflozin.meanVal:(result.dapagliflozin.meanVal).toFixed(2);
    document.getElementById("placeboValue2").innerHTML = result.placebo.meanVal===0?result.placebo.meanVal:(result.placebo.meanVal).toFixed(2);
    document.getElementById("incrementalValue2").innerHTML = (result.dapagliflozin.meanVal - result.placebo.meanVal)===0?(result.dapagliflozin.meanVal - result.placebo.meanVal):(result.dapagliflozin.meanVal - result.placebo.meanVal).toFixed(2);

    document.querySelector("#largeValue span").innerHTML = String((Math.abs(result.dapagliflozin.val - result.placebo.val)).toFixed()).substring(0,5);

    document.querySelector('#number .years').innerHTML = timeHorizon;

    document.querySelector('#number .outcome_view').innerHTML = viewOutcome;
    
    document.querySelector('#mean .outcome_view').innerHTML = viewOutcome;

    document.querySelector('#cv_death .outcome_view').innerHTML = viewOutcome;
     
    document.querySelector('#less_txt .outcome_view').innerHTML = viewOutcome;

    let incrementalValue = parseFloat(document.getElementById("incrementalValue1").innerHTML)
    document.querySelector('#less_txt .determiner').innerHTML = incrementalValue <= 0 ? 'Fewer' : 'More';
    document.querySelector('#less_txt .years').innerHTML = timeHorizon;
}

// function to perform input validation
// parameters for comparison: validateInput(population, viewOutcome, timeHorizon, patientNo, outcomeDist, acmDist, acmAdjust)
function validateInput(a,b,c,d,e,f,g){

    let flag = true;

    if(c>10 || c<1 || c===""){
        document.getElementById("time-error").style.display = "block";
        document.getElementById("time").classList.add("highlight");
        document.getElementById("patient_number").classList.remove("highlight");
        resetOutput();
        flag = false;
    }
    else{
        document.getElementById("time-error").style.display = "none";
        document.getElementById("time").classList.remove("highlight");
        if(d===""){
            document.getElementById("patient_number").classList.add("highlight");
        }
        else{
            document.getElementById("patient_number").classList.remove("highlight");
        }
        flag = true;
    }

    if(!a || !b || c==="" || d==="" || !e || !f || !g){
        flag = false;
    }

    return flag;
}

// function to reset output values if wrong time range is entered
function resetOutput(){
    document.getElementById("dapaValue1").innerHTML = 0;
    document.getElementById("placeboValue1").innerHTML = 0;
    document.getElementById("incrementalValue1").innerHTML = 0;

    document.getElementById("dapaValue2").innerHTML = 0;
    document.getElementById("placeboValue2").innerHTML = 0;
    document.getElementById("incrementalValue2").innerHTML = 0;

    document.querySelector("#largeValue span").innerHTML = 0;
}

// function to get the dapagliflozin and placebo values and mean values when viewOutcome is ACM
function getACM(params){
    let d_acmObj = getACMObject("dapagliflozin", params); //get acm object for dapagliflozin
    let p_acmObj = getACMObject("placebo", params); //get acm object for placebo

    let d_res = {val:d_acmObj[(params.timeHorizon*12)], meanVal:getMean(d_acmObj, params.patientNo)}; //get value and mean value for dapagliflozin
    let p_res = {val:p_acmObj[(params.timeHorizon*12)], meanVal:getMean(p_acmObj, params.patientNo)}; //get value and mean value for placebo

    return {dapagliflozin:d_res, placebo:p_res};
}

// function to get the ACM object
function getACMObject(drug, params){

    // get survival parameter values for ACM from survivalParams.js
    let acmSurvivalParamObj = survivalParams[params.population]["ACM"][params.acmDist];

    let param1 = (acmSurvivalParamObj["Parameter1"]);
    let param2 = (acmSurvivalParamObj["Parameter2"]);
    let dapagliflozin = (drug === "dapagliflozin") ? (acmSurvivalParamObj["Dapagliflozin"]) : 0;

    let acmObj = {0:0} // initialize ACM object. {month : acm value}

    // generate the complete ACM object using for loop
    for(let i=1;i<=720;i++){
        let prev = survivalFunc(params.acmDist, i-1, param1, param2, 0, dapagliflozin); //survival function value for previous month
        if(prev < (Math.pow(10,-64))){
            acmObj[i] = acmObj[i-1];
        }
        else{
            let curr = survivalFunc(params.acmDist, i, param1, param2, 0, dapagliflozin); //survival function value for current month
            acmObj[i] = acmObj[i-1]+((prev-curr)/prev)*(params.patientNo-acmObj[i-1]);
        }
    }

    return acmObj;
}

// function to get the dapagliflozin and placebo values and mean values when viewOutcome is other than ACM and acmAdjust is Adjusted
function getAdjusted(params){
    d_acmObj = getACMObject("dapagliflozin", params); // get ACM object for dapagliflozin
    p_acmObj = getACMObject("placebo", params); // get ACM object for placebo
    d_res = getAdjustedVal("dapagliflozin",d_acmObj,params); //get value and mean value for dapagliflozin
    p_res = getAdjustedVal("placebo",p_acmObj,params); //get value and mean value for placebo
    return {dapagliflozin:d_res, placebo:p_res};
}

// function to generate the result object and return value (based on offset) and mean value
function getAdjustedVal(drug, acmObj, params){
    let resObj = {0:0} // initialize result object. {month : result value for specific viewOutcome}

    let param_dapagliflozin = (drug === "dapagliflozin") ? params.dapagliflozin : 0;

    // generate the complete result object using for loop
    for(let i=1;i<=720;i++){
        let prev = survivalFunc(params.outcomeDist, i-1, params.param1, params.param2, 0, param_dapagliflozin); //survival function value for previous month
        if(prev < Math.pow(10,-64))
            resObj[i] = resObj[i-1];
        else{
            let curr = survivalFunc(params.outcomeDist, i, params.param1, params.param2, 0, param_dapagliflozin); //survival function value for current month
            if(params.viewOutcome == "CV Death" || params.viewOutcome == "Renal Death")
                resObj[i] = resObj[i-1]+(((prev-curr)/prev)*(params.patientNo-acmObj[i-1]));
            else
                resObj[i] = resObj[i-1]+(((prev-curr)/prev)*((params.patientNo-acmObj[i])-(resObj[i-1]*(params.patientNo-acmObj[i-1]))/params.patientNo));
        }
    }

    return {val:resObj[(params.timeHorizon*12)], meanVal:getMean(resObj, params.patientNo)};
}

// function to get the dapagliflozin and placebo values and mean values when viewOutcome is other than ACM and acmAdjust is Adjusted
function getUnadjusted(params){
    d_res = getUnAdjustedVal("dapagliflozin",params); //get value and mean value for dapagliflozin
    p_res = getUnAdjustedVal("placebo",params); //get value and mean value for placebo
    return {dapagliflozin:d_res, placebo:p_res};
}

// function to generate the result object and return value (based on offset) and mean value
function getUnAdjustedVal(drug,params){
    let resObj = {0:0} // initialize result object. {month : result value for specific viewOutcome}

    let param_dapagliflozin = (drug === "dapagliflozin") ? params.dapagliflozin : 0;

    // generate the complete result object using for loop
    for(let i=1;i<=720;i++){
        let prev = survivalFunc(params.outcomeDist, i-1, params.param1, params.param2, 0, param_dapagliflozin); //survival function value for previous month
        if(prev < Math.pow(10,-64))
        resObj[i] = resObj[i-1];
        else{
            let curr = survivalFunc(params.outcomeDist, i, params.param1, params.param2, 0, param_dapagliflozin); //survival function value for current month
            resObj[i] = resObj[i-1] + (((prev-curr)/prev)*(params.patientNo - resObj[i-1]))
        }
    }

    return {val:resObj[(params.timeHorizon*12)], meanVal:getMean(resObj, params.patientNo)};
}

// function to calculate mean value for passed in result object
function getMean(resObj,patientNo){
    // get summation of the values of result object
    if(patientNo === 0)
        return 0;
    let total = Object.values(resObj).reduce((sum,val) => {
        return sum + (patientNo - val);
    },0)
    return ((total/12)/patientNo);
}