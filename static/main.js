// Fetch initial random image URL
fetch('/random-image')
  .then(response => response.json())
  .then(data => {
    document.getElementById('random-image').src = data.image_url;
  });

// Function to generate new random image
function generateImage() {
  fetch('/random-image')
    .then(response => response.json())
    .then(data => {
      document.getElementById('random-image').src = data.image_url;
    });
}

// Bind generateImage function to button click event
document.querySelector('button').addEventListener('click', generateImage);