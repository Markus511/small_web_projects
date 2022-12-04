$(document).ready(function () {
    let elementClicked = 0;
    let firstClick;
    let secondClick;
    $(".grid-item").click(function () {
        if (elementClicked == 0) {
            $(secondClick).text($(secondClick).attr("id"));
            $(this).text("Avattu");
            firstClick = this;

            $(this).removeClass("color1");
            $(this).addClass("color2");
            elementClicked = elementClicked + 1;
        }
        else {
            $(firstClick).text($(firstClick).attr("id"));
            $(this).text("Avattu");
            secondClick = this;
            
            $(this).removeClass("color1");
            $(this).addClass("color2");
            elementClicked = elementClicked - 1;
        }
    });
});