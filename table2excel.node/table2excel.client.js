var table2json = function(selector) {
	var res = {};

	selector.find("tr").each(function(i) {
		console.log('yay');
		res[i] = new Array();
		$(this).find('td, th').each(function() {
			res[i].push($(this).text().trim());
		});
	});
	return res;
};
