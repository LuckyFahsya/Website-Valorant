// Get the image element
const dynamicImage = document.getElementById('dynamic-image');

// Define an array of image sources
const images = ['https://blog.metaco.gg/wp-content/uploads/2023/08/SOPO-Featured-800x445.jpg', 'image2.jpg', 'image3.jpg']; // Add more images as needed

// Initialize the current image index
let currentIndex = 0;

// Add an event listener to the image element
dynamicImage.addEventListener('click', () => {
    // Increment the current index, and reset it to 0 if it exceeds the array length
    currentIndex = (currentIndex + 1) % images.length;

    // Update the image source
    dynamicImage.src = images[currentIndex];
});