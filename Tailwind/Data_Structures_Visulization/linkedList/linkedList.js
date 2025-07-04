const arrow = document.getElementById("arrow");
const node = document.getElementById("node");
const section = document.getElementById("section");

//Get the root element
const root = document.documentElement;

// Add Operations Info
const value = document.getElementById("value");

// Linked List Info
let size = 0;
let totalLeft = 6;

// Ad At End
document.getElementById("addAtEnd").addEventListener("click", () => {
  let newValue = value.value;

  if (newValue.trim() === "") {
    alert("Please Add Value First");
    return;
  }

  if (!size) {
    arrow.classList.remove("hidden");
  } else {
    totalLeft += 6;
    const newArrow = arrow.cloneNode(true);
    newArrow.id = `a${size}`;
    newArrow.classList.remove("left-[6%]");
    newArrow.classList.add(`left-[${totalLeft}%]`);
    section.appendChild(newArrow);
  }

  totalLeft += 5.5;
  const newNode = node.cloneNode(true);
  newNode.id = `n${size}`;
  newNode.classList.remove("left-0", "rounded-[30px]", "bg-sky-200");
  newNode.classList.add(`left-[${totalLeft}%]`);
  const paragraph = newNode.querySelector("p");
  paragraph.innerText = newValue;
  section.appendChild(newNode);
  root.style.setProperty("--left", totalLeft + "%");
  newNode.classList.add("boxAnimation");
  size++;
});

// Add At Start
document.getElementById("addAtStart").addEventListener("click", () => {
  let newValue = value.value;

  if (newValue.trim() === "") {
    alert("Please Add Value First");
    return;
  }

  const allNodes = section.querySelectorAll("main");
  const allArrows = section.querySelectorAll("img");

  let tempLeft = 11.5;

  for (let i = 1; i < allNodes.length; i++) {
    if (i == allNodes.length - 1) {
      allNodes[i].classList.remove(`left-[${tempLeft}%]`);
      allNodes[i].classList.add(`left-[${tempLeft + 11.5}%]`);
      continue;
    }

    allNodes[i].classList.remove(`left-[${tempLeft}%]`);
    allNodes[i].classList.add(`left-[${tempLeft + 11.5}%]`);
    tempLeft += 6;
    allArrows[i].classList.remove(`left-[${tempLeft}%]`);
    allArrows[i].classList.add(`left-[${tempLeft + 11.5}%]`);
    tempLeft += 5.5;
  }

  if (!size) {
    arrow.classList.remove("hidden");
  } else {
    const newArrow = arrow.cloneNode(true);
    // assign id of arrow
    newArrow.classList.remove("left-[6%]");
    newArrow.classList.add(`left-[17.5%]`);
    section.appendChild(newArrow);
  }

  const newNode = node.cloneNode(true);
  newNode.id = "n0";
  newNode.classList.remove("left-0", "rounded-[30px]", "bg-sky-200");
  newNode.classList.add(`left-[11.5%]`);
  const paragraph = newNode.querySelector("p");
  paragraph.innerText = newValue;
  section.appendChild(newNode);
  root.style.setProperty("--left", 11.5 + "%");
  newNode.classList.add("boxAnimation");

  size++;
  totalLeft += 11.5;
});
