var slideIndexx = 0;
showSlidess();

function showSlidess() {
  var i;
  var slidess = document.getElementsByClassName("mySlides-main");
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  slideIndexx++;
  if (slideIndexx > slidess.length) {slideIndexx = 1}    
  slidess[slideIndexx-1].style.display = "block";  
  setTimeout(showSlidess, 3000); 
}



var search =document.querySelector('.openSearch')

function searchFunction(){
  var searchPanel=document.querySelector('.search-bar')
  if(searchPanel.classList.contains("open")){
    searchPanel.classList.remove("open")
  }else{
    searchPanel.classList.add("open")
  }
}


var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("logo-menyu");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function setGrandTotal() {
    var priceElem = $('.azn');
    var allPrices = 0;
    for(var i = 0; i < priceElem.length; i++){
      allPrices += Number(priceElem.eq(i).text())
    }
    $('#azn').text(allPrices)
  }

  setGrandTotal();


$('.cart-price').change(function(){
  var totalPrice = $(this).closest('.row-body').find('.azn');
  var productPrice = $(this).closest('.row-body').find('.product-price');
  var inputVal = $(this).val();
  var newPrice = Number(inputVal) * Number(productPrice.text());
  totalPrice.text(newPrice);
  setGrandTotal();
})


function removeCartItem(){
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove()
  setGrandTotal();
}


function addCart(){
  console.log(localStorage.getItem(".box"))
}











