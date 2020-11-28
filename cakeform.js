var Form=document.forms["cakeform"];
 	var i;

 	var cake_Size=new Array();
 	cake_Size["roundcake6"]=35;
 	cake_Size["roundcake8"]=45;
 	cake_Size["roundcake9"]=50;
 	cake_Size["cupcakes"]=60;

 	var filling_price=new Array();
 	filling_price["none"]=0;
 	filling_price["vanilla flavor"]=5;
 	filling_price["chocolate flavor"]=7;
 	filling_price["cookies & cream flavor"]=10;

//finding price of cake bas on size
 function CakeSizePrice(){
 	var cakesizePrice=0;
 	var Form=document.forms["cakeform"];
 	var cakeselection=Form.elements['sizeofcake'];
 	for(var i=0;i<cakeselection.length;i++){
 		if(cakeselection[i].checked)
 	{
 		cakesizePrice=cake_Size[cakeselection[i].value];
 		break;
 	}
}

 	return cakesizePrice;
}



//finding price of cake bas on size
 function FillingPrice(){
 	var fillingPrice=0;
 	var Form=document.forms["cakeform"];
 	var fillingselect=Form.elements["filling"];
 	fillingPrice=filling_price[fillingselect.value];
 	return fillingPrice;
}

//for include colors

function ColorPrice(){
	var colorprice=0;
	var Form=document.forms["cakeform"];
	var colorSelection=Form.elements["colors"];
	if(colorSelection.checked==true){
		colorprice=5;
	}
	return colorprice;
}




//final total amount of cake

function total(){
	var TotalPrice=CakeSizePrice() +FillingPrice()+ ColorPrice();

	//final result
	document.getElementById("display").innerHTML="total price $"+TotalPrice;
}