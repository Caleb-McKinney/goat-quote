document.addEventListener('DOMContentLoaded', function () {
  //console.log('DOM content loaded');
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const generateBtn = document.getElementById('generate-btn');
  const saveBtn = document.getElementById('save-btn');

  generateBtn.addEventListener('click', fetchQuote);
  saveBtn.addEventListener('click', saveQuote);

  function fetchQuote() {
    // console.log('Fetching quote...');
    fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    //  console.log('Received quote data:', data);
      quoteText.textContent = data.content;
      quoteAuthor.textContent = "- " + data.author;
    })
    .catch(error => console.error('Error fetching quote:', error));
  }

  function saveQuote() {
  //  console.log('Saving quote...');
    const savedQuote = {
      text: quoteText.textContent,
      author: quoteAuthor.textContent.slice(2)
    };
    localStorage.setItem('favoriteQuote', JSON.stringify(savedQuote));
    console.log('Quote saved:', savedQuote);
    alert('Quote saved successfully!');
  }
});
