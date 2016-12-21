var isOff = false;

function toggleOnOff() {
		isOff = !isOff;
		
		// default icons
		var settings = {
				title: {
						title: 'リマインダー: ON'
				},
				icons: {
						path: {
								'19': 'icons/19.png',
								'38': 'icons/38.png'
						}
				}
		};

		if (isOff) {
				settings.title = {
						title: 'リマインダー: OFF'
				};
				settings.icons.path = {
						'19': 'icons/19-off.png',
						'38': 'icons/38-off.png'
				};
		}

		chrome.browserAction.setTitle(settings.title);
		chrome.browserAction.setIcon(settings.icons);
		chrome.storage.sync.set({
				isOff: isOff
		});
}

chrome.storage.sync.get({
		isOff: false
}, function(data) {
		isOff = data.isOff;
});

chrome.browserAction.onClicked.addListener(toggleOnOff);
