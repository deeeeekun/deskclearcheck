var button = document.getElementsByClassName('leave index__buttonAttendance___33c2m')[0];

function showAlert(isOff) {
		if (isOff) {
				return;
		}

		alert('机上をきれいにし、キャビネを施錠しましたか？');
}

button.addEventListener('click', function() {
		chrome.storage.sync.get({
				isOff: false
		}, function(data) {
				showAlert(data.isOff)
		});
});
