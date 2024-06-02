(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77907836"],{"00d7":function(t,n,e){},"0a54":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("window",{attrs:{id:"window-games"}},[e("title-bar",{attrs:{icon:"games",title:t.$t("games")}},[e("controls")],1),e("address-bar",{attrs:{icon:t.icon("games"),location:t.$t("games"),hasSearch:!0}},[e("navigation")],1),e("div",{staticClass:"container"},[e("div",{staticClass:"headline"},[t._v(t._s(t.$t("games"))+" ("+t._s(t.offlineGames.length)+")")]),e("div",{staticClass:"items"},t._l(t.offlineGames,(function(n){return e("div",{key:n.id,staticClass:"item",on:{click:function(e){return e.stopPropagation(),t.open(n.id)}}},[e("img",{attrs:{src:t.icon(n.id),width:"50"}}),e("div",{staticClass:"text"},[e("div",[t._v(t._s(n.name))]),e("div",[t._v(t._s(n.creator||"Microsoft Corporation"))])])])})),0),e("div",{staticClass:"headline"},[t._v("Online Games ("+t._s(t.onlineGames.length)+")")]),e("div",{staticClass:"items"},t._l(t.onlineGames,(function(n){return e("div",{key:n.id,staticClass:"item",on:{click:function(e){return e.stopPropagation(),t.open(n.id)}}},[e("img",{attrs:{src:n.icon,width:"50"}}),e("div",{staticClass:"text"},[e("div",[t._v(t._s(n.name))]),e("div",[t._v(t._s(n.creator))])])])})),0)])],1)},i=[],s=e("1da1"),c=e("5530"),r=(e("7db0"),e("96cf"),e("2f62")),o=e("6792"),l=e("3af2"),u=e("6210"),d=e("962a"),f=e("1a7c"),h=e("10dc"),v=e("a6ed"),m=e("01b4"),p=e("bc3a"),b=e.n(p),g="https://raw.githubusercontent.com/Visnalize/resources/main/games.json",_={data:function(){return{offlineGames:v["a"],onlineGames:[]}},computed:Object(c["a"])({},Object(r["b"])(["theme","themes","windows"])),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,b.a.get(g);case 2:e=n.sent,a=e.data,t.onlineGames=a;case 5:case"end":return n.stop()}}),n)})))()},methods:{icon:function(t){return this.themes[this.theme].icon[t]},open:function(t){var n=this.onlineGames.find((function(n){return n.id===t}));n&&this.$store.commit(m["a"].GameOpen,n),this.$root.$emit(o["f"].OpenWindow,t)}},components:{Controls:l["a"],TitleBar:u["a"],AddressBar:d["a"],Navigation:f["a"],Window:h["a"]}},w=_,C=(e("c6d1"),e("2877")),x=Object(C["a"])(w,a,i,!1,null,null,null);n["default"]=x.exports},"129f":function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t===1/n:t!=t&&n!=n}},"1a7c":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation"},[e("button",{class:["button","round","mr-5",{active:t.activeBack}],on:{click:function(n){return t.$emit("navigate","back")}}},[t.isWin10?e("i",{staticClass:"las la-arrow-left"}):e("i",{staticClass:"fa fa-arrow-left"})]),e("button",{class:["button","round",{active:t.activeNext}],on:{click:function(n){return t.$emit("navigate","next")}}},[t.isWin10?e("i",{staticClass:"las la-arrow-right"}):e("i",{staticClass:"fa fa-arrow-right"})])])},i=[],s=e("5530"),c=e("2f62"),r={props:{activeBack:Boolean,activeNext:Boolean},computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["theme"])),{},{isWin10:function(){return"win10"===this.theme}})},o=r,l=(e("76bf"),e("2877")),u=Object(l["a"])(o,a,i,!1,null,"7562fab5",null);n["a"]=u.exports},"2eea":function(t,n,e){},"76bf":function(t,n,e){"use strict";e("846d")},"841c":function(t,n,e){"use strict";var a=e("d784"),i=e("825a"),s=e("1d80"),c=e("129f"),r=e("14c3");a("search",1,(function(t,n,e){return[function(n){var e=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,e):new RegExp(n)[t](String(e))},function(t){var a=e(n,t,this);if(a.done)return a.value;var s=i(t),o=String(this),l=s.lastIndex;c(l,0)||(s.lastIndex=0);var u=r(s,o);return c(s.lastIndex,l)||(s.lastIndex=l),null===u?-1:u.index}]}))},"846d":function(t,n,e){},"962a":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"addrbar"},[t._t("default"),t.icon&&t.location?e("div",{staticClass:"addr",style:{backgroundImage:"url("+t.icon+")"}},["string"===typeof t.location?e("label",[t._v(t._s(t.location))]):t._l(t.location,(function(n,a){return e("label",{key:a},[t._v(t._s(n))])}))],2):t._e(),t.hasSearch||t.search?e("div",{staticClass:"input"},[e("input",{attrs:{type:"search",placeholder:t.$t("search")+" "+t.currentLocation},on:{input:t.handleSearch}})]):t._e()],2)},i=[],s=(e("fb6a"),e("ac1f"),e("841c"),{props:{icon:{type:String,default:null},location:{type:[String,Array],default:null},search:Function,hasSearch:Boolean},computed:{currentLocation:function(){var t=this.location.slice(0);return"string"===typeof t?t:t.pop()}},methods:{handleSearch:function(t){this.search&&this.search(t)}}}),c=s,r=(e("f76a"),e("2877")),o=Object(r["a"])(c,a,i,!1,null,"1d256d67",null);n["a"]=o.exports},c6d1:function(t,n,e){"use strict";e("2eea")},f76a:function(t,n,e){"use strict";e("00d7")}}]);