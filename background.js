function request() {
	chrome.webRequest.onBeforeRequest.addListener(info => {
		console.log(info)
		return {cancel: true};
	}, {urls: ["<all_urls>"]}, ["blocking"]);
}

request();
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log('收到来自content-script的消息：');
	console.log(request, sender, sendResponse);
	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
});

function getCurrentTabId(callback) {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		if (callback) callback(tabs.length ? tabs[0].id : null);
	});
}

function sendMessageToContentScript(message, callback) {
	getCurrentTabId((tabId) => {
		chrome.tabs.sendMessage(tabId, message, function (response) {
			if (callback) callback(response);
		});
	});
}

sendMessageToContentScript({a: 11}, e => {
	console.log(e)
})