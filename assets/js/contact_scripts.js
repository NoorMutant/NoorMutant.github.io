/*
 Author: Ukieweb
 Template: ukieCard
 Version: 1.0
 URL: http://themeforest.net/user/UkieWeb
 */


$(document).ready(function(){

    "use strict";

    /*
     ----------------------------------------------------------------------
     Map
     ----------------------------------------------------------------------
     */
    var map;
    function initialize_map() {

        if ($('.map').length) {
            var myLatLng = new google.maps.LatLng(28.5971, 77.3482);
            var mapOptions = {
                zoom: 7,
                center: myLatLng,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Noor',
                icon: './assets/img/marker-' + $('#stylesheet-new').attr('data-color') + '.png'
            });
        } else {
            return false;
        }

    }
    google.maps.event.addDomListener(window, 'load', initialize_map);


    /*
     ----------------------------------------------------------------------
     Forms
     ----------------------------------------------------------------------
     */

    /* Email validation */
    function valid_email_address(email) {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(email);
    }

    /*
     ----------------------------------------------------------------------
     Contact form validation
     ----------------------------------------------------------------------
     */

    $("#contact-form").submit( function() {


        if ( !valid_email_address( $("#user-email").val() ) || $("#user-name").val().length <= 2  )  {

            if ( !valid_email_address( $("#user-email").val() ) ) {
                $("#user-email").addClass("error");
            }
            if ( $("#user-name").val().length <= 2 ){
                $("#user-name").addClass("error");
            }

        } else {

                        $(".info-message-form p").text("Your Message has been sent!");
                        $(".info-message-form").addClass('success');
                        setTimeout(
                            function(){
                                $(".info-message-form").removeClass('success');
                                $(".info-message-form p").text("");
                            }, 10000
                        );
            var data_of_form = $(this).serialize();

            $.ajax({
                url: 'assets/data/php/contact.php',
                data: data_of_form,
                type: 'POST',
                success: function(data) {
                    console.log('data');
                }
              
            });

        }

        return false;
    });

    $(".close-msg").on("click", function() {
        $(this).parent().removeClass("error");
    });

    $("#user-name, #user-email").on("click", function() {

        $(this).removeClass("error");

    });


}); // End $(document).ready(function(){