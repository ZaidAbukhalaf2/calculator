// var url = "https://www.dapackdmodel.com/api/";
// var pop = {
// 	"Full population" : 0,
// 	"Aged ≥ 65 years" : 1,
// 	"Aged < 65 years" : 2,
// 	"T2DM" : 3,
// 	"No T2DM" : 4,
// 	"CV Disease" : 5,
// 	"No CV Disease" : 6,
// 	"eGFR ≥ 45 mL/min/1,73m2" : 7,
// 	"eGFR < 45 mL/min/1,73m2" : 8,
// 	"eGFR ≥ 50 mL/min/1,73m2" : 9,
// 	"eGFR < 50 mL/min/1,73m2" : 10,
// 	"UACR ≤ 1000" : 11,
// 	"UACR > 1000" : 12,
// 	"No T2DM with eGFR ≥ 30 & No HF" : 13
// };

// var outcome = {
// 	"≥ 50% sustained decline in eGFR" : 0,
// 	"ESRD" : 1,
// 	"ACM" : 2,
// 	"Hospitalisation for HF" : 3,
// 	"MI" : 4,
// 	"Stroke" : 5,
// 	"AKI" : 6,
// 	"CV Death" : 7,
// 	"Renal Death" : 8
// };
// var g_data = null;

// function getEndpoint(ep) {

// 	for(var index = 0; index < g_data.endpoints.length; index++) {
// 		if(ep == g_data.endpoints[index].id)
// 			return g_data.endpoints[index].name;
// 	}
	
// }
// (function() {
// 	$.getJSON(url + "params", function(data) {
// 		var popOptions = [];
// 		g_data = data;
// 		$.each( data.populations, function( index, val ) {
// 			str = "";
// 			var dValue = val.name.replace("m2", "m&#178;").replace(",", ".");
// 			if(val.name == "eGFR < 45 mL/min/1,73m2")
// 				str = "<option value='" + val.id + "' selected>" + dValue + "</li>" ;
// 			else
// 				str = "<option value='" + val.id + "'>" + dValue + "</li>" ;
			
// 			popOptions[pop[val.name]] = str;
// 		});
// 		var outcomes = []
// 		$.each( data.endpoints, function( index, val ) {
// 			str = "";
// 			if(val.name == "ACM")
// 				str = "<option value='" + val.id + "' selected>All Cause Mortality</li>" ;
// 			else
// 				str = "<option value='" + val.id + "'>" + val.name + "</li>" ;
			
// 			outcomes[outcome[val.name]] = str;	
// 		});
		
// 		$("#population_options").html(popOptions.join(""));
// 		$("#outcome_options").html(outcomes.join(""));
// 		var ep = "All Cause Mortality";
// 		$(".outcome_view").html(ep);
// 	});
// })();

// function calc(event) {
// 	var population = $("#population_options").val();
// 	var endpoint = $("#outcome_options").val();
// 	var horizon = $("#time").val();
// 	var cohort = $("#patient_number").val();
// 	$("#population_options").css("border", "0");
// 	$("#outcome_options").css("border", "0");
// 	$("#time").css("border", "0");
// 	$("#patient_number").css("border", "0");
// 	$("#time-error").css("display", "none");
// 	var ep = (getEndpoint(endpoint) == "ACM") ? "All Cause Mortality" : getEndpoint(endpoint);
// 	$(".outcome_view").html(ep);
// 	$(".years").html("");

// 	if(horizon == "" || (parseInt(horizon) < 0 || parseInt(horizon) > 10)) {
// 		$("#time").css("border", "1px solid #ed4d40");
// 		$("#time-error").css("display", "block");
// 		$("#dapaValue1").html('0');
// 		$("#placeboValue1").html('0');
// 		$("#incrementalValue1").html('0');
// 		$("#dapaValue2").html('0');
// 		$("#placeboValue2").html('0');
// 		$("#incrementalValue2").html('0');
// 		$("#largeValue").html('0');
// 		$(".years").html("");
// 		//$("#less_txt").html("<span>Less patients with '" + endpoint + "' </span>");
// 		//$(".outcome_view").html('');
// 		return ;
// 	}
// 	if(cohort == "") {
// 		$("#patient_number").css("border", "1px solid #ed4d40");
// 		return ;
// 	}
// 	var ep = (getEndpoint(endpoint)  == "ACM") ? "All Cause Mortality" : getEndpoint(endpoint) ;
// 	$(".outcome_view").html(ep);
// 	$(".years").html(horizon);

// 	$.ajax({
// 		type: 'post',
// 		url: url,
// 		data: JSON.stringify({
// 			"population": population,
// 			"endpoint" : endpoint,
// 			"distribution" : "WEIBULL",
// 			"horizon" : horizon,
// 			"cohort": cohort,
// 			"discount" : 3
// 		}),
// 		contentType: "application/json; charset=utf-8",
// 		traditional: true,
// 		success: function (data) {
// 			horizon = $("#time").val();
// 			if(horizon == "" || (parseInt(horizon) < 0 || parseInt(horizon) > 10)) {
// 				$("#time").css("border", "1px solid #ed4d40");
// 				$("#time-error").css("display", "block");
// 				$("#dapaValue1").html('0');
// 				$("#placeboValue1").html('0');
// 				$("#incrementalValue1").html('0');
// 				$("#dapaValue2").html('0');
// 				$("#placeboValue2").html('0');
// 				$("#incrementalValue2").html('0');
// 				$("#largeValue").html('0');
// 				$(".years").html("");
// 				//$("#less_txt").html("<span>Less patients with '" + endpoint + "' </span>");
// 				//$(".outcome_view").html('');
// 				return ;
// 			}
// 			$("#dapaValue1").html(data.dapaEventCount);
// 			$("#placeboValue1").html(data.placeboEventCount);
// 			$("#incrementalValue1").html(data.eventDiff);
// 			$("#dapaValue2").html(data.dapaMeanTime);
// 			$("#placeboValue2").html(data.placeboMeanTime);
// 			$("#incrementalValue2").html(data.meanDiff);
// 			var result = ("" + data.result);
// 			if(result.length > 5) {
// 				result = result.substring(0, 5);
// 			}
// 			$(".determiner").html((data.eventDiff > 0) ? "More" : "Fewer");

// 			$("#largeValue").html(result);
// 			//$("#less_txt").html("<span>Less patients with '" + endpoint + "' </span>");
			
// 		}
// 	});
// }

// $(document).ready(function() {
// 	$("#population_options").change(calc);
// 	$("#outcome_options").change(calc);
// 	$("#time").keyup(calc);
// 	$("#patient_number").keyup(calc);
// });

// function isNumber(evt) {
//     evt = (evt) ? evt : window.event;
//     var charCode = (evt.which) ? evt.which : evt.keyCode;
//     if (charCode > 31 && (charCode < 48 || charCode > 57)) {
//         return false;
//     }
//     return true;
// }