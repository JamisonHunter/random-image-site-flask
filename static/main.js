// Fetch initial random image URL
fetch('/random-image')
  .then(response => response.json())
  .then(data => {
    document.getElementById('random-image').src = data.image_url;
  });

// Function to generate new random image
function generateImage() {
  // Show the spinner when fetching a new image
  document.getElementById("spinner").style.display = "block";

  // Fetch a random image
  fetch('/random-image')
    .then(response => response.json())
    .then(data => {
      // Update the image source
      document.getElementById("random-image").src = data.image_url;
    });
}

// Bind generateImage function to button click event
document.querySelector('button').addEventListener('click', generateImage);

// Add an event listener to the image element to hide the loader when the image is loaded
document.getElementById('random-image').addEventListener('load', function() {
  // Hide the spinner when the image is loaded
  document.getElementById('spinner').style.display = 'none';
});
