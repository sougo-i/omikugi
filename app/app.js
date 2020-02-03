$(function() {

  let country =["../img/america-bg.png",'../img/rusia-bg.png','../img/morudive-bg.png','../img/burazil-bg.png','../img/igiris-bg.png'];
  let random = Math.random();
  let length = country.length-1;
  let num = Math.floor(random*country.length);
  let key = 0;

  $('.start').click(function() {
    let shuffle = function() {
      if(key>length)key=0;
      $('.start').hide();
      $('.stop').show().css('display','flex');
      $('.result').css('background-image',('url("'+country[key]+'")'));
      key++;
      $('.country-result').hide();
    }
    randStart = setInterval(shuffle,100);

  });

  $('.stop').click(function() {
    clearInterval(randStart);
    $(this).hide();
    $('.start').show();

    switch(key) {
      case 1:
        $('.country-result').fadeIn(1000);
        $('.country').text('旅行先はアメリカです').css('font-size','30px');
        $('.detail h1').css('font-size','30px');
        $('.country-bg').css('background-image','url(../img/america-bg.png)');
        $('.rusia,.morudebu,.igirisu,.burazil').hide();
        $('.america').show();
        break;

      case 2:
        $('.country-result').fadeIn(1000);
        $('.country').text('旅行先はロシアです');
        $('.country-bg').css('background-image','url(../img/rusia-bg.png)');
        $('.america,.morudebu,.igirisu,.burazil').hide();
        $('.rusia').show();
        break;
      
      case 3:
          $('.country-result').fadeIn(1000);
          $('.country').text('旅行先はモルディブです').css('font-size','25px');
          $('.detail h1').css('font-size','25px');
          $('.country-bg').css('background-image','url(../img/morudive-bg.png)');
          $('.america,.rusia,.igirisu,.burazil').hide();
          $('.morudebu').show();
          break;
      
      case 4:
          $('.country-result').fadeIn(1000);
          $('.country').text('旅行先はブラジルです').css('font-size','30px');
          $('.country-bg').css('background-image','url(../img/burazil-bg.png)');
          $('.america,.rusia,.morudebu,.igirisu').hide();
          $('.burazil').show();
          break;

      case 5:
          $('.country-result').fadeIn(1000);
          $('.country').text('旅行先はイギリスです').css('font-size','30px');
          $('.country-bg').css('background-image','url(../img/igiris-bg.png)');
          $('.america,.rusia,.morudebu,.burazil').hide();
          $('.igirisu').show();
          break;    
    }
  });

});


// Javascript
// let  =['アメリカ','イギリス','フランス','ドイツ','ロシア'];
//   console.log(array[0]);

