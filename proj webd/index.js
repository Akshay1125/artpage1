// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

$(document).keypress(function(event){
    $(".contacts h1").text(event.key);
});

$(document).ready(function(){
    $("#extras").hide();
});

$("#seemore button").on("click", function(){
    
    var txt = $("#extras").is(':visible') ? 'See More' : 'See Less';
    $("#seemore button").text(txt);
    $("#extras").fadeToggle();
    $("#extras").is(':visible')? $(".bgimg").css("height", "3000px") :$(".bgimg").css("height", "2300px");
});

