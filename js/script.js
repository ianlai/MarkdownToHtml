var converter;
var html;

function convert(){
	var text = document.getElementById('sourceTA').value;
    converter = new showdown.Converter(),
    html = converter.makeHtml(text);
}
function show() {
	convert();
	var target = document.getElementById('targetTA');
    target.innerHTML = html;     //show rendered html page
    //target.textContent = html; //show html syntax 
}
function download() {
	convert();
    //var content = document.getElementById('targetDiv');

    /*Method-1: This works, but the file name cannot be assigned */
    //window.open("data:application/txt," + encodeURIComponent(content.textContent), "_self");

	/*Method-2: This can let use assign the default file name*/
	var uri = 'data:text/csv;charset=utf-8,' + html;
    var downloadLink = document.createElement("a");
	downloadLink.href = uri;
	downloadLink.download = "md-to-html.html";
	document.body.appendChild(downloadLink);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}