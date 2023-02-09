
var cart=document.querySelectorAll(".card a")
var AllProduct =document.querySelector(".card-body .card-title ")
var div1=document.querySelector("#content")
var D=document.querySelector(".tp");
var bt=document.querySelector(".btn1")
var totalPrice=0
 
    cart.forEach(function (item){
        item.onclick=function (){
        totalPrice += parseInt(item.getAttribute("price"))
        div1.innerHTML += item.getAttribute("name") +"..............."
       // div1.innerHTML +=  AllProduct.textContent + ".............."
        if(div1.innerHTML !=""){
             bt.style.display="block";
             
        }
    }
      }
     )

    


 bt.onclick=function (){
    if( div1.innerHTML !="" ){
        D.style.display="block";
        D.innerHTML = totalPrice
         }
        
      }

/*
 function code(x){
    console.log(x)
}*/

