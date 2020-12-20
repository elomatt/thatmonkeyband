var publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/1TfiakxYziA91JJTFicUi5vYMEKMf1B55HNVFyu4dAAc/pubhtml";

function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true
					}
		         )
  }

function showInfo(data, tabletop) {
  data.forEach(function(data) {
    home_p_1.innerHTML = data.home_p_1;
    home_p_2.innerHTML = data.home_p_2;
    band_blurb.innerHTML = data.band_blurb;
 });
}

  window.addEventListener('DOMContentLoaded', init)
