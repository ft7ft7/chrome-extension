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
