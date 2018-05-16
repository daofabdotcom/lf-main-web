// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.

//= require jquery-3.2.1.slim.min
//= require bootstrap.bundle.min
//= require owl.carousel.min
//= require smooth-scroll.min
//= require jquery-3.2.1.slim.min
//= require jquery.magnific-popup.min
//= require particles.min
//= require particles-app
//= require main
//= require map-custom
//= require rails-ujs
//= require turbolinks
//= require_tree .


function myMap() {
    var myCenter = new google.maps.LatLng(1.2967926,103.7845679);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: myCenter, zoom: 17};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "<span class='text-bold'>LegalFAB Private Limited</span><br>\n" +
        "LegalFAB Private Limited <br>" +
        "LaunchPad @ One North <br>" +
        "71 Ayer Rajah Crescent<br>" +
        "Level 2, Unit 15<br>" +
        "Singapore 139951 "
    });
    infowindow.open(map,marker);
}