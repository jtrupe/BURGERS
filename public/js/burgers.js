$(function () {
    $(".devour").on("click", function () {
        event.preventDefault();
        var id = $(this.id).value;
        var queryURL = "/burgers/devour/" + id
        $.ajax({
            url: queryURL,
            method: "POST",
            data: id
        }).then(
            function () {
                location.reload();
            })
    })
})