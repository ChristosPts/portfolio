// Add JavaScript code to show/hide the scroll button
window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-top-button');
    if (window.scrollY > 600) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
 
  // Scroll to top function
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Attach click event to the scroll-to-top button
  document.querySelector('.scroll-top-button').addEventListener('click', scrollToTop);
  