// Dark And Light mood

function darkMood(){
  document.body.style.background = "black";
    document.getElementsByClassName('row')[0].style.background = "rgb(108 117 125 / 37%)";
      document.getElementsByClassName('row')[1].style.background = "rgb(108 117 125 / 37%)";
        document.getElementsByClassName('c_navbar')[0].style.boxShadow = "rgb(108 92 10) 0px 1px 101px 12px";
};

function lightMood(){
  document.body.style.background = "rgb(201 0 0)";
    document.getElementsByClassName('row')[0].style.background = "#00000036";
      document.getElementsByClassName('row')[1].style.background = "#00000036";
        document.getElementsByClassName('c_navbar')[0].style.boxShadow = "rgb(255 193 7) 0px 1px 101px 12px";
}

$(document).ready(function(){

    //Hide
    $('#btn').click(function(){
        $('.h2').backgroundColor('#6c757d');
    });

    //Show
    $('#btn1').click(function(){
        $('.h2').show(1000);
    });

    //Toggle
    $('#btn2').click(function(){
      $('.h2').toggle("slow");
    });

    // Hover over/out
    $('#btn3').hover(function () {
        // over
        $('.h2').hide(1000);
      }, function () {
        // out
        $('.h2').show(1000);
      });

    //================== Fade Related jq ================
    //FadeOut
    $('#btn4').click(function () { 
      $('#fade').fadeOut();      
    });

    //FadeIn
    $('#btn5').click(function () { 
      $('#fade').fadeIn();
    });

    //FadeToggle
    $('#btn6').click(function () { 
      $('#fade').fadeToggle();
    });

    //FadeTo
    $('#btn7').click(function () { 
      $('#fade').fadeTo(1000, .5);
      
    });
});

//========= Small Slide effect =======
$(document).ready(function () {

  $('.panel').click(function () { 
    $('.flip').slideToggle();
    
  });
});


$(document).ready(function () {
  $( "#accordion" ).accordion();

  /* Autocomplete ================= */
  // Singel Value
  $( "#accordion1" ).accordion();

  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });

});


// Multiple Values
$( function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  function split( val ) {
    return val.split( /,\s*/ );
  }
  function extractLast( term ) {
    return split( term ).pop();
  }

  $( "#tags2" )
    // don't navigate away from the field on tab when selecting an item
    .on( "keydown", function( event ) {
      if ( event.keyCode === $.ui.keyCode.TAB &&
          $( this ).autocomplete( "instance" ).menu.active ) {
        event.preventDefault();
      }
    })
    .autocomplete({
      minLength: 0,
      source: function( request, response ) {
        // delegate back to autocomplete, but extract the last term
        response( $.ui.autocomplete.filter(
          availableTags, extractLast( request.term ) ) );
      },
      focus: function() {
        // prevent value inserted on focus
        return false;
      },
      select: function( event, ui ) {
        var terms = split( this.value );
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push( ui.item.value );
        // add placeholder to get the comma-and-space at the end
        terms.push( "" );
        this.value = terms.join( ", " );
        return false;
      }
    });
} );

// DataPikar, Dialog, Alert
$(document).ready(function () {

    $( "#datepickerOne" ).datepicker();

    $( "#datepickerTwo" ).datepicker();
    $( "#animOne" ).on( "change", function() {
      $( "#datepickerTwo" ).datepicker( "option", "showAnim", $( this ).val() );
    });

    $( "#datepickerThree" ).datepicker({
      altField: "#alternateOne",
      altFormat: "DD, d MM, yy"
    });

    // Dialog 2
    $( "#dialog-confirm" ).dialog({
      resizable: false,
      height: 500,
      width: 800,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });

    // Dialog 1
    $( "#dialogOne" ).dialog();


    // Dialog 3
    $( "#dialogTwo" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
      
    });
 
    $( "#openerOne" ).on( "click", function() {
      $( "#dialogTwo" ).dialog( "open" );
    });


    // Select Menue itme1

    $('#selectSpeed').selectmenu();
    $('#selectFiles').selectmenu();
    $('#selectNumber').selectmenu()
      .selectmenu("menuWidget")
      .addClass("overflow");
    $('#selectSalutation').selectmenu();

    // Select Menue itme2

    var circle = $('#circleOne');

    $('#radiusOne').selectmenu({
      change: function(event, data){
        circle.css({
          width: data.item.value,
          height: data.item.value
        });
      }
    });

    $('#colorOne').selectmenu({
      change: function(event, data){
        circle.css( "background", data.item.value );
      }
    })

});



// Tooltips start

$(document).ready(function () {
  $( document ).tooltip();




  $( "#show-option" ).tooltip({
    show: {
      effect: "slideDown",
      delay: 250
    }
  });
  $( "#hide-option" ).tooltip({
    hide: {
      effect: "explode",
      delay: 250
    }
  });
  $( "#open-event" ).tooltip({
    show: null,
    position: {
      my: "left top",
      at: "left bottom"
    },
    open: function( event, ui ) {
      ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "fast" );
    }
  });

  $( "#progressbar" ).progressbar({
    value: 37
  });

 
});


