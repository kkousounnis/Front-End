$("button").click(function () {
    $("p").show("slow");
});

$(document).ready(function(){
    $("p").click(function(){
      $(this).hide();
    });
  });