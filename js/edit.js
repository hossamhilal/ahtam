/*global $ */
$(document).ready(function ($) {
    'use strict';
    
     // SELECT PICKER
    $('select').niceSelect();
    
//     $(document).click(function(e) {
//           $(".nav").toggleClass("nav-view");
//     });
    
     /*creating click event*/
      $('#click-a').click(function(e){
          e.preventDefault();
          $('.nav').toggleClass('nav-view');
          $('.nav-overlay').css("display","block");
      });
    
      $('.ico-close').click(function(){
          $('.nav').removeClass('nav-view');
          $('.nav-overlay').css("display","none");
      });
    
      $('.nav-overlay').click( function() {
         $('.nav').removeClass('nav-view'); 
         $('.nav-overlay').css("display","none"); 
      });

//    $(document).click(function(){
//       if($("#sidebar-wrapper").hasClass('active')){
//          $("#sidebar-wrapper").removeClass("active");
//       }
//    });
//    
//     $('body')not('.nav').click(function(event){
//       $('.nav').removeClass('nav-view');
//    });

   
      
    
    
    // ADD PRODUCT PAGE UPLOAD IMGS 
    
    $(".input-file").change(function(){
       var input = (this);
       var image = $(this).siblings('.input-image');
       if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
              image.attr('src', e.target.result);
              console.log(this);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });
   
    // ADD CENTER TO FAVOURITE 
    $('.click-fav-icon').click(function() {
          $(this).toggleClass('favourited');
     });
    
    
    // CHANGE ACTIVE TAB COLOR IN CENTER PAGE  
    $('.center-tabs li').click(function() {
         $('.center-tabs li').removeClass('cent-act-tab');
          $(this).addClass('cent-act-tab');
     });
    
    
    // SHOW DATA BODY  IN CENTER PAGE  
    $('.cent-data-tab').click(function() {
         $('.data-tab-body').removeClass('hide-cent-box');
          $('.services-tab-body').addClass('hide-cent-box');
          $('.offers-tab-body').addClass('hide-cent-box');
          $('.packages-tab-body').addClass('hide-cent-box');
     });
    
    // SHOW SERVICES BODY IN CENTER PAGE  
    $('.cent-serv-tab').click(function() {
         $('.services-tab-body').removeClass('hide-cent-box');
          $('.data-tab-body').addClass('hide-cent-box');
          $('.offers-tab-body').addClass('hide-cent-box');
         $('.packages-tab-body').addClass('hide-cent-box');
     });
    
    // SHOW OFFERS BODY IN CENTER PAGE  
    $('.cent-offr-tab').click(function() {
         $('.offers-tab-body').removeClass('hide-cent-box');
          $('.services-tab-body').addClass('hide-cent-box');
          $('.data-tab-body').addClass('hide-cent-box');
          $('.packages-tab-body').addClass('hide-cent-box');
     });
    
    // SHOW PACKAGES BODY IN CENTER PAGE  
    $('.cent-pack-tab').click(function() {
         $('.packages-tab-body').removeClass('hide-cent-box');
          $('.services-tab-body').addClass('hide-cent-box');
          $('.offers-tab-body').addClass('hide-cent-box');
          $('.data-tab-body').addClass('hide-cent-box');
     });
    
    
    // SHOW PACKAGES BODY IN CENTER PAGE  
    $('.go-to-map').click(function() {
         $('#map-container').slideToggle();
     });
    
    
    // CHANGE ACTIVE TAB COLOR IN CENTER PAGE  
    $('.centerreservtions-tabs li').click(function() {
         $('.centerreservtions-tabs li').removeClass('centreserv-activetab');
          $(this).addClass('centreserv-activetab');
     });
    
    
    // SHOW center requests  BODY IN CENTER PAGE  
    $('.centreg-tab').click(function() {
         $('.center-regues-show-box').removeClass('hide-cent-box');
          $('.center-reserv-show-box').addClass('hide-cent-box');
          $('.center-cancel-show-box').addClass('hide-cent-box');
     });
    
    // SHOW center reservations BODY IN CENTER PAGE  
    $('.centreserv-tab').click(function() {
         $('.center-reserv-show-box').removeClass('hide-cent-box');
          $('.center-regues-show-box').addClass('hide-cent-box');
          $('.center-cancel-show-box').addClass('hide-cent-box');
     });
    
    // SHOW center canceld reservations BODY IN CENTER PAGE  
    $('.centcancled-tab').click(function() {
         $('.center-cancel-show-box').removeClass('hide-cent-box');
          $('.center-reserv-show-box').addClass('hide-cent-box');
          $('.center-regues-show-box').addClass('hide-cent-box');
     });
    
         

    // CHANGE ACTIVE TAB COLOR IN CENTER PAGE  
    $('.centerpage-servicebox .btn').click(function() {
         $(this).find('.icofont-rounded-down').toggleClass('cols-rotate');
     });
    

    
    // CHANGE ACTIVE TAB COLOR IN FILTER PAGE  
    $('.filter-head li').click(function() {
          $('.filter-head li').removeClass('filter-activetab');
          $(this).addClass('filter-activetab');
     });
    
    
    // CHANGE ACTIVE TAB COLOR IN  FILTER PAGE   
    $('.filt-ext-adv li').click(function() {
          $('.filt-ext-adv li').removeClass('filter-activetab');
          $(this).addClass('filter-activetab');
     });
    
    // CHANGE ACTIVE TAB COLOR IN  FILTER PAGE   
    $('.pay-way li').click(function() {
          $('.pay-way li').removeClass('filter-activetab');
          $(this).addClass('filter-activetab');
     });
    
    
    
    // DATE RANGE CALENDEER 
     $("#cal1").rangeCalendar({
            lang: "en",
            theme: "default-theme",
            themeContext: this,
            startDate: moment(),
            endDate: moment().add('months', 12),
            start : "+1",
            startRangeWidth : 1,
            minRangeWidth: 1,
            maxRangeWidth: 14,
            weekends: true,
            autoHideMonths: false,
            visible: true,
            trigger: null,
            changeRangeCallback : function( el, cont, dateProp ) { return false; }
        });
    

        // Regular map
            function regular_map() {
                var var_location = new google.maps.LatLng(40.725118, -73.997699);

                var var_mapoptions = {
                    center: var_location,
                    zoom: 14
                };

                var var_map = new google.maps.Map(document.getElementById("map-container"),
                    var_mapoptions);

                var var_marker = new google.maps.Marker({
                    position: var_location,
                    map: var_map,
                    title: "New York"
                });
            }

            // Initialize maps
            google.maps.event.addDomListener(window, 'load', regular_map);
        
});
    
   