const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
      

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg' : 'Closeup of a human eye', 
    'pic2.jpg' : 'A rock that looks like a wave',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'A egyptian wall painting with pharoh\'s',
    'pic5.jpg' : 'A moth on a leaf'
}; 

/* Looping through images */

var x = 2
if(true) {
    var x = 3
}
console.log(x)


for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', altText[image]);
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
        displayedImage.src = e.target.src;
    }
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
