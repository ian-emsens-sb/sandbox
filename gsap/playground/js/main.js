var duration = 1;
var ease = Back.easeOut;
var moveRight100 = { x: 100 };

// Basics

// TweenMax.to('.circle', duration, {
//     x: 100
// });

// TweenMax.to('.square', duration, {
//     x: 100,
//     delay: duration
// });

// TweenMax.to('.rectangle', duration, {
//     x: 100,
//     delay: duration * 2
// });

// Timeline

// var t = new TimelineMax();

// // https://greensock.com/docs/Easing
// t.to('.circle', duration * 2, {
//     x: 100,
//     ease
// }).to('.square', duration / 2, {
//     x: 100,
//     ease
// }).to('.rectangle', duration * 1.33, {
//     x: 100,
//     ease
// });

// Stagger

// TweenMax.staggerFrom('.triangle', duration, {
//     x: 200,
//     y: 200,
//     opacity: 0,
//     ease
// }, duration / 10);

// Set

// TweenMax.set('.oval', {
//     x: -100
// });

// Properties

// var t = new TimelineMax({
//     repeat: -1,
//     yoyo: true
//     // repeatDelay: duration / 2
// });

// t.to('.oval', duration, {
//     x: 100
// });

// Labels and Timings

// var t = new TimelineMax();

// t.to('.circle', duration,
//     moveRight100,
//     // 'circleRectangle'
// ).to('.square', duration,
//     moveRight100,
//     // 'squareRectangle'
//     // '-=' + (duration / 2).toString()
//     5 // start 5s into the timeline
// ).to('.rectangle', duration,
//     moveRight100,
//     // 'squareRectangle+=' + (duration / 4).toString()
//     // '-=' + (duration / 2).toString()
//     5 // start 5s into the timeline
// );

// Controls
// (!) useful

// var t = new TimelineMax();

// t.staggerFrom('.shape', duration / 2, {
//     x: 50,
//     y: 50,
//     opacity: 0
// }, duration / 5);

// var play = document.getElementById('play');
// var pause = document.getElementById('pause');
// var resume = document.getElementById('resume');
// var reverse = document.getElementById('reverse');
// var slow = document.getElementById('slow');
// var fast = document.getElementById('fast');
// var seek = document.getElementById('seek');
// var progress = document.getElementById('progress');

// // play forward

// play.onclick = function (e) {
//     t.play();
// }

// // pause and resume respect direction

// pause.onclick = function (e) {
//     t.pause();
// }

// resume.onclick = function (e) {
//     t.resume();
// }

// // play backwards

// reverse.onclick = function (e) {
//     t.reverse();
// }

// // speed controls do not revert after finishing any direction

// slow.onclick = function (e) {
//     t.timeScale(0.5); // go slower
// }

// fast.onclick = function (e) {
//     t.timeScale(2); // go faster
// }

// seek.onclick = function (e) {
//     t.seek(0.33); // timestamp in seconds
// }

// progress.onclick = function (e) {
//     t.progress(0.1); // percentage of completion
// }

// fromTo

// TweenMax.fromTo('.circle', duration,
//     { x: -100, scale: 0 },
//     { x: -100, scale: 1.5 }
// );

// TweenMax.staggerFromTo('.triangle', duration,
//     { y: 200, x: 200 },
//     { y: -50, x: -50 },
//     duration / 5
// );