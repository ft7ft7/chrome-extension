const config = [{uri: 'cloud.tencent.com', src: 'tencent'},
	{uri: 'blog.csdn.net', src: 'csdn'},
	{uri: 'zhuanlan.zhihu.com', src: 'zhiHu'}];
const {origin, hostname} = window.location;
const urlOrigin = origin;
let type = '';
console.log(urlOrigin, hostname)
for (let i = 0; i < config.length; i++) {
	if (new RegExp(config[i].uri).test(hostname)) {
		import(`./webConfig/${config[i].src}.js`);
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
