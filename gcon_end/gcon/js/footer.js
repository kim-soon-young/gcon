// 풋터 하단에 펼침목록
$(document).ready(function () {
  var linkListBtn = $(".link-list-btn");
  var linkSiteWrap = $(".link-site-wrap");
  linkListBtn.click(function (e) {
    e.preventDefault();
    //아래 영역으로 클릭된 정보를 전달하지 않는다.
    e.stopPropagation();
    linkSiteWrap.toggleClass("link-site-wrap-on");
  });
  $("body").click(function () {
    linkSiteWrap.removeClass("link-site-wrap-on");
  });
});
