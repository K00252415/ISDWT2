"use strict";
function displayDate() {
    let date = document.querySelector("#date");
    let now = new Date();
    date.textContent = now.toLocaleString();
}

displayDate();
setInterval(displayDate, 1000);

function myFunction() {
  var x = $("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function computeBMI() {
    var height = Number($("height").value);
    var weight = Number($("weight").value);

    var BMI = Math.round(weight / Math.pow(height, 2));

    $("output").innerText = Math.round(BMI * 100) / 100;

    var output = Math.round(BMI * 100) / 100;
    if (output < 18.5)
        $("comment").innerText = "Underweight";
    else if (output >= 18.5 && output <= 25)
        $("comment").innerText = "Normal";
    else if (output >= 25 && output <= 30)
        $("comment").innerText = "Obese";
    else if (output > 30)
        $("comment").innerText = "Overweight";
} 

function slideShow(){
    const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = $("#main_image");   // the img element for the show
        
    // get all the <a> tags in the ul element
    const links = $("#image_list").querySelectorAll("a");
    
    // Process image links
    const imageCache = [];
    let image = null;
    for ( let link of links ) {
        // Preload image and copy title properties
        image = new Image();
        image.src = link.href;
        image.alt = link.title;
        // add image to array 
        imageCache[imageCache.length] = image;
    }

    // Start slide show
    let imageCounter = 0;
    setInterval( () => { 
        // calculate the index for the current image
        imageCounter = (imageCounter + 1) % imageCache.length;
        // get image from array
        image = imageCache[imageCounter];
        // set HTML img and h2 with values from image object
        mainImage.src = image.src;
        mainImage.alt = image.alt;
    },
    2000);  // 2 second interval
});

}

slideShow();