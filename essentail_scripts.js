/**
 * Created by chitrakakkar on 2/16/17.
 */
$(function()
{
    $("span").css
    (
        {
            "font-weight": "Bold"

        });

    $("h2").click(function ()
    {

        $(this).css(
            {

                "background-color": "green"
            });

    });
    $("p").hover(function ()
    {

        $(this).toggle(1000)


    });
    $("#h1_blue").click(function ()
    {
        $("H1").css(
            {
            "color": "blue"
        })

    });
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