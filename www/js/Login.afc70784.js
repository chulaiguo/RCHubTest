(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"28a5":function(e,t,a){a("214f")("split",2,function(e,t,i){"use strict";var s=a("aae3"),o=i,n=[].push,r="split",p="length",c="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[p]||2!="ab"[r](/(?:ab)*/)[p]||4!="."[r](/(.?)(.?)/)[p]||"."[r](/()()/)[p]>1||""[r](/.?/)[p]){var d=void 0===/()??/.exec("")[1];i=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!s(e))return o.call(a,e,t);var i,r,l,u,h,m=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,f=void 0===t?4294967295:t>>>0,w=new RegExp(e.source,v+"g");d||(i=new RegExp("^"+w.source+"$(?!\\s)",v));while(r=w.exec(a)){if(l=r.index+r[0][p],l>g&&(m.push(a.slice(g,r.index)),!d&&r[p]>1&&r[0].replace(i,function(){for(h=1;h<arguments[p]-2;h++)void 0===arguments[h]&&(r[h]=void 0)}),r[p]>1&&r.index<a[p]&&n.apply(m,r.slice(1)),u=r[0][p],g=l,m[p]>=f))break;w[c]===r.index&&w[c]++}return g===a[p]?!u&&w.test("")||m.push(""):m.push(a.slice(g)),m[p]>f?m.slice(0,f):m}}else"0"[r](void 0,0)[p]&&(i=function(e,t){return void 0===e&&0===t?[]:o.call(this,e,t)});return[function(a,s){var o=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,o,s):i.call(String(o),a,s)},i]})},"3e03":function(e,t,a){},"640f":function(e,t,a){},"7bcf":function(e,t,a){"use strict";var i=a("3e03"),s=a.n(i);s.a},a55b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isLatest,expression:"appUpdater.isLatest"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.appUpdater.version)+")")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isLatest,expression:"!appUpdater.isLatest"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.appUpdater.isAndroid,expression:"appUpdater.isAndroid"}],staticStyle:{"text-align":"center",color:"white"}},[a("h5",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.appUpdater.isAndroid,expression:"!appUpdater.isAndroid"}],staticStyle:{"text-align":"center",color:"white"}},[a("h5",{staticStyle:{"margin-bottom":"0"}},[e._v(e._s(e.appUpdater.updateTitle))]),a("mt-progress",{attrs:{value:e.appUpdater.downloadProcessValue,"bar-height":5}},[a("div",{attrs:{slot:"start"},slot:"start"},[e._v("0%")]),a("div",{attrs:{slot:"end"},slot:"end"},[e._v(e._s(e.appUpdater.downloadProcessValue)+"%")])])],1)])])])},s=[],o=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),n=a.n(o),r=a("ed08"),p=a("ac02"),c={name:"Login",data:function(){return{userId:"",password:"",appUpdater:{isLatest:!1,isAndroid:!1,updateTitle:"Checking new version ...",updateBaseUrl:"https://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.1.0",downloadProcessValue:0}}},methods:{login:function(e,t,a){var i=this,s="",o=t;0==a.length&&(a=r["a"].getTicks().toString(),o=r["a"].encryptPassword(a,t)),this.$showLoading(),p["a"].Login(e,o,a,s).then(function(n){if(n.data.OK){i.$closeLoading(),r["a"].setRemeberMe(e,o,a);var c=r["a"].getJobNumber(),d=n.data.Result,l={UsrAccountPK:d.UsrAccountPK,FirstName:d.FirstName,LastName:d.LastName,CurrentDateTime:d.CurrentDateTime,MinDateTime:d.MinDateTime,MaxDateTime:d.MaxDateTime,IsCompanyManager:d.IsCompanyManager,IsDivisionManager:d.IsDivisionManager,IsRegionManager:d.IsRegionManager,IsJobManager:d.IsJobManager,SearchJobNumber:c,SearchDateTime:d.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};r["a"].setUserToken(e,o,a,""),c?(r["a"].setUserSettings(l),i.$router.push({name:"JobTimesheetList"})):i.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),r["a"].setJobNumber(t),l.SearchJobNumber=t,r["a"].setUserSettings(l),i.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),r["a"].setUserSettings(l),i.$router.push({name:"JobTimesheetList"})})}else p["a"].LoginByEmployee("","","",e,t,s).then(function(s){if(i.$closeLoading(),s.data.OK){r["a"].setRemeberMe(e,t,a);var o=s.data.Result,n={IsEmployee:!0,HREmployeePK:o.HREmployeePK,FirstName:o.FirstName,LastName:o.LastName,CurrentDateTime:o.CurrentDateTime,MinDateTime:o.MinDateTime,MaxDateTime:o.MaxDateTime};r["a"].setUserToken(o.UserId,o.Password,o.Ticks,o.Secret),r["a"].setUserSettings(n),i.$router.push({name:"EmployeeTimesheetList"})}else i.$message({message:s.data.Error,type:"error"}),console.log(s.data.Error)}).catch(function(e){i.$closeLoading(),i.showNetworkError(),console.log(e)})}).catch(function(e){i.$closeLoading(),i.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},autoLogin:function(){var e=r["a"].getRemeberMe();e.UserId.length>0&&(this.userId=e.userId,this.login(e.UserId,e.Password,e.Ticks))},checkVersion:function(e){var t=this;"Android"===device.platform?this.appUpdater.isAndroid=!0:this.appUpdater.isAndroid=!1,this.appUpdater.isAndroid?this.checkAndroidVersion(function(a){a?t.updateApp():e()}):this.checkIOSVersion(function(a){a?t.updateApp():e()})},checkAndroidVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".txt");n.a.get(a).then(function(a){var i=a.data.Version;i!=t.appUpdater.version?(t.appUpdater.updateTitle="Downloading new version...",e(!0)):e(!1)}).catch(function(e){t.showError(e)})},checkIOSVersion:function(e){var t=this,a="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");n.a.get(a).then(function(a){for(var i="",s=a.data.split(/\r\n|[\r\n]/),o=0;o<s.length;o++){var n=s[o];if(n.endsWith("<key>bundle-version</key>")&&o+1<s.length){var r=s[o+1].indexOf("<string>");i=s[o+1].substring(r+8,r+8+5)}}i.length>0&&i!=t.appUpdater.version?(t.appUpdater.updateTitle="Updating the App, please wait...",e(!0)):e(!1)}).catch(function(e){t.showError(e)})},updateApp:function(){if(this.appUpdater.isAndroid){var e=(new Date).getTime(),t="".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".apk?v=").concat(e);this.updateAndroid(t)}else{var a="itms-services://?action=download-manifest&url=".concat(this.appUpdater.updateBaseUrl,"/").concat(this.appUpdater.appName,"/").concat(this.appUpdater.appName,".plist");this.updateIOS(a)}},updateAndroid:function(e){var t=this;try{window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,function(a){a.getFile("".concat(t.appUpdater.appName,".apk"),{create:!0,exclusive:!1},function(a){n()({method:"GET",url:e,responseType:"blob",onDownloadProgress:function(e){e.lengthComputable&&t.$nextTick(function(){t.appUpdater.downloadProcessValue=Math.round(e.loaded/e.total*100)})}}).then(function(e){var t=new Blob([e.data],{type:"application/vnd.android.package-archive"});a.createWriter(function(e){e.onwriteend=function(){cordova.plugins.fileOpener2.open(a.toInternalURL(),"application/vnd.android.package-archive")},e.write(t)})}).catch(function(e){t.showError("download error: "+e)})},function(e){t.showError("error getting file! "+e)})},function(e){t.showError("error getting persistent fs! "+e)})}catch(a){t.showError(a)}},updateIOS:function(e){cordova.InAppBrowser.open(e,"_system","location=no"),this.simulateDownloadIOS()},simulateDownloadIOS:function(){var e=this;setTimeout(function(){e.appUpdater.downloadProcessValue>=100?cordova.plugins.exit():(e.$nextTick(function(){e.appUpdater.downloadProcessValue+=10}),e.simulateDownloadIOS())},1e3)},showError:function(e){navigator.notification.alert(e,function(){cordova.plugins.exit()})}},mounted:function(){var e=this;this.$cordova?this.checkVersion(function(){e.appUpdater.isLatest=!0,e.autoLogin()}):(this.appUpdater.isLatest=!0,this.autoLogin())}},d=c,l=(a("7bcf"),a("dac8"),a("2877")),u=Object(l["a"])(d,i,s,!1,null,"218767fe",null);u.options.__file="Login.vue";t["default"]=u.exports},dac8:function(e,t,a){"use strict";var i=a("640f"),s=a.n(i);s.a}}]);
//# sourceMappingURL=Login.afc70784.js.map