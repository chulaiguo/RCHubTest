(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"28a5":function(e,t,a){a("214f")("split",2,function(e,t,r){"use strict";var n=a("aae3"),i=r,s=[].push,o="split",p="length",d="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[p]||2!="ab"[o](/(?:ab)*/)[p]||4!="."[o](/(.?)(.?)/)[p]||"."[o](/()()/)[p]>1||""[o](/.?/)[p]){var c=void 0===/()??/.exec("")[1];r=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return i.call(a,e,t);var r,o,u,l,h,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,f=void 0===t?4294967295:t>>>0,U=new RegExp(e.source,v+"g");c||(r=new RegExp("^"+U.source+"$(?!\\s)",v));while(o=U.exec(a)){if(u=o.index+o[0][p],u>g&&(m.push(a.slice(g,o.index)),!c&&o[p]>1&&o[0].replace(r,function(){for(h=1;h<arguments[p]-2;h++)void 0===arguments[h]&&(o[h]=void 0)}),o[p]>1&&o.index<a[p]&&s.apply(m,o.slice(1)),l=o[0][p],g=u,m[p]>=f))break;U[d]===o.index&&U[d]++}return g===a[p]?!l&&U.test("")||m.push(""):m.push(a.slice(g)),m[p]>f?m.slice(0,f):m}}else"0"[o](void 0,0)[p]&&(r=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(a,n){var i=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,i,n):r.call(String(i),a,n)},r]})},"3b46":function(e,t,a){},"640f":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isLatest,expression:"appUpdater.isLatest"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.appUpdater.version)+")")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isAndroid,expression:"appUpdater.isAndroid"}]},[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.retryUpdateApp,expression:"appUpdater.retryUpdateApp"}],attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v("Retry update again")]),a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.retryUpdateApp,expression:"!appUpdater.retryUpdateApp"}],attrs:{type:"primary",size:"large",disabled:!0}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isAndroid,expression:"!appUpdater.isAndroid"}]},[a("a",{attrs:{href:"itms-services://?action=download-manifest&url=https://rciupdatetest.azurewebsites.net/RCAppsHome/RCHub/RCHub.plist"}},[e._v("Install RCHub for test")]),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v(e._s(e.appUpdater.updateTitle))])],1)])])])},n=[],i=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),s=a.n(i),o=a("ed08"),p=a("ac02"),d={name:"Login",data:function(){return{userId:"",password:"",appUpdater:{isLatest:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"http://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.1.0",downloadProcessValue:0,retryUpdateApp:!1}}},methods:{login:function(e,t,a){var r=this,n="",i=t;0==a.length&&(a=o["a"].getTicks().toString(),i=o["a"].encryptPassword(a,t)),this.$showLoading(),p["a"].Login(e,i,a,n).then(function(s){if(s.data.OK){r.$closeLoading(),o["a"].setRemeberMe(e,i,a);var d=o["a"].getJobNumber(),c=s.data.Result,u={UsrAccountPK:c.UsrAccountPK,FirstName:c.FirstName,LastName:c.LastName,CurrentDateTime:c.CurrentDateTime,MinDateTime:c.MinDateTime,MaxDateTime:c.MaxDateTime,IsCompanyManager:c.IsCompanyManager,IsDivisionManager:c.IsDivisionManager,IsRegionManager:c.IsRegionManager,IsJobManager:c.IsJobManager,SearchJobNumber:d,SearchDateTime:c.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};o["a"].setUserToken(e,i,a,""),d?(o["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})):r.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),o["a"].setJobNumber(t),u.SearchJobNumber=t,o["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),o["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})})}else p["a"].LoginByEmployee("","","",e,t,n).then(function(n){if(r.$closeLoading(),n.data.OK){o["a"].setRemeberMe(e,t,a);var i=n.data.Result,s={IsEmployee:!0,HREmployeePK:i.HREmployeePK,FirstName:i.FirstName,LastName:i.LastName,CurrentDateTime:i.CurrentDateTime,MinDateTime:i.MinDateTime,MaxDateTime:i.MaxDateTime};o["a"].setUserToken(i.UserId,i.Password,i.Ticks,i.Secret),o["a"].setUserSettings(s),r.$router.push({name:"EmployeeTimesheetList"})}else r.$message({message:n.data.Error,type:"error"}),console.log(n.data.Error)}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkVersion:function(e){var t=this,a=navigator.userAgent;this.appUpdater.isAndroid=a.indexOf("Android")>-1||a.indexOf("Linux")>-1||a.indexOf("Chrome")>-1,this.appUpdater.isAndroid?this.checkAndroidVersion(function(a){a?t.updateApp():e()}):this.checkIOSVersion(function(a){a?t.updateApp():e()})},checkAndroidVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".txt");s.a.get(a).then(function(a){var r=a.data.Version;r!=t.appUpdater.version?(t.appUpdater.updateTitle="Update V".concat(t.appUpdater.version," to V").concat(r,"..."),e(!0)):e(!1)}).catch(function(e){t.$alert(e)})},checkIOSVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");s.a.get(a).then(function(a){for(var r="",n=a.data.split(/\r\n|[\r\n]/),i=0;i<n.length;i++){var s=n[i];if(s.endsWith("<key>bundle-version</key>")&&i+1<n.length){var o=n[i+1].indexOf("<string>");r=n[i+1].substring(o+8,o+8+5)}}r.length>0&&r!=t.appUpdater.version?(t.appUpdater.updateTitle="Update V".concat(t.appUpdater.version," to V").concat(r),e(!0)):e(!1)}).catch(function(e){t.$alert(e)})},updateApp:function(){if(this.appUpdater.retryUpdateApp=!1,this.appUpdater.isAndroid){var e=(new Date).getTime(),t="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".apk?v=").concat(e);this.updateAndroid(t)}else{var a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"-update-ipa.html");this.updateIOS(a)}},updateAndroid:function(e){if(window.requestFileSystem){var t=this;try{window.requestFileSystem(window.TEMPORARY,5242880,function(a){a.root.getFile("".concat(t.appUpdater.appName,".apk"),{create:!0,exclusive:!1},function(a){s()({method:"GET",url:e,responseType:"blob",onDownloadProgress:function(e){e.lengthComputable&&t.$nextTick(function(){t.appUpdater.downloadProcessValue=Math.round(e.loaded/e.total*100)})}}).then(function(e){var t=new Blob([e.data],{type:"application/vnd.android.package-archive"});a.createWriter(function(e){e.onwriteend=function(){cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},e.write(t)})}).catch(function(e){alert("download error: "+e),t.appUpdater.retryUpdateApp=!0})},function(e){alert("error getting file! "+e),t.appUpdater.retryUpdateApp=!0})},function(e){alert("error getting persistent fs! "+e),t.appUpdater.retryUpdateApp=!0})}catch(a){alert(a),t.appUpdater.retryUpdateApp=!0}}else window.open(e,"_blank")},updateIOS:function(e){cordova.InAppBrowser?cordova.InAppBrowser.open(e,"_system","location=no"):window.open(e,"_blank")}},mounted:function(){var e=this;this.checkVersion(function(){e.appUpdater.isLatest=!0;var t=o["a"].getRemeberMe();t.UserId.length>0&&(e.userId=t.userId,e.login(t.UserId,t.Password,t.Ticks))})}},c=d,u=(a("ccc7"),a("dac8"),a("2877")),l=Object(u["a"])(c,r,n,!1,null,"2683aa43",null);l.options.__file="Login.vue";t["default"]=l.exports},ccc7:function(e,t,a){"use strict";var r=a("3b46"),n=a.n(r);n.a},dac8:function(e,t,a){"use strict";var r=a("640f"),n=a.n(r);n.a}}]);
//# sourceMappingURL=Login.4cf942ab.js.map