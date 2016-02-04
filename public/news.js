var readFile = function(){
	$.get('data',function(data){
		for(var i in data){
			var splittedData = data[i].split('::');
			$('#h').append("<li><h3><a href="+splittedData[1]+" target='_blank'>"+splittedData[0]+"</a></h3></li>");
		}
	})
}();
