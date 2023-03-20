const config = [{uri: 'cloud.tencent.com', src: 'tencent'},
	{uri: 'blog.csdn.net', src: 'csdn'},
	{uri: 'zhuanlan.zhihu.com', src: 'zhiHu'}];
const urlOrigin = window.location.origin;
let type = '';
console.log(urlOrigin)
for (let i = 0; i < config.length; i++) {
	if (new RegExp(config[i].uri).test(urlOrigin)) {
		import(`./webConfig/${config[i].src}.js`);
		break;
	}
}
if (/cn.bing.com/.test(urlOrigin)) {
	type = 0;
} else if (/baidu.com/.test(urlOrigin)) {
	type = 2;
}
init(type);

function init(type) {
	let result, list = [], c = 0;
	switch (type) {
		case 0:
			const adClass = ['ad_fls', 'ad_vsl'];
			result = document.getElementById('b_results');
			if (!result) return false;
			list = result.children;
			for (let i = 0; i < list.length; i++) {
				if (/ad/.test(list[i].className)) {
					// result.removeChild(list[i]);
					// i--;
					c++;
					list[i].style.display = 'none';
					continue;
				}
				const ad2 = list[i].children;
				for (let i2 = 0; i2 < ad2.length; i2++) {
					if (/ad/i.test(ad2[i2].className)) {
						c++;
						list[i].style.display = 'none';
						break;
					}
				}
				// const p = list[i].querySelector('.b_caption>p');
				// if (p?.className) {
				// 	// result.removeChild(list[i]);
				// 	// i--;
				// 	c++;
				// 	list[i].style.display = 'none';
				// 	continue;
				// }
				for (let i2 = 0; i2 < adClass.length; i2++) {
					if (list[i].getElementsByClassName(adClass[i2]).length > 0) {
						// result.removeChild(list[i]);
						// i--;
						c++;
						list[i].style.display = 'none';
						break;
					}
				}
			}
			console.log('ad:', c)
			break;
		case 2:
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

// chrome.runtime.sendMessage({greeting: "你好"}, function (response) {
// 	console.log(response);
// });
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
// 	// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
// 	if (request.cmd == 'test') alert(request.value);
// 	sendResponse('我收到了你的消息！'); // 回调回去
// });
