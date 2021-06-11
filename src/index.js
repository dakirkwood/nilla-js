import Block from "./modules/Block";
//import './css/nilla.css';

(() => {
    // Polyfill for IE 11
    // Adds .forEach handling to NodeLists--example querySelectorAll().
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    let sections = document.querySelectorAll('section.u-block');
    sections.forEach((section) => {
        // Create a new Block object from the section.
        const block = new Block(section.dataset,section.children);
        // Turn the list of types into an array
        let block_types = section.dataset.blockType ? section.dataset.blockType.split(' ') : [];
        // Add each type declaration to the section's list of classes.
        block_types.forEach( (type) => section.classList.add(type) );
        // Add the background styles inline.
        section.setAttribute('style', block.background());
        // Insert the generated HTML.
        section.innerHTML = block.render();
    });
})();