document.querySelectorAll('.purchase').forEach(button => {
    button.addEventListener('click', () => {
      const artworkTitle = button.parentElement.querySelector('h2').textContent;
      alert(`You have purchased "${artworkTitle}" successfully!`);
    });
  });
  

  document.querySelectorAll('.bid').forEach(button => {
    button.addEventListener('click', function() {
      const artworkTitle = this.parentElement.querySelector('h2').textContent;
      const currentBid = parseFloat(prompt(`Enter your bid for "${artworkTitle}":`));
  
      if (currentBid > 0) {
        alert(`Your bid of $${currentBid} has been placed for "${artworkTitle}".`);
      } else {
        alert('Please enter a valid bid amount.');
      }
    });
  });
const reviewsDiv = document.getElementById('reviews');
const reviewInput = document.getElementById('reviewInput');
const addReviewButton = document.getElementById('addReviewButton');

addReviewButton.addEventListener('click', () => {
  const reviewText = reviewInput.value;
  if (reviewText) {
    const reviewHTML = `<p>${reviewText}</p>`;
    reviewsDiv.insertAdjacentHTML('beforeend', reviewHTML);
    reviewInput.value = '';
  }
});
