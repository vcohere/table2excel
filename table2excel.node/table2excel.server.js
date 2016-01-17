var createXML = function(tab, butt, head) {
	var buffer = "";

	for (var i in tab) {
		buffer += "<Row>";
		for (var j in tab[i]) {
			if (i == 0)
				buffer += "<Cell ss:StyleID='headLine'><Data ss:Type='String'>" + tab[i][j] + "</Data></Cell>";
			else
				buffer += "<Cell ss:StyleID='body'><Data ss:Type='String'>" + tab[i][j] + "</Data></Cell>"
		}
		buffer += "</Row>";
	}
	return head + buffer + butt;
};
