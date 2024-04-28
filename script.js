window.onload = function() {
   
 
    document.querySelector('.loading').style.transform = 'translateY(0)';
    
    document.querySelector('.progress-bar').style.transform = 'translateY(40px)';
    document.querySelector('.progress-bar').classList.add('show-progress');

   
  
}

document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.querySelector(".animate-progress");
    var width = 0;
    var interval = setInterval(function() {
        width += 1;
        progressBar.style.width = width + "%";  
        if (width >= 100) {
            clearInterval(interval);
            var preloader = document.querySelector(".loader");
            preloader.classList.add("hidden1");
            setTimeout(function() {
                preloader.style.display = "none";
            }, 100);
        }
    }, 20); 
});


function toggleOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.classList.add("show"); 
  
    const items = document.querySelectorAll("#overlay a");
  
    items.forEach((item, index) => {
      item.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`;
    });
  }
  
  function exitClick() {
    var overlay = document.getElementById("overlay");
    
    if (overlay.classList.contains("show")) {
      overlay.classList.remove("show");
     
      setTimeout(() => {
        overlay.classList.add("hidden");
      }, 500);
    }
  }

  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const buttons = document.querySelectorAll('.slider-button');

  let index = 0;

  function updateSlider() {
      slider.style.transform = `translateX(-${index * 100}%)`;
      buttons.forEach(button => button.classList.remove('active'));
      buttons[index].classList.add('active');
  }

  buttons.forEach((button, i) => {
      button.addEventListener('click', () => {
          index = i;
          updateSlider();
      });
  });

  setInterval(() => {
      index = (index + 1) % slides.length;
      updateSlider();
  }, 3000);
  
