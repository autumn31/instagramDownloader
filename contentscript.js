console.log("Content JS...");
if ($('header')){
	$('header').append($('<div class="mylink"/>').append($('<img id="button" >').attr({'src':chrome.extension.getURL('tab.png')})));
	var imgs = $('img');
	console.log(imgs[imgs.length-1].getAttribute('src'));
	$("#button").wrap('<a target="_blank" href="'+imgs[imgs.length-1].getAttribute('src')+'"></a>');
}