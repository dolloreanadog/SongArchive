// Define all table items
var item1 = document.getElementById("item2")
var item2 = document.getElementById("item3")
var item3 = document.getElementById("item4")
var item4 = document.getElementById("item5")
var item5 = document.getElementById("item6")
var item6 = document.getElementById("item7")
var item7 = document.getElementById("item8")

// Define all audio items
var song1 = document.getElementById("item2Sound")
var song2 = document.getElementById("item3Sound")
var song3 = document.getElementById("item4Sound")
var song4 = document.getElementById("item5Sound")
var song5 = document.getElementById("item6Sound")
var song6 = document.getElementById("item7Sound")
var song7 = document.getElementById("item8Sound")

// Yeah this cause a pain if it will be worked on for future, use Music Store's system if worked later
// Base thing | 1
item1.addEventListener("mouseover", function() {
    song1.play();
} );

item1.addEventListener("mouseleave", function() {
    song1.pause();
    song1.currentTime = 0;
} );

// Base thing | 2
item2.addEventListener("mouseover", function() {
    song2.play();
} );

item2.addEventListener("mouseleave", function() {
    song2.pause();
    song2.currentTime = 0;
} );

// Base thing | 3
item3.addEventListener("mouseover", function() {
    song3.play();
} );

item3.addEventListener("mouseleave", function() {
    song3.pause();
    song3.currentTime = 0;
} );

// Base thing | 4
item4.addEventListener("mouseover", function() {
    song4.play();
} );

item4.addEventListener("mouseleave", function() {
    song4.pause();
    song4.currentTime = 0;
} );

// Base thing | 5
item5.addEventListener("mouseover", function() {
    song5.play();
} );

item5.addEventListener("mouseleave", function() {
    song5.pause();
    song5.currentTime = 0;
} );

// Base thing | 6
item6.addEventListener("mouseover", function() {
    song6.play();
} );

item6.addEventListener("mouseleave", function() {
    song6.pause();
    song6.currentTime = 0;
} );

// Base thing | 7
item7.addEventListener("mouseover", function() {
    song7.play();
} );

item7.addEventListener("mouseleave", function() {
    song7.pause();
    song7.currentTime = 0;
} );

