$(document).ready(function() {

  $root = $( 'body' );

  //
  // Home Menu Open/Close Naviation
  //

  $.get( '/common/side_menus/index.html', function( data ) {
    $( '#drb-nav-wrapper' ).html( data );
  });


  //
  // Home Menu Open/Close Naviation
  //

  $root.on( 'click', ".home-panel-open", function() {
    $(".menu-1").removeClass("home-slide-reverse").addClass("menu-slide");
  });

  $root.on( 'click', ".home-menu-close", function() {
    $(".menu-1").removeClass("menu-slide").addClass("home-slide-reverse");
  });


  //
  // Refresh on Window Resize for responsive changes
  //

  // $(window).bind('resize', function(e)
  //   {
  //     if (window.RT) clearTimeout(window.RT);
  //     window.RT = setTimeout(function()
  //     {
  //       this.location.reload(false);
  //     }, 05);
  //   });


  //
  // Side Menu-1 Open Navigation
  //

  $root.on( 'click', ".panel-open", function() {
    $(".side-menu-1").removeClass("menu-slide-reverse").addClass("menu-slide");
    setTimeout(function() {
      $(".side-menu-2").delay(250).removeClass("hide");
    }, 250);
  });

  //
  // Side Menu-2 Open Navigation
  //

  $root.on( 'click', ".panel-2-open", function() {
    $(".side-menu-2").removeClass("menu-slide-reverse").addClass("menu-slide");
    setTimeout(function() {
      $(".side-menu-3").delay(250).removeClass("hide");
    }, 250);
  });

  //
  // Side Menu-3 Open Navigation
  //

  $root.on( 'click', ".panel-3-open", function() {
    $(".side-menu-3").removeClass("menu-slide-reverse").addClass("menu-slide");
  });

  //
  // Side Menu-All Close Navigation
  //

  $root.on( 'click', ".menu-close", function() {
    $(".side-menu-1").removeClass("menu-slide").addClass("menu-slide-reverse");
    $(".side-menu-2").removeClass("menu-slide").addClass("menu-slide-reverse");
    setTimeout(function() {
      $(".side-menu-2").delay(250).addClass("hide");
    }, 250);
    $(".side-menu-3").removeClass("menu-slide").addClass("menu-slide-reverse");
    setTimeout(function() {
      $(".side-menu-3").delay(250).addClass("hide");
    }, 500);
    $(".side-menu-1-2-mark").fadeOut(250);
  });

  $root.on( 'click', ".content", function() {
    $(".side-menu-1").removeClass("menu-slide").addClass("menu-slide-reverse");
    $(".side-menu-2").removeClass("menu-slide").addClass("menu-slide-reverse");
    setTimeout(function() {
      $(".side-menu-2").delay(250).addClass("hide");
    }, 250);
    $(".side-menu-3").removeClass("menu-slide").addClass("menu-slide-reverse");
    setTimeout(function() {
      $(".side-menu-3").delay(250).addClass("hide");
    }, 500);
    $(".side-menu-1-2-mark").fadeOut(250);
  });




  //
  // Side Menu-Resources Populate Side-Menu-2
  //

  $root.on( 'click', ".resources-menu", function() {
    $(".side-menu-design").hide();
    $(".side-menu-resources").show();
    $(".side-menu-2").removeClass("menu-slide-reverse").addClass("menu-slide");
    setTimeout(function() {
      $(".side-menu-3").delay(250).removeClass("hide");
    }, 250);
    $(".side-menu-1-2-mark").fadeIn(250);
    $(".side-menu-3").removeClass("menu-slide").addClass("menu-slide-reverse");
  });




  //
  // Side Menu-Design Populate Side-Menu-2
  //

  $root.on( 'click', ".design-menu", function() {
    $(".side-menu-resources").hide();
    $(".side-menu-design").show();
    $(".side-menu-2").removeClass("menu-slide-reverse").addClass("menu-slide");
    setTimeout(function() {
      $(".side-menu-3").delay(250).removeClass("hide");
    }, 250);
    $(".side-menu-1-2-mark").fadeIn(250);
    $(".side-menu-3").removeClass("menu-slide").addClass("menu-slide-reverse");
  });




  //
  // Side Menu-Physics Populate Side-Menu-3
  //

  // $( ".physics-menu" ).click(function() {
  //
  //
  //     $('.tertiary-menu-container').remove();
  //
  //     $.ajax({
  //       dataType: 'json',
  //       url: "/data/menus.json",
  //       error: function(error) {
  //         console.log(error);
  //       },
  //       success: function(data){
  //         console.log(data.menus.secondary[1].items[1].items);
  //         var items = data.menus.secondary[1].items[1].items;
  //
  //         $(".side-menu-3").append(
  //           '<div class="tertiary-menu-container"><section class="physics-menu-container"></section></div>'
  //         );
  //
  //         var menuItems = (function() {
  //           for (var i = 0; i < items.length; i++) {
  //             $(".physics-menu-container").append(
  //               '<div class="menu-item"><hr><a href="' + items[i].link + '"><span class="menu-item-number">' + items[i].number + '</span><span class="menu-item-name ' + items[i].nameClass + '">' + items[i].name + '</span></a></div>'
  //             );
  //           }
  //         })();
  //
  //       }
  //     });
  //     $(".side-menu-3").removeClass("slide-reverse").addClass("slide");
  // });


  //
  // Side Menu-Mechanics Populate Side-Menu-3
  //

  // $( ".mechanics-menu" ).click(function() {
  //
  //
  //     $('.tertiary-menu-container').remove();
  //
  //     $.ajax({
  //       dataType: 'json',
  //       url: "/data/menus.json",
  //       error: function(error) {
  //         console.log(error);
  //       },
  //       success: function(data){
  //         console.log(data.menus.secondary[1].items[2].items);
  //         var items = data.menus.secondary[1].items[2].items;
  //
  //         $(".side-menu-3").append(
  //           '<div class="tertiary-menu-container"><section class="mechanics-menu-container"></section></div>'
  //         );
  //
  //         var menuItems = (function() {
  //           for (var i = 0; i < items.length; i++) {
  //             $(".mechanics-menu-container").append(
  //               '<div class="menu-item"><hr><a href="' + items[i].link + '"><span class="menu-item-number">' + items[i].number + '</span><span class="menu-item-name ' + items[i].nameClass + '">' + items[i].name + '</span></a></div>'
  //             );
  //           }
  //         })();
  //
  //       }
  //     });
  //     $(".side-menu-3").removeClass("slide-reverse").addClass("slide");
  // });


  //
  // Side Menu-Patterns Populate Side-Menu-3
  //


  $root.on( 'click', ".patterns-menu", function() {


      $('.tertiary-menu-container').remove();

      $.ajax({
        dataType: 'json',
        url: "/data/menus.json",
        error: function(error) {
          console.log(error);
        },
        success: function(data){
          console.log(data.menus.secondary[0].items[1].items);
          var items = data.menus.secondary[0].items[1].items;

          $(".side-menu-3").append(
            '<div class="tertiary-menu-container"><section class="patterns-menu-container"></section></div>'
          );

          var menuItems = (function() {
            for (var i = 0; i < items.length; i++) {
              $(".patterns-menu-container").append(
                '<div class="menu-item"><hr><a href="' + items[i].link + '"><span class="menu-item-number">' + items[i].number + '</span><span class="menu-item-name ' + items[i].nameClass + '">' + items[i].name + '</span></a></div>'
              );
            }
          })();

        }
      });
      $(".side-menu-3").removeClass("menu-slide-reverse").addClass("menu-slide");
  });

  //
  // Side Menu-Data Visualization Populate Side-Menu-3
  //


  $root.on( 'click', ".data-menu", function() {


      $('.tertiary-menu-container').remove();

      $.ajax({
        dataType: 'json',
        url: "/data/menus.json",
        error: function(error) {
          console.log(error);
        },
        success: function(data){
          console.log(data.menus.secondary[0].items[2].items);
          var items = data.menus.secondary[0].items[2].items;

          $(".side-menu-3").append(
            '<div class="tertiary-menu-container"><section class="data-menu-container"></section></div>'
          );

          var menuItems = (function() {
            for (var i = 0; i < items.length; i++) {
              $(".data-menu-container").append(
                '<div class="menu-item"><hr><a href="' + items[i].link + '"><span class="menu-item-number">' + items[i].number + '</span><span class="menu-item-name ' + items[i].nameClass + '">' + items[i].name + '</span></a></div>'
              );
            }
          })();

        }
      });
      $(".side-menu-3").removeClass("menu-slide-reverse").addClass("menu-slide");
  });



  //
  // Side Menu-Style Guide Populate Side-Menu-3
  //

  $root.on( 'click', ".style-guide-menu", function() {


      $('.tertiary-menu-container').remove();

      $.ajax({
        dataType: 'json',
        url: "/data/menus.json",
        error: function(error) {
          console.log(error);
        },
        success: function(data){
          console.log(data.menus.secondary[0].items[0].items);
          var items = data.menus.secondary[0].items[0].items;

          $(".side-menu-3").append(
            '<div class="tertiary-menu-container"><section class="style-guide-menu-container"></section></div>'
          );

          var menuItems = (function() {
            for (var i = 0; i < items.length; i++) {
              $(".style-guide-menu-container").append(
                '<div class="menu-item"><hr><a href="' + items[i].link + '"><span class="menu-item-number">' + items[i].number + '</span><span class="menu-item-name ' + items[i].nameClass + '">' + items[i].name + '</span></a></div>'
              );
            }
          })();

        }
      });
      $(".side-menu-3").removeClass("menu-slide-reverse").addClass("menu-slide");
  });



  //
  // Side Menu-Experiences Populate Side-Menu-3
  //

  $root.on( 'click', ".experiences-menu", function() {


      $('.tertiary-menu-container').remove();

      $.ajax({
        dataType: 'json',
        url: "/data/menus.json",
        error: function(error) {
          console.log(error);
        },
        success: function(data){
          console.log(data.menus.secondary[1].items[3].items);
          var items = data.menus.secondary[1].items[3].items;

          $(".side-menu-3").append(
            '<div class="tertiary-menu-container"><section class="experiences-menu-container"></section></div>'
          );

          var menuItems = (function() {
            for (var i = 0; i < items.length; i++) {
              $(".experiences-menu-container").append(
                '<div class="menu-item"><hr><a href="' + items[i].link + '"><span class="menu-item-number">' + items[i].number + '</span><span class="menu-item-name ' + items[i].nameClass + '">' + items[i].name + '</span></a></div>'
              );
            }
          })();

        }
      });
      $(".side-menu-3").removeClass("menu-slide-reverse").addClass("menu-slide");

      anm.on();
  });


  /// Smooth Scroll ///
  $(function() {
    $('a.smooth-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });







//
// End doc.ready
//
});
