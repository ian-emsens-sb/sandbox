function init() {
    var duration = 1; // seconds

    // Circle
    TweenMax.to('#animate--1', duration, {
        x: 150,
        y: 150,
        backgroundColor: 'red'
    });

    // Square
    TweenMax.to('#animate--2', duration * 2, {
        x: -150,
        y: -150,
        scale: 2,
        delay: duration,
        ease: Back.easeOut
    });

    // Rectangle
    TweenMax.from('#animate--3', duration * 3, {
        y: 200,
        rotation: 180,
        scale: 1.5,
    });

    // List
    TweenMax.to('#animate--4 li:nth-child(even)', duration, {
        x: 25
    });
}