const init = {
	tencent: () => {
		let target = document.getElementsByClassName('com-markdown-collpase-main');
		if (target[0]) {
			target[0].style.maxHeight = 'unset';
		}
	},
	csdn: () => {
		const tagsCode = document.querySelectorAll('#article_content code'),
			pres = Array.from(document.querySelectorAll('#article_content pre')),
			hideBox = document.querySelector('#mainBox main .hide-article-box');
		if (hideBox) hideBox.style.display = 'none';
		let codes = Array.from(tagsCode).concat(pres);
		if (codes.length > 0) for (let i = 0; i < codes.length; i++) {
			codes[i].style.userSelect = 'text';
		}

		pres.forEach(v => {
			v.style.maxHeight = 'unset';
		});
	},
	zhiHu: () => {
		const arrTagA = document.querySelectorAll('a');
		for (let i = 0; i < arrTagA.length; i++) {
			const v = arrTagA[i];
			if (!/link.zhihu.com/.test(v.href)) continue;
			let uri = {};
			v.href.replaceAll(/([^?&]+)=([^?&]+)/g, (s, v, k) => {
				uri = k;
				return s;
			});
			v.href = decodeURIComponent(uri);
		}
		const imgListZhiHu = document.querySelectorAll('img');
		for (let img of imgListZhiHu) {
			const src = img.getAttribute('data-actualsrc') || img.getAttribute('data-original');
			if (/data:image/.test(img.src)) {
				img.style.display = 'none';
				continue;
			}
			if (src) img.src = src;
		}
	},
	qqNews: () => {
		const content = document.body.getElementsByClassName('qq_conent')?.[0];
		if (content) content.style.display = 'block';
	}
};
const config = [{uri: 'cloud.tencent.com', src: 'tencent'},
	{uri: 'blog.csdn.net', src: 'csdn'},
	{uri: 'zhuanlan.zhihu.com', src: 'zhiHu'},
	{uri: 'new.qq.com', src: 'qqNews'}];
const {origin, hostname} = window.location;
const urlOrigin = origin;
let type = '';
console.log(urlOrigin, hostname)
for (let i = 0; i < config.length; i++) {
	if (new RegExp(config[i].uri).test(hostname)) {
		init[config[i].src]();
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
