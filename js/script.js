$(document).ready(function () {
  // gnb 관련코드
  var gnb = $(".mainmenu");
  var dim = $(".header-dim");
  gnb.mouseenter(function(){
    dim.stop().fadeIn(200)
  })
  gnb.mouseleave(function(){
    dim.stop().fadeOut(200)
  })
});
// 자바스크립트 연결
// window.onload = function () {};
