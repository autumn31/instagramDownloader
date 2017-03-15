console.log('background.js running...');

/**************************************************
* Chrome browserAction.onClicked Listener
**************************************************/
chrome.browserAction.onClicked.addListener(function(tab)
{
	console.log('InsertCSS browserAction click');
	chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
		console.log('css file has inserted.');
		var btn = document.createElement("BUTTON");        // Create a <button> element
		var t = document.createTextNode("CLICK ME");       // Create a text node
		btn.appendChild(t);                                // Append the text to <button>
		document.body.appendChild(btn); 
	});
});