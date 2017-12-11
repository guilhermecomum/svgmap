$( document ).ready(function() {
  var loading = true;
  var publicSpreadsheetUrl = '1HpZF_eNbrzYRGePK18z4ytoUQX9w-eIfP7hSRwtV8HY';

  function init() {
    Tabletop.init({
      key: publicSpreadsheetUrl,
      callback: showInfo,
      simpleSheet: true
    })
  }

  function showInfo(data, tabletop) {
    $(".loading").hide();

    $(".state").click(function() {
      $('.state.active').removeClass('active');

      $(this).toggleClass("active");
      var info = data.filter( (e) => e.id == this.id )[0]
      $(".title").text(info.state)
      $(".org").text(info.org)
      $(".content").text(info.Content)
      $(".strategy").text(info.strategy)

    });
  }

  init();
});
