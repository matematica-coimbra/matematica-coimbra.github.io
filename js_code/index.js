$(document).ready(function() {
    main();
})

function main()
{
    set_expand_event();
    set_close_event();
    set_form_submission();
}

function set_form_submission()
{
    $(".subinpu").on("click", function() {
        let xhttp = new XMLHttpRequest();
        let link = "https://docs.google.com/forms/d/e/1FAIpQLSd814VAVDcyLCmPhAnxnaV7zEK-C7_HfSrtyha4FulQt-tvsg/" +
            "formResponse?usp=pp_url" +
            "&entry.2005620554=" + $("#name").val() +
            "&entry.1045781291=" + $("#email").val() +
            "&entry.2024126210=" + $("#phone").val() +
            "&entry.965650928="  + $("#comment").val()
            ;
            console.log(link);
        xhttp.open("GET", encodeURI(link));
        xhttp.send();
        //! modify this message
        alert("Sucesso. O explicador irá contactá-lo o mais cedo possível. Obrigado.")
    });
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