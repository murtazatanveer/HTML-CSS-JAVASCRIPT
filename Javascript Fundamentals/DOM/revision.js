const box = document.getElementById("box");

const innerBoxes = box.children;

console.log(innerBoxes);

console.log(box.className);
box.className = "box1";
console.log(box.className);

box.className = "box2";
console.log(box.className);

box.classList.add("bg-black");

console.log(box.classList);

box.classList.toggle("bg-black");
box.classList.toggle("bg-black");

// box.classList.remove("bg-black");

console.log(box.classList.contains("bg-black"));

console.log(getComputedStyle(box));

console.log(box.getAttribute("class"));

// box.setAttribute("class", "box2");

// console.log(box.style.getPropertyValue("background-color"));

box.style.background = "beige";
