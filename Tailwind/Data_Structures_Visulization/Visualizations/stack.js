const stack = document.getElementById("stack");

const text = document.getElementById("text");

const push = document.getElementById("push");

const pop = document.getElementById("pop");

push.addEventListener("click", () => {
  let val = text.value;

  if (val.trim() === "") return;

  let newEle = document.createElement("div");
  newEle.innerHTML = `<p>${val}</p>`;
  newEle.className = "border-4 border-cyan-800 basis-[10%] w-full text-center";

  stack.prepend(newEle);

  text.value = "";
});

pop.addEventListener("click", () => {
  let totalChildElements = stack.childElementCount;
  if (totalChildElements == 0) return;
  stack.firstElementChild.remove();
});
