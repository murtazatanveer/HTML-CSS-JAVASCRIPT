//Accessing HTML elements (Id, ClassName, TagName, querySelector , querySelectorAll).

const b1 = document.getElementById("b1");
console.log(b1);

const allInnerBoxes = document.getElementsByTagName("div"); // Returns an array of all div tags. If only one div tag return only that div tag
console.log(allInnerBoxes);

// allBoxes[2].innerHTML = "HIII";

const box = document.getElementsByClassName("box"); // section tag
console.log(box[0]);

const alLText = document.querySelectorAll("p"); // Returns an array
console.log(alLText);

// Updating HTML ElementsUpdating HTML elements (textcontent, innerText, innerHTML , outerHTML)
// b1.innerHTML = '<Button id="b">CLICK ME</Button>'; // Overrides <p></p> in b1
// console.log(b1.innerHTML);

// b1.innerHTML = '<Button id="but">CLICK</Button>'; // Overrides existing Button with id "b"
// console.log(b1.innerHTML);

// b1.outerHTML = '<h1 id="dom">DOM</h1>'; //This is the key point: const b1 still holds a reference to the original div element that was removed from the DOM.
// console.log(b1.innerHTML);

// const newElement = document.getElementById("dom");

// console.log(b1.outerHTML + "\t" + newElement.outerHTML);

// console.log(box[0].innerText);

// console.log(box[0].textContent);

// Creating new HTML Elements

const lastDiv = document.createElement("div");

console.log(lastDiv);

lastDiv.id = "last";

lastDiv.innerHTML = "<p>Last Box</p>";

lastDiv.style.background = "#2b2222";

box[0].appendChild(lastDiv);

const firstDiv = document.createElement("div");

firstDiv.innerHTML = "<p>First Box</p>";
firstDiv.id = "first";
firstDiv.style.background = "orange";

box[0].insertAdjacentElement("afterbegin", firstDiv);

// box[0].insertAdjacentHTML(
//   "afterbegin",
//   '<div id="first"><p>First Box</p></div>'
// );

const middleBox = document.createElement("div");

middleBox.id = "middle";
middleBox.innerHTML = "<p>Middle Box</p>";
middleBox.style.background = "#9fff";
middleBox.style.color = "black";
middleBox.style.fontWeight = "bolder";

box[0].insertBefore(middleBox, allInnerBoxes[4]);

const lb = document.getElementById("lowerBox");

const div1 = b1.cloneNode(true);

lb.prepend(div1);

const div6 = allInnerBoxes[7].cloneNode(true);
div1.after(allInnerBoxes[2].cloneNode(true), div6);

div6.before(allInnerBoxes[6].cloneNode(true), allInnerBoxes[5].cloneNode(true));

// const copyInnerBoxes = Array.from(box[0].children);

const box1Parent = b1.parentElement;

console.log(box1Parent);

//box1Parent.style.display = "none";

//console.log((box1Parent.style.cssText = "display:none"));

// lb.style.flexDirection = "column";
// lb.style.width = "50%";
// lb.style.height = "70%";

// lb.style.cssText =
//   "background:transparent; flex-direction:column; width:30%; height:70%;";

// box[0].remove();

// const lbChilds = lb.querySelectorAll("*");

// lbChilds=lb.children;

// console.log(lbChilds);

// lbChilds[0].innerHTML = "<h4>HELLO G</h4>";

// b1.setAttribute("style", "display:none");

// b1.setAttribute("class", "box1");
// b1.setAttribute("id", "ub1");

// const p = b1.getElementsByTagName("p");

// p[0].innerHTML = "<h1>HELLO</h1>";

// box[0].className = "box1";

// box[0].className = "box1 box";

// box[0].classList.add("box1");

// box[0].id = "box1";

// box[0].classList.add("box2");

// box[0].classList.remove("box2");

// console.log(box[0].classList.toggle("box3"));
// console.log(box[0].classList.toggle("box4"));
// console.log(box[0].classList.toggle("box5"));

// console.log(box[0].classList.toggle("box5"));

// console.log(box[0].classList.contains("box"));

// let x = box[0].classList;
// console.log(x.length);

// let boxStyle = getComputedStyle(box[0]);

// for (let i = 0; i < boxStyle.length; i++) {
//   lb.style.setProperty(boxStyle[i], boxStyle.getPropertyValue(boxStyle[i]));
// }

//console.log(firstDiv.style.getPropertyValue("background"));

lb.classList.add("box", "box1");
