// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Framework7.$;

// Add views
var leftView = myApp.addView('.view-left', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var mySlider = myApp.slider('.slider-container', {
    speed: 400,
    spaceBetween: 100
});
// create a settings object
var settings = {
  // these are required:
  suggestUrl: '', // the URL that provides the data for the suggest
  // these are optional:
  instantVisualFeedback: 'all', // where the instant visual feedback should be shown, 'top', 'bottom', or 'all', default: 'all'
  throttleTime: 300, // the number of milliseconds before the suggest is triggered after finished input, default: 300ms
  highlight: true, // whether matched words should be highlighted, default: true
  queryVisualizationHeadline: '', // A headline for the image visualization, default: empty
  animationSpeed: 300, // speed of the animations, default: 300ms
  enterCallback: undefined, // callback on what should happen when enter is pressed, default: undefined, meaning the link will be followed
  minChars: 3, // minimum number of characters before the suggests shows, default: 3
  maxWidth: 400 // the maximum width of the suggest box, default: as wide as the input box
};


