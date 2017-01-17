// Start Code :)
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
$(document).ready(function(){
	// start compiler code
	$('#iconRun').click(function() {
		try {	
			try {// text to js run
			    eval($('#rokCommand').val()); 
			} catch (e) {
			    if (e) {
			        $('#rokResult').val(e.message); // exception throws
			    }
			}
		}catch(err) {}
	});
	// ctrl+enter via text to js run  
	$('#rokCommand').keydown(function (e) {
	  if (e.ctrlKey && e.keyCode == 13) {
	      $('#iconRun').click();
	  }	
	});
setTimeout(rokResize,10); // resize document
}); // document ready finish
var symbols=[]; // symbol mode array

// Based Functions //

// print to result(s)
function print(value) {
	$('#rokResult').val($('#rokResult').val()+value);
}

// print to result(s) and break line;
function println(value) {
	$('#rokResult').val($('#rokResult').val()+"\n"+value);
}

// result(s) to clear
function clear() {
	$('#rokResult').val("");
}

// create symbol
// example: symbol('a')
function symbol(value) {
	if($.isArray(value)) {
		for(var i=0;i<value.length;i++) {
			if(symbols.indexOf(value[i])==-1)
				symbols.push(value[i]);
		}
	}else {
		if(symbols.indexOf(value)==-1)
			symbols.push(value.toString());
	}
}

// amazinggg :)
function rok() {
	println("// Copyright (c) 2015 sSource.");
	println("// ___________ROK___________");
	println("// |π_|Ω_|λ_|ε_|ĉ_|λ_|Ω_|π_| 8");
	println("// |x_|x_|x_|x_|x_|x_|x_|x_| 7");
	println("// |__|__|__|__|__|__|__|__| 6");
	println("// |__|__|__|__|__|__|__|__| 5");
	println("// |__|__|__|__|_x|__|__|__| 4");
	println("// |__|__|__|_λ|__|_Ω|__|__| 3");
	println("// |_x|_x|_x|_x|__|_x|_x|_x| 2");
	println("// |_π|_Ω|_λ|_ε|__|_π|_ĉ|__| 1");
	println("//   A  B  C  D  E  F  G  H");
}

// Resize		
	$(window).resize(function(){
		rokResize();
	});
	function rokResize() {
		var toolBoxWidth=$("#toolbox").width();
		var seperatorWidth=$("#seperator").width();
		var documentWidth=$(document).width();
		var areaWidth=(documentWidth - seperatorWidth - toolBoxWidth-2);
		$("#rokCommand").width(areaWidth/2);
		$("#rokResult").width(areaWidth/2);
		var documenHeight=$(document).height();
		var headerHeight=$("header").height();
		var areaHeight=documenHeight-headerHeight-2;
		$("#rokCommand").height(areaHeight);
		$("#rokResult").height(areaHeight);
		$("#seperator").height(areaHeight);
		$("#toolbox").height(areaHeight);
	}
// resize finish
//End code :)