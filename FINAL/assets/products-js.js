$(document).ready(function(){ 



//dark and light mode buttons
	$("button.dark").click(function(){
		$(".LvD").css("background-color", "brown");
		console.log("do dis work? dark")
	});
	$("button.light").click(function(){
			$(".LvD").css("background-color", "yellow");
			console.log("do dis work? light")
		}); //end DnL mode

// ZIP CODE n Delivery fee 
 var zipCode = prompt("Please Enter your Zip Code");

	if (zipCode === "33124"){
		console.log("Zip Code: 33124. Delivery Cost (should): $5")
			var deliveryCost = 5
			$("p.delCost").html("-----Zip Code: 33124 ----- $5");
	} else if (zipCode === "33133") {
		console.log("Zip Code: 33133. Delivery Cost (should): Free")
			var deliveryCost = 0
			$("p.delCost").html("-----Zip Code: 33133 ----- $0");
	} else {
		console.log("Zip Code: " + zipCode + " Delivery Cost (should): $10")
			var deliveryCost = 10
			$("p.delCost").html("-----Zip Code:" + zipCode + " ----- $10");
	}

console.log("(var) delivery price=" + deliveryCost) // checks del cost
// end Zip n Fee

/*Nut Allergy? */
var nutz = prompt("Are you alergic to Nuts? 'Yes or No'");

	if (nutz === "yes"){
		console.log("NUTS WILL KILL THIS MOFO")
		$("div.pesto").hide();
	}
	if (nutz === "no"){
		console.log("He can have sum Pesto!")
	}

//Pizza Size
$("button.small").click(function(){
	var pizzaSizeCost = 8
	console.log("pizza size (S) cost: " + pizzaSizeCost)
	$("p.PSz").html("----- Small ----- $8");
});
$("button.medium").click(function(){
	var pizzaSizeCost = 10
	console.log("pizza size (M) cost: " + pizzaSizeCost)
	$("p.PSz").html("----- Medium ----- $10");
});
$("button.large").click(function(){
	var pizzaSizeCost = 12
	console.log("pizza size (L) cost: " + pizzaSizeCost)
	$("p.PSz").html("----- Large ----- $12");
}); // end pizza pize

//mouse over
$("div.meatballs").mouseover(function(){
      	$("div.meatballs").css("background-color", "skyblue");
      });
$("div.meatballs").mouseout(function(){
      	$("div.meatballs").css("background-color", "lavender");
      });
$("div.chicken").mouseover(function(){
      	$("div.chicken").css("background-color", "skyblue");
      });
$("div.chicken").mouseout(function(){
      	$("div.chicken").css("background-color", "lavender");
      });
$("div.pesto").mouseover(function(){
      	$("div.pesto").css("background-color", "skyblue");
      });
$("div.pesto").mouseout(function(){
      	$("div.pesto").css("background-color", "lavender");
      });
$("div.onion").mouseover(function(){
      	$("div.onion").css("background-color", "skyblue");
      });
$("div.onion").mouseout(function(){
      	$("div.onion").css("background-color", "lavender");
      });
       //end mouseover

//attempt
var topMeat
if (true) {} else {}

//toppings click
$("div.meatballs").click(function(){
	var topMeat = 1
	console.log("meatballs clicked: " + topMeat)
	$("p.TM").html("-----meatballs ... $1");
});
$("div.chicken").click(function(){
	 var topChick = 2
	console.log("chicken clicked: " + topChick)
	$("p.Ck").html("-----Chicken ... $1");
});
$("div.pesto").click(function(){
	 var topPest = 1
	console.log("Pesto clicked: " + topPest)
	$("p.Pest").html("-----Pesto ... $1");
});
$("div.onion").click(function(){
	 var topOni = 1
	console.log("Onions clicked: " + topOni)
	$("p.Oni").html("-----Onions ... $1");
});//end of toppings clicks

//mouse enter breadsticks prompt
$("div.yourOrder").one("mouseover", function(){
	var breadSticks = confirm("would you like to add breadsticks for $4.99 ?")
	if (true) {
		$("p.BSticks").html("-----Breadsticks ----- $4.99");
		console.log("breadsticks slected?:" + breadSticks) 
		 BStMoney = 5
		console.log("BSt Money: (VAR)" + BStMoney)
	}
}); // end mouseover breadsticks





//total calc
$("button.Calc-tot").click(function(){
		// local var get around
		var topsTot = prompt("how many toppings did you get? 1-4")
			if (topsTot = 0) {var TTM =0} 
				else if (topsTot = 1) {var TTM =1}
				else if (topsTot = 2) {var TTM =2}
				else if (topsTot = 3) {var TTM =3}
				else if (topsTot = 4) {var TTM =4}

		var BStMon2 = confirm("did you get breadsticks?")
			if (true) {BStMon2 = 5} else {BStMon2 = 0}

		var PS = prompt("What Size Pizza Did You Get?   Small = 1   Medium = 2   Large = 3")
			if (PS = 1) {var PSM =8} 
				else if (PS = 2) {var PSM =10}
				else if (PS = 3) {var PSM =12}	
var Total = deliveryCost + BStMon2 + TTM + PSM
console.log("total moneys:" + Total)
$("p.tt").html("-----Total: ------$" + Total)
});

$("button.P-O").click(function(){
	alert("Boom Your Pizza is On The Way!!!")
});

	}); // end 