(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"28a5":function(e,t,a){a("214f")("split",2,function(e,t,r){"use strict";var s=a("aae3"),i=r,n=[].push,p="split",o="length",d="lastIndex";if("c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[o]||2!="ab"[p](/(?:ab)*/)[o]||4!="."[p](/(.?)(.?)/)[o]||"."[p](/()()/)[o]>1||""[p](/.?/)[o]){var c=void 0===/()??/.exec("")[1];r=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return i.call(a,e,t);var r,p,u,l,h,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,U=void 0===t?4294967295:t>>>0,f=new RegExp(e.source,v+"g");c||(r=new RegExp("^"+f.source+"$(?!\\s)",v));while(p=f.exec(a)){if(u=p.index+p[0][o],u>g&&(m.push(a.slice(g,p.index)),!c&&p[o]>1&&p[0].replace(r,function(){for(h=1;h<arguments[o]-2;h++)void 0===arguments[h]&&(p[h]=void 0)}),p[o]>1&&p.index<a[o]&&n.apply(m,p.slice(1)),l=p[0][o],g=u,m[o]>=U))break;f[d]===p.index&&f[d]++}return g===a[o]?!l&&f.test("")||m.push(""):m.push(a.slice(g)),m[o]>U?m.slice(0,U):m}}else"0"[p](void 0,0)[o]&&(r=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(a,s){var i=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,i,s):r.call(String(i),a,s)},r]})},"511c":function(e,t,a){"use strict";var r=a("fe01"),s=a.n(r);s.a},"640f":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isLatest,expression:"appUpdater.isLatest"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.appUpdater.version)+")")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isCordova&&e.appUpdater.isAndroid,expression:"appUpdater.isCordova && appUpdater.isAndroid"}]},[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.retryUpdateApp,expression:"appUpdater.retryUpdateApp"}],attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v("Retry update again")]),a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.retryUpdateApp,expression:"!appUpdater.retryUpdateApp"}],attrs:{type:"primary",size:"large",disabled:!1}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isCordova&&!e.appUpdater.isAndroid,expression:"appUpdater.isCordova && !appUpdater.isAndroid"}]},[a("a",{attrs:{href:"itms-services://?action=download-manifest&url=https://rciupdatetest.azurewebsites.net/RCAppsHome/RCHub/RCHub.plist"}},[e._v("Install RCHub for test")]),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v(e._s(e.appUpdater.updateTitle))])],1)])])])},s=[],i=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),n=a.n(i),p=a("ed08"),o=a("ac02"),d={name:"Login",data:function(){return{userId:"",password:"",appUpdater:{isLatest:!1,isCordova:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"http://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.1.0",downloadProcessValue:0,retryUpdateApp:!1}}},methods:{login:function(e,t,a){var r=this,s="",i=t;0==a.length&&(a=p["a"].getTicks().toString(),i=p["a"].encryptPassword(a,t)),this.$showLoading(),o["a"].Login(e,i,a,s).then(function(n){if(n.data.OK){r.$closeLoading(),p["a"].setRemeberMe(e,i,a);var d=p["a"].getJobNumber(),c=n.data.Result,u={UsrAccountPK:c.UsrAccountPK,FirstName:c.FirstName,LastName:c.LastName,CurrentDateTime:c.CurrentDateTime,MinDateTime:c.MinDateTime,MaxDateTime:c.MaxDateTime,IsCompanyManager:c.IsCompanyManager,IsDivisionManager:c.IsDivisionManager,IsRegionManager:c.IsRegionManager,IsJobManager:c.IsJobManager,SearchJobNumber:d,SearchDateTime:c.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};p["a"].setUserToken(e,i,a,""),d?(p["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})):r.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),p["a"].setJobNumber(t),u.SearchJobNumber=t,p["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),p["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})})}else o["a"].LoginByEmployee("","","",e,t,s).then(function(s){if(r.$closeLoading(),s.data.OK){p["a"].setRemeberMe(e,t,a);var i=s.data.Result,n={IsEmployee:!0,HREmployeePK:i.HREmployeePK,FirstName:i.FirstName,LastName:i.LastName,CurrentDateTime:i.CurrentDateTime,MinDateTime:i.MinDateTime,MaxDateTime:i.MaxDateTime};p["a"].setUserToken(i.UserId,i.Password,i.Ticks,i.Secret),p["a"].setUserSettings(n),r.$router.push({name:"EmployeeTimesheetList"})}else r.$message({message:s.data.Error,type:"error"}),console.log(s.data.Error)}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkVersion:function(e){window.requestFileSystem&&(this.appUpdater.isCordova=!0);var t=navigator.userAgent;this.appUpdater.isAndroid=t.indexOf("Android")>-1||t.indexOf("Linux")>-1||t.indexOf("Chrome")>-1,this.appUpdater.isCordova?this.appUpdater.isAndroid?this.checkAndroidVersion(e):this.checkIOSVersion(e):e()},checkAndroidVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".txt");n.a.get(a).then(function(a){var r=a.data.Version;r!=t.appUpdater.version?(t.appUpdater.updateTitle="Update V".concat(t.appUpdater.version," to V").concat(r,"..."),t.updateApp()):e()}).catch(function(e){t.$alert(e)})},checkIOSVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");n.a.get(a).then(function(a){for(var r="",s=a.data.split(/\r\n|[\r\n]/),i=0;i<s.length;i++){var n=s[i];if(n.endsWith("<key>bundle-version</key>")&&i+1<s.length){var p=s[i+1].indexOf("<string>");r=s[i+1].substring(p+8,p+8+5)}}r.length>0&&r!=t.appUpdater.version?(t.appUpdater.updateTitle="Update V".concat(t.appUpdater.version," to V").concat(r),t.updateApp()):e()}).catch(function(e){t.$alert(e)})},updateApp:function(){if(this.appUpdater.retryUpdateApp=!1,this.appUpdater.isAndroid){var e=(new Date).getTime(),t="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".apk?v=").concat(e);this.updateAndroid(t)}else{var a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"-update-ipa.html");this.updateIOS(a)}},updateAndroid:function(e){var t=this;try{window.requestFileSystem(window.TEMPORARY,5242880,function(a){a.root.getFile("".concat(this.appUpdater.appName,".apk"),{create:!0,exclusive:!1},function(a){n()({method:"GET",url:e,responseType:"blob",onDownloadProgress:function(e){e.lengthComputable&&t.$nextTick(function(){t.appUpdater.downloadProcessValue=Math.round(e.loaded/e.total*100)})}}).then(function(e){var t=new Blob([e.data],{type:"application/vnd.android.package-archive"});a.createWriter(function(e){e.onwriteend=function(){cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},e.write(t)})}).catch(function(e){alert("download error: "+e),t.appUpdater.retryUpdateApp=!0})},function(e){alert("error getting file! "+e),t.appUpdater.retryUpdateApp=!0})},function(e){alert("error getting persistent fs! "+e),t.appUpdater.retryUpdateApp=!0})}catch(a){alert(a),t.appUpdater.retryUpdateApp=!0}},updateIOS:function(e){cordova.InAppBrowser?cordova.InAppBrowser.open(e,"_system","location=no"):window.open(e,"_blank")}},mounted:function(){var e=this;this.checkVersion(function(){e.appUpdater.isLatest=!0;var t=p["a"].getRemeberMe();t.UserId.length>0&&(e.userId=t.userId,e.login(t.UserId,t.Password,t.Ticks))})}},c=d,u=(a("511c"),a("dac8"),a("2877")),l=Object(u["a"])(c,r,s,!1,null,"bb58619a",null);l.options.__file="Login.vue";t["default"]=l.exports},dac8:function(e,t,a){"use strict";var r=a("640f"),s=a.n(r);s.a},fe01:function(e,t,a){}}]);
//# sourceMappingURL=Login.e0b9e4b2.js.map