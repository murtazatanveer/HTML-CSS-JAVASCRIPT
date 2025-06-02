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
