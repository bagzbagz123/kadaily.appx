/**
 * Snippet to clear out textareas that may have stray whitespace from rendering.
 */
function cleanTextareas() {
    let textareas = document.getElementsByTagName('textarea');
    if (textareas.length > 0) {
        for (let i = 0; i < textareas.length; i++) {
            textareas[i].value = textareas[i].value.trim();
        }
    }
}

(function (window, document) {

    window.onload = init;

    function init() {
        cleanTextareas();
    }

})(window, document);