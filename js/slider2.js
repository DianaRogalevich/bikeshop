var imgHead = ['img/slider2.jpg',

	            'img/slider3.jpg',

	            'img/slider4.jpg',

	            'img/slider.jpg']; // массив картинок
var to = 0;  // Счетчик, указывающий на текущую картинки

function right_arrow() // Открытие следующей картинки(движение вправо)
{ 
  if (to < imgHead.length-1)  to++; 
   else
     to = 0; 
	 $('.slider').css({'background-image':'url('+imgHead[to]+')'});
}

function left_arrow() // Открытие предыдущей картинки(движение влево)
{     
if (to > 0) to--;
  else
    to = imgHead.length-1;
    $('.slider').css({'background-image':'url('+imgHead[to]+')'});  			 
}