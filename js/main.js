 // decending of four numbers
 
 
document.getElementById("result-section").style.display="none";

let number1Ele=document.getElementById("number1")
let number2Ele=document.getElementById("number2")
let number3Ele=document.getElementById("number3")
let number4Ele=document.getElementById("number4")

let buttonEle = document.getElementById("button")

buttonEle.addEventListener("click",function (){

let  num1 = parseInt(number1Ele.value);
let  num2 = parseInt(number2Ele.value);
let  num3 = parseInt(number3Ele.value);
let  num4 = parseInt(number4Ele.value);
	let a="";
if (num1 > num2 && num1 > num3 && num1 > num4){

	if(num2 > num3 && num2 > num4){
		
		if(num3 > num4){
			a=num1 +" , "+num2 + " , "+ num3 +" , "+num4
		}
		else{
			a=num1 +" , "+num2 + " , "+ num4 +" , "+num3
		}
	}
	else if(num3 > num2 && num3 > num4){
		
		if(num2 > num4){
			a=num1 +" , "+num3 + " , "+ num2 +" , "+num4
		}
		else{
			a=num1 +" , "+num3 + " , "+ num4 +" , "+num2		
		}
	}
	else{	
		if(num3 > num2){
			a=num1 +" , "+num4 + " , "+ num3 +" , "+num2
		}
		else{
			a=num1 +" , "+num4 + " , "+ num2 +" , "+num3
		}
	}
}
else if (num2 > num1 && num2 > num3 && num2 > num4){

	if(num1 > num3 && num1 > num4){
		
		if(num3 > num4){
			a=num2 +" , "+num1 + " , "+ num3 +" , "+num4
		}
		else{
			a=num2 +" , "+num1 + " , "+ num4 +" , "+num3
		}
	}
	else if(num3 > num1 && num3 > num4){
		
		if(num2 > num4){
			a=num2 +" , "+num3 + " , "+ num2 +" , "+num4
		}
		else{
			a=num2 +" , "+num3 + " , "+ num4 +" , "+num2
		}
	}
	else{	
		if(num3 > num2){
			a=num2 +" , "+num4 + " , "+ num3 +" , "+num2
		}
		else{
			a=num2 +" , "+num4 + " , "+ num2 +" , "+num3
		}
	}
}
else if (num3 > num1 && num3 > num2 && num3 > num4){

	if(num1 > num2 && num1 > num4){
		
		if(num2 > num4){
			a=num3 +" , "+num1 + " , "+ num2 +" , "+num4
		}
		else{
			a=num3 +" , "+num1 + " , "+ num4 +" , "+num2
		}
	}
	else if(num2 > num1 && num2 > num4){
		
		if(num1 > num4){
			a=num3 +" , "+num2 + " , "+ num1 +" , "+num4
		}
		else{
			a=num3 +" , "+num2 + " , "+ num4 +" , "+num1
		}
	}
	else{	
		if(num1 > num2){
			a=num3 +" , "+num4 + " , "+ num1 +" , "+num2
		}
		else{
			a=num3 +" , "+num4 + " , "+ num2 +" , "+num1
		}
	}
}
else{

	if(num1 > num2 && num1 > num3){
		
		if(num2 > num3){
			a=num4 +" , "+num1 + " , "+ num2 +" , "+num3
		}
		else{
			a=num4 +" , "+num1 + " , "+ num3 +" , "+num2
		}
	}
	else if(num2 > num1 && num2 > num3){
		
		if(num1 > num3){
			console.log("hi")
			a=num4 +" , "+num2 + " , "+ num1 +" , "+num3
		}
		else{
			a=num4 +" , "+num2 + " , "+ num3 +" , "+num1
		}
	}
	else{	
		if(num1 > num2){
			a=num4 +" , "+num3 + " , "+ num1 +" , "+num2
		}
		else{
			a=num4 +" , "+num3 + " , "+ num2 +" , "+num1
		}
	}
}
	document.getElementById("result").innerText = a;
	document.getElementById("result-section").style.display="block";
	document.getElementById("number1").value="";
	document.getElementById("number2").value="";
	document.getElementById("number3").value="";
	document.getElementById("number4").value="";
});
