(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"28a5":function(e,t,a){a("214f")("split",2,function(e,t,s){"use strict";var n=a("aae3"),i=s,o=[].push,r="split",c="length",d="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[c]||2!="ab"[r](/(?:ab)*/)[c]||4!="."[r](/(.?)(.?)/)[c]||"."[r](/()()/)[c]>1||""[r](/.?/)[c]){var u=void 0===/()??/.exec("")[1];s=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return i.call(a,e,t);var s,r,l,p,h,m=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,f=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,g+"g");u||(s=new RegExp("^"+b.source+"$(?!\\s)",g));while(r=b.exec(a)){if(l=r.index+r[0][c],l>v&&(m.push(a.slice(v,r.index)),!u&&r[c]>1&&r[0].replace(s,function(){for(h=1;h<arguments[c]-2;h++)void 0===arguments[h]&&(r[h]=void 0)}),r[c]>1&&r.index<a[c]&&o.apply(m,r.slice(1)),p=r[0][c],v=l,m[c]>=f))break;b[d]===r.index&&b[d]++}return v===a[c]?!p&&b.test("")||m.push(""):m.push(a.slice(v)),m[c]>f?m.slice(0,f):m}}else"0"[r](void 0,0)[c]&&(s=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(a,n){var i=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i,n):s.call(String(i),a,n)},s]})},"640f":function(e,t,a){},"6dc0":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasUpdate,expression:"hasUpdate"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.version)+")")])],1),a("div",[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.hasUpdate,expression:"!hasUpdate"}],attrs:{type:"primary",size:"large"},on:{click:e.onUpdate}},[e._v(e._s(e.updateTitle))])],1)])])},n=[],i=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),o=a.n(i),r=a("ed08"),c=a("ac02"),d={name:"Login",data:function(){return{userId:"",password:"",isAndroid:!1,hasUpdate:!1,updateTitle:"Checking new version ...",updateBaseUrl:"https://rciupdatetest.azurewebsites.net/RCAppsHome",appName:"RCHub",version:"2.1.0"}},methods:{login:function(e,t,a){var s=this,n="",i=t;0==a.length&&(a=r["a"].getTicks().toString(),i=r["a"].encryptPassword(a,t)),this.$showLoading(),c["a"].Login(e,i,a,n).then(function(o){if(o.data.OK){s.$closeLoading(),r["a"].setRemeberMe(e,i,a);var d=r["a"].getJobNumber(),u=o.data.Result,l={UsrAccountPK:u.UsrAccountPK,FirstName:u.FirstName,LastName:u.LastName,CurrentDateTime:u.CurrentDateTime,MinDateTime:u.MinDateTime,MaxDateTime:u.MaxDateTime,IsCompanyManager:u.IsCompanyManager,IsDivisionManager:u.IsDivisionManager,IsRegionManager:u.IsRegionManager,IsJobManager:u.IsJobManager,SearchJobNumber:d,SearchDateTime:u.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};r["a"].setUserToken(e,i,a,""),d?(r["a"].setUserSettings(l),s.$router.push({name:"JobTimesheetList"})):s.$prompt("Please input job number").then(function(e){var t=e.value,a=e.action;console.log(a),r["a"].setJobNumber(t),l.SearchJobNumber=t,r["a"].setUserSettings(l),s.$router.push({name:"JobTimesheetList"})}).catch(function(e){console.log(e),r["a"].setUserSettings(l),s.$router.push({name:"JobTimesheetList"})})}else c["a"].LoginByEmployee("","","",e,t,n).then(function(n){if(s.$closeLoading(),n.data.OK){r["a"].setRemeberMe(e,t,a);var i=n.data.Result,o={IsEmployee:!0,HREmployeePK:i.HREmployeePK,FirstName:i.FirstName,LastName:i.LastName,CurrentDateTime:i.CurrentDateTime,MinDateTime:i.MinDateTime,MaxDateTime:i.MaxDateTime};r["a"].setUserToken(i.UserId,i.Password,i.Ticks,i.Secret),r["a"].setUserSettings(o),s.$router.push({name:"EmployeeTimesheetList"})}else s.$message({message:n.data.Error,type:"error"}),console.log(n.data.Error)}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkAndroidVersion:function(){var e=this,t="".concat(this.updateBaseUrl,"/").concat(this.appName,"/").concat(this.appName,".txt");o.a.get(t).then(function(t){var a=t.data.Version;if(a!=e.version)e.updateTitle="Update V".concat(e.version," to V").concat(a),e.onUpdate();else{e.hasUpdate=!0;var s=r["a"].getRemeberMe();s.UserId.length>0&&(e.userId=s.userId,e.login(s.UserId,s.Password,s.Ticks))}}).catch(function(t){console.log(t),e.$alert(t)})},checkIOSVersion:function(){var e=this,t="".concat(this.updateBaseUrl,"/").concat(this.appName,"/").concat(this.appName,".plist");o.a.get(t).then(function(t){for(var a="",s=t.data.split(/\r\n|[\r\n]/),n=0;n<s.length;n++){var i=s[n];if(i.endsWith("<key>bundle-version</key>")&&n+1<s.length){var o=s[n+1].indexOf("<string>");a=s[n+1].substring(o+8,o+8+5)}}if(a.length>0&&a!=e.version)e.updateTitle="Update V".concat(e.version," to V").concat(a),e.onUpdate();else{e.hasUpdate=!0;var c=r["a"].getRemeberMe();c.UserId.length>0&&(e.userId=c.userId,e.login(c.UserId,c.Password,c.Ticks))}}).catch(function(t){console.log(t),e.$alert(t)})},onUpdate:function(){var e="";e=this.isAndroid?"".concat(this.updateBaseUrl,"/").concat(this.appName,"-update-apk.html"):"".concat(this.updateBaseUrl,"/").concat(this.appName,"-update-ipa.html"),window.open(e,"_blank")}},mounted:function(){var e=navigator.userAgent;this.isAndroid=e.indexOf("Android")>-1||e.indexOf("Linux")>-1||e.indexOf("Chrome")>-1,this.isAndroid?this.checkAndroidVersion():this.checkIOSVersion()}},u=d,l=(a("bc9c"),a("dac8"),a("2877")),p=Object(l["a"])(u,s,n,!1,null,"b8cd2ca6",null);p.options.__file="Login.vue";t["default"]=p.exports},bc9c:function(e,t,a){"use strict";var s=a("6dc0"),n=a.n(s);n.a},dac8:function(e,t,a){"use strict";var s=a("640f"),n=a.n(s);n.a}}]);
//# sourceMappingURL=Login.e22f63bd.js.map