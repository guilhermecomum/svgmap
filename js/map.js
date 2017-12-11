var publicSpreadsheetUrl = '1HpZF_eNbrzYRGePK18z4ytoUQX9w-eIfP7hSRwtV8HY';

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  })
}

function showInfo(data, tabletop) {
  console.log("Ready;")
  $(".state").click(function() {
    $(this).css({ fill: "#ff0000" });
    console.log("Dadados: ", data.filter( (e) => e.id == this.id )[0])
    
  });
}

window.addEventListener('DOMContentLoaded', init)

