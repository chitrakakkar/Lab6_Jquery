/**
 * Created by chitrakakkar on 2/16/17.
 */
$(function()
{
    // making element bold
    $("span").css
    (
        {
            "font-weight": "Bold"

        });
    // green background
    $("h2").click(function ()
    {

        $(this).css(
            {

                "background-color": "green"
            });

    });
    // toggle elements
    $("p").hover(function ()
    {

        $(this).toggle(1000)


    });
    // making H1 blue
    $("#h1_blue").click(function ()
    {
        $("H1").css(
            {
            "color": "blue"
        })

    });
    // removing not important items from the list
    $("#remove_not_important").click(function ()
    {
        $("li.not_important").hide()

    });

    $("ul").click(function ()
    {
        $(this).fadeOut(500);


    });
    $("#fade_in").click(function ()
    {
        $("ul").fadeIn(1000)
    })
});