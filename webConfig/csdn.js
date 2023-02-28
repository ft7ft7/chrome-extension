const tagsCode = document.querySelectorAll('#article_content code'),
	pres = document.querySelectorAll('#article_content pre');
let codes = Array.from(tagsCode).concat(Array.from(pres));
if (codes.length > 0) for (let i = 0; i < codes.length; i++) {
	codes[i].style.userSelect = 'text';
}
