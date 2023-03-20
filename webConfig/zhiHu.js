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
