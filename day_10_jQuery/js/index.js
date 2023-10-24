$(document).ready(function(){
    let currentBgColor = "white";

    // $(".btn-login").click(function () {
    //     alert("bấm");
    // });

    $("#btn-login").click(function () {
        // alert("click 2 phát");
        $("#remember-me-block").toggle();
    });

    // $("#btn-show").click(function () {        
    //     $("#remember-me-block").show();
    // });

    // $("#btn-hide").click(function () {        
    //     $("#remember-me-block").hide();
    // });

    // $("button [abc='btn-change-bg']").click(function() {
    // if(currentBgColor === "white"){
    //     currentBgColor = "#1f2a35";
    // } else {
    //     currentBgColor = "white";
    // }

        $("body").css("background-color" , currentBgColor);
    // });

    $("#btn-login").click(()=>{
        console.log("email:", $("#email").val());
        console.log("pass:", $("#pwd").val());

        console.log("----------------")

        console.log($("label[for='email']").text());
        console.log($("label[for='email']").html());
    })

});

