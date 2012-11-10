function showMessage() {
	var el = document.createElement('div');
		el.id = '_dict_layer';
		if( typeof el.style == "undefined")
			return;
		el.style.position = 'absolute';
		//el.style.display = 'none';
		el.style.padding = '0px';
		el.style.margin = '0px';
		el.style.width = '320px';
		el.style.height = '40px';
		el.style.zIndex = 100;
		el.style.backgroundColor = 'yellow';
		el.style.filter = 'Alpha(Opacity=50)';
		el.style.border = '1px solid red';
		el.innerHTML = 'hi,这是一个来自bookmarklet小工具的消息';
		document.body.insertBefore(el, document.body.firstChild);
}
showMessage();