var duration = 1;

// Hamburger

var hamburger = document.getElementById('hamburger');

hamburger.onmouseenter = function (e) {
    TweenMax.to(hamburger.children.item(0), duration / 5, { x: -10 });
    TweenMax.to(hamburger.children.item(2), duration / 5, { x: 10 });
}

hamburger.onmouseleave = function (e) {
    TweenMax.to(hamburger.children.item(0), duration / 5, { x: 0 });
    TweenMax.to(hamburger.children.item(2), duration / 5, { x: 0 });
}