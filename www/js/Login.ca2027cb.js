(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"109e":function(e,t,a){"use strict";var n=a("29ec"),s=a.n(n);s.a},"28a5":function(e,t,a){a("214f")("split",2,function(e,t,n){"use strict";var s=a("aae3"),i=n,o=[].push,r="split",c="length",d="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[c]||2!="ab"[r](/(?:ab)*/)[c]||4!="."[r](/(.?)(.?)/)[c]||"."[r](/()()/)[c]>1||""[r](/.?/)[c]){var l=void 0===/()??/.exec("")[1];n=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return i.call(a,e,t);var n,r,u,p,h,m=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,f=void 0===t?4294967295:t>>>0,w=new RegExp(e.source,g+"g");l||(n=new RegExp("^"+w.source+"$(?!\\s)",g));while(r=w.exec(a)){if(u=r.index+r[0][c],u>v&&(m.push(a.slice(v,r.index)),!l&&r[c]>1&&r[0].replace(n,function(){for(h=1;h<arguments[c]-2;h++)void 0===arguments[h]&&(r[h]=void 0)}),r[c]>1&&r.index<a[c]&&o.apply(m,r.slice(1)),p=r[0][c],v=u,m[c]>=f))break;w[d]===r.index&&w[d]++}return v===a[c]?!p&&w.test("")||m.push(""):m.push(a.slice(v)),m[c]>f?m.slice(0,f):m}}else"0"[r](void 0,0)[c]&&(n=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(a,s){var i=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i,s):n.call(String(i),a,s)},n]})},"29ec":function(e,t,a){},"640f":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasUpdate,expression:"hasUpdate"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.version)+")")]),a("mt-progress",{directives:[{name:"show",rawName:"v-show",value:e.downloadProcessShow,expression:"downloadProcessShow"}],attrs:{value:e.downloadProcessValue,"bar-height":5}})],1),a("div",[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.hasUpdate,expression:"!hasUpdate"}],attrs:{type:"primary",size:"large"},on:{click:e.onUpdate}},[e._v(e._s(e.updateTitle))])],1)])])},s=[],i=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),o=a.n(i),r=a("ed08"),c=a("ac02"),d={name:"Login",data:function(){return{userId:"",password:"",isAndroid:!1,hasUpdate:!1,updateTitle:"Checking new version ...",updateBaseUrl:"http://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.2.0",downloadProcessShow:!1,downloadProcessValue:0}},methods:{login:function(e,t,a){var n=this,s="",i=t;0==a.length&&(a=r["a"].getTicks().toString(),i=r["a"].encryptPassword(a,t)),this.$showLoading(),c["a"].Login(e,i,a,s).then(function(o){if(o.data.OK){n.$closeLoading(),r["a"].setRemeberMe(e,i,a);var d=r["a"].getJobNumber(),l=o.data.Result,u={UsrAccountPK:l.UsrAccountPK,FirstName:l.FirstName,LastName:l.LastName,CurrentDateTime:l.CurrentDateTime,MinDateTime:l.MinDateTime,MaxDateTime:l.MaxDateTime,IsCompanyManager:l.IsCompanyManager,IsDivisionManager:l.IsDivisionManager,IsRegionManager:l.IsRegionManager,IsJobManager:l.IsJobManager,SearchJobNumber:d,SearchDateTime:l.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};r["a"].setUserToken(e,i,a,""),d?(r["a"].setUserSettings(u),n.$router.push({name:"JobTimesheetList"})):n.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),r["a"].setJobNumber(t),u.SearchJobNumber=t,r["a"].setUserSettings(u),n.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),r["a"].setUserSettings(u),n.$router.push({name:"JobTimesheetList"})})}else c["a"].LoginByEmployee("","","",e,t,s).then(function(s){if(n.$closeLoading(),s.data.OK){r["a"].setRemeberMe(e,t,a);var i=s.data.Result,o={IsEmployee:!0,HREmployeePK:i.HREmployeePK,FirstName:i.FirstName,LastName:i.LastName,CurrentDateTime:i.CurrentDateTime,MinDateTime:i.MinDateTime,MaxDateTime:i.MaxDateTime};r["a"].setUserToken(i.UserId,i.Password,i.Ticks,i.Secret),r["a"].setUserSettings(o),n.$router.push({name:"EmployeeTimesheetList"})}else n.$message({message:s.data.Error,type:"error"}),console.log(s.data.Error)}).catch(function(e){n.$closeLoading(),n.showNetworkError(),console.log(e)})}).catch(function(e){n.$closeLoading(),n.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkAndroidVersion:function(){var e=this,t="".concat(this.updateBaseUrl,"/").concat(this.appName,"/").concat(this.appName,".txt");o.a.get(t).then(function(t){var a=t.data.Version;if(a!=e.version)e.updateTitle="Update V".concat(e.version," to V").concat(a),e.onUpdate();else{e.hasUpdate=!0;var n=r["a"].getRemeberMe();n.UserId.length>0&&(e.userId=n.userId,e.login(n.UserId,n.Password,n.Ticks))}}).catch(function(t){console.log(t),e.$alert(t)})},checkIOSVersion:function(){var e=this,t="".concat(this.updateBaseUrl,"/").concat(this.appName,"/").concat(this.appName,".plist");o.a.get(t).then(function(t){for(var a="",n=t.data.split(/\r\n|[\r\n]/),s=0;s<n.length;s++){var i=n[s];if(i.endsWith("<key>bundle-version</key>")&&s+1<n.length){var o=n[s+1].indexOf("<string>");a=n[s+1].substring(o+8,o+8+5)}}if(a.length>0&&a!=e.version)e.updateTitle="Update V".concat(e.version," to V").concat(a),e.onUpdate();else{e.hasUpdate=!0;var c=r["a"].getRemeberMe();c.UserId.length>0&&(e.userId=c.userId,e.login(c.UserId,c.Password,c.Ticks))}}).catch(function(t){console.log(t),e.$alert(t)})},onUpdate:function(){if(this.isAndroid)if(window.requestFileSystem){var e=(new Date).getTime(),t="".concat(this.updateBaseUrl,"/").concat(this.appName,"/").concat(this.appName,".apk?v=").concat(e);this.updateAndroid(t)}else{var a="".concat(this.updateBaseUrl,"/").concat(this.appName,"-update-apk.html");window.open(a,"_blank")}else{var n="".concat(this.updateBaseUrl,"/").concat(this.appName,"-update-ipa.html");window.open(n,"_blank")}},updateAndroid:function(e){this.downloadProcessShow=!0;try{window.requestFileSystem(LocalFileSystem.PERSISTENT,0,function(t){t.root.getFile("RCHub.apk",{create:!0,exclusive:!1},function(t){o()({method:"GET",url:e,responseType:"blob",onDownloadProgress:function(e){this.downloadProcessValue=Math.round(e.loaded/e.total*100)}}).then(function(e){var a=new Blob([e.data],{type:"application/vnd.android.package-archive"});t.createWriter(function(e){e.onwriteend=function(){cordova.plugins.fileOpener2.open(t.fullPath,"application/vnd.android.package-archive")},e.write(a)})})},function(e){alert("error getting file! "+e)})},function(e){alert("error getting persistent fs! "+e)})}catch(t){alert(t)}}},mounted:function(){var e=navigator.userAgent;this.isAndroid=e.indexOf("Android")>-1||e.indexOf("Linux")>-1||e.indexOf("Chrome")>-1,this.isAndroid?this.checkAndroidVersion():this.checkIOSVersion()}},l=d,u=(a("109e"),a("dac8"),a("2877")),p=Object(u["a"])(l,n,s,!1,null,"3f656bb0",null);p.options.__file="Login.vue";t["default"]=p.exports},dac8:function(e,t,a){"use strict";var n=a("640f"),s=a.n(n);s.a}}]);
//# sourceMappingURL=Login.ca2027cb.js.map