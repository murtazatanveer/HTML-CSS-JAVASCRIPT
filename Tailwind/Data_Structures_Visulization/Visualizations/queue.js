const queue = document.getElementById("queue");

const text = document.getElementById("text");

const enqueue = document.getElementById("enqueue");

const dequeue = document.getElementById("dequeue");

enqueue.addEventListener("click", () => {
  let val = text.value;

  if (val.trim() === "") return;

  let newEle = document.createElement("div");
  newEle.innerHTML = `<p>${val}</p>`;
  newEle.className =
    "border-[2px] border-amber-600 text-center h-full w-[13%] flex items-center justify-center";

  queue.append(newEle);
  text.value = "";
});

dequeue.addEventListener("click", () => {
  let totalChildElements = queue.childElementCount;

  if (totalChildElements == 0) return;

  queue.firstElementChild.remove();
});
