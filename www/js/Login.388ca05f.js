(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"3eac":function(e,t,a){},"438f":function(e,t,a){"use strict";var s=a("3eac"),n=a.n(s);n.a},"640f":function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"wrapper"},[a("h3",[e._v("Login")]),a("div",{staticClass:"logo-login"}),a("font-awesome-icon",{attrs:{icon:"user"}}),a("mt-field",{staticClass:"user-id",attrs:{placeholder:"User Id",type:"text"},model:{value:e.userId,callback:function(t){e.userId=t},expression:"userId"}}),a("font-awesome-icon",{attrs:{icon:"key"}}),a("mt-field",{attrs:{placeholder:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.onLogin}},[e._v("Login(V2.2)")])],1)])},n=[],o=(a("6b54"),a("cadf"),a("551c"),a("097d"),a("ed08")),r=a("ac02"),i={name:"Login",data:function(){return{userId:"",password:""}},methods:{login:function(e,t,a){var s=this,n="",i=t;0==a.length&&(a=o["a"].getTicks().toString(),i=o["a"].encryptPassword(a,t)),this.$showLoading(),r["a"].Login(e,i,a,n).then(function(c){if(c.data.OK){s.$closeLoading(),o["a"].setRemeberMe(e,i,a);var u=o["a"].getJobNumber(),m=c.data.Result,l={UsrAccountPK:m.UsrAccountPK,FirstName:m.FirstName,LastName:m.LastName,CurrentDateTime:m.CurrentDateTime,MinDateTime:m.MinDateTime,MaxDateTime:m.MaxDateTime,IsCompanyManager:m.IsCompanyManager,IsDivisionManager:m.IsDivisionManager,IsRegionManager:m.IsRegionManager,IsJobManager:m.IsJobManager,SearchJobNumber:u,SearchDateTime:m.CurrentDateTime,SearchRegionPK:"",SearchRegionName:""};o["a"].setUserToken(e,i,a,""),u?(o["a"].setUserSettings(l),s.$router.push({name:"JobTimesheetList"})):s.$prompt("Please input job number").then(function(e){var t=e.value;e.action;o["a"].setJobNumber(t),l.SearchJobNumber=t,o["a"].setUserSettings(l),s.$router.push({name:"JobTimesheetList"})}).catch(function(e){o["a"].setUserSettings(l),s.$router.push({name:"JobTimesheetList"})})}else r["a"].LoginByEmployee("","","",e,t,n).then(function(n){if(s.$closeLoading(),n.data.OK){o["a"].setRemeberMe(e,t,a);var r=n.data.Result,i={IsEmployee:!0,HREmployeePK:r.HREmployeePK,FirstName:r.FirstName,LastName:r.LastName,CurrentDateTime:r.CurrentDateTime,MinDateTime:r.MinDateTime,MaxDateTime:r.MaxDateTime};o["a"].setUserToken(r.UserId,r.Password,r.Ticks,r.Secret),o["a"].setUserSettings(i),s.$router.push({name:"EmployeeTimesheetList"})}else s.$message({message:n.data.Error,type:"error"}),console.log(n.data.Error)}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})}).catch(function(e){s.$closeLoading(),s.showNetworkError(),console.log(e)})},checkUserInput:function(){return this.userId?!!this.password||(this.$alert("The password can not be empty.","Warning"),!1):(this.$alert("The user id can not be empty.","Warning"),!1)},onLogin:function(){this.checkUserInput()&&this.login(this.userId,this.password,"")}},mounted:function(){var e=o["a"].getRemeberMe();e.UserId.length>0&&this.login(e.UserId,e.Password,e.Ticks)}},c=i,u=(a("438f"),a("dac8"),a("2877")),m=Object(u["a"])(c,s,n,!1,null,"6bad9a4e",null);m.options.__file="Login.vue";t["default"]=m.exports},dac8:function(e,t,a){"use strict";var s=a("640f"),n=a.n(s);n.a}}]);
//# sourceMappingURL=Login.388ca05f.js.map