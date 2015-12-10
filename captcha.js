
	function randomNumbers () {
		var operators = [{
			sign: "+",
			method: function(a,b){return a + b; }
	     },{
	     	sign:"-",
            method: function(a,b){return a - b; }
         },
         { sign:"&#247",
            method: function(a,b){return a / b; }},
         {
	        sign:"&#215",
	     	method: function(a,b){return a * b; }
	     }];

		var selectedOperator = Math.floor(Math.random() * operators.length);

		var getSign = document.getElementById("sign");
		getSign.innerHTML = operators[selectedOperator].sign;


	
	var x = Math.floor(Math.random() * 11);
	var y = Math.floor(Math.random() * 11);
	z = operators[selectedOperator].method(x,y);
	
    var numbersList = ["zero ", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten "]

    var i = x;

    


    var first = document.getElementById("firstNumber");
    first.innerHTML = numbersList[i];
    var second = document.getElementById("secondNumber");
    second.innerHTML = y;
}
    function getResult () {
    var result = document.getElementById("result");
    var w = result.value;
    if (w == z) {alert("corect");}
    else if (w != z) {alert("wrong");}
}    


window.onload = randomNumbers;
