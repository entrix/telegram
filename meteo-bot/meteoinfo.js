var page = require('webpage').create();
page.open('http://www.meteoinfo.ru/forecasts5000/russia/smolensk-area', function() {
    page.evaluate(function() {
	var tab = document.querySelectorAll('.tab')[1];
	tab.click();	
    });
    setTimeout(function() {
	page.render('meteoinfo.png');
	phantom.exit();
    }, 5000);
});
