let carticon=document.querySelector('#cart-icon')
let cart =document.querySelector(".cart")
let closecart=document.querySelector("#close-cart")
carticon.onclick=()=>{
    cart.classList.add("active");

}
closecart.onclick=()=>{
    cart.classList.remove("active");
    
}
if(document.readyState=='loading'){
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready();
}
function ready(){
    var removecartbuttons=document.getElementsByClassName('.cart-remove')
    console.log(removecartbuttons);
    for(var i =0;i<removecartbuttons.length;i++){
        var button=removecartbuttons[i]
        button.addEventListener('click', removeCartitem)
    }
}
function removeCartitem(event){
       var buttonclicked=event.target;
       buttonclicked.parentElement.remove();
       updatetotal()

}
function updatetotal(){
    var cartcontent =document.getElementsByClassName('cart-content')[0]
    var cartboxes=cartcontent.getElementsByClassName('cart=box')
    var total=0
    for(var i =0;i<removecartbuttons.length;i++){
         var cartbox=cartboxes[i]
         var priceelement=cartbox.getElementsByClassName('cart-price')[0]
         var quantityelement=cartbox.getElementsByClassName('cart-quantity')[0]
         var price =parseFloat(priceelement.innerText.replace("$",""));
         var quantity =quantityelement.value
         total=total+(price*quantity);

         document.getElementsByClassName('total-price')[0].innerText="$"+total

    }
}
updatetotal()