(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["EquipmentRepair"],{1108:function(t,e,i){},"37c8":function(t,e,i){e.f=i("2b4c")},"3a72":function(t,e,i){var n=i("7726"),o=i("8378"),a=i("2d00"),s=i("37c8"),r=i("86cc").f;t.exports=function(t){var e=o.Symbol||(o.Symbol=a?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||r(e,t,{value:s.f(t)})}},"462f":function(t,e,i){},"4f64":function(t,e,i){"use strict";var n=i("462f"),o=i.n(n);o.a},"648f":function(t,e,i){},"67ab":function(t,e,i){var n=i("ca5a")("meta"),o=i("d3f4"),a=i("69a8"),s=i("86cc").f,r=0,u=Object.isExtensible||function(){return!0},c=!i("79e5")(function(){return u(Object.preventExtensions({}))}),p=function(t){s(t,n,{value:{i:"O"+ ++r,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!u(t))return"F";if(!e)return"E";p(t)}return t[n].i},m=function(t,e){if(!a(t,n)){if(!u(t))return!0;if(!e)return!1;p(t)}return t[n].w},f=function(t){return c&&h.NEED&&u(t)&&!a(t,n)&&p(t),t},h=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:m,onFreeze:f}},"6ca2":function(t,e,i){"use strict";var n=i("1108"),o=i.n(n);o.a},7538:function(t,e,i){"use strict";var n=i("be3b"),o=i.n(n);o.a},"79b8":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-view")],1)},o=[],a={name:"EquipmentRepairLayout"},s=a,r=(i("6ca2"),i("2877")),u=Object(r["a"])(s,n,o,!1,null,"d7c69d08",null);u.options.__file="EquipmentRepairLayout.vue";e["default"]=u.exports},"7bbc":function(t,e,i){var n=i("6821"),o=i("9093").f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],r=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==a.call(t)?r(t):o(n(t))}},"8a81":function(t,e,i){"use strict";var n=i("7726"),o=i("69a8"),a=i("9e1e"),s=i("5ca1"),r=i("2aba"),u=i("67ab").KEY,c=i("79e5"),p=i("5537"),l=i("7f20"),m=i("ca5a"),f=i("2b4c"),h=i("37c8"),b=i("3a72"),d=i("d4c0"),v=i("1169"),g=i("cb7c"),y=i("d3f4"),E=i("6821"),S=i("6a99"),q=i("4630"),L=i("2aeb"),w=i("7bbc"),k=i("11e9"),R=i("86cc"),$=i("0d58"),_=k.f,C=R.f,P=w.f,N=n.Symbol,F=n.JSON,x=F&&F.stringify,O="prototype",T=f("_hidden"),j=f("toPrimitive"),K={}.propertyIsEnumerable,M=p("symbol-registry"),A=p("symbols"),J=p("op-symbols"),D=Object[O],z="function"==typeof N,G=n.QObject,I=!G||!G[O]||!G[O].findChild,V=a&&c(function(){return 7!=L(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,e,i){var n=_(D,e);n&&delete D[e],C(t,e,i),n&&t!==D&&C(D,e,n)}:C,U=function(t){var e=A[t]=L(N[O]);return e._k=t,e},H=z&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},B=function(t,e,i){return t===D&&B(J,e,i),g(t),e=S(e,!0),g(i),o(A,e)?(i.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),i=L(i,{enumerable:q(0,!1)})):(o(t,T)||C(t,T,q(1,{})),t[T][e]=!0),V(t,e,i)):C(t,e,i)},W=function(t,e){g(t);var i,n=d(e=E(e)),o=0,a=n.length;while(a>o)B(t,i=n[o++],e[i]);return t},Y=function(t,e){return void 0===e?L(t):W(L(t),e)},Q=function(t){var e=K.call(this,t=S(t,!0));return!(this===D&&o(A,t)&&!o(J,t))&&(!(e||!o(this,t)||!o(A,t)||o(this,T)&&this[T][t])||e)},X=function(t,e){if(t=E(t),e=S(e,!0),t!==D||!o(A,e)||o(J,e)){var i=_(t,e);return!i||!o(A,e)||o(t,T)&&t[T][e]||(i.enumerable=!0),i}},Z=function(t){var e,i=P(E(t)),n=[],a=0;while(i.length>a)o(A,e=i[a++])||e==T||e==u||n.push(e);return n},tt=function(t){var e,i=t===D,n=P(i?J:E(t)),a=[],s=0;while(n.length>s)!o(A,e=n[s++])||i&&!o(D,e)||a.push(A[e]);return a};z||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=m(arguments.length>0?arguments[0]:void 0),e=function(i){this===D&&e.call(J,i),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),V(this,t,q(1,i))};return a&&I&&V(D,t,{configurable:!0,set:e}),U(t)},r(N[O],"toString",function(){return this._k}),k.f=X,R.f=B,i("9093").f=w.f=Z,i("52a7").f=Q,i("2621").f=tt,a&&!i("2d00")&&r(D,"propertyIsEnumerable",Q,!0),h.f=function(t){return U(f(t))}),s(s.G+s.W+s.F*!z,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;et.length>it;)f(et[it++]);for(var nt=$(f.store),ot=0;nt.length>ot;)b(nt[ot++]);s(s.S+s.F*!z,"Symbol",{for:function(t){return o(M,t+="")?M[t]:M[t]=N(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){I=!0},useSimple:function(){I=!1}}),s(s.S+s.F*!z,"Object",{create:Y,defineProperty:B,defineProperties:W,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&s(s.S+s.F*(!z||c(function(){var t=N();return"[null]"!=x([t])||"{}"!=x({a:t})||"{}"!=x(Object(t))})),"JSON",{stringify:function(t){var e,i,n=[t],o=1;while(arguments.length>o)n.push(arguments[o++]);if(i=e=n[1],(y(e)||void 0!==t)&&!H(t))return v(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!H(e))return e}),n[1]=e,x.apply(F,n)}}),N[O][j]||i("32e9")(N[O],j,N[O].valueOf),l(N,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},"8d6a":function(t,e,i){"use strict";var n=i("648f"),o=i.n(n);o.a},"97c7":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-header"},[n("mt-header",{staticClass:"container",attrs:{title:"Pending Equipment Repair List"}},[n("span",{attrs:{slot:"left"},on:{click:t.onShowMenu},slot:"left"},[n("font-awesome-icon",{attrs:{icon:"bars",size:"2x"}})],1),n("span",{attrs:{slot:"right"},on:{click:function(e){t.popupEquipment.visible=!0}},slot:"right"},[n("font-awesome-icon",{attrs:{icon:"plus",size:"2x"}})],1)])],1),n("div",{staticClass:"page-body container"},[t._l(t.listArray,function(e){return n("div",{key:e.EqpRepairPK,staticClass:"wrapper"},[n("mt-cell",[n("span",{attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"job"},[t._v(t._s(e.JobNumber))]),n("br"),n("span",{staticClass:"name"},[t._v(t._s(e.EquipmentName+"("+e.SerialNumb+")"))]),n("br"),n("span",{staticClass:"status"},[t._v(t._s(e.RepairStatusView))])]),n("mt-button",{attrs:{icon:"more"},on:{click:function(i){t.onDetail(e.EqpRepairPK)}}})],1)],1)}),n("mt-popup",{staticClass:"equipment",model:{value:t.popupEquipment.visible,callback:function(e){t.$set(t.popupEquipment,"visible",e)},expression:"popupEquipment.visible"}},[n("mt-field",{attrs:{label:"Job Number",placeholder:"input job number",type:"text"},model:{value:t.popupEquipment.jobNumber,callback:function(e){t.$set(t.popupEquipment,"jobNumber",e)},expression:"popupEquipment.jobNumber"}}),n("div",{staticClass:"button-group"},[n("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.onSearch}},[n("font-awesome-icon",{attrs:{icon:"search"}})],1),n("mt-button",{attrs:{size:"large",type:"default"},on:{click:t.onSearchCancel}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1),t._l(t.popupEquipment.listArray,function(e){return n("div",{key:e.EqpEquipmentPK},[n("mt-cell",[n("span",{attrs:{slot:"title"},slot:"title"},[n("span",[t._v(t._s(e.EquipmentType))]),n("span",[t._v(t._s(e.EquipmentName))]),n("span",[t._v(t._s(e.SerialNumb))])]),n("span",{on:{click:function(i){t.onUseEquipment(e.EqpEquipmentPK)}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)])],1)})],2),n("mt-popup",{staticClass:"submit",model:{value:t.popupSubmit.visible,callback:function(e){t.$set(t.popupSubmit,"visible",e)},expression:"popupSubmit.visible"}},[n("div",{staticClass:"comments"},[n("h5",[t._v("Comments")]),n("mt-field",{attrs:{type:"textarea",rows:"5"},model:{value:t.popupSubmit.comments,callback:function(e){t.$set(t.popupSubmit,"comments",e)},expression:"popupSubmit.comments"}})],1),n("div",{staticClass:"photo"},[n("h5",[t._v("Photo")]),t.popupSubmit.photo.length>0?n("img",{attrs:{src:"data:image/jpeg;base64,"+t.popupSubmit.photo}}):n("img",{attrs:{src:i("d073")}}),n("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.onSubmitTakePhoto}},[n("font-awesome-icon",{attrs:{icon:"camera"}})],1),n("br")],1),n("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.onSubmit}},[n("font-awesome-icon",{attrs:{icon:"check"}})],1),n("mt-button",{attrs:{size:"large",type:"default"},on:{click:t.onSubmitCancel}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1),n("mt-popup",{staticClass:"menu",attrs:{position:"left"},model:{value:t.popupMenu.visible,callback:function(e){t.$set(t.popupMenu,"visible",e)},expression:"popupMenu.visible"}},[n("ul",[n("li",{on:{click:t.onJob}},[n("font-awesome-icon",{attrs:{icon:"building"}}),n("span",[t._v("Job")])],1),n("li",{on:{click:t.onRegion}},[n("font-awesome-icon",{attrs:{icon:"city"}}),n("span",[t._v("Region")])],1),n("li",{on:{click:t.onLogout}},[n("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),n("span",[t._v("Louout")])],1)])])],2)])},o=[],a=i("ac02"),s=i("ed08"),r={name:"EquipmentRepairList",data:function(){return{listArray:[],manager:{},popupEquipment:{jobNumber:"",listArray:[],visible:!1},popupSubmit:{EqpEquipmentPK:"",comments:"",photo:"",visible:!1},popupMenu:{visible:!1}}},methods:{onSearch:function(){var t=this;this.$showLoading(),a["a"].GetEquipmentListByJobNumber(this.popupEquipment.jobNumber).then(function(e){e.data.OK?t.popupEquipment.listArray=e.data.Result:(t.$alert(e.data.Error,"Error"),console.log(e.data.Error)),t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})},onSearchCancel:function(){this.popupEquipment.visible=!1},onUseEquipment:function(t){this.popupEquipment.visible=!1,this.popupSubmit.EqpEquipmentPK=t,this.popupSubmit.visible=!0},onSubmitTakePhoto:function(){var t=this;this.$takeCameraPicture(function(e){t.popupSubmit.photo=e})},onSubmit:function(){var t=this;0!=this.popupSubmit.comments.length?(this.popupSubmit.visible=!1,this.$showLoading(),a["a"].SubmitEquipmentRepair(this.popupSubmit.EqpEquipmentPK,this.popupSubmit.comments,this.popupSubmit.photo).then(function(e){if(t.$closeLoading(),e.data.OK){var i=e.data.Result;t.listArray.push(i),t.$store.commit("setEquipmentRepairList",t.listArray)}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error)}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})):this.$alert("The comments can not be empty.")},onSubmitCancel:function(){this.popupSubmit.visible=!1},onDetail:function(t){this.$router.push({name:"EquipmentRepairDetail",params:{PK:t}})},getList:function(){var t=this;this.$showLoading(),a["a"].GetEquipmentRepairPendingList().then(function(e){t.$closeLoading(),e.data.OK?(t.listArray=e.data.Result,t.$store.commit("setEquipmentRepairList",t.listArray)):(t.$alert(e.data.Error,"Error"),console.log(e.data.Error))}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()})},onShowMenu:function(){this.popupMenu.visible=!0},onRegion:function(){this.$router.push({name:"RegionTimesheetList"})},onJob:function(){this.$router.push({name:"JobTimesheetList"})},onLogout:function(){s["a"].logout(),this.$router.push({name:"Login"})}},mounted:function(){this.manager=s["a"].getUserSettings(),this.$store.state.equipmentRepairList.length>0?this.listArray=this.$store.state.equipmentRepairList:this.getList()}},u=r,c=(i("4f64"),i("2877")),p=Object(c["a"])(u,n,o,!1,null,"4934835a",null);p.options.__file="EquipmentRepairList.vue";e["default"]=p.exports},ac4d:function(t,e,i){i("3a72")("asyncIterator")},ac6a:function(t,e,i){for(var n=i("cadf"),o=i("0d58"),a=i("2aba"),s=i("7726"),r=i("32e9"),u=i("84f2"),c=i("2b4c"),p=c("iterator"),l=c("toStringTag"),m=u.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=o(f),b=0;b<h.length;b++){var d,v=h[b],g=f[v],y=s[v],E=y&&y.prototype;if(E&&(E[p]||r(E,p,m),E[l]||r(E,l,v),u[v]=m,g))for(d in n)E[d]||a(E,d,n[d],!0)}},aef4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-header"},[n("mt-header",{staticClass:"container",attrs:{title:"Equipment Repair Detail"}},[n("router-link",{attrs:{slot:"left",to:{name:"EquipmentRepairList"}},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("Back")])],1),n("mt-button",{attrs:{slot:"right",icon:"more"},on:{click:t.onMore},slot:"right"})],1)],1),n("div",{staticClass:"page-body container equipment-detail"},[n("mt-field",{attrs:{disabled:"",label:"Job#",type:"text",readonly:"readonly"},model:{value:t.entity.JobNumber,callback:function(e){t.$set(t.entity,"JobNumber",e)},expression:"entity.JobNumber"}}),n("mt-field",{attrs:{disabled:"",label:"Name",type:"text",readonly:"readonly"},model:{value:t.entity.EquipmentName,callback:function(e){t.$set(t.entity,"EquipmentName",e)},expression:"entity.EquipmentName"}}),n("mt-field",{attrs:{disabled:"",label:"Serial#",type:"text",readonly:"readonly"},model:{value:t.entity.SerialNumb,callback:function(e){t.$set(t.entity,"SerialNumb",e)},expression:"entity.SerialNumb"}}),t.entity.RepairComments.length>0?n("div",{staticClass:"comments"},[n("h5",[t._v("Comments")]),t._l(t.entity.RepairComments.split(";"),function(e){return n("div",{key:e},[n("p",[t._v(t._s(e))])])})],2):t._e(),t._l(t.entity.RepairAttached,function(e){return n("div",{key:e.EqpRepairAttachedPK},[e.Attached.length>0?n("div",{staticClass:"attached"},[n("h5",[t._v(t._s(e.FileName))]),n("img",{attrs:{src:"data:image/jpeg;base64,"+e.Attached}})]):t._e()])})],2),n("mt-popup",{staticClass:"functions",model:{value:t.popupFunctions.visible,callback:function(e){t.$set(t.popupFunctions,"visible",e)},expression:"popupFunctions.visible"}},[n("div",{staticClass:"comments"},[n("h5",[t._v("Comments")]),n("mt-field",{attrs:{type:"textarea",rows:"5"},model:{value:t.popupFunctions.comments,callback:function(e){t.$set(t.popupFunctions,"comments",e)},expression:"popupFunctions.comments"}})],1),n("div",{staticClass:"photo"},[n("h5",[t._v("Photo")]),t.popupFunctions.photo.length>0?n("img",{attrs:{src:"data:image/jpeg;base64,"+t.popupFunctions.photo}}):n("img",{attrs:{src:i("d073")}}),n("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.onFunctionsTakePhoto}},[n("font-awesome-icon",{attrs:{icon:"camera"}})],1),n("br")],1),n("div",{staticClass:"button-group"},[n("mt-button",{attrs:{size:"large",type:"primary"},on:{click:t.onFunctions}},[n("font-awesome-icon",{attrs:{icon:"check"}})],1),n("mt-button",{attrs:{size:"large",type:"default"},on:{click:t.onFunctionsCancel}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1)]),n("mt-actionsheet",{attrs:{actions:t.command.actions,cancelText:"Cancel"},model:{value:t.command.visible,callback:function(e){t.$set(t.command,"visible",e)},expression:"command.visible"}})],1)},o=[],a=(i("f751"),i("ac4d"),i("8a81"),i("ac6a"),i("ac02")),s=(i("ed08"),{name:"EquipmentRepairDetail",data:function(){return{entity:{RepairComments:""},command:{actions:[],visible:!1},popupFunctions:{functionId:0,comments:"",photo:"",visible:!1}}},methods:{onMore:function(){this.command.visible=!0},pickedUp:function(){this.command.visible=!1,this.popupFunctions.functionId=0,this.popupFunctions.visible=!0},returned:function(){this.command.visible=!1,this.popupFunctions.functionId=1,this.popupFunctions.visible=!0},onFunctionsTakePhoto:function(){var t=this;this.$takeCameraPicture(function(e){t.popupFunctions.photo=e})},onFunctions:function(){var t=this;switch(this.popupFunctions.visible=!1,this.$showLoading(),this.popupFunctions.functionId){case 0:a["a"].PickedUpEquipmentRepair(this.entity.EqpRepairPK,this.popupFunctions.comments,this.popupFunctions.photo).then(function(e){if(t.$closeLoading(),e.data.OK){var i=e.data.Result,n=!0,o=!1,a=void 0;try{for(var s,r=t.$store.state.equipmentRepairList[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var u=s.value;if(u.EqpRepairPK==t.entity.EqpRepairPK){Object.assign(u,i);break}}}catch(c){o=!0,a=c}finally{try{n||null==r.return||r.return()}finally{if(o)throw a}}t.$router.push({name:"EquipmentRepairList"})}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error)}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()});break;case 1:a["a"].ReturnedEquipmentRepair(this.entity.EqpRepairPK,this.popupFunctions.comments,this.popupFunctions.photo).then(function(e){if(t.$closeLoading(),e.data.OK){for(var i=e.data.Result,n=t.$store.state.equipmentRepairList,o=n.length-1;o>=0;o--)if(n[o].EqpRepairPK==i.EqpRepairPK){n.splice(o,1);break}t.$router.push({name:"EquipmentRepairList"})}else t.$alert(e.data.Error,"Error"),console.log(e.data.Error)}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()});break}},onFunctionsCancel:function(){this.popupFunctions.visible=!1}},mounted:function(){var t=this,e=this.$route.params.PK;this.$showLoading(),a["a"].GetEquipmentRepair(e).then(function(e){e.data.OK?t.entity=e.data.Result:(t.$alert(e.data.Error,"Error"),console.log(e.data.Error)),t.$closeLoading()}).catch(function(e){t.showNetworkError(),console.log(e),t.$closeLoading()}),this.command.actions.push({name:"Picked-Up",method:this.pickedUp}),this.command.actions.push({name:"Returned",method:this.returned})}}),r=s,u=(i("7538"),i("8d6a"),i("2877")),c=Object(u["a"])(r,n,o,!1,null,"b82e3c4e",null);c.options.__file="EquipmentRepairDetail.vue";e["default"]=c.exports},be3b:function(t,e,i){},d073:function(t,e,i){t.exports=i.p+"img/noimage.jpg"},d4c0:function(t,e,i){var n=i("0d58"),o=i("2621"),a=i("52a7");t.exports=function(t){var e=n(t),i=o.f;if(i){var s,r=i(t),u=a.f,c=0;while(r.length>c)u.call(t,s=r[c++])&&e.push(s)}return e}}}]);
//# sourceMappingURL=EquipmentRepair.js.map