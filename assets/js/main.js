window.document.onkeydown = function(e) {
   if (e.keyCode == 27) {
     lightbox_close();
   }
 }

 function lightbox_open(videofile) {
   $('#light video source').attr('src', videofile);
   $("#light video")[0].load();
   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
   window.scrollTo(0, 0);
   document.getElementById('light').style.display = 'block';
   document.getElementById('fade').style.display = 'block';
   lightBoxVideo.play();
 }

 function lightbox_close() {
   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
   document.getElementById('light').style.display = 'none';
   document.getElementById('fade').style.display = 'none';
   lightBoxVideo.pause();
 }



jQuery(document).ready(function($) {


 /*======= Skillset *=======*/

 $('.level-bar-inner').css('width', '0');

 $(window).on('load', function() {

     $('.level-bar-inner').each(function() {

         var itemWidth = $(this).data('level');

         $(this).animate({
             width: itemWidth
         }, 800);

     });

 });

 /* Bootstrap Tooltip for Skillset */
 $('.level-label').tooltip();


});
