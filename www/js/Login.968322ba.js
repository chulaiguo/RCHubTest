(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"28a5":function(e,t,a){a("214f")("split",2,function(e,t,r){"use strict";var i=a("aae3"),s=r,n=[].push,o="split",p="length",d="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[p]||2!="ab"[o](/(?:ab)*/)[p]||4!="."[o](/(.?)(.?)/)[p]||"."[o](/()()/)[p]>1||""[o](/.?/)[p]){var c=void 0===/()??/.exec("")[1];r=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!i(e))return s.call(a,e,t);var r,o,l,u,h,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,U=void 0===t?4294967295:t>>>0,f=new RegExp(e.source,v+"g");c||(r=new RegExp("^"+f.source+"$(?!\\s)",v));while(o=f.exec(a)){if(l=o.index+o[0][p],l>g&&(m.push(a.slice(g,o.index)),!c&&o[p]>1&&o[0].replace(r,function(){for(h=1;h<arguments[p]-2;h++)void 0===arguments[h]&&(o[h]=void 0)}),o[p]>1&&o.index<a[p]&&n.apply(m,o.slice(1)),u=o[0][p],g=l,m[p]>=U))break;f[d]===o.index&&f[d]++}return g===a[p]?!u&&f.test("")||m.push(""):m.push(a.slice(g)),m[p]>U?m.slice(0,U):m}}else"0"[o](void 0,0)[p]&&(r=function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)});return[function(a,i){var s=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,s,i):r.call(String(s),a,i)},r]})},"5e5e":function(e,t,a){"use strict";var r=a("712b"),i=a.n(r);i.a},"640f":function(e,t,a){},"712b":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isLatest,expression:"appUpdater.isLatest"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.appUpdater.version)+")")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isCordova&&e.appUpdater.isAndroid,expression:"appUpdater.isCordova && appUpdater.isAndroid"}]},[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.retryUpdateApp,expression:"appUpdater.retryUpdateApp"}],attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v("Retry update again")]),a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.retryUpdateApp,expression:"!appUpdater.retryUpdateApp"}],attrs:{type:"primary",size:"large",disabled:!1}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isCordova&&!e.appUpdater.isAndroid,expression:"appUpdater.isCordova && !appUpdater.isAndroid"}]},[a("a",{attrs:{href:"itms-services://?action=download-manifest&url=https://rciupdatetest.azurewebsites.net/RCAppsHome/RCHub/RCHub.plist"}},[e._v("Install RCHub for test")]),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v(e._s(e.appUpdater.updateTitle))])],1)])])])},i=[],s=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),n=a.n(s),o=a("ed08"),p=a("ac02"),d={name:"Login",data:function(){return{userId:"",password:"",appUpdater:{isLatest:!1,isCordova:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"http://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.1.0",downloadProcessValue:0,retryUpdateApp:!1}}},methods:{login:function(e,t,a){var r=this,i="",s=t;0==a.length&&(a=o["a"].getTicks().toString(),s=o["a"].encryptPassword(a,t)),this.$showLoading(),p["a"].Login(e,s,a,i).then(function(n){if(n.data.OK){r.$closeLoading(),o["a"].setRemeberMe(e,s,a);var d=o["a"].getJobNumber(),c=n.data.Result,l={UsrAccountPK:c.UsrAccountPK,FirstName:c.FirstName,LastName:c.LastName,CurrentDateTime:c.CurrentDateTime,MinDateTime:c.MinDateTime,MaxDateTime:c.MaxDateTime,IsCompanyManager:c.IsCompanyManager,IsDivisionManager:c.IsDivisionManager,IsRegionManager:c.IsRegionManager,IsJobManager:c.IsJobManager,SearchJobNumber:d,SearchDateTime:c.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};o["a"].setUserToken(e,s,a,""),d?(o["a"].setUserSettings(l),r.$router.push({name:"JobTimesheetList"})):r.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),o["a"].setJobNumber(t),l.SearchJobNumber=t,o["a"].setUserSettings(l),r.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),o["a"].setUserSettings(l),r.$router.push({name:"JobTimesheetList"})})}else p["a"].LoginByEmployee("","","",e,t,i).then(function(i){if(r.$closeLoading(),i.data.OK){o["a"].setRemeberMe(e,t,a);var s=i.data.Result,n={IsEmployee:!0,HREmployeePK:s.HREmployeePK,FirstName:s.FirstName,LastName:s.LastName,CurrentDateTime:s.CurrentDateTime,MinDateTime:s.MinDateTime,MaxDateTime:s.MaxDateTime};o["a"].setUserToken(s.UserId,s.Password,s.Ticks,s.Secret),o["a"].setUserSettings(n),r.$router.push({name:"EmployeeTimesheetList"})}else r.$message({message:i.data.Error,type:"error"}),console.log(i.data.Error)}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkVersion:function(e){var t=this,a=navigator.userAgent;this.appUpdater.isAndroid=a.indexOf("Android")>-1||a.indexOf("Linux")>-1||a.indexOf("Chrome")>-1,this.appUpdater.isAndroid?this.checkAndroidVersion(function(a){a?t.updateApp():e()}):this.checkIOSVersion(function(a){a?t.updateApp():e()})},checkAndroidVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".txt");n.a.get(a).then(function(a){var r=a.data.Version;r!=t.appUpdater.version?(t.appUpdater.updateTitle="Update V".concat(t.appUpdater.version," to V").concat(r,"..."),e(!0)):e(!1)}).catch(function(e){t.$alert(e)})},checkIOSVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");n.a.get(a).then(function(a){for(var r="",i=a.data.split(/\r\n|[\r\n]/),s=0;s<i.length;s++){var n=i[s];if(n.endsWith("<key>bundle-version</key>")&&s+1<i.length){var o=i[s+1].indexOf("<string>");r=i[s+1].substring(o+8,o+8+5)}}r.length>0&&r!=t.appUpdater.version?(t.appUpdater.updateTitle="Update V".concat(t.appUpdater.version," to V").concat(r),e(!0)):e(!1)}).catch(function(e){t.$alert(e)})},updateApp:function(){if(this.appUpdater.retryUpdateApp=!1,this.appUpdater.isAndroid){var e=(new Date).getTime(),t="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".apk?v=").concat(e);this.updateAndroid(t)}else{var a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"-update-ipa.html");this.updateIOS(a)}},updateAndroid:function(e){if(window.requestFileSystem){alert("1"),this.appUpdater.isCordova=!0,alert("2");var t=this;alert("3");try{window.requestFileSystem(window.TEMPORARY,5242880,function(a){alert("4"),a.root.getFile("".concat(t.appUpdater.appName,".apk"),{create:!0,exclusive:!1},function(a){n()({method:"GET",url:e,responseType:"blob",onDownloadProgress:function(e){e.lengthComputable&&t.$nextTick(function(){t.appUpdater.downloadProcessValue=Math.round(e.loaded/e.total*100)})}}).then(function(e){alert("5");var t=new Blob([e.data],{type:"application/vnd.android.package-archive"});alert("6"),a.createWriter(function(e){e.onwriteend=function(){alert("9"),cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},alert("7"),e.write(t),alert("8")})}).catch(function(e){alert("download error: "+e),t.appUpdater.retryUpdateApp=!0})},function(e){alert("error getting file! "+e),t.appUpdater.retryUpdateApp=!0})},function(e){alert("error getting persistent fs! "+e),t.appUpdater.retryUpdateApp=!0})}catch(a){alert(a),t.appUpdater.retryUpdateApp=!0}}else window.open(e,"_blank")},updateIOS:function(e){cordova.InAppBrowser?(this.appUpdater.isCordova=!0,cordova.InAppBrowser.open(e,"_system","location=no")):window.open(e,"_blank")}},mounted:function(){var e=this;this.checkVersion(function(){e.appUpdater.isLatest=!0;var t=o["a"].getRemeberMe();t.UserId.length>0&&(e.userId=t.userId,e.login(t.UserId,t.Password,t.Ticks))})}},c=d,l=(a("5e5e"),a("dac8"),a("2877")),u=Object(l["a"])(c,r,i,!1,null,"2ceef82e",null);u.options.__file="Login.vue";t["default"]=u.exports},dac8:function(e,t,a){"use strict";var r=a("640f"),i=a.n(r);i.a}}]);
//# sourceMappingURL=Login.968322ba.js.map