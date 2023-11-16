document.addEventListener('DOMContentLoaded', function () {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const generateBtn = document.getElementById('generate-btn');
  const saveBtn = document.getElementById('save-btn');
};

let currentQuote = {};

//Dummy data - add package.json



// Event listener for Generate Quote Button
generate.Btn.addEventListener('click', generateQuote);

// Event listener for Save Quote button
saveBtn.addEventListener('click', saveQuote);

// Function to generate a random quote
function generateQuote() {
  currentQuote = getRandomQuote();
  displayQuote();
}

// Function to get a random quote from the quotesData array
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  return quotesData[randomIndex];
}

// Function to save the current quote to local storage

function saveQuote() {
  if (currentQuote.text && currentQuote.author) {
      // Use a unique key for each quote to prevent overwriting
      const key = `quote_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify(currentQuote));
      // Provide feedback to the user (can be improved based on your UI)
      alert('Quote saved!');
  }
}
});