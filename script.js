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

function toggleNavbar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('menubar');
}

  