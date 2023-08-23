import ft from './ft.js';

const {extension} = chrome;
const btnArr = document.querySelectorAll('.btn');
btnArr[0].onclick = e => {
	console.log(chrome, extension)
}
