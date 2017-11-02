$("button").on("click", function() {
  var insertPoint = $(this).parent().find("li:nth-child(3)");
  
  $("<li />", {
    'text': "New Item",
    'class': "new-item"
  }).insertAfter(insertPoint);
});

$("#ex-four-button, #example-four-close").on("click", function() {
  $("#example-four-slider-wrap").toggleClass("open");
});

$("#ex-five-button").on("click", function() {
  $(this)
    .toggleClass("open")
    .find(".details")
    .slideToggle();
});

$("#ex-six-button").on("click", function() {
  
  $("#example-six-list").toggleClass("open");
  
  $(this)
    .toggleClass("open")
    .find(".details")
    .slideToggle();
});