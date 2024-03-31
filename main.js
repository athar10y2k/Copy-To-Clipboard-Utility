$(document).ready(function(){

    //add and remove class from the span
    function add(){
        $(".copied").addClass("bounce-effect");
    }

    function remove(){
        $(".copied").removeClass("bounce-effect");
    }

    //call the function and copy the text on button click

    $(".copy-btn").click(function(){
        $("#textField").select();
        document.execCommand("copy");
        add();
        setTimeout(remove, 800);
    })
})