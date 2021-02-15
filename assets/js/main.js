console.log('sss');

$(document).ready(() => {

        console.log('enter');
        $("#wlcm").fadeIn(3000)
        $("#readmore").fadeIn(3000)
        $("#abtus").fadeIn(5000)


        /* $(".readmore-btn").mouseenter(function () {
                 console.log("enter");
                 $(this).css({ "background-color": "rgba(0, 0, 0, 0.391)"})
         });*/
        $(".readmore-btn").mouseleave(function () {
                console.log("enter");
                $(this).css({ "background-color": "rgba(0, 0, 0, 0)" })
        });








        var isrotated = false
        $(".cards").click(function (e) {


                if (isrotated) {


                        console.log("second" + isrotated);

                        $(this).css({ 'transform': 'rotate(0deg)', "width": "10rem" });

                        isrotated = false

                } else if (!isrotated) {
                        isrotated = true;
                        console.log("first" + isrotated);

                        $(this).css({ 'transform': 'rotate(10deg)', "width": "10rem" });
                }
        });


})

