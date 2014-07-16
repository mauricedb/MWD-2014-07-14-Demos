$(function () {

    $("#callApi").click(function () {

        $.ajax({
            url: "/token",
            type: "post",
            data: {
                username: "maurice",
                password: "secret",
                grant_type: "password"
            }
        }).then(function (response) {
            console.log(response);

            $.ajax({
                url: "/api/test",
                headers: {
                    Authorization: "Bearer " + response.access_token
                }

            }).then(function (result) {
                $("#result").text(result);
            });
        });





    });

})