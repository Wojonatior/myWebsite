document.addEventListener("DOMContentLoaded", function(event) { 
  var about = document.getElementById('about-link');
  var portfolio = document.getElementById('portfolio-link');
  var contact = document.getElementById('contact-link');


  function smoothJump(idToJump){
    document.querySelector(idToJump).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  about.onclick = function() { smoothJump('#about'); };
  portfolio.onclick = function(){ smoothJump('#portfolio'); };
  contact.onclick = function(){ smoothJump('#contact'); };
  document.getElementById('about-link').addEventListener('click', function(){smoothJump('#about')}, false);
  document.getElementById('portfolio-link').addEventListener('click', function(){smoothJump('#portfolio')}, false);
  document.getElementById('contact-link').addEventListener('click', function(){smoothJump('#contact')}, false);
});

