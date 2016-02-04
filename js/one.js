var page = require('webpage').create();
var url = 'http://news.google.co.in';
var fs = require('fs');
console.log(fs)


page.open(url, function(status) {
    var headings = page.evaluate(function() {
        return [].map.call(document.getElementsByClassName('esc-lead-article-title'), function(link) {
        	var data = link.children[0].children[0].innerHTML;
            return data;
        });
    });
    var links = page.evaluate(function(){
    	return [].map.call(document.getElementsByClassName('esc-lead-article-title'), function(link) {
        	var data = link.children[0].getAttribute('href');
            return data;
    	})
    });
    for(var i=0;i<headings.length;i++){
    	headings[i]+="::"+links[i]+"\n"
    };
    fs.write('./data/news.json',JSON.stringify(headings,undefined,5),'w');
	phantom.exit();
});
