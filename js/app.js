let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(param) {
  showSlides(slideIndex += param);
}




function showSlides(param) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (param > slides.length) {slideIndex = 1}    
  if (param < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";

}