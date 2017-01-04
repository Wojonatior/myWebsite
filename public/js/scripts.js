document.addEventListener("DOMContentLoaded", function(event) { 
  var about = document.getElementById('about-link');
  var portfolio = document.getElementById('portfolio-link');
  var contact = document.getElementById('contact-link');
  about.onclick = smoothJump('#about');
  portfolio.onclick = smoothJump('#portfolio');
  contact.onclick = smoothJump('#contact');


  function smoothJump(idToJump){
    document.querySelector(idToJump).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };
});
