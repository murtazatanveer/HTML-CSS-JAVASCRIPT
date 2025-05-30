//Accessing HTML elements (Id, ClassName, TagName, querySelector , querySelectorAll).

const b1 = document.getElementById("b1");
console.log(b1);

const allInnerBoxes = document.getElementsByTagName("div"); // Returns an array of all div tags. If only one div tag return only that div tag
console.log(allInnerBoxes);

// allBoxes[2].innerHTML = "HIII";

const box = document.getElementsByClassName("box");
console.log(box[0]);

const alLText = document.querySelectorAll("p"); // Returns an array
console.log(alLText);

b1.innerHTML = '<Button id="b">CLICK ME</Button>'; // Overrides <p></p> in b1
console.log(b1.innerHTML);

b1.innerHTML = '<Button id="but">CLICK</Button>'; // Overrides existing Button with id "b"
console.log(b1.innerHTML);

b1.outerHTML = '<h1 id="dom">DOM</h1>'; //This is the key point: const b1 still holds a reference to the original div element that was removed from the DOM.
console.log(b1.innerHTML);

const newElement = document.getElementById("dom");

console.log(b1.outerHTML + "\t" + newElement.outerHTML);

console.log(box[0].innerText);

console.log(box[0].textContent);
