(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d672a0c"],{"0829":function(t,e,s){t.exports=s.p+"media/purblepair-win.ada4f69e.mp3"},"0a60":function(t,e,s){"use strict";s("d057")},"0cd7":function(t,e,s){},"0e90":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("window-static",{attrs:{id:t.id}},[s("title-bar",{attrs:{title:t.$t("reset")+" "+t.$t("statistics")}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.handleClose}})],1),s("div",{staticClass:"container"},[s("div",{staticClass:"mb-5"},[t._v(t._s(t.$t("confirm-reset")))]),s("section",[s("button",{staticClass:"bt bt-primary",on:{click:t.reset}},[t._v(" "+t._s(t.$t("yes"))+" ")]),s("button",{staticClass:"bt bt-secondary",on:{click:t.handleClose}},[t._v(" "+t._s(t.$t("no"))+" ")])])])],1)},i=[],r=s("7e41"),n=s("3af2"),o=s("6210"),c={props:{id:String,close:Function},methods:{handleClose:function(){this.close&&this.close()},reset:function(){this.$emit("reset")}},components:{TitleBar:o["a"],Controls:n["a"],WindowStatic:r["a"]}},l=c,u=(s("d11b"),s("2877")),d=Object(u["a"])(l,a,i,!1,null,"d39e3370",null);e["a"]=d.exports},1148:function(t,e,s){"use strict";var a=s("a691"),i=s("1d80");t.exports=function(t){var e=String(i(this)),s="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(s+=e);return s}},"15b0":function(t,e,s){"use strict";s("e1b6")},2771:function(t,e,s){},"2f10":function(t,e,s){},"30dd":function(t,e,s){t.exports=s.p+"media/error-win2k.b380dff0.mp3"},3883:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"statusbar"},[t._t("default")],2)},i=[],r=(s("485e"),s("2877")),n={},o=Object(r["a"])(n,a,i,!1,null,"21410e7c",null);e["a"]=o.exports},"408a":function(t,e,s){var a=s("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"485e":function(t,e,s){"use strict";s("f83b")},"74ec":function(t,e,s){t.exports=s.p+"media/error-win10.8d111783.mp3"},"7e41":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["window","active",{centered:t.centered}]},[t._t("default")],2)},i=[],r={props:{centered:{type:Boolean,default:!0}}},n=r,o=(s("d5c9"),s("2877")),c=Object(o["a"])(n,a,i,!1,null,"ce7844fc",null);e["a"]=c.exports},"83bf":function(t,e,s){"use strict";s("0cd7")},"8c16":function(t,e,s){t.exports=s.p+"media/purblepair-correct.ec32ada6.mp3"},"94c3":function(t,e,s){"use strict";s("2f10")},9951:function(t,e,s){},a0fc:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"root-container game-container"},[s("window",{staticClass:"maximized",attrs:{id:"window-purbleplace",lock:!!t.result||!!t.stats||!!t.error}},[s("title-bar",{attrs:{icon:"purbleplace",title:"Purble Place"}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1}})],1),s("div",{staticClass:"toolbar"},[s("div",{staticClass:"toolbar-item"},[t._v(" "+t._s(t.$t("game"))+" "),s("ul",{staticClass:"toolbar-item-lv2",class:t.game?"":"toolbar-menu"},[t.game?[s("li",{on:{click:function(e){t.compKey++}}},[t._v(t._s(t.$t("new-game")))]),s("li",{staticClass:"separator"}),s("li",{on:{click:function(e){return t.changeLevel(0)}}},[t._v(t._s(t.$t("beginner")))]),s("li",{on:{click:function(e){return t.changeLevel(1)}}},[t._v(t._s(t.$t("intermediate")))]),s("li",{on:{click:function(e){return t.changeLevel(2)}}},[t._v(t._s(t.$t("advanced")))]),s("li",{staticClass:"separator"}),s("li",{on:{click:function(e){return t.select("")}}},[t._v(t._s(t.$t("main-menu")))])]:[s("li",{staticClass:"text-muted"},[t._v(t._s(t.$t("new-game"))+" Comfy Cakes")]),s("li",{on:{click:function(e){return t.select(t.Game.PurbleShop)}}},[t._v(" "+t._s(t.$t("new-game"))+" Purble Shop ")]),s("li",{on:{click:function(e){return t.select(t.Game.PurblePair)}}},[t._v(" "+t._s(t.$t("new-game"))+" Purble Pair ")]),s("li",{staticClass:"separator"}),s("li",{on:{click:t.toggleStats}},[t._v(t._s(t.$t("statistics")))]),s("li",{staticClass:"separator"})],s("li",{on:{click:function(e){return e.stopPropagation(),t.$root.$emit("close","purble")}}},[t._v(" "+t._s(t.$t("exit"))+" ")])],2)]),s("div",{staticClass:"toolbar-item text-muted"},[t._v(t._s(t.$t("help")))])]),s("div",{staticClass:"container p-0"},[t.game?t._e():s("main-menu",{on:{select:t.select}}),t.game===t.Game.PurblePair?s("purble-pair",{key:t.compKey,attrs:{level:t.level,stats:t.gameStats[t.game]},on:{result:t.showResult}}):t._e(),t.game===t.Game.ComfyCakes?s("comfy-cakes",{key:t.compKey,attrs:{level:t.level}}):t._e(),t.game===t.Game.PurbleShop?s("purble-shop",{key:t.compKey,attrs:{level:t.level,stats:t.gameStats[t.game]},on:{result:t.showResult}}):t._e()],1)],1),t.result?s("window-static",{attrs:{id:"window-purbleplace-result"}},[s("title-bar",{attrs:{title:t.$t(t.result.won?"games-won":"games-lost")}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1}})],1),s("div",{staticClass:"container"},[t.result.won?[s("div",{staticClass:"rank"},[s("b",[t._v(t._s(t.$t("game-congrats")))]),s("div",t._l(t.result.rank,(function(e){return s("img",{key:e,attrs:{src:t.icon.rank,width:"55"}})})),0),s("b",[t._v(t._s(t.$t("rank"))+": "+t._s(t.result.title))])])]:s("b",[t._v(t._s(t.$t("game-sorry")))]),s("fieldset",[s("legend",[t._v(t._s(t.$t("highscores")))]),s("div",[t._v(" "+t._s(t.result.time?t.$t("time")+": "+t.convertTime(t.result.time):t.$t("score")+": "+t.result.score)+" ")]),s("div",[t._v(" "+t._s(t.result.count?t.$t("tiles-turned")+": "+t.result.count:t.$t("guesses")+": "+t.result.guesses)+" ")])]),s("div",{staticClass:"bts"},[s("button",{staticClass:"bt bt-primary",on:{click:function(e){return t.choose(0)}}},[t._v(" "+t._s(t.$t("play-again"))+" ")]),s("button",{staticClass:"bt bt-secondary",on:{click:function(e){return t.choose(1)}}},[t._v(" "+t._s(t.$t("main-menu"))+" ")])])],2)],1):t._e(),t.stats?s("window-static",{attrs:{id:"window-purbleplace-stats"}},[s("title-bar",{attrs:{title:"Purble Place "+t.$t("statistics")}},[s("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.toggleStats}})],1),s("div",{staticClass:"container"},[s("div",{ref:"select",staticClass:"select mb-5"},[s("div",{attrs:{value:"purbleshop-0"},on:{click:t.showStats}},[t._v(" Purble Shop -- "+t._s(t.$t("beginner"))+" ")]),s("div",{attrs:{value:"purbleshop-1"},on:{click:t.showStats}},[t._v(" Purble Shop -- "+t._s(t.$t("intermediate"))+" ")]),s("div",{attrs:{value:"purbleshop-2"},on:{click:t.showStats}},[t._v(" Purble Shop -- "+t._s(t.$t("advanced"))+" ")]),s("div",{attrs:{value:"comfycakes-0"},on:{click:t.showStats}},[t._v(" Comfy Cakes -- "+t._s(t.$t("beginner"))+" ")]),s("div",{attrs:{value:"comfycakes-1"},on:{click:t.showStats}},[t._v(" Comfy Cakes -- "+t._s(t.$t("intermediate"))+" ")]),s("div",{attrs:{value:"comfycakes-2"},on:{click:t.showStats}},[t._v(" Comfy Cakes -- "+t._s(t.$t("advanced"))+" ")]),s("div",{attrs:{value:"purblepair-0"},on:{click:t.showStats}},[t._v(" Purble Pairs -- "+t._s(t.$t("beginner"))+" ")]),s("div",{attrs:{value:"purblepair-1"},on:{click:t.showStats}},[t._v(" Purble Pairs -- "+t._s(t.$t("intermediate"))+" ")]),s("div",{attrs:{value:"purblepair-2"},on:{click:t.showStats}},[t._v(" Purble Pairs -- "+t._s(t.$t("advanced"))+" ")])]),s("fieldset",{staticClass:"mb-5"},[s("legend",[t._v(t._s(t.$t("highscores")))]),t.statData.scores&&t.statData.scores.length?s("table",[t.statData.game===t.Game.PurblePair?s("tr",[s("td",[t._v(t._s(t.$t("time")))]),s("td",[t._v(t._s(t.$t("tiles-turned")))]),s("td",[t._v(t._s(t.$t("date")))])]):s("tr",[s("td",[t._v(t._s(t.$t("score")))]),s("td",[t._v(t._s(t.$t("guesses")))]),s("td",[t._v(t._s(t.$t("date")))])]),t._l(t.statData.scores,(function(e,a){return s("tr",{key:a},[s("td",[t._v(" "+t._s(t.statData.scores[a].time?t.convertTime(t.statData.scores[a].time,!0):t.statData.scores[a].score)+" ")]),s("td",[t._v(" "+t._s(t.statData.scores[a].count||t.statData.scores[a].guesses)+" ")]),s("td",[t._v(t._s(t.convertDate(t.statData.scores[a].date)))])])}))],2):t._e()]),s("div",{staticClass:"mb-5"},[t.statData?[s("div",[t._v(t._s(t.$t("games-played"))+": "+t._s(t.statData.total))]),s("div",[t._v(t._s(t.$t("games-completed"))+": "+t._s(t.statData.completed))]),s("div",[t._v(" "+t._s(t.$t("completion-rate"))+": "+t._s((t.statData.completed/(t.statData.total||1)*100).toFixed())+"% ")])]:[s("div",[t._v(t._s(t.$t("games-played"))+": 0")]),s("div",[t._v(t._s(t.$t("games-completed"))+": 0")]),s("div",[t._v(t._s(t.$t("completion-rate"))+": 0%")])]],2),s("div",{staticClass:"bts"},[s("button",{staticClass:"bt bt-primary",on:{click:t.toggleStats}},[t._v(" "+t._s(t.$t("close"))+" ")]),s("button",{staticClass:"bt bt-secondary",on:{click:t.toggleConfirm}},[t._v(" "+t._s(t.$t("reset"))+" ")])])])],1):t._e(),t.confirm?s("confirm-reset",{attrs:{close:t.toggleConfirm},on:{reset:t.reset}}):t._e(),t.error?s("error",{on:{close:function(e){t.error=null}}},[t._v(t._s(t.error))]):t._e()],1)},i=[],r=s("1da1"),n=(s("96cf"),s("7db0"),s("caad"),s("2532"),s("ac1f"),s("1276"),s("159b"),s("07ac"),s("a146")),o=s("e302"),c=s("e0b8"),l=s("10dc"),u=s("7e41"),d=s("3af2"),f=s("6210"),h=s("0e90"),m=s("c02b"),v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"menu"}},[s("img",{attrs:{id:"main",src:t.main}}),s("img",{attrs:{id:"mask",src:t.mask}}),s("div",{attrs:{id:t.Game.PurblePair},on:{mouseover:t.highlight,mouseout:t.dehighlight,click:t.select}}),s("div",{attrs:{id:t.Game.ComfyCakes},on:{mouseover:t.highlight,mouseout:t.dehighlight,click:t.select}}),s("div",{attrs:{id:t.Game.PurbleShop},on:{mouseover:t.highlight,mouseout:t.dehighlight,click:t.select}}),s("div",{attrs:{id:"purbleplace-exit"},on:{mouseover:t.highlight,mouseout:t.dehighlight,click:function(e){return e.stopPropagation(),t.select(e)}}})])},p=[],b=s("6792"),g=s("0f35"),_={data:function(){var t=this.$store.state.assets.games;return{Game:n["a"],mask:null,main:Object(g["a"])(t,"purbleplace-main")}},methods:{highlight:function(t){var e=this.$store.state.assets.games;this.mask=Object(g["a"])(e,t.target.id)},dehighlight:function(){this.mask=null},select:function(t){var e=t.target;switch(e.id){case"purbleplace-exit":this.$root.$emit(b["f"].CloseWindow,n["a"].PurblePlace);break;case n["a"].PurblePair:case n["a"].PurbleShop:this.$emit("select",e.id);break;default:Object(o["r"])("Coming soon")}}}},w=_,k=(s("0a60"),s("2877")),$=Object(k["a"])(w,v,p,!1,null,"132ae9d1",null),C=$.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{directives:[{name:"frag",rawName:"v-frag"}]},[s("div",{ref:"container",staticClass:"purblepair",style:{backgroundImage:"url("+t.img.bg+")"}},[s("audio",{ref:"bgm",attrs:{src:t.bgm}}),s("audio",{ref:"sfxFlip",attrs:{src:t.sfxFlip}}),s("audio",{ref:"sfxMatch",attrs:{src:t.sfxMatch}}),t._l(t.grid.rows,(function(e,a){return s("div",{key:a,staticClass:"row"},t._l(t.grid.cols,(function(e,i){return s("div",{key:i,staticClass:"card animated zoomIn",style:{width:t.grid.size+"px",height:t.grid.size+"px"},on:{click:function(e){var s=e.currentTarget;return t.flip(s,a,i)}}},[s("div",{staticClass:"front",style:{backgroundImage:"url("+t.img.front+")"}}),s("div",{staticClass:"back",style:{backgroundImage:"url("+(-1===t.game.board[a][i]?t.img.flipped:t.img.back(t.game.board[a][i]))+")"}})])})),0)}))],2),s("status-bar",[s("div",[t._v(t._s(t.$t("time"))+": "+t._s(t.time))]),s("div",[t._v(t._s(t.$t("tiles-turned"))+": "+t._s(t.count))])])],1)},x=[],P=(s("a9e3"),s("3883")),S=s("e5c1"),j=s.n(S),D=s("b0e1"),O=s.n(D),M=s("8c16"),E=s.n(M),L=s("0829"),F=s.n(L),T=s("d4ec"),G=s("bee2");s("a434"),s("fb6a");function I(t){var e,s,a=t.length;while(a)s=Math.floor(Math.random()*a--),e=t[a],t[a]=t[s],t[s]=e;return t}function R(t,e){var s,a=t*e/2,i=[];for(s=0;s<a;s++)i.push(s),i.push(s);I(i);var r=[];for(s=0;s<t;s++)r.push(i.splice(0,e));return r}var N,W,z,A={SELF:0,MATCH:1,NOMATCH:2,FLIPPED:3,FIRST:4},H=function(){function t(e,s){Object(T["a"])(this,t),this.rows=e,this.cols=s,this.board=R(e,s)}return Object(G["a"])(t,[{key:"flip",value:function(t,e){return-1===this.board[t][e]?A.FLIPPED:this.prev?this.prev.x===t&&this.prev.y===e?(this.prev=null,A.SELF):this.board[this.prev.x][this.prev.y]==this.board[t][e]?A.MATCH:(this.prev=null,A.NOMATCH):(this.prev={x:t,y:e},A.FIRST)}},{key:"render",value:function(t,e){this.board[this.prev.x][this.prev.y]=this.board[t][e]=-1,this.board=this.board.slice(0),this.prev=null}},{key:"isWon",value:function(){for(var t=0;t<this.rows;t++)for(var e=0;e<this.cols;e++)if(-1!==this.board[t][e])return!1;return!0}}]),t}(),K={props:{level:Number,stats:c["a"]},data:function(){var t={rows:4,cols:5,size:0},e=this.$store.state.assets.games;return 1===this.level&&(t={rows:5,cols:6,size:0}),2===this.level&&(t={rows:6,cols:9,size:0}),{img:{bg:e.find((function(t){return t.includes("purblepair-bg")})),flipped:e.find((function(t){return t.includes("purblepair-flipped")})),front:e.find((function(t){return t.includes("purblepair-default")})),back:function(t){return e.find((function(e){return e.includes("purblepair-"+t)}))}},bgm:j.a,sfxFlip:O.a,sfxMatch:E.a,grid:t,game:new H(t.rows,t.cols),interval:null,count:0,time:0}},mounted:function(){var t=this.$refs.container,e=t.clientWidth,s=t.clientHeight,a=this.grid,i=a.rows,r=a.cols;this.$refs.bgm.play(),this.grid.size=e<s?e/r:s/i},methods:{flip:function(t,e,s){var a=this;this.interval||(this.stats.init(this.level),this.interval=setInterval((function(){return a.time++}),1e3));var i=this.$refs.container,r=this.game.flip(e,s);switch(r){case A.FLIPPED:return;case A.SELF:return void t.classList.toggle("flipped");case A.NOMATCH:t.classList.add("flipped"),i.style.pointerEvents="none",setTimeout((function(){t.classList.remove("flipped"),N.classList.remove("flipped"),i.style.pointerEvents=""}),800);break;case A.MATCH:t.classList.add("flipped"),i.style.pointerEvents="none",setTimeout((function(){if(a.game.render(e,s),a.$refs.sfxMatch.play(),i.style.pointerEvents="",a.game.isWon()){var t=a.time,r=a.count,o=a.grid;clearInterval(a.interval);var c=function(t,e){return t.time+t.count-(e.time+e.count)};a.stats.saveScore({time:t,count:r,date:Date.now()},c),a.bgm=F.a,setTimeout((function(){var e,s,i=o.rows*o.cols,c=.8*i+i/2,l=(t+r)/(c+i);l<=2?(e=5,s=n["b"].Master):l<=3?(e=4,s=n["b"].Champ):(e=3,s=n["b"].Detective),a.$refs.bgm.play(),a.$emit("result",{time:t,count:r,rank:e,title:s,won:!0})}),1e3)}}),800);break;default:t.classList.add("flipped"),N=t}this.count++,this.$refs.sfxFlip.play()}},components:{StatusBar:P["a"]}},B=K,J=(s("15b0"),Object(k["a"])(B,y,x,!1,null,"53bdad03",null)),U=J.exports,q={},Q=Object(k["a"])(q,W,z,!1,null,null,null),V=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("iframe",{ref:"iframe",attrs:{src:t.url,allow:"autoplay",frameborder:"0"}})},Y=[],Z=(s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),{props:{level:Number,stats:c["a"]},data:function(){return{url:"https://khang-nd.github.io/PurbleShop"}},mounted:function(){var t=this.$refs.iframe;t.addEventListener("load",this.onLoad),window.addEventListener("message",this.onMessage)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{onLoad:function(){var t=this;this.stats.init(this.level),setTimeout((function(){t.$el.contentWindow.postMessage(t.level+3,"*")}),1500)},onMessage:function(t){var e=t.origin,s=t.data,a=new URL(this.url),i=a.origin;if(e===i){var r,o,c=s.GameScore,l=s.Guesses,u=s.Result,d="win"===u,f=1===this.level?3*c:c,h=function(t,e){return e.score-t.score};f>=1e3?(o=5,r=n["b"].Master):f<=500?(o=3,r=n["b"].Detective):(o=4,r=n["b"].Champ),d&&this.stats.win(),this.stats.saveScore({score:c,guesses:l,date:Date.now()},h),this.$emit("result",{score:c,guesses:l,won:d,title:r,rank:o})}}}}),tt=Z,et=(s("94c3"),Object(k["a"])(tt,X,Y,!1,null,"027c4709",null)),st=et.exports,at={data:function(){var t=this.$store.state,e=t.user,s=t.themes,a=t.theme,i=t.assets.games;return{icon:{game:s[a].icon.purbleplace,rank:i.find((function(t){return t.includes("purblepair-clown")}))},game:"",gameStats:{purblepair:new c["a"](n["a"].PurblePair,e),purbleshop:new c["a"](n["a"].PurbleShop,e),comfycakes:new c["a"](n["a"].ComfyCakes,e)},compKey:0,level:0,convertTime:n["d"],convertDate:n["c"],Game:n["a"],result:null,stats:null,error:null,statData:{},confirm:null,temp:null}},mounted:function(){Object(o["q"])()},methods:{select:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(o["j"])();case 2:if(s.t0=!s.sent,!s.t0){s.next=5;break}s.t0=t===n["a"].PurbleShop;case 5:if(!s.t0){s.next=9;break}e.error=e.$t("network-error"),s.next=10;break;case 9:e.game=t;case 10:case"end":return s.stop()}}),s)})))()},changeLevel:function(t){this.level=t,this.compKey++},choose:function(t){0===t&&this.compKey++,1===t&&(this.game=""),this.result=null},showResult:function(t){this.result=t},showStats:function(t){var e=t.target;e||(e=this.$refs.select.firstChild);var s=e.getAttribute("value").split("-"),a=s[0],i=s[1],r=this.gameStats[a].getData();this.statData=r?r[i]:null,this.statData=this.statData||{},this.statData.game=a,this.$refs.select.children.forEach((function(t){return t.classList.remove("active")})),e.classList.add("active"),this.temp=e},toggleStats:function(){this.stats=!this.stats},toggleConfirm:function(){this.confirm=!this.confirm},reset:function(){Object.values(this.gameStats).forEach((function(t){return t.reset()})),this.showStats({target:this.temp}),this.toggleConfirm()}},components:{Window:l["a"],WindowStatic:u["a"],Controls:d["a"],TitleBar:f["a"],MainMenu:C,PurblePair:U,ComfyCakes:V,PurbleShop:st,ConfirmReset:h["a"],Error:m["a"]}},it=at,rt=(s("83bf"),Object(k["a"])(it,a,i,!1,null,"7b9e9679",null));e["default"]=rt.exports},a146:function(t,e,s){"use strict";s.d(e,"d",(function(){return i})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return n})),s.d(e,"b",(function(){return o}));s("99af"),s("b680");var a=s("0f35");function i(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=60;return t>=s?"".concat(Object(a["j"])((t/s).toFixed()),":").concat(Object(a["j"])(t%s)):e?"00:".concat(Object(a["j"])(t)):"".concat(t," seconds")}function r(t){return new Date(t).toLocaleDateString("en-US")}var n={PurblePlace:"purbleplace",PurblePair:"purblepair",PurbleShop:"purbleshop",ComfyCakes:"comfycakes"},o={Master:"Purble Master",Champ:"Champion of Logic",Detective:"Senior Detective"}},b0e1:function(t,e,s){t.exports=s.p+"media/purblepair-flip.e4032db0.mp3"},b680:function(t,e,s){"use strict";var a=s("23e7"),i=s("a691"),r=s("408a"),n=s("1148"),o=s("d039"),c=1..toFixed,l=Math.floor,u=function(t,e,s){return 0===e?s:e%2===1?u(t,e-1,s*t):u(t*t,e/2,s)},d=function(t){var e=0,s=t;while(s>=4096)e+=12,s/=4096;while(s>=2)e+=1,s/=2;return e},f=function(t,e,s){var a=-1,i=s;while(++a<6)i+=e*t[a],t[a]=i%1e7,i=l(i/1e7)},h=function(t,e){var s=6,a=0;while(--s>=0)a+=t[s],t[s]=l(a/e),a=a%e*1e7},m=function(t){var e=6,s="";while(--e>=0)if(""!==s||0===e||0!==t[e]){var a=String(t[e]);s=""===s?a:s+n.call("0",7-a.length)+a}return s},v=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));a({target:"Number",proto:!0,forced:v},{toFixed:function(t){var e,s,a,o,c=r(this),l=i(t),v=[0,0,0,0,0,0],p="",b="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=d(c*u(2,69,1))-69,s=e<0?c*u(2,-e,1):c/u(2,e,1),s*=4503599627370496,e=52-e,e>0){f(v,0,s),a=l;while(a>=7)f(v,1e7,0),a-=7;f(v,u(10,a,1),0),a=e-1;while(a>=23)h(v,1<<23),a-=23;h(v,1<<a),f(v,1,1),h(v,2),b=m(v)}else f(v,0,s),f(v,1<<-e,0),b=m(v)+n.call("0",l);return l>0?(o=b.length,b=p+(o<=l?"0."+n.call("0",l-o)+b:b.slice(0,o-l)+"."+b.slice(o-l))):b=p+b,b}})},c02b:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("window-static",[s("title-bar",[s("controls",{attrs:{hasMaxi:!1,hasMini:!1,close:t.close}})],1),s("div",{staticClass:"container"},[s("main",[s("img",{attrs:{src:t.icon}}),s("pre",[t._t("default")],2)])]),s("div",{staticClass:"footer flex-right"},[s("button",{staticClass:"bt bt-primary",on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v(t._s(t.$t("ok")))])])],1)},i=[],r=s("2f62"),n=s("0f35"),o=s("7e41"),c=s("3af2"),l=s("6210"),u=s("db7a"),d=s.n(u),f=s("d534"),h=s.n(f),m=s("30dd"),v=s.n(m),p=s("ed56"),b=s.n(p),g=s("74ec"),_=s.n(g),w={data:function(){var t=this.$store.state.assets.icos;return{icon:Object(n["a"])(t,"error")}},computed:Object(r["b"])(["theme"]),mounted:function(){var t=this.theme,e=d.a;"win95"===t&&(e=h.a),"win2k"===t&&(e=v.a),"winxp"===t&&(e=b.a),"win10"===t&&(e=_.a),new Audio(e).play()},methods:{close:function(){this.$emit("close")}},components:{WindowStatic:o["a"],Controls:c["a"],TitleBar:l["a"]}},k=w,$=(s("cad2"),s("2877")),C=Object($["a"])(k,a,i,!1,null,"cedc8c14",null);e["a"]=C.exports},cad2:function(t,e,s){"use strict";s("9951")},d057:function(t,e,s){},d11b:function(t,e,s){"use strict";s("2771")},d534:function(t,e,s){t.exports=s.p+"media/error-win95.bde7e8f2.mp3"},d5c9:function(t,e,s){"use strict";s("ff46")},db7a:function(t,e,s){t.exports=s.p+"media/error-win7.6093725c.mp3"},e0b8:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var a=s("5530"),i=s("d4ec"),r=s("bee2"),n=(s("4e82"),s("968c")),o={total:0,completed:0,won:0},c=function(){function t(e,s){var r=this;Object(i["a"])(this,t),this.user=s,this.key=e,n["a"].local.get("scores-"+e,this.user).then((function(t){r.data=t||{0:Object(a["a"])(Object(a["a"])({},o),{},{scores:[]}),1:Object(a["a"])(Object(a["a"])({},o),{},{scores:[]}),2:Object(a["a"])(Object(a["a"])({},o),{},{scores:[]})}}))}return Object(r["a"])(t,[{key:"getData",value:function(){return this.data}},{key:"saveData",value:function(){n["a"].local.update("scores-"+this.key,this.user,this.data)}},{key:"init",value:function(t){this.level=t,this.data[this.level].total++,this.saveData()}},{key:"saveScore",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return t.time-e.time},s=this.data[this.level].scores;s.push(t),s.sort(e),s.length>5&&s.pop(),this.complete()}},{key:"win",value:function(){this.data[this.level].won++,this.saveData()}},{key:"complete",value:function(){this.data[this.level].completed++,this.saveData()}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.key;n["a"].local.remove("scores-"+t,this.user),this.data={0:Object(a["a"])(Object(a["a"])({},o),{},{scores:[]}),1:Object(a["a"])(Object(a["a"])({},o),{},{scores:[]}),2:Object(a["a"])(Object(a["a"])({},o),{},{scores:[]})}}}]),t}()},e1b6:function(t,e,s){},e5c1:function(t,e,s){t.exports=s.p+"media/purblepair-new.dff0c554.mp3"},ed56:function(t,e,s){t.exports=s.p+"media/error-winxp.6ed0792c.mp3"},f83b:function(t,e,s){},ff46:function(t,e,s){}}]);