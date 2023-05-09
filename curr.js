function change(){

    let x =document.getElementById("s1").value;

    if(x=="usd"){
        document.getElementById("s2").value="inr1"; 
    }
    else if(x=="inr"){
        document.getElementById("s2").value="usd1";
    }
}
  
function calc(){

    let x =document.getElementById("s1").value;

    let input = Number(document.getElementById("input").value);
    if(x=="usd"){
        input=input*82.77;
        input.toFixed(2);
        document.getElementById("output").value=input; 
        document.getElementById("output").disabled="disabled";
    }
    else if(x=="inr"){
        input=input/82.77;
        input.toFixed(2);
        document.getElementById("output").value=input;
        document.getElementById("output").disabled="disabled";
    }
}