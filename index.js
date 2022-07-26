const urlOrigin = window.location.origin;
console.log(urlOrigin)
init(urlOrigin);

function init(url) {
	let result, list = [], c = 0;
	switch (urlOrigin) {
		case 'https://cn.bing.com':
			const adClass = ['ad_fls', 'ad_vsl'];
			result = document.getElementById('b_results');
			if (!result) return false;
			list = result.children;
			for (let i = 0; i < list.length; i++) {
				if (/ad/.test(list[i].className)) {
					result.removeChild(list[i]);
					i--;
					c++;
					// list[i].style.display = 'none';
					continue;
				}
				const p = list[i].querySelector('.b_caption>p');
				if (p?.className) {
					result.removeChild(list[i]);
					i--;
					c++;
					// list[i].style.display = 'none';
					continue;
				}
				for (let i2 = 0; i2 < adClass.length; i2++) {
					if (list[i].getElementsByClassName(adClass[i2]).length > 0) {
						result.removeChild(list[i]);
						i--;
						c++;
						break;
					}
				}
			}
			console.log('ad:', c)
			break;
		case 'https://blog.csdn.net':
			const tagsCode = document.querySelectorAll('#article_content code');
			if (tagsCode.length === 0) return false;
			for (let i = 0; i < tagsCode.length; i++) {
				tagsCode[i].style.userSelect = 'text';
			}
			break;
		case 'https://www.baidu.com':
			result = document.getElementById('content_left');
			if (!result) return false;
			list = result.children;
			for (let i = 0; i < list.length; i++) {
				let v = list[i].firstElementChild;
				if (!(v && /c-container/.test(v.className))) {
					result.removeChild(list[i]);
					i--;
					c++;
				}
			}
			console.log('ad:', c);
			break;
	}
}

chrome.runtime.sendMessage({greeting: "你好"}, function (response) {
	console.log(response);
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
	if (request.cmd == 'test') alert(request.value);
	sendResponse('我收到了你的消息！'); // 回调回去
});