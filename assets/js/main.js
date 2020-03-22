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


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    $("#rss-feeds").rss(

        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",

        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,

        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'

        }
    );
});
