// Weibull Distribution Function 
function weibull(x, alpha, beta){
    var exponent_value = Math.pow(x/beta, alpha);
    return (1 - Math.exp(-exponent_value));
}