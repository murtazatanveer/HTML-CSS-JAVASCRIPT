=> Understanding what is DOM

=> Dynamic behaviour of DOM

=> Accessing HTML elements (Id, ClassName, TagName, querySelector , querySelectorAll).

=> Updating HTML elements (textcontent, innerText, innerHTML , outerHTML)

=> Creating and inserting new HTML Elements (creteElement, appendChild, pretend, insertAdjacentElement, insertAdjacentHTML, insertBefore,before,after, clonenode(true and false), copyingALLchild elements, parentElement)

=>Removing HTML Elements( element.remove(),parentElement.removeChild(childElement))

=> Styling HTML Elements (element.style, cssText, setAttribute, ClassName, ClassList(add,remove,toogle), elemment.style.getPropertyValue(), elemment.style.setProperty(),)

=> These 7 are also remaining topics for Styling Elements

1. window.getComputedStyle(): Reads the final, applied styles of an element as rendered by the browser, regardless of where they were defined.

2. CSS Variables (Custom Properties): Allows dynamic manipulation of CSS variables (--variable-name) defined in stylesheets using element.style.setProperty() and element.style.getPropertyValue().

3. element.style.removeProperty(): Removes a specific inline style property that was previously set on an element.

4. Performance Considerations (Reflow/Repaint): Awareness that changing styles can trigger expensive browser recalculations (reflow/layout and repaint), which should be minimized for smoother UI.

5. CSS Animations/Transitions (JavaScript Interaction): Using JavaScript to trigger (e.g., by adding classes) or listen for the completion of CSS-defined animations and transitions.

6. element.matches(): Checks if an element matches a specified CSS selector, useful for conditional styling logic.

7. scrollIntoView() / scrollBy() / scrollTo(): Methods to programmatically control an element's position within the viewport or the scroll position of the window.

=> What is Event, Event Target, Event Listener

=> Phases of event (Capturing and Bubbling(default value of event listner))

=> Event Object , Default Behaviour

=> Reflow(changes the layout) , Repaint(same layout, new look) and Document Fragment.

=> Synchronous Code vs Asynchronous Code , Event Loop , Callback Stack and queue , Concept of Blocking , Single-Threaded vs. Multi-Threaded

Explanation :

console.log("Start");
setTimeout(() => console.log("Async Done"), 5000); // Non-blocking
console.log("End");
// Output order:
// "Start" → "End" → (5 second later) "Async Done
(in this code start goes to stack and then displays (Synchronous code) then counter setTimout (Asynchronous code) goes to stack then stack moves it to the browser and its timer starts , then end goes to stack and then displays (Synchronous code), after the timer ends setTimeout goes to queue and waits for the empty stack if the stack is empty event loop sent it to the stack and displays Asyn Done)

Note : Timer starts immediately when setTimeout() is handed off to the browser's Web APIs.

[Start]

1. Execute all synchronous code
2. Empty the ENTIRE microtask queue
3. Execute ONE macrotask
4. Repeat from step 2
   [End]
