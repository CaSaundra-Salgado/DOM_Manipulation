//Creating a new variable in order to change the main heading text. Try to find a simpler way to do this maybe. 
var newHeader = document.getElementById("main-heading");
console.log(newHeader);
newHeader.textContent = "New DOM Layout";

//Adding a class list and the color bg-success while removing the dark background color and changing it to green. 
document.getElementById("page-header").classList.remove("bg-dark");
document.getElementById("page-header").classList.add("bg-success");

//Adding text to paragraphs 1 & 2. 
document.getElementById("para1").textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

document.getElementById("para2").textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

//Adding event listener so that I can create a function that displays a paragraph when the user clicks the button. 
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("para4").innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});

//Removing the color white and adding the intended colors to the specified elements. 
document.getElementById("red").classList.remove("bg-white");
document.getElementById("red").classList.add("bg-danger");

document.getElementById("blue").classList.remove("bg-white");
document.getElementById("blue").classList.add("bg-primary");

document.getElementById("yellow").classList.remove("bg-white");
document.getElementById("yellow").classList.add("bg-warning");

document.getElementById("green").classList.remove("bg-white");
document.getElementById("green").classList.add("bg-success");

document.getElementById("black").classList.remove("bg-white");
document.getElementById("black").classList.add("bg-dark");
