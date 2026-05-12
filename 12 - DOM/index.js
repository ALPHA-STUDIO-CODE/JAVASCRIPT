// Change the inner HTML of a list item
document.getElementsByClassName("list")[2].innerHTML =
  "I am learning Javascript";

// Change the color <a> tag in the list
document.querySelector(".list a").style.color = "green";

// Change the background color of the button
document.querySelector("button").style.backgroundColor = "yellow";

// Add the huge class to H1 element
document.querySelector("h1").classList.toggle("huge");

// Change the attribute of the link tag
document.querySelector("a").setAttribute("href", "www.git.com");
