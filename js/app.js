let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(param) {
  showSlides(slideIndex += param);
}

function currentSlide(param) {
  showSlides(slideIndex = param);
}


function showSlides(param) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (param > slides.length) {slideIndex = 1}    
  if (param < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activee", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " activee";
}







const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.filter .filter-item:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.filter [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.filter [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hide');
      el.classList.remove('show');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hide');
      el.classList.add('show'); 
    });

  });
});





function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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




// var mybutton = document.getElementById("myBtn");


// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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




