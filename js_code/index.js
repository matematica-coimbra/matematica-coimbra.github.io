$(document).ready(function() {
    main();
})

function main()
{
    set_expand_event();
    set_close_event();
    set_form_submission();
}

/*

https://docs.google.com/forms/d/e/1FAIpQLSd814VAVDcyLCmPhAnxnaV7zEK-C7_HfSrtyha4FulQt-tvsg/viewform?
usp=pp_url
&entry.2005620554=g
&entry.1442067619=m
&entry.2024126210=9
&entry.965650928=c

*/

function set_form_submission()
{
    $(".subinpu").on("click", function() {
        // verify if blank
        let name = $("#name").val();
        let school = $("#school").val();
        let phone = $("#phone").val();
        if (!phone) {
            alert("Por favor insira o nº de telemóvel ou email.");
            return;
        }
        
        // submit
        let xhttp = new XMLHttpRequest();
        let link = "https://docs.google.com/forms/d/e/1FAIpQLSd814VAVDcyLCmPhAnxnaV7zEK-C7_HfSrtyha4FulQt-tvsg/" +
            "formResponse?usp=pp_url" +
            "&entry.2005620554=" + name +
            "&entry.1442067619=" + school +
            "&entry.2024126210=" + phone +
            "&entry.965650928="  + $("#comment").val();
        xhttp.open("GET", encodeURI(link));
        xhttp.send();
        
        // give confirmation:
        $("#contactar").css("background-color", "#4CAF50");
        $(".subinpu").text("Submetido com Sucesso!");
    });
}

function set_expand_event()
{
    $("#contactar").on("mouseleave", function() {
        if ( parseFloat($(this).css("height")) > 490 )
            $(this).css({
                "width": "800px",
                "height": "550px"
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
            "height": "550px"
        });
    });
}