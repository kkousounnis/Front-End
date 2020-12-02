$("#button1").click(function () {
    // $("p").hide();
    $("p").toggle(1000);
});

$("li").click(function () {
    // $("p").hide();
    $("li").toggle(1000);
});


$(document).ready(function () {
    $("button9").click(function () {
        $.ajax({
            url: "mytxt.txt", success: function (result) {
                $("#div1").html(result);
            }
        });
    });
});

$("#button9").on("click",function() {
    $.get("company.xml", function(res){

        $(res).find("emp").each(function() {

            var name = $(this).find("name");
            $("#employess").append(name).append("<br/>");
        } );
    });

});

$("#button11").on("click",function() {
    $.getJSON("trainers.json", function(res){
        $.each(res,function(key,value){
            if(key == "address"){
                $("#emp").append(key + " " + value).append("<br/>")
            }

        });

    });

});

