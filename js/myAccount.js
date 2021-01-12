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





  var modalBtn = document.querySelector("#myBtnn")

  modalBtn.addEventListener('click', function () {
      var modal = document.querySelector("#myModal");
      modal.style.display = "block";
      var close = document.querySelector(".close")
      close.addEventListener('click', function () {
          modal.style.display = "none";
      })
  })

  var modalBtnAdress = document.querySelector("#myBtnAdress")

  modalBtnAdress.addEventListener('click', function () {
      var modalAdress = document.querySelector("#myModalAdress");
      modalAdress.style.display = "block";
      var close = document.querySelector(".closee")
      close.addEventListener('click', function () {
          modalAdress.style.display = "none";
      })
  })