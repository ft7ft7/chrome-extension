function request() {
	let rules = [{
		id: 1,
		priority: 1,
		action: {type: "block"},
		condition: {
			urlFilter: ".js",
			domains: ['ol.3dmgame.com', 'juejin.cn', 'tieba.baidu.com', 'www.sohu.com', 'new.qq.com', 'caifuhao.eastmoney.com', 'zhihu.com'],
			resourceTypes: ["script"]
			// resourceTypes: ["csp_report", "font", "image", "main_frame", "media", "object",
			// 	"other", "ping", "script", "stylesheet", "sub_frame",
			// 	"webbundle", "websocket", "webtransport", "xmlhttprequest"]
		}
	}];
	// console.log(chrome.declarativeNetRequest)
	// chrome.declarativeNetRequest.updateDynamicRules({
	// 	addRules: [{
	// 		id: 2,
	// 		priority: 1,
	// 		action: {type: "block"},
	// 		condition: {
	// 			urlFilter: "<all_urls>",
	// 			domains: ["juejin.cn"],
	// 			resourceTypes: ["script"]
	// 		}
	// 	}]
	// }, function () {
	// })
	chrome.declarativeNetRequest.getDynamicRules(res => {
		// console.log(res)
		let rulesId = res.map(e => e.id);
		chrome.declarativeNetRequest.updateDynamicRules({
				addRules: rules,
				removeRuleIds: rulesId,
			},
			function (callback) {
			}
		);
	});
}

request();
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	console.log('收到来自content-script的消息：');
// 	console.log(request, sender, sendResponse);
// 	sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request));
// });
//
// function getCurrentTabId(callback) {
// 	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
// 		if (callback) callback(tabs.length ? tabs[0].id : null);
// 	});
// }
//
// function sendMessageToContentScript(message, callback) {
// 	getCurrentTabId((tabId) => {
// 		chrome.tabs.sendMessage(tabId, message, function (response) {
// 			if (callback) callback(response);
// 		});
// 	});
// }
//
// sendMessageToContentScript({a: 11}, e => {
// 	console.log(e)
// })
