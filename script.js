// https://stackoverflow.com/a/1484514/3769
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

// https://stackoverflow.com/a/13532993/3769
function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

var documentWidth = $(document).width();
var documentHeight = $(document).height();
var eggWidth = 60; 
var posx = (Math.random() * (documentWidth - eggWidth)).toFixed();
var posy = (Math.random() * (documentHeight - eggWidth)).toFixed();
var difficulty = getRandomArbitrary(1, 3); 
var scale = getRandomArbitrary(0.5, 1.5);
var rotate = getRandomArbitrary(0, 360);
var randomColor = getRandomColor(); 

$('#egg').css({
        'position':'absolute',
        'left': posx + 'px',
        'top': posy + 'px',
        'background-color': randomColor,
        'transform': 'rotate(' + rotate + 'deg) scale(' + scale +')'        
});

// set the background to a slightly diff shade of egg color
var eggColor = shadeColor(randomColor, Math.floor(difficulty));
$('body').css('background-color', eggColor);


// if you click anywhere show / hide the egg
$(document).click(function() {
   $('#egg').toggleClass('visibleEgg')
});


// debug 
$('#footer').text(' d: ' + difficulty + " s:" + scale + " r:" + rotate + " c:" + eggColor);