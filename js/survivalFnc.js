function survivalFunc(dist,month,param1,param2,param3,HRCoeff){
    if(month === 0) 
      return 1;
    
    else if(dist === "Exponential")
      return Math.pow(2.718282,(-param1 * month * Math.pow(2.718282,HRCoeff)));
    
    else if(dist === "Weibull")
      return (1-weibull(month, param1, param2 * Math.pow(2.718282,HRCoeff)));
    
    else if(dist === "Log-logistic")
      return (1 / (1 + Math.pow((month / (param2 * Math.pow(2.718282,HRCoeff))), param1)));
    
    else if(dist === "Lognormal")
      return (1 - Application.WorksheetFunction.LogNorm_Dist(month, param1 + HRCoeff, param2));
    
    else if(dist === "Gompertz")
      return Math.pow(2.718282,param2 / param1 * (1 - Math.pow(2.718282,param1 * month)) * Math.pow(2.718282,HRCoeff));
    
    else if(dist === "Gamma")
      return 1 - Application.WorksheetFunction.GammaDist(month, param1, 1 / (param2 * Exp(HRCoeff)));
    
    else if(dist === "Generalised Gamma"){
        if(param3 > 0)
            return 1 - Application.WorksheetFunction.GammaDist(((-param3) ^ (-2)) * Exp((-param3) * (-((Log(month) - (param1 + HRCoeff)) / param2))), (-param3) ^ (-2), 1);
    
        else if(param3 < 0)
            return Application.WorksheetFunction.GammaDist(((-param3) ^ (-2)) * Exp((-param3) * (-((Log(month) - (param1 + HRCoeff)) / param2))), (-param3) ^ (-2), 1);
    }

    else
      return 0
  }