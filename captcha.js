var operators = [{
            sign: "+",
            method: function(a,b){return a + b; }
         },
         {
            sign:"&#215",
            method: function(a,b){return a * b; }
         },
         {
            sign:"-",
            method: function(a,b){return a - b; }
         },
         { sign:"&#247",
            method: function(a,b){return a / b; }
         }];

// var selectedOperator = randomNumber(operators.length);
var x = randomNumber(11);
var y = randomNumber(11);

        if (x % y != 0 || x < y) {
        var selectedOperator = Math.floor(Math.random() * 2);
    }
        
        else 
        {var selectedOperator = Math.floor(Math.random() * operators.length);
    };
    
var getSign = operators[selectedOperator].sign;
var z = operators[selectedOperator].method(x,y);


function randomNumber (a) {
    return Math.floor(Math.random() * a);
};