(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"0757":function(e,t,a){"use strict";var s=a("f92c"),n=a.n(s);n.a},"28a5":function(e,t,a){a("214f")("split",2,function(e,t,s){"use strict";var n=a("aae3"),i=s,o=[].push,r="split",c="length",u="lastIndex";if("c"=="abbc"[r](/(b)*/)[1]||4!="test"[r](/(?:)/,-1)[c]||2!="ab"[r](/(?:ab)*/)[c]||4!="."[r](/(.?)(.?)/)[c]||"."[r](/()()/)[c]>1||""[r](/.?/)[c]){var l=void 0===/()??/.exec("")[1];s=function(e,t){var a=String(this);if(void 0===e&&0===t)return[];if(!n(e))return i.call(a,e,t);var s,r,d,p,h,m=[],g=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,f=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,g+"g");l||(s=new RegExp("^"+b.source+"$(?!\\s)",g));while(r=b.exec(a)){if(d=r.index+r[0][c],d>v&&(m.push(a.slice(v,r.index)),!l&&r[c]>1&&r[0].replace(s,function(){for(h=1;h<arguments[c]-2;h++)void 0===arguments[h]&&(r[h]=void 0)}),r[c]>1&&r.index<a[c]&&o.apply(m,r.slice(1)),p=r[0][c],v=d,m[c]>=f))break;b[u]===r.index&&b[u]++}return v===a[c]?!p&&b.test("")||m.push(""):m.push(a.slice(v)),m[c]>f?m.slice(0,f):m}}else"0"[r](void 0,0)[c]&&(s=function(e,t){return void 0===e&&0===t?[]:i.call(this,e,t)});return[function(a,n){var i=e(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,i,n):s.call(String(i),a,n)},s]})},"640f":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasUpdate,expression:"hasUpdate"}]},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.version)+")")])],1),a("div",[a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.hasUpdate,expression:"!hasUpdate"}],attrs:{type:"primary",size:"large"},on:{click:e.onUpdate}},[e._v(e._s(e.updateTitle))]),a("a",{directives:[{name:"show",rawName:"v-show",value:!e.hasUpdate,expression:"!hasUpdate"}],staticClass:"update-class mint-button",attrs:{href:e.updateUrl}},[e._v(e._s(e.updateTitle))])],1)])])},n=[],i=(a("aef6"),a("28a5"),a("6b54"),a("cadf"),a("551c"),a("097d"),a("bc3a")),o=a.n(i),r=a("ed08"),c=a("ac02"),u={name:"Login",data:function(){return{userId:"",password:"",hasUpdate:!1,updateUrl:"",updateTitle:"Checking new version ...",version:"2.1.0"}},methods:{login:function(e,t,a){var s=this,n="",i=t;0==a.length&&(a=r["a"].getTicks().toString(),i=r["a"].encryptPassword(a,t)),this.$showLoading(),c["a"].Login(e,i,a,n).then(function(o){if(o.data.OK){s.$closeLoading(),r["a"].setRemeberMe(e,i,a);var u=r["a"].getJobNumber(),l=o.data.Result,d={UsrAccountPK:l.UsrAccountPK,FirstName:l.FirstName,LastName:l.LastName,CurrentDateTime:l.CurrentDateTime,MinDateTime:l.MinDateTime,MaxDateTime:l.MaxDateTime,IsCompanyManager:l.IsCompanyManager,IsDivisionManager:l.IsDivisionManager,IsRegionManager:l.IsRegionManager,IsJobManager:l.IsJobManager,SearchJobNumber:u,SearchDateTime:l.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};r["a"].setUserToken(e,i,a,""),u?(r["a"].setUserSettings(d),s.$router.push({name:"JobTimesheetList"})):s.$prompt("Please input job number").then(function(e){var t=e.value;e.action;r["a"].setJobNumber(t),d.SearchJobNumber=t,r["a"].setUserSettings(d),s.$router.push({name:"JobTimesheetList"})}).catch(function(e){r["a"].setUserSettings(d),s.$router.push({name:"JobTimesheetList"})})}else c["a"].LoginByEmployee("","","",e,t,n).then(function(n){if(s.$closeLoading(),n.data.OK){r["a"].setRemeberMe(e,t,a);var i=n.data.Result,o={IsEmployee:!0,HREmployeePK:i.HREmployeePK,FirstName:i.FirstName,LastName:i.LastName,CurrentDateTime:i.CurrentDateTime,MinDateTime:i.MinDateTime,MaxDateTime:i.MaxDateTime};r["a"].setUserToken(i.UserId,i.Password,i.Ticks,i.Secret),r["a"].setUserSettings(o),s.$router.push({name:"EmployeeTimesheetList"})}else s.$message({message:n.data.Error,type:"error"}),console.log(n.data.Error)}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkVersion:function(){var e=this,t="https://raw.githubusercontent.com/chulaiguo/Certificate/master/ios/Enterprise/GitHubTest/RCHubBeta.plist";o.a.get(t).then(function(t){for(var a="",s=t.data.split(/\r\n|[\r\n]/),n=0;n<s.length;n++){var i=s[n];if(i.endsWith("<key>bundle-version</key>")&&n+1<s.length){var o=s[n+1].indexOf("<string>");a=s[n+1].substring(o+8,o+8+5),console.log(a)}}if(a.length>0&&a!=e.version){var c=navigator.userAgent,u=c.indexOf("Android")>-1||c.indexOf("Linux")>-1||c.indexOf("Chrome")>-1;u?(console.log("android"),e.updateUrl="http://web.apvia.org.cn/update-apk.".concat(a,".html"),e.updateTitle="Update V".concat(e.version," to V").concat(a)):(console.log("ios"),e.updateUrl="http://web.apvia.org.cn/update-ipa.html",e.updateTitle="Update V".concat(e.version," to V").concat(a))}else{e.hasUpdate=!0;var l=r["a"].getRemeberMe();l.UserId.length>0&&e.login(l.UserId,l.Password,l.Ticks)}}).catch(function(t){console.log(t),e.$alert(t)})},onUpdate:function(){window.open(this.updateUrl,"_blank")}},mounted:function(){this.checkVersion()}},l=u,d=(a("0757"),a("dac8"),a("2877")),p=Object(d["a"])(l,s,n,!1,null,"5916c680",null);p.options.__file="Login.vue";t["default"]=p.exports},dac8:function(e,t,a){"use strict";var s=a("640f"),n=a.n(s);n.a},f92c:function(e,t,a){}}]);
//# sourceMappingURL=Login.26aa5d7c.js.map