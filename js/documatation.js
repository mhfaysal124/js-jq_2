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


  // =========================
  // Selector
  // =========================
$('#one').data("color", "orange");
$('#two').data("color", "black");
$('#three').data("color", "green");

$(':data(color)').each(function(){
    var element = $(this);
    element.css("backgroundColor", element.data("color"));
});


$('#four').data("border", "10px solid white");
$('#five').data("border", "10px solid yellow");
$('#six').data("border", "10px solid orange");
$('#six').data("borderOne", "20px");

$(':data(border)').each(function(){
    var elementOne = $(this);
    elementOne.css("border", elementOne.data("border"));
    elementOne.css("borderRadius", elementOne.data("borderOne"));
});


$(':focusable').css("border-color", "black");
$(':tabbable').css("border-radius", "20px")

//Methods_.cssClip()
var clippings = [
  {
    top: 10,
    right: 50,
    bottom: 50,
    left: 5
  },
  {
    top: 0,
    right: 150,
    bottom: 150,
    left: 0
  }
];
var index = 1;
var box = $('.clipped').cssClip( clippings [ 0 ]);

$(document).click(function () { 
  box.animate({
    clip: clippings[index++ % 2]
  }, 2000);
  
});


// .effect( effect [, options ] [, duration ] [, complete ] )

  $(document).click(function () { 
    $('#demoOne').effect("bounce", 1000);
    $('#demoTwo').toggle("bounce", 1000);
    $('#demoThree').hide(1000);
    $('#demoFive').effect("bounce", 1000);
    $('#demoSix').toggle(1000);
    
  });

//.hide()

$('#btnOne').click(function (e) { 
  $('#demoSeven').hide('drop',{ direction: "down"}), 2000;
  
});
$('#btnTwo').click(function () { 
  $('#demoEight').toggle("drop", {direction: "up"}, 1000);
  
});

// .labels()
  $('input').labels().addClass("highlight");
  