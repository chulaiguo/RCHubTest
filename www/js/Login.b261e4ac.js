(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{1801:function(e,t,a){"use strict";var r=a("96e8"),i=a.n(r);i.a},"28a5":function(e,t,a){a("214f")("split",2,function(e,t,r){"use strict";var i=a("aae3"),n=r,s=[].push,o="split",p="length",d="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[p]||2!="ab"[o](/(?:ab)*/)[p]||4!="."[o](/(.?)(.?)/)[p]||"."[o](/()()/)[p]>1||""[o](/.?/)[p]){var c=void 0===/()??/.exec("")[1];r=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(a,e,t);var r,o,u,l,h,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,f=void 0===t?4294967295:t>>>0,w=new RegExp(e.source,v+"g");c||(r=new RegExp("^"+w.source+"$(?!\\s)",v));while(o=w.exec(a)){if(u=o.index+o[0][p],u>g&&(m.push(a.slice(g,o.index)),!c&&o[p]>1&&o[0].replace(r,function(){for(h=1;h<arguments[p]-2;h++)void 0===arguments[h]&&(o[h]=void 0)}),o[p]>1&&o.index<a[p]&&s.apply(m,o.slice(1)),l=o[0][p],g=u,m[p]>=f))break;w[d]===o.index&&w[d]++}return g===a[p]?!l&&w.test("")||m.push(""):m.push(a.slice(g)),m[p]>f?m.slice(0,f):m}}else"0"[o](void 0,0)[p]&&(r=function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)});return[function(a,i){var n=e(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n,i):r.call(String(n),a,i)},r]})},"640f":function(e,t,a){},"96e8":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isLatest,expression:"appUpdater.isLatest"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isAndroid,expression:"appUpdater.isAndroid"}],staticStyle:{"text-align":"center",color:"white"}},[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.updateError,expression:"appUpdater.updateError"}],attrs:{type:"primary",size:"large"},on:{click:e.updateApp}},[e._v("Retry update again")]),a("h5",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.updateError,expression:"!appUpdater.updateError"}],staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isAndroid,expression:"!appUpdater.isAndroid"}],staticStyle:{"text-align":"center",color:"white"}},[a("h5",[e._v(e._s(e.appUpdater.updateTitle))])])])])])},i=[],n=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),s=a.n(n),o=a("ed08"),p=a("ac02"),d={name:"Login",data:function(){return{userId:"",password:"",appUpdater:{isLatest:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"https://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.1.0",downloadProcessValue:0,updateError:!1}}},methods:{login:function(e,t,a){var r=this,i="",n=t;0==a.length&&(a=o["a"].getTicks().toString(),n=o["a"].encryptPassword(a,t)),this.$showLoading(),p["a"].Login(e,n,a,i).then(function(s){if(s.data.OK){r.$closeLoading(),o["a"].setRemeberMe(e,n,a);var d=o["a"].getJobNumber(),c=s.data.Result,u={UsrAccountPK:c.UsrAccountPK,FirstName:c.FirstName,LastName:c.LastName,CurrentDateTime:c.CurrentDateTime,MinDateTime:c.MinDateTime,MaxDateTime:c.MaxDateTime,IsCompanyManager:c.IsCompanyManager,IsDivisionManager:c.IsDivisionManager,IsRegionManager:c.IsRegionManager,IsJobManager:c.IsJobManager,SearchJobNumber:d,SearchDateTime:c.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};o["a"].setUserToken(e,n,a,""),d?(o["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})):r.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),o["a"].setJobNumber(t),u.SearchJobNumber=t,o["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),o["a"].setUserSettings(u),r.$router.push({name:"JobTimesheetList"})})}else p["a"].LoginByEmployee("","","",e,t,i).then(function(i){if(r.$closeLoading(),i.data.OK){o["a"].setRemeberMe(e,t,a);var n=i.data.Result,s={IsEmployee:!0,HREmployeePK:n.HREmployeePK,FirstName:n.FirstName,LastName:n.LastName,CurrentDateTime:n.CurrentDateTime,MinDateTime:n.MinDateTime,MaxDateTime:n.MaxDateTime};o["a"].setUserToken(n.UserId,n.Password,n.Ticks,n.Secret),o["a"].setUserSettings(s),r.$router.push({name:"EmployeeTimesheetList"})}else r.$message({message:i.data.Error,type:"error"}),console.log(i.data.Error)}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})}).catch(function(e){r.$closeLoading(),r.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},autoLogin:function(){var e=o["a"].getRemeberMe();e.UserId.length>0&&(this.userId=e.userId,this.login(e.UserId,e.Password,e.Ticks))},checkVersion:function(e){var t=this,a=navigator.userAgent;this.appUpdater.isAndroid=a.indexOf("Android")>-1||a.indexOf("Linux")>-1||a.indexOf("Chrome")>-1,this.appUpdater.isAndroid?this.checkAndroidVersion(function(a){a?t.updateApp():e()}):this.checkIOSVersion(function(a){a?t.updateApp():e()})},checkAndroidVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".txt");s.a.get(a).then(function(a){var r=a.data.Version;r!=t.appUpdater.version?(t.appUpdater.updateTitle="Downloading new version...",e(!0)):e(!1)}).catch(function(e){t.$alert(e)})},checkIOSVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");s.a.get(a).then(function(a){for(var r="",i=a.data.split(/\r\n|[\r\n]/),n=0;n<i.length;n++){var s=i[n];if(s.endsWith("<key>bundle-version</key>")&&n+1<i.length){var o=i[n+1].indexOf("<string>");r=i[n+1].substring(o+8,o+8+5)}}r.length>0&&r!=t.appUpdater.version?(t.appUpdater.updateTitle="Please install the new version",e(!0)):e(!1)}).catch(function(e){t.$alert(e)})},updateApp:function(){if(this.appUpdater.isAndroid){var e=(new Date).getTime(),t="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".apk?v=").concat(e);this.updateAndroid(t)}else{var a="itms-services://?action=download-manifest&url=".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");this.updateIOS(a)}},updateAndroid:function(e){this.appUpdater.updateError=!1,this.appUpdater.downloadProcessValue=0;var t=this;try{window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,function(a){a.getFile("".concat(t.appUpdater.appName,".apk"),{create:!0,exclusive:!1},function(a){s()({method:"GET",url:e,responseType:"blob",onDownloadProgress:function(e){e.lengthComputable&&t.$nextTick(function(){t.appUpdater.downloadProcessValue=Math.round(e.loaded/e.total*100)})}}).then(function(e){var t=new Blob([e.data],{type:"application/vnd.android.package-archive"});a.createWriter(function(e){e.onwriteend=function(){cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},e.write(t)})}).catch(function(e){alert("download error: "+e),t.appUpdater.updateError=!0})},function(e){alert("error getting file! "+e),t.appUpdater.updateError=!0})},function(e){alert("error getting persistent fs! "+e),t.appUpdater.updateError=!0})}catch(a){alert(a),t.appUpdater.updateError=!0}},updateIOS:function(e){cordova.InAppBrowser.open(e,"_system","location=no")}},mounted:function(){var e=this;this.$cordova?this.checkVersion(function(){e.appUpdater.isLatest=!0,e.autoLogin()}):(this.appUpdater.isLatest=!0,this.autoLogin())}},c=d,u=(a("1801"),a("dac8"),a("2877")),l=Object(u["a"])(c,r,i,!1,null,"77699fa7",null);l.options.__file="Login.vue";t["default"]=l.exports},dac8:function(e,t,a){"use strict";var r=a("640f"),i=a.n(r);i.a}}]);
//# sourceMappingURL=Login.b261e4ac.js.map