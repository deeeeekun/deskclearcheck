function init() {
		var button = document.getElementsByClassName('leave index__buttonAttendance___33c2m')[0];
		if (!button) {
				return;
		}

		button.addEventListener('click', function() {
				chrome.storage.sync.get({
						isOff: false
				}, function(data) {
						showAlert(data.isOff)
				});
		});
}

function showAlert(isOff) {
		if (isOff) {
				return;
		}

		var overlayId = 'deskclearcheck-overlay',
				overlay = createOverlay(overlayId);
		document.body.appendChild(overlay);

		setTimeout(function() {
				fadeOut(overlayId, function() {
						overlay.remove();
				});
		}, 3000);
}

function createOverlay(overlayId) {
		var overlay = document.createElement('div');
		overlay.id = overlayId;
		overlay.setAttribute('style', 'position: absolute; left: 0px; top: 0px; background-color: rgba(255, 255, 255, 0.5); z-index: 2001; height: 100%; width: 100%; display: flex; align-items: center;'); 

		var modalDiv = document.createElement('div');
		modalDiv.setAttribute('style', 'display: inline-block; background-color: #ffffff; border: 1px solid #002288; width: 500px; z-index: 2002; margin: 0 auto; padding: 15px; text-align: center;');

		var modalText = document.createElement('p');
		modalText.setAttribute('style', 'font-weight: bold; font-size: 20px;');
		modalText.innerHTML = 'お疲れ様です。<br/>机上をきれいにし、キャビネを施錠しましたか？';
		
		modalDiv.appendChild(modalText);
		overlay.appendChild(modalDiv);

		return overlay;
}

function fadeOut(elementId, callback) {
		var element = document.getElementById(elementId),
				opacity = element.style.opacity || 1,
				timer = setInterval(function() {
						if (opacity < 0) {
								clearInterval(timer);
								callback();
						}
		
						opacity -= 0.1;
						element.style.opacity = opacity;
				}, 50);
}

setTimeout(init(), 1000);
