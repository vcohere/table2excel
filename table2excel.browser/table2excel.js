var first = "<?xml version='1.0'?><?mso-application progid='Excel.Sheet'?><Workbook xmlns='urn:schemas-microsoft-com:office:spreadsheet' " +
"xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' " +
"xmlns:ss='urn:schemas-microsoft-com:office:spreadsheet' xmlns:html='http://www.w3.org/TR/REC-html40'>" +
"<DocumentProperties xmlns='urn:schemas-microsoft-com:office:office'><Author>Table2Excel</Author><Version>1.0</Version></DocumentProperties>" +
"<ExcelWorkbook xmlns='urn:schemas-microsoft-com:office:excel'></ExcelWorkbook><Styles>";
var butt = "</Table></Worksheet></Workbook>";
(function($) {

    $.fn.table2excel = function(options) {

        var config = $.extend({}, {
            cellWidth: 120,
            cellHeight: 30,
            headColor: '#FFFFFF',
            headBg: '#50504A',
            headBold: 1,
            headSize: 12,
            headAlign: 'Center',
            bodyColor: '#50504A',
            bodyBg: '#FFFFFF',
            bodyBold: 0,
            bodySize: 12,
            bodyAlign: 'Left'
        }, options);

        var head = first + "<Style ss:ID='body'>" +
            "<Font ss:Color='" + config.bodyColor + "' ss:Size='" + config.bodySize + "' ss:Bold='" + config.bodyBold + "' /><Interior ss:Color='" + config.bodyBg + "' ss:Pattern='Solid' />" +
            "<Alignment ss:Vertical='Center' ss:Horizontal='" + config.bodyAlign + "' /></Style>" +
            "<Style ss:ID='headLine'><Interior ss:Color='" + config.headBg + "' ss:Pattern='Solid' /><Alignment ss:Horizontal='" + config.headAlign + "' ss:Vertical='Center' />" +
            "<Font ss:Bold='" + config.headBold + "' ss:Color='" + config.headColor + "' ss:Size='" + config.headSize + "' /></Style></Styles><Worksheet ss:Name='Sheet1'>" +
            "<Table ss:DefaultColumnWidth='" + config.cellWidth + "' ss:DefaultRowHeight='" + config.cellHeight + "'>";


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
        }

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

        return createXML(table2json($(this)), butt, head);
    };

})(jQuery);
