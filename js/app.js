let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(param) {
  showSlides(slideIndex += param);
  let cont=document.querySelectorAll(".content")
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
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
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


