$(document).ready(function() {
    main();
})

function main()
{
    set_expand_event();
    set_close_event();
    
}

function set_expand_event()
{
    $("#contactar").on("mouseleave", function() {
        if ( parseFloat($(this).css("height")) > 490 )
            $(this).css({
                "width": "800px",
                "height": "500px"
            });
    });
}

function set_close_event()
{
    $("*").on("mouseup", function(elem) {
        elem.stopPropagation();
        if (!/[a-z]*clic[a-z]*/.test($(this).attr("class")) && parseFloat($("#contactar").css("height")) > 490 )
            close_contactar();
    });
}

function close_contactar()
{
    // close
    $("#contactar").css({
        "width": "325px",
        "height": "75px"
    });
    // reset hover effect
    $("#contactar").hover(function() {
        $(this).css({
            "width": "800px",
            "height": "500px"
        });
    });
}