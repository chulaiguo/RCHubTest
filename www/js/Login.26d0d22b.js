(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"28a5":function(e,t,n){n("214f")("split",2,function(e,t,s){"use strict";var i=n("aae3"),a=s,r=[].push,o="split",c="length",u="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var l=void 0===/()??/.exec("")[1];s=function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!i(e))return a.call(n,e,t);var s,o,d,m,g,h=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,v=void 0===t?4294967295:t>>>0,b=new RegExp(e.source,p+"g");l||(s=new RegExp("^"+b.source+"$(?!\\s)",p));while(o=b.exec(n)){if(d=o.index+o[0][c],d>f&&(h.push(n.slice(f,o.index)),!l&&o[c]>1&&o[0].replace(s,function(){for(g=1;g<arguments[c]-2;g++)void 0===arguments[g]&&(o[g]=void 0)}),o[c]>1&&o.index<n[c]&&r.apply(h,o.slice(1)),m=o[0][c],f=d,h[c]>=v))break;b[u]===o.index&&b[u]++}return f===n[c]?!m&&b.test("")||h.push(""):h.push(n.slice(f)),h[c]>v?h.slice(0,v):h}}else"0"[o](void 0,0)[c]&&(s=function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)});return[function(n,i){var a=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,a,i):s.call(String(a),n,i)},s]})},"640f":function(e,t,n){},"989d":function(e,t,n){"use strict";var s=n("ebeb"),i=n.n(s);i.a},a55b:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"wrapper"},[n("h3",[e._v("Login")]),n("div",{staticClass:"logo-login"}),n("font-awesome-icon",{attrs:{icon:"user"}}),n("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),n("font-awesome-icon",{attrs:{icon:"key"}}),n("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login("+e._s(e.version)+")")])],1)])},i=[],a=(n("aef6"),n("28a5"),n("6b54"),n("cadf"),n("551c"),n("097d"),n("bc3a")),r=n.n(a),o=n("ed08"),c=n("ac02"),u={name:"Login",data:function(){return{userId:"",password:"",version:"2.2.0"}},methods:{login:function(e,t,n){var s=this,i="",a=t;0==n.length&&(n=o["a"].getTicks().toString(),a=o["a"].encryptPassword(n,t)),this.$showLoading(),c["a"].Login(e,a,n,i).then(function(r){if(r.data.OK){s.$closeLoading(),o["a"].setRemeberMe(e,a,n);var u=o["a"].getJobNumber(),l=r.data.Result,d={UsrAccountPK:l.UsrAccountPK,FirstName:l.FirstName,LastName:l.LastName,CurrentDateTime:l.CurrentDateTime,MinDateTime:l.MinDateTime,MaxDateTime:l.MaxDateTime,IsCompanyManager:l.IsCompanyManager,IsDivisionManager:l.IsDivisionManager,IsRegionManager:l.IsRegionManager,IsJobManager:l.IsJobManager,SearchJobNumber:u,SearchDateTime:l.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};o["a"].setUserToken(e,a,n,""),u?(o["a"].setUserSettings(d),s.$router.push({name:"JobTimesheetList"})):s.$prompt("Please input job number").then(function(e){var t=e.value;e.action;o["a"].setJobNumber(t),d.SearchJobNumber=t,o["a"].setUserSettings(d),s.$router.push({name:"JobTimesheetList"})}).catch(function(e){o["a"].setUserSettings(d),s.$router.push({name:"JobTimesheetList"})})}else c["a"].LoginByEmployee("","","",e,t,i).then(function(i){if(s.$closeLoading(),i.data.OK){o["a"].setRemeberMe(e,t,n);var a=i.data.Result,r={IsEmployee:!0,HREmployeePK:a.HREmployeePK,FirstName:a.FirstName,LastName:a.LastName,CurrentDateTime:a.CurrentDateTime,MinDateTime:a.MinDateTime,MaxDateTime:a.MaxDateTime};o["a"].setUserToken(a.UserId,a.Password,a.Ticks,a.Secret),o["a"].setUserSettings(r),s.$router.push({name:"EmployeeTimesheetList"})}else s.$message({message:i.data.Error,type:"error"}),console.log(i.data.Error)}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")},checkVersion:function(){var e=this,t="https://raw.githubusercontent.com/chulaiguo/Certificate/master/ios/Enterprise/GitHubTest/RCHubBeta.plist";r.a.get(t).then(function(n){for(var s="",i=n.data.split(/\r\n|[\r\n]/),a=0;a<i.length;a++){var r=i[a];if(r.endsWith("<key>bundle-version</key>")&&a+1<i.length){var o=i[a+1].indexOf("<string>");s=i[a+1].substring(o+8,o+8+5),console.log(s)}}if(s.length>0&&s!=e.version){var c=navigator.userAgent,u=c.indexOf("Android")>-1||c.indexOf("Linux")>-1||c.indexOf("Chrome")>-1;if(u){console.log("android");var l=document.createElement("a");l.setAttribute("href",t),l.click()}else{console.log("ios");var d=document.createElement("a");d.setAttribute("href","itms-services://?action=download-manifest&url="+t);var m=document.createEvent("MouseEvent");m.initEvent("click",!1,!1),d.dispatchEvent(m)}}}).catch(function(e){console.log(e)})}},mounted:function(){this.checkVersion();var e=o["a"].getRemeberMe();e.UserId.length>0&&this.login(e.UserId,e.Password,e.Ticks)}},l=u,d=(n("989d"),n("dac8"),n("2877")),m=Object(d["a"])(l,s,i,!1,null,"78ee95e3",null);m.options.__file="Login.vue";t["default"]=m.exports},dac8:function(e,t,n){"use strict";var s=n("640f"),i=n.n(s);i.a},ebeb:function(e,t,n){}}]);
//# sourceMappingURL=Login.26d0d22b.js.map