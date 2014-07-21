$(document).ready(function(){
  $("#buttons .button").click(function(event){
    if ($(this).hasClass("off")) {
      $(this).removeClass("off").addClass("on");
      $("#target").text($(this).text());
    }
    else if ($(this).hasClass("on")) {
      $(this).removeClass("on").addClass("off");
      $("#target").text("　");
    }
  });

  $('#navigation > li').hover(
    function () {
      $('a',$(this)).stop().animate({'marginLeft':'-2px'},200);
    },
    function () {
      $('a',$(this)).stop().animate({'marginLeft':'-105px'},200);
    }
  );

  $(".openmodalbox").modalBox({
    setTypeOfFaderLayer    : 'black', // options: white, black, disable
    killModalboxWithCloseButtonOnly : true, // options: true, false (close the modal box with close button only),
    setStylesOfFaderLayer : {// define the opacity and color of fader layer here
      white : 'background-color:#fff; filter:alpha(opacity=60); -moz-opacity:0.6; opacity:0.6;',
      black : 'background-color:#000; filter:alpha(opacity=40); -moz-opacity:0.4; opacity:0.4;',
      transparent : 'background-color:transparent;'
    },
    minimalTopSpacingOfModalbox : 50 // sets the minimum space between modalbox and visible area in the browser window
  });
});


