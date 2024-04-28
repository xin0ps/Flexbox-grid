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
  
 
    
      overlay.classList.remove("hidden");
      setTimeout(() => {
        overlay.classList.add("show");
      }, 100);
    
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


 





