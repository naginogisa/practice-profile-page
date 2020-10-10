$(function(){
  $('#slick01').slick();({
    autoplay:true,
    autoplaySpeed: 3000
  });
  // 色を赤に
  $('#q01').css('color','red');

  // 色を赤に、背景を黄色に
  $('#q02').css('color','blue');
  $('#q02').css('background-color','yellow');

  // テキストの挿入
  $('#q03').text('エレン');

  // テキストの上書き
  $('#q04').text('駆逐してやる');
 
 
  $('#q05').html('<a href="https://dotinstall.com/">どきどきweb</a>');
  $('#q06').addClass("aaa");
  $('#q07').remove("li");
  $('#q13').prepend('<li>飛べない</li>');
  $('#q13').after('<li>ただの豚</li>');
  $('<p>あああ</p>').prependTo('#q15');
  $('<p>ううう</p>').appendTo('#q15');
  $('<p>ききき</p>').insertBefore('#q17');
  $('<p>くくく</p>').insertAfter('#q17');
  $('.q19').wrap('<div class="ccc"></div>');
  $('.q20').unwrap('<div class="ccc"></div>');
  $('.q21').wrapAll('<div class="ddd"></div>');
  $('.q22').wrapInner('<div class="ddd"></div>');
  $(".q23").replaceWith('<p>xxx</p>');
  $(".q24").attr("class","q24_a");
  $(".q25 a").removeAttr('href');
  $(".q26 a").attr("target","_blank");
  $(".q27_a").toggleClass("q27_b");
  $("form input").val("入力してください");
  $('#q29').offset({top:5450,left:800});
  
  $('.button').click(function(){
    $("#q30").empty();
  });

  var q02 =$('#q02').css('color',);
    $('#q09').text(q02);

    $('#q10').click(function(){
     $ (q10).toggleClass('bbb');

    });
    $('#q10').prepend("超平和バスターズ");
    $('#q10').append("ゆきあつ、つるこ、あなる、ぽっぽ");


  $('.button').click(function(){
    alert("表示しますか");
    
    
  });

 });