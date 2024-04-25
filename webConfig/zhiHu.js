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
	// console.log(img.src)
	const src = img.getAttribute('data-actualsrc') || img.getAttribute('data-original');
	if (/data:image/.test(img.src)) {
		img.style.display = 'none';
		continue;
	}
	if (src) img.src = src;
}
