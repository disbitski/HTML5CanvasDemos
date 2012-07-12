//revealing module pattern

var Calculator = function () {

    function private() {
    };

    function add(x, y) {
    };

    function subtract(x, y) {
    };

    return {
        add: add,
        subtract: subtract
    };

} (); //take out () to make it nonstatic

window.onload(function () {
    //Calculator.
});