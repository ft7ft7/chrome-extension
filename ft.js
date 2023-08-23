/******/ // The require scope
/******/var __webpack_require__={
/******/ // define getter functions for harmony exports
/******/d:(exports,definition)=>{
/******/for(var key in definition)
/******/__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&
/******/Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})
/******/;
/******/},
/******/o:(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop)
/******/},__webpack_exports__={};
/******/
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/
// EXPORTS
__webpack_require__.d(__webpack_exports__,{Z:()=>/* binding */js_ft});// CONCATENATED MODULE: ./src/js/ft.js
/**
 * @description 个人js库
 * @version 2.0.1
 * @author ft <ft7ft7@outlook.com>
 * @qq 1454405519
 * */
let ft={data:{week:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],
//https://github.com/whatwg/encoding/blob/main/encodings.json
encoding:[{UTF:["UTF-8","UTF-16BE","UTF-16LE"]},{chinese:["GBK","gb18030"]},{ISO:["ISO-8859-2","ISO-8859-3","ISO-8859-4","ISO-8859-5","ISO-8859-6","ISO-8859-7","ISO-8859-8","ISO-8859-8-I","ISO-8859-10","ISO-8859-13","ISO-8859-14","ISO-8859-15","ISO-8859-16"]},{japanese:["EUC-JP","ISO-2022-JP","Shift_JIS"]},{korean:["EUC-KR"]},{windows:["windows-1250","windows-1251","windows-1252","windows-1253","windows-1254","windows-1255","windows-1256","windows-1257","windows-1258"]},"IBM866","KOI8-R","KOI8-U","macintosh","x-mac-cyrillic"],MIME:[{"audio/aac":".aac"},{"application/octet-stream":".bin"},{"image/bmp":".bmp"},{"application/x-bzip":".bz"},{"application/x-bzip2":".bz2"},{"text/css":".css"},{"text/csv":".csv"},{"application/msword":".doc"},{"application/vnd.openxmlformats-officedocument.wordprocessingml.document":".docx"},{"image/gif":".gif"},{"application/java-archive":".jar"},{"image/jpeg":".jpg"},{"application/json":".json"},{"audio/mpeg":".mp3"},{"image/png":".png"},{"application/pdf":".pdf"},{"application/vnd.ms-powerpoint":".ppt"},{"application/vnd.openxmlformats-officedocument.presentationml.presentation":".pptx"},{"application/x-rar-compressed":".rar"},{"text/plain":".txt"},{"audio/wav":".wav"},{"application/vnd.ms-excel":".xls"},{"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":".xlsx"},{"application/zip":".zip"},{"application/x-7z-compressed":".7z"}]},is:{array:obj=>Array.isArray(obj),object:obj=>obj.constructor===Object,number:obj=>obj.constructor===Number,string:obj=>obj.constructor===String,boolean:obj=>obj.constructor===Boolean,regExp:obj=>obj.constructor===RegExp},format:{time:t=>t.toString().padStart(2,"0")+":00",money:money=>Number(money).toFixed(2).padStart(2,"0")},regExp:{email:email=>/^\w{3,}@[A-Za-z0-9]+(\.[A-z]{2,5}){1,2}$/.test(email),phone:phone=>/^1[3-9][0-9]{9}$/.test(phone),telephone:phone=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(phone),chinese:str=>/[\u4e00-\u9fa5]/g.test(str)
/**
		 * @function 18位身份证验证
		 * @param {String} str
		 * */,idCard:str=>{if(18!==str.length)return!1;const arrExp=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],arrValid=[1,0,10,9,8,7,6,5,4,3,2];if(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(str)){let sum=0,arrStr=str.split("");"X"===arrStr[17].toUpperCase()&&(arrStr[17]=10);for(let i=0;i<arrStr.length-1;i++)sum+=arrStr[i]*arrExp[i];return arrValid[sum%11]===Number(arrStr[17])}return!1},http:str=>/^(http|https):\/\//i.test(str),px:style=>/width|height|left|right|top|bottom|fontSize/gi.test(style),rgb:style=>/rgb/i.test(style),hex:hex=>/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
/**
		 * @method 金额(元)验证 去除多余小数，过滤非数字
		 * @param {Number} money
		 * */,money:money=>{const arr=money.toString().split(".");return Number.isNaN(Number(money))?"":arr.length>1&&arr[1].length>2?(arr[1]=arr[1].slice(0,2),arr.join(".")):money}},array:{
/**
		 * @method 一维数组转二维数组
		 * @param {Array} array
		 * @param {Number|String} by 每组数量||分组关键字
		 * @return {Array} 二维数组
		 * */
group:(array,by)=>{const res=[];if(ft.is.number(by))for(let i=0;i<array.length;i+=by)res.push(array.slice(i,i+by));else if(ft.is.string(by)){let c=0,keys=[];array.length>0&&(res.push([]),keys[0]=array[0][by]);for(let i=0;i<array.length;i++){if(keys[c]!==array[i][by]){const i2=keys.indexOf(array[i][by]);i2>=0?c=i2:(res.push([]),keys.push(array[i][by]),c=keys.length-1)}res[c].push(array[i])}}return res},
/**
		 * @param {Array}array:数组;
		 * @param {Boolean}string:是否是字符串;
		 * @param option:descend,1:升序;ascend,0:降序;
		 * */
order:({array,string,option})=>{string??=!1,option??=1,string?(array.sort(),0===option&&array.reverse()):1===option?array.sort(((a,b)=>a-b)):0===option&&array.sort(((a,b)=>b-a))},clone:array=>array.slice(0),norepeat:array=>[...new Set(array)],sum:array=>ft.cal.addSub(...array)
/**
		 * @method 数组的最大、最小值和索引
		 * @param {Array} array
		 * @return {Object} {min,minI,max,maxI}
		 * */,minMax:array=>{let result={min:array[0],minI:0,max:array[0],maxI:0};if(array.length<2)return result;for(let i=1;i<array.length;i++)result.min>array[i]&&(result.min=array[i],result.minI=i),result.max<array[i]&&(result.max=array[i],result.maxI=i);return result},
/**
		 * @method 数组排序索引
		 * @param {Array} array
		 * @param {Number|undefined} limit 个数限制
		 * @param {Number|undefined} type 0升序；1降序
		 * @return {Array} 数组的排序索引
		 * */
sortMinMax:({array=[],limit,type=0})=>{let result=[],arr=[].concat(array);if(limit&&=Math.min(arr.length,limit),limit??=arr.length,0===type)for(let i=0;i<limit;i++){let resI=min(arr);arr.splice(resI,1,void 0),result.push(resI)}else for(let i=0;i<limit;i++){let resI=max(arr);arr.splice(resI,1,void 0),result.push(resI)}function min(arr){let vI=getMinI(arr),val=arr[vI];for(let i=0;i<arr.length;i++)void 0!==arr[i]&&val>arr[i]&&(val=arr[i],vI=i);return vI}function max(arr){let vI=getMinI(arr),val=arr[vI];for(let i=0;i<arr.length;i++)void 0!==arr[i]&&val<arr[i]&&(val=arr[i],vI=i);return vI}function getMinI(arr){for(let i=0;i<arr.length;i++)if(void 0!==arr[i])return i}return result},average:(array,n,type)=>ft.cal.fix(ft.array.sum(array)/array.length,n,type)
/**
		 * @method 计算 标准差,默认false方差
		 * @param {Boolean}standardDeviation :标准差,默认false方差;
		 * @return {Number}
		 * */,variance:({array,standardDeviation:opt})=>{opt??=!1;let avg=(void 0).average(array,6),res=0;return ft.for(array,(v=>{res+=Math.pow(v-avg,2)})),opt?Math.sqrt(res/array.length):res/array.length}},object:{
/**
		 * @method 获取对象大小
		 * @param {Object|Array|String} obj
		 * @return {Number}
		 * */
size:obj=>ft.is.object(obj)?Object.keys(obj).length:ft.is.array(obj)||ft.is.string(obj)?obj.length:void 0},cal:{
/**
		 * @function 加、减法运算
		 * @param opt (number1,number2...,'-|+')
		 */
addSub(...opt){let type="+",n=0,m=10;Number.isNaN(Number(opt.at(-1)))&&(type=opt.pop()),ft.for(opt,(v=>{let r=this.getDec(v);n=r>n?r:n}));for(let i=0;i<n;i++)m*=10;return"-"!==type?opt.map((v=>v*m)).reduce(((s,a)=>s+a))/m:opt.map((v=>v*m)).reduce(((s,a)=>s-a))/m},
/**
		 * @function 乘法、除法运算
		 * @param {Array} opt.number
		 * @param {'*'|'/'|undefined} opt.type *或/
		 * @param {Number|undefined} opt.fix default:7
		 * @param {Number|'round'|'floor'|'ceil'|undefined} opt.fixType:类型 0||round,1||floor,2||ceil
		 */
mulDiv(opt={}){if(!ft.is.array(opt.number))throw new Error("number不是数组");opt.fix??=7;let res,n=0,m=1,d=1;ft.for(opt.number,(v=>{let r=this.getDec(v);n=r>n?r:n}));for(let i=0;i<n;i++)m*=10;return d=Math.pow(10,n*opt.number.length),//'*'
res="/"!==opt.type?opt.number.map((v=>v*m)).reduce(((s,a)=>s*a))/d:opt.number.map((v=>v*m)).reduce(((s,a)=>s/a))/d,this.fix(res,opt.fix,opt.fixType)},
/**
		 * @method 保留小数位数 default 2 四舍五入
		 * @param {Number}number
		 * @param {Number}n:保留位数
		 * @param {Number||String}type:类型 0||round,1||floor,2||ceil
		 */
fix(number,n=2,type=0){let m=Math.pow(10,n);return 1===type||"floor"===type?Math.floor(number*m)/m:2===type||"ceil"===type?Math.ceil(number*m)/m:Math.round(number*m)/m},
/**
		 * @param n 获取小数位数
		 */
getDec(n){n=n.toString();let c=0;try{c=n.toString().split(".")[1].length}catch(e){c=0}return c}},random:(minNumber=0,maxNumber=1)=>{const num=Math.random()*(maxNumber-minNumber)+minNumber;return Math.round(num)},color:{
/**
		 * @param {String} hex #000000;
		 * @return {r,g,b};
		 * */
toRgb:hex=>{if(4===hex.length){let arr=hex.split("");arr.splice(1,0,arr[1]),arr.splice(3,0,arr[3]),arr.splice(5,0,arr[5]),hex=arr.join("")}const arr=ft.regExp.hex(hex);return{r:Number.parseInt(arr[1],16),g:Number.parseInt(arr[2],16),b:Number.parseInt(arr[3],16)}},
/**
		 * @param rgb ({r,g,b} || rgb || hex)
		 * @return {Number}灰阶
		 * */
grayLevel:rgb=>{if(!ft.is.object(rgb))if(ft.regExp.rgb(rgb)){//rgb
let arr=rgb.replace(/[rgb()]/,"").split(",");rgb={r:arr[0],g:arr[1],b:arr[2]}}else//hex
rgb=ft.color.toRgb(rgb);return.299*rgb.r+.587*rgb.g+.114*rgb.b}},colors:(A,callback)=>{let color=`rgba(${ft.random(0,255)},${ft.random(0,255)},${ft.random(0,255)},${A})`;return callback?.(color),color},
/**
	 * @param rgb [r,g,b];
	 * @param limit 取值范围[min,max];
	 * @param fix
	 * */
colorValue:({rgb,limit,fix})=>{let lim=limit[1]-limit[0];if(fix??=7,ft.is.array(limit)){let arrColor=ft.array.clone(rgb);return arrColor.sort(((a,b)=>b-a)),rgb[2]===arrColor[0]?0===ft.cal.addSub(...rgb)?"":(lim*rgb[1]/1024+limit[0]).toFixed(fix):rgb[1]===arrColor[0]&&rgb[2]===arrColor[1]?(lim*(512-rgb[2])/1024+limit[0]).toFixed(fix):rgb[1]===arrColor[0]&&rgb[0]===arrColor[1]?(lim*(rgb[0]+512)/1024+limit[0]).toFixed(fix):(lim*(1024-rgb[1])/1024+limit[0]).toFixed(fix)}},key:({key,code,event,callback})=>{void 0!==key?event.key.toUpperCase()===key.toUpperCase()&&callback():void 0!==code&&event.keyCode===code&&callback()},
/**
	 * @method for循环
	 * @param {Object|String|Array} arrObj
	 * @param {Function} callback(v,i,array) 回调方法 return true 时终止循环并返回值
	 * @return {any} callback return true 时终止循环并返回值
	 * */
for:(arrObj,callback)=>{if(ft.is.object(arrObj))
// arrObj = Object.entries(arrObj);
for(let key in arrObj){const mark=callback(arrObj[key],key,arrObj);if(mark&&ft.is.boolean(mark))return arrObj[key]}else for(let i=0,l=arrObj.length;i<l;i++){const mark=callback(arrObj[i],i,arrObj);if(mark&&ft.is.boolean(mark))return arrObj[i]}},date:{
/**
		 * @param {Date[]} [date=new Date()] 日期格式的数组;
		 * @param {Number} days 日期的后n天;
		 * @returns {Object} {year,month,day,hour,min,sec,week,timeStamp}
		 * */
get:(date,days)=>{let time,res={};return time=date?new Date(...date):new Date,void 0!==days&&time.setTime(time.getTime()+864e5*days),res.year=time.getFullYear(),res.month=time.getMonth()+1,res.day=time.getDate(),res.hour=time.getHours(),res.min=time.getMinutes(),res.sec=time.getSeconds(),res.week=time.getDay(),res.timeStamp=time.valueOf(),time=null,res},
/**
		 * @method 日期格式化
		 * @param {Object}opt
		 * @param {[Date]}opt.date 日期格式的数组;
		 * @param {Number}opt.days 日期的后n天;
		 * @param {Number}opt.hour:12 or 24(default) 小时制;
		 * @param {String}opt.connector default '/' 连接符
		 * @param {Boolean}opt.pad0 补0;
		 * @return {String}
		 * */
format(opt={}){opt.connector??="/";let res,date=this.get(opt.date,opt.days);return 12===opt.hour&&(date.hour<6?date.hour="凌晨 "+date.hour:date.hour<12?date.hour="上午 "+date.hour:12===date.hour?date.hour="中午 "+date.hour:date.hour<19?date.hour="下午 "+(date.hour-12):date.hour>=19&&(date.hour="晚上 "+(date.hour-12))),res=opt.pad0?`${date.year}${opt.connector}${this.pad0(date.month)}${opt.connector}${this.pad0(date.day)} ${this.pad0(date.hour)}:${this.pad0(date.min)}:${this.pad0(date.sec)}`:`${date.year}${opt.connector}${date.month}${opt.connector}${date.day} ${date.hour}:${this.pad0(date.min)}:${this.pad0(date.sec)}`,opt={},date=null,res},pad0:num=>num.toString().padStart(2,"0"),UTC(){let date=new Date,year=date.getUTCFullYear(),month=date.getUTCMonth()+1,day=date.getUTCDate(),hour=date.getUTCHours(),min=date.getUTCMinutes(),sec=date.getUTCSeconds(),ms=date.getUTCMilliseconds();return date=null,[year,month,day,hour,min,sec,ms]},
/**
		 * @method 本地时间(指定经度)
		 * @param {Number}longitude 经度默认东经120
		 * */
localTime(longitude=120){let{timeStamp}=this.get(this.UTC());return timeStamp+=longitude/15*36e5,this.get([timeStamp])},
/**
		 * @method 日历
		 * @param {Number}opt.year 年
		 * @param {Number}opt.month 月
		 * @param {Number}opt.y +-年
		 * @param {Number}opt.m +-月
		 * */
calendar(opt={}){let date=new Date,data=[];opt.m??=0,opt.y??=0,opt.year??=date.getFullYear(),opt.month??=date.getMonth()+1,opt.year=Number(opt.year)+opt.y,opt.month=Number(opt.month)+opt.m;let dateMs=new Date(opt.year,opt.month,0),days=dateMs.getDate(),dateRes=new Date(opt.year,opt.month-1,1),week=dateRes.getDay(),month=dateRes.getMonth()+1,year=dateRes.getFullYear();for(let i=0;i<days;i++)data.push({week:(week+i)%7,date:i+1});return date=null,dateRes=null,dateMs=null,{data,year,month}}},
/**
	 * @function 对象转key=value格式
	 * @param {Object} obj 待转换对象
	 * @param {Array} delimiter=['&','=']=>>a=1&b=2
	 * @returns {String} key=value&...
	 */
toUrlParam(obj,delimiter=["&","="]){let arr=[];for(const key in obj)void 0!==obj[key]&&arr.push(encodeURIComponent(key)+delimiter[1]+encodeURIComponent(obj[key]));return arr.join(delimiter[0])},
/**
	 * @param {String|undefined} baseUrl
	 * @param {String} url
	 * @param {String} method
	 * @param {Number} timeout 0为不限制
	 * @param {any} params
	 * @param {Object} data
	 * @param {'json','text','blob','arrayBuffer','formData'|any} response 返回数据 default=json
	 * @param {Object} init fetch.init
	 * */
fetch({baseUrl="",url="",method="GET",params,data={},timeout,response="json"},init={}){ft.regExp.http(url)||(url=baseUrl+url),params&&(ft.is.object(params)?this.object.size(params)>0&&(url=`${url}?${this.toUrlParam(params)}`):url=`${url}${params}`);let timer,controller=new AbortController;return method=method.toUpperCase(),init.signal=controller.signal,init.method=method,"GET"!==method&&"HEAD"!==method&&(ft.is.object(data)&&ft.object.size(data)>0?init.body=JSON.stringify(data):init.body=data),timeout&&(timer=setInterval((function(){controller.abort(),clearInterval(timer)}),timeout)),window.fetch(url,init).then((res=>response?res[response]?.():res))},
/**
	 * @param {String} baseUrl 请求总地址
	 * @param {String} url
	 * @param {String} method:get or post;
	 * @param {Number} timeout:time等待的时间;
	 * @param {Object} params
	 * @param {Object} data
	 * @param {Object} header default {"Content-type": "application/json;charset=utf-8"}
	 * @param {''|'arraybuffer'|'blob'|'document'|'json'|'text'} responseType
	 * @param {Boolean} withCredentials:false是否跨域传递Cookie
	 * */
request({baseUrl,url,method="GET",timeout,params={},data={},header={"Content-type":"application/json;charset=utf-8"},responseType="",withCredentials=!1}){let xmlhttp,timer;return ft.regExp.http(url)||(url=baseUrl+url),xmlhttp=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),method=method.toUpperCase(),timeout&&(xmlhttp.timeout=timeout),ft.object.size(params)>0&&(url=url+"?"+this.toUrlParam(params)),xmlhttp.open(method,url,!0),ft.for(header,((v,i)=>{xmlhttp.setRequestHeader(i,v)})),xmlhttp.withCredentials=withCredentials,xmlhttp.responseType=responseType,new Promise(((resolve,reject)=>{"POST"===method||"PUT"===method?xmlhttp.send(JSON.stringify(data)):xmlhttp.send(),xmlhttp.onreadystatechange=function(){if(4===xmlhttp.readyState)if(xmlhttp.status>=200&&xmlhttp.status<300||304===xmlhttp.status){let response;switch(clearInterval(timer),xmlhttp.responseType){case"":case"text":case"json":response=JSON.parse(xmlhttp.response);break;default:response=xmlhttp.response}resolve(response)}else reject(xmlhttp.status)},timeout&&(timer=setInterval((function(){xmlhttp.abort(),//关掉异步对象请求
reject({timeout:!0}),clearInterval(timer),console.log("请求超时！")}),timeout))}))},
/**
	 * @function 数组组合
	 * @param {Array}arr:[[],[]]
	 * */
permutation(arr){let arr0=arr[0];for(let i=1;i<arr.length;i++){let res=[];if(ft.for(arr0,(v1=>{ft.for(arr[i],(v2=>{ft.is.array(v1)?res.push([...v1,v2]):res.push([v1,v2])}))})),arr0=res,i===arr.length-1)return res}},
/**
	 * @function url解析
	 * @param {String} url 地址
	 * @return {Object}
	 * */
urlParse(url){let result=new URL(url);return result.port||("http:"===result.protocol?result.port="80":result.port="443"),result.getParams=delimiter=>this.getParams(result.search,delimiter),result},
/**
	 * @function url参数转Object
	 * @param {String} str
	 * @param {String[]} delimiter 分割符['&',',']
	 * @returns {Object}
	 */
getParams(str="",delimiter=["&","="]){str.search(delimiter[1])<0&&(str=decodeURIComponent(str));let res={},reg=new RegExp(`([^?${delimiter[0]}]+)${delimiter[1]}([^?${delimiter[0]}]+)`,"g");return str.replaceAll(reg,((s,v,k)=>(res[v]=k,s))),res},
/**
	 * @method 数据加密
	 * @param {String|Number} data
	 * */
encrypt:data=>{let str="0",res="",i=0;for(ft.is.number(data)&&(data=data.toString(),str="1"),ft.is.string(data)&&ft.for(data,(v=>{str+=v.charCodeAt(0).toString(7).length+v.charCodeAt(0).toString(7)})),str=str.replace(/0/g,"7");;){let code=parseInt(str.slice(i,i+2));if(Number.isNaN(code))break;code<43?(//43-999
code=parseInt(str.slice(i,i+3)),i+=3):i+=2,res+=String.fromCharCode(code)}return res},
/**
	 * @method 数据解密
	 * @param {String} data
	 * */
decrypt:data=>{let code="",res="",count=0,number=!1;for(ft.for(data,(v=>{code+=v.charCodeAt(0)})),code=code.replace("0",""),code.startsWith("1")&&(number=!0),code=code.slice(1),code=code.replace(/[789]/g,"0");;)if(res+=String.fromCharCode(parseInt(code.slice(count+1,parseInt(code[count])+count+1),7)),count+=parseInt(code[count])+1,!code[count])return number?Number(res):res},encrypt1:data=>{let Date="",DATA="";ft.is.number(data)&&(data=data.toString()),ft.is.string(data)&&ft.for(data,(v=>{Date+=v.charCodeAt(0).toString(7).length+v.charCodeAt(0).toString(7)})),Date=Date.replace(/0/g,"7");for(let i=0;i<Date.length;i+=3)DATA+=String.fromCharCode(Number.parseInt(Date.slice(i,i+3)));const arr=encodeURI(DATA).split("%");return arr.shift(),arr},decrypt1:data=>{let Data="",DATA="",count=0;for(ft.for(data,(v=>{DATA+="%"+v})),ft.for(decodeURI(DATA),(v=>{Data+=v.charCodeAt(0)})),Data=Data.replace(/[789]/g,0),DATA="";;)if(DATA+=String.fromCharCode(Number.parseInt(Data.slice(count+1,Number.parseInt(Data[count])+count+1),7)),count+=Number.parseInt(Data[count])+1,!Data[count])return DATA},base64To:data=>btoa(data),base64dec:data=>/;base64,/g.test(data)?atob(data.split(",")[1]):atob(data),tableHead:// CONCATENATED MODULE: ./src/js/ft/tableHead.js
/**
 * @description 用于生成xlsx.js表头
 * @method 表头JSON转table格式
 * @param {Array} thead
 * @param {String|undefined} children
 * @param {String|undefined} label
 * @return {Object} {merges:合并格式, headTxt:表头文字}
 * @example const head = fx([{label:'1',children:[]}]);
			let workbook = xlsx.utils.book_new(), ws = xlsx.utils.aoa_to_sheet(head.headTxt);
			ws["!merges"] = head.merges;
			xlsx.utils.book_append_sheet(workbook, ws, 'sheet1');
 * */
function fx(thead,children="children",label="label"){let res=[],merges=[],headTxt=[],r0=0,ml=function getMaxX(arr){let x=0;for(let i=0;i<arr.length;i++)arr[i][children]?.length?x+=getMaxX(arr[i][children]):x++;return x}(thead);function getLength(arr){let arrCount=[];for(let i=0;i<arr.length;i++)arr[i][children]?.length?arrCount[i]=getLength(arr[i][children])+1:arrCount[i]=1;return Math.max(...arrCount)}return function recurse(arr,c=-1){const l=arr.length;res.push([]),c++;for(let i=0;i<l;i++){res[c][i]=[r0,c,0,0],headTxt[c]||(headTxt[c]=[]),headTxt[c][r0]=arr[i][label],arr[i][children]?.length?(recurse(arr[i][children],c),res[c][i][2]=r0,res[c][i][3]=c+1):(r0++,res[c][i][2]=r0,res[c][i][3]=res[c][i][1]+getLength(arr));const v=res[c][i];v[0]+1===v[2]&&v[1]+1===v[3]||merges.push({s:{r:v[1],c:v[0]},e:{r:v[3]-1,c:v[2]-1}})}}(thead,-1),headTxt.forEach((v=>{for(let i=0;i<ml;i++)v[i]||(v[i]="")})),res=null,{merges,headTxt}}
/* harmony default export */,logo:"%c\n\t ___________      ___________     __________\n\t|\\   _______\\    |\\___    ___\\   |\\_______  \\\n\t\\ \\  \\______/_    \\___|\\  \\__/   \\|______|\\  \\\n\t \\ \\  ________\\       \\ \\  \\             \\ \\  \\\n\t  \\ \\  \\______/        \\ \\  \\             \\ \\  \\\n\t   \\ \\__\\               \\ \\__\\             \\ \\__\\\n\t    \\|__|                \\|__|              \\|__|"};
/* harmony default export */const js_ft=ft;var __webpack_exports__default=__webpack_exports__.Z;export{__webpack_exports__default as default};