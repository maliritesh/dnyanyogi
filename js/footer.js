// Show "Back to Top" button when scrolling down
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  
  // Smooth scroll to top
  document.getElementById("backToTop").onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Function to toggle the 'Read More' section
document.querySelector('.read-more-btn').addEventListener('click', function () {
  const moreInfo = document.querySelector('.more-info');
  const button = this;
  
  // Toggle the display of additional information
  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
    moreInfo.style.display = 'block';
    button.textContent = 'Read Less';  // Change button text
  } else {
    moreInfo.style.display = 'none';
    button.textContent = 'Read More';  // Revert button text
  }
});
