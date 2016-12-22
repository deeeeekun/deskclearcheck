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

		alert('机上をきれいにし、キャビネを施錠しましたか？');
}

setTimeout(init(), 1000);
