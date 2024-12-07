function insertHTML(text) {
	var sel, range;
	if (
		window.getSelection &&
		(sel = window.getSelection()).rangeCount &&
		!sel.isCollapsed
	) {
		range = sel.getRangeAt(0);
		range.deleteContents();
		range.collapse(true);
		var span = document.createElement("span");
		span.classList.add(`numberblind`);
		span.classList.add(`numberblind-${text}`);
		span.appendChild(document.createTextNode(text));
		range.insertNode(span);

		// Move the caret immediately after the inserted span
		//sel.deleteFromDocument();
		range.setStartAfter(span);
		range.collapse(true);
		sel.removeAllRanges();
		sel.addRange(range);
	}
}
function doColor(num) {
	if (window.find && window.getSelection) {
		document.designMode = "on";
		var sel = window.getSelection();
		sel.collapse(document.body, 0);

		while (window.find(num)) {
			insertHTML(num);
		}
		document.designMode = "off";
	}
}

for (var i = 0; i < 10; i++) {
	doColor(i);
}
