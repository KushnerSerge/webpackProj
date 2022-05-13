// GetelementById("intro");
const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

// Finding HTML Elements by Tag Name
const element1 = document.getElementsByTagName("p");


// Finding HTML Elements by Class Name 
const x = document.getElementsByClassName("intro0");
document.getElementById("demo2").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x[0].innerHTML;

//Finding HTML Elements by CSS Selectors
const x1 = document.querySelectorAll("p.intro1");
document.getElementById("demo3").innerHTML = 
'The first paragraph (index 0) with class="intro" is: ' + x1[0].innerHTML;

// Finding HTML Elements by HTML Object Collections
const x2 = document.forms["frm1"];
let text = "";
for (let i = 0; i < x2.length ;i++) {
  text += x2.elements[i].value + "<br>";
}
document.getElementById("demo4").innerHTML = text;


function changeText(id) { 
    id.innerHTML = "Ooops!";
}
// Changing HTML Content 
document.getElementById("p1").innerHTML = "New text!";

//dynamic content
document.getElementById("demo5").innerHTML = "Date : " + Date();

// JS form validation

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  // JS changing styles
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "larger";

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("demo").innerHTML = text;
}
// The onchange Event
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

// Events 
function mOver(obj) {
    obj.innerHTML = "Thank You"
}
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}
function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}

// Event Attribute
function displayDate() {
    document.getElementById("demo6").innerHTML = Date();
}

// Assign Events Using the HTML DOM
document.getElementById("myBtn123").onclick = displayDate1; 
function displayDate1() {
    document.getElementById("myBtn123").onclick = displayDate;
    document.getElementById("demo7").innerHTML = Date();
  }

//  The onload and onunload Events

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
      text = "Cookies are enabled.";
    } else {
      text = "Cookies are not enabled.";
    }
    document.getElementById("demo8").innerHTML = text;
  }

// Add EventListener
document.getElementById("myBtn2").addEventListener("click", function() {
    alert("Hello World!");
  });

  // Add EventListener in different function
document.getElementById("myBtn3").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}


var x3 = document.getElementById("myBtn4");
x3.addEventListener("click", myFunction1);
x3.addEventListener("click", someOtherFunction1);

function myFunction1() {
  alert ("Hello World!");
}

function someOtherFunction1() {
  alert ("This function was also executed!");
}