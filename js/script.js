

$(function(){

// drawerjsを発火させる
$( '.drawer' ).drawer()

// smoothscroll
$('a[href^="#"]').click(function(){ // #から始まるURLがクリックされた時
let speed = 300;
let id = $(this).attr("href");
let target = $("#" == id ? "html" : id);
let position = $(target).offset().top;
$("html, body").animate(
  {
    scrollTop: position - $('#js-header').outerHeight()
  },
  speed
);
return false;
});

// wow.js
new WOW().init()

//google form
let $form = $('#js-form')
$form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() {   //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { //送信に失敗したときの処理          
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  });

  

  // formの入力確認
 let $submit = $( '#js-submit' )
 //js-formのinputタグ、またはjs-formのtextareaが入力されたら(on change)以下のfunctionを実行する
 $( '#js-form input, #js-form textarea' ).on( 'change', function(){     //全てに入力されたら、submitをactive
   if(
     $( '#js-form input[type="text"]' ).val() !== "" &&       //空ではない、かつ（&&)  //addClassをactiveにする
     $( '#js-form input[type="email"]').val() !== "" &&
     $( '#js-form input[name="entry.627858328"]' ).prop( 'checked' ) === true
   ){
     //全て入力された時
   //  $submit.prop( 'disabled', false )
     $submit.addClass( '-active' )
   } else {
     //入力されていない時
    // $submit.prop( 'disabled', true )
     $submit.removeClass( '-active' )
   }
  });
  


})