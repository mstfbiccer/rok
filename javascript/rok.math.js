// Mathematics functions

// Copyright (c) 2015 sSource.
// ___________ROK___________
// |π_|Ω_|λ_|ε_|ĉ_|λ_|Ω_|π_| 8
// |x_|x_|x_|x_|x_|x_|x_|x_| 7
// |__|__|__|__|__|__|__|__| 6
// |__|__|__|__|__|__|__|__| 5
// |__|__|__|__|_x|__|__|__| 4
// |__|__|__|_λ|__|_Ω|__|__| 3
// |_x|_x|_x|_x|__|_x|_x|_x| 2
// |_π|_Ω|_λ|_ε|__|_π|_ĉ|__| 1
//   A  B  C  D  E  F  G  H
//
// Because, chess is life.

// example factorial(5) => 120
function factorial(value) {
	var sonuc=1;
	for(var i=1;i<=value;i++)
		sonuc=sonuc*i;
	return sonuc;
}

// example pow(5,2) => 25
function pow(value1,value2) {
	var sonuc=value1;
	for(i=1;i<value2;i++) {	
		sonuc*=value1;
	}
	return sonuc;
}

// example: f="x*2"; put(f,3) => 6
// example: f="x*2+y/3*2*z"; put(f,[3,5,6]) => 26
function put(value1,value2) { 
	var replacedValue=value1;
	for(var i=0;i<symbols.length;i++) {
		if($.isArray(value2))
			replacedValue=replacedValue.replace(new RegExp(symbols[i], 'g'), value2[i]); 
 		else
			replacedValue=replacedValue.replace(new RegExp(symbols[i], 'g'), value2); // symbol to value converter
	}
	return eval(replacedValue);
}

// example sum('x',1,10) => 1+2+...+9+10
function sum(equation,st,fn) {
	var replacedValue=equation;
	var sumpy=0;
	for(var j=st;j<=fn;j++) {
		for(var i=0;i<symbols.length;i++) {
		replacedValue=equation.replace(new RegExp(symbols[i], 'g'), j); // symbol to value converter
		if(replacedValue!=equation)
			sumpy+=eval(replacedValue);
		}
	}	
	return sumpy;
}

// example sum('x',1,10) => 1*2*...*9*10
function prod(equation,st,fn) {
	var replacedValue=equation;
	var prody=1;
	for(var j=st;j<=fn;j++) {
		for(var i=0;i<symbols.length;i++) {
		replacedValue=equation.replace(new RegExp(symbols[i], 'g'), j);
		if(replacedValue!=equation)
			prody*=eval(replacedValue);
		}
	}	
	return prody;
}

function lim(equation,value2) { 
	var replacedValue=equation;
	for(var i=0;i<symbols.length;i++) {
		if($.isArray(value2))
			replacedValue=replacedValue.replace(new RegExp(symbols[i], 'g'), value2[i]); 
 		else
			replacedValue=replacedValue.replace(new RegExp(symbols[i], 'g'), value2); // symbol to value converter
	}
	return eval(replacedValue);
}

// Replace Math.ceil() to ceil()
function ceil(value) {
	return Math.ceil(value);
}

// Replace Math.exp() to exp()
function exp(value) {
	return Math.exp(value);
}

// Replace Math.floor() to floor()
function floor(value) {
	return Math.floor(value);
}

// Replace Math.log() to log()
function log(value) {
	return Math.log(value);
}

// Replace Math.random() to random()
function random(value) {
	return Math.random(value);
}

// Replace Math.round() to round()
function round(value) {
	return Math.round(value);
}

// Replace Math.sqrt() to sqrt()
function sqrt(value) {
	return Math.sqrt(value);
}

// Replace Math.max() to max()
function max() { // limitless parameter
	return Math.max.apply(null, arguments);
}

// Replace Math.min() to min()
function min() { // limitless parameter
  return Math.min.apply(null, arguments);
}

// 	Trigonometry
// Replace Math.sin() to sin()
function sin(value) {
	return Math.sin(value);
}

// Replace Math.cos() to cos()
function cos(value) {
	return Math.cos(value);
}

// Replace Math.tan() to tan()
function tan(value) {
	return Math.tan(value);
}

// Replace Math.cot() to cot()
function cot(value) {
	return Math.cot(value);
}

// Replace Math.abs() to abs()
function abs(value) {
	return Math.abs(value);
}	

// Replace Math.acos() to acos()
function acos(value) {
	return Math.acos(value);
}	

// Replace Math.asin() to asin()
function asin(value) {
	return Math.asin(value);
}	

// Replace Math.atan() to atan()
function atan(value) {
	return Math.atan(value);
}	

// Replace Math.asin() to asin()
function asin(value) {
	return Math.asin(value);
}	

//end code