(function(e){function t(t){for(var o,r,s=t[0],u=t[1],p=t[2],l=0,c=[];l<s.length;l++)r=s[l],i[r]&&c.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);m&&m(t);while(c.length)c.shift()();return a.push.apply(a,p||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i={app:0},a=[];function s(e){return u.p+"js/"+({"Employee~EquipmentRepair~Job~Login~Region":"Employee~EquipmentRepair~Job~Login~Region",Employee:"Employee",EquipmentRepair:"EquipmentRepair",Job:"Job",Login:"Login",Region:"Region"}[e]||e)+"."+{"Employee~EquipmentRepair~Job~Login~Region":"7311e8af",Employee:"ea03e513",EquipmentRepair:"1bd5e7f4",Job:"82faa1ec",Login:"ebf920b5",Region:"258641a9"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={Employee:1,EquipmentRepair:1,Job:1,Login:1,Region:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({"Employee~EquipmentRepair~Job~Login~Region":"Employee~EquipmentRepair~Job~Login~Region",Employee:"Employee",EquipmentRepair:"EquipmentRepair",Job:"Job",Login:"Login",Region:"Region"}[e]||e)+"."+{"Employee~EquipmentRepair~Job~Login~Region":"31d6cfe0",Employee:"217e8e51",EquipmentRepair:"682f1a36",Job:"cf4e675b",Login:"4684089f",Region:"d920fa12"}[e]+".css",r=u.p+o,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var s=i[a],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===o||p===r))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],p=s.getAttribute("data-href");if(p===o||p===r)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,n(i)},c.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(c)}).then(function(){r[e]=0}));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,n){o=i[e]=[t,n]});t.push(o[2]=a);var p,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e),p=function(t){c.onerror=c.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[e]=void 0}};var m=setTimeout(function(){p({type:"timeout",target:c})},12e4);c.onerror=c.onload=p,l.appendChild(c)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var c=0;c<p.length;c++)t(p[c]);var m=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("aef6"),{name:"app",mounted:function(){var e=this;window.cordovaBack=function(){try{location.href.endsWith("Dashboard")?navigator.app.exitApp():e.$router.push({name:"Dashboard"})}catch(t){console.log(t)}}}}),s=a,u=(n("5c0b"),n("2877")),p=Object(u["a"])(s,r,i,!1,null,null,null);p.options.__file="App.vue";var l=p.exports,c=n("8c4f"),m=n("ed08"),g=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Login")]).then(n.bind(null,"a55b"))},f=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Employee")]).then(n.bind(null,"cb34"))},h=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Employee")]).then(n.bind(null,"9368"))},d=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Employee")]).then(n.bind(null,"3987"))},b=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Job")]).then(n.bind(null,"5b54"))},y=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Job")]).then(n.bind(null,"dcb9"))},E=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Job")]).then(n.bind(null,"028a"))},v=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Region")]).then(n.bind(null,"1719"))},R=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Region")]).then(n.bind(null,"642a"))},T=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("Region")]).then(n.bind(null,"1b6f"))},L=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("EquipmentRepair")]).then(n.bind(null,"79b8"))},S=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("EquipmentRepair")]).then(n.bind(null,"97c7"))},w=function(){return Promise.all([n.e("Employee~EquipmentRepair~Job~Login~Region"),n.e("EquipmentRepair")]).then(n.bind(null,"aef4"))};o["default"].use(c["a"]);var k=new c["a"]({routes:[{path:"/Login",name:"Login",component:g},{path:"",name:"EmployeeLayout",component:f,redirect:"/EmployeeTimesheetList",children:[{path:"/EmployeeTimesheetList",name:"EmployeeTimesheetList",component:h},{path:"/EmployeeTimesheetDetail/:PK",name:"EmployeeTimesheetDetail",component:d}]},{path:"",name:"JobLayout",component:b,redirect:"/JobTimesheetList",children:[{path:"/JobTimesheetList",name:"JobTimesheetList",component:y},{path:"/JobTimesheetDetail/:PK/:JobNumber?/:DateTime?",name:"JobTimesheetDetail",component:E}]},{path:"",name:"RegionLayout",component:v,redirect:"/RegionTimesheetList",children:[{path:"/RegionTimesheetList",name:"RegionTimesheetList",component:R},{path:"/RegionTimesheetDetail/:PK",name:"RegionTimesheetDetail",component:T}]},{path:"",name:"EquipmentRepairLayout",component:L,redirect:"/EquipmentRepairList",children:[{path:"/EquipmentRepairList",name:"EquipmentRepairList",component:S},{path:"/EquipmentRepairDetail/:PK",name:"EquipmentRepairDetail",component:w}]}]});k.beforeEach(function(e,t,n){"/login"==e.path&&m["a"].clearSessionStorage(),m["a"].isUserTokenExist()||"/login"==e.path?n():n({path:"/login"})});var J=k,q=n("2f62");o["default"].use(q["a"]);var P=new q["a"].Store({state:{employeeTimeSheetList:[],jobTimeSheetList:[],regionTimeSheetList:[],equipmentRepairList:[],photo:""},mutations:{setEmployeeTimeSheetList:function(e,t){e.employeeTimeSheetList=t},setJobTimeSheetList:function(e,t){e.jobTimeSheetList=t},setRegionTimeSheetList:function(e,t){e.regionTimeSheetList=t},setEquipmentRepairList:function(e,t){e.equipmentRepairList=t},setPhoto:function(e,t){e.photo=t}},actions:{}}),x=n("ecee"),A=n("c074"),M=n("ad3d"),N=n("76a0"),I=n.n(N),O=(n("18a4"),n("3b2b"),n("a481"),{install:function(e,t){e.filter("formatDate",function(e,t){var n=new Date(Date.parse(e)),o={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),o)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return t}),e.mixin({methods:{showNetworkError:function(){Object(N["Toast"])({message:"The Web Server may be too busy, please try again at a later time.",type:"error"})}}}),e.prototype.$formatDate=function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return t},e.prototype.$message=function(e){Object(N["Toast"])({message:e.message,duration:3e3})},e.prototype.$alert=function(e,t){N["MessageBox"].alert(e,t,{confirmButtonText:"OK"})},e.prototype.$confirm=function(e,t){return N["MessageBox"].confirm(e,t,{confirmButtonText:"OK",cancelButtonText:"Cancel"})},e.prototype.$prompt=function(e,t){return t?N["MessageBox"].prompt(" ",e,{inputValue:t,confirmButtonText:"OK",cancelButtonText:"Cancel"}):N["MessageBox"].prompt(" ",e,{confirmButtonText:"OK",cancelButtonText:"Cancel"})},e.prototype.$showLoading=function(){N["Indicator"].open()},e.prototype.$closeLoading=function(){N["Indicator"].close()},e.prototype.$takeCameraPicture=function(e){try{if(navigator.camera)navigator.camera.getPicture(e,function(e){console.log(e)},{quality:45,destinationType:0,sourceType:1,allowEdit:!0,encodingType:0,targetWidth:250,targetHeight:250});else{var t=document.createElement("input");t.setAttribute("type","file"),t.onchange=function(t){try{var n=t.currentTarget.files[0];if(!n)return;var o=new FileReader;o.onload=function(t){var n=t.target.result,o=document.createElement("canvas"),r=new Image;r.onload=function(){var t=250;o.width=t,o.height=t;var n,r,i=o.getContext("2d");i.clearRect(0,0,t,t);var a=0,s=0;this.width>this.height?(n=Math.round(t*this.width/this.height),r=t,a=-Math.round((n-t)/2)):(r=Math.round(t*this.height/this.width),n=t,s=-Math.round((r-t)/2)),i.drawImage(this,a,s,n,r);var u=o.toDataURL("image/jpeg",.5),p=u.substr(23);e(p)},r.src=n},o.readAsDataURL(n)}catch(r){console.log(r)}},t.click()}}catch(n){console.log(n)}}}});x["c"].add(A["m"],A["h"],A["q"],A["i"],A["o"],A["s"],A["u"],A["c"],A["d"],A["t"],A["v"],A["z"],A["x"],A["w"],A["r"],A["e"],A["k"],A["y"],A["g"],A["b"],A["a"],A["n"],A["A"],A["p"],A["l"],A["f"],A["j"]),o["default"].component("font-awesome-icon",M["a"]),o["default"].use(I.a),o["default"].use(O),o["default"].config.productionTip=!1,new o["default"]({router:J,store:P,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},ed08:function(e,t,n){"use strict";n.d(t,"a",function(){return i});n("34ef"),n("6b54");var o=n("d4ec"),r=n("bee2"),i=(n("cadf"),n("551c"),n("097d"),function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,null,[{key:"getAppName",value:function(){return"BOETA_Mobile_RC_Hub"}},{key:"getBaseUrl",value:function(){return"https://BOETAapitest.azurewebsites.net/api/"}},{key:"setJobNumber",value:function(t){localStorage.setItem(e.getAppName()+"_remeberJob",t)}},{key:"getJobNumber",value:function(){return localStorage.getItem(e.getAppName()+"_remeberJob")||""}},{key:"setRemeberMe",value:function(t,n,o){var r={UserId:t,Password:n,Ticks:o};localStorage.setItem(e.getAppName()+"_remeberMe",JSON.stringify(r))}},{key:"getRemeberMe",value:function(){var t=localStorage.getItem(e.getAppName()+"_remeberMe")||"";if(0==t.length)return{UserId:"",Password:"",Ticks:""};var n=JSON.parse(t);return{UserId:n.UserId,Password:n.Password,Ticks:n.Ticks}}},{key:"clearLocalStorage",value:function(){localStorage.removeItem(e.getAppName()+"_remeberJob"),localStorage.removeItem(e.getAppName()+"_remeberMe")}},{key:"setUserSettings",value:function(t){sessionStorage.setItem(e.getAppName()+"_userSettings",JSON.stringify(t))}},{key:"getUserSettings",value:function(){var t=sessionStorage.getItem(e.getAppName()+"_userSettings")||"";return JSON.parse(t)}},{key:"getUserToken",value:function(){var t=sessionStorage.getItem(e.getAppName()+"_userToken")||"",n=JSON.parse(t);return{UserId:n.UserId,Password:n.Password,Ticks:n.Ticks,Secret:n.Secret,EncryptPassword:!0,TokenID:"70d3fa69-4d3d-4cb7-882e-f3e97fa0352d",Settings:"",CompressType:""}}},{key:"setUserToken",value:function(t,n,o,r){var i={UserId:t,Password:n,Ticks:o,Secret:r};sessionStorage.setItem(e.getAppName()+"_userToken",JSON.stringify(i))}},{key:"clearSessionStorage",value:function(){sessionStorage.removeItem(e.getAppName()+"_userSettings"),sessionStorage.removeItem(e.getAppName()+"_userToken")}},{key:"logout",value:function(){e.clearLocalStorage(),e.clearSessionStorage()}},{key:"isUserTokenExist",value:function(){var t=sessionStorage.getItem(e.getAppName()+"_userToken")||"";return t.length>0}},{key:"createUserToken",value:function(e,t,n){return{UserId:e,Password:t,Ticks:n,EncryptPassword:!0,TokenID:"70d3fa69-4d3d-4cb7-882e-f3e97fa0352d",Settings:"",CompressType:""}}},{key:"getTicks",value:function(){var e=621355968e9,t=1e4;return e+(new Date).getTime()*t}},{key:"encryptPassword",value:function(e,t){for(var n=new Array,o=0;o<t.length;o++)if(o<e.length){var r=t.charCodeAt(o)+e.charCodeAt(o);n.push(r.toString())}else{var i=t.charCodeAt(o)+18;n.push(i.toString())}return n.join(" ")+" "}},{key:"base64ToByteArray",value:function(e){for(var t=atob(e),n=new Uint8Array(t.length),o=0;o<t.length;o++)n[o]=t.charCodeAt(o);return n}}]),e}())}});
//# sourceMappingURL=app.e675f94d.js.map