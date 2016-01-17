# table2excel

This JS code allow you to convert a HTML table to an Excel file.

##table2excel.browser


#### Dependencies
- jQuery

#### Usage

```html
<script src='table2excel.browser/table2excel.js'></script>
```

```javascript
$('table').table2excel();
```

The function return a XML string that can be saved directly in a .xls file. Note that there is no way to make the client download the file using this way, prefer the Node version.

#### Options

These are the defaults values for all options.

```javascript
$('table').table2excel({
	cellWidth: 120, // Width of a Cell in Points
	cellHeight: 30, // Height of a Cell in Points
	headColor: '#FFFFFFF', // Font color of <th> cells
	headBg: '#50504A', // Background color of <th> cells
	headBold: 1, // 1 to make <th> cells Bold
	headSize: 12, // Font size of <th> cells
	headAlign: 'Center', // Possible values: Left, Center, Right, Justify
	bodyColor: '#50504A', // Same but for <td>
	bodyBg: '#FFFFFF', // and again..
	bodyBold: 0,
	bodySize: 12,
	bodyAlign: 'Left'
});
```


## table2excel.node

#### Usage

Move the table2excel.node/table2excel.client.js file to your public/js folder and include it to your HTML file.

```html
<script src='table2excel.client.js'></script>
```

```javascript
var t2e = require('table2excel.server.js');
```
