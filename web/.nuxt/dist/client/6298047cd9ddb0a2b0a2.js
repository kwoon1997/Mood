(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{241:function(t,n,o){var content=o(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(15).default)("38d6a724",content,!0,{sourceMap:!1})},253:function(t,n,o){"use strict";var r=o(241);o.n(r).a},254:function(t,n,o){(n=o(14)(!1)).push([t.i,".rain[data-v-7457547d]{width:100vw;height:100vh;overflow:hidden;position:relative}.rain .logo[data-v-7457547d]{font-size:30px}.rain .logo[data-v-7457547d],.rain .logo-img[data-v-7457547d]{color:#fff;position:fixed;bottom:20px;left:30px;z-index:9999;cursor:pointer}.rain .logo-img[data-v-7457547d]{width:80px;height:34px}.rain .logo-img img[data-v-7457547d]{width:100%}.rain .rain-bg[data-v-7457547d]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.rain .words[data-v-7457547d]{position:fixed;top:80px;right:80px}.rain .option[data-v-7457547d]{width:416px;height:70px;position:fixed;bottom:0;right:0;text-align:center}.rain .option li[data-v-7457547d]{list-style-type:none;cursor:pointer}.rain .option li[data-v-7457547d],.rain .option li span[data-v-7457547d]{display:inline-block}@media screen and (max-width:480px){.rain .rain-bg[data-v-7457547d]{position:absolute;left:60%;top:50%}.rain .rain-bg[data-v-7457547d],.rain .words[data-v-7457547d]{transform:translate(-50%,-50%)}.rain .words[data-v-7457547d]{top:30%;left:50%;right:auto}.rain .option[data-v-7457547d]{width:auto;right:20px}.rain .option li[data-v-7457547d]{width:60px;overflow:hidden}.rain .option li span[data-v-7457547d]{display:flex;justify-content:center}.rain .logo[data-v-7457547d]{left:20px}}",""]),t.exports=n},279:function(t,n,o){"use strict";o.r(n);var r={data:function(){return{rainIcon:[{on:"/image/rain/rain_on.png",off:"/image/rain/rain_off.png",music:"/image/rain/thunder.mp3",active:!1},{on:"/image/rain/rain2_on.png",off:"/image/rain/rain2_off.png",music:"/image/rain/loudThunder.mp3",active:!1},{on:"/image/rain/rain3_on.png",off:"/image/rain/rain3_off.png",music:"/image/rain/rain.mp3",active:!1}],loading:!0,img:null}},head:function(){return{title:"Rainy Day",meta:[{hid:"description",name:"description",content:"下雨了，打湿心扉的，不是突如其来的雨点，是人情冷暖。一辆黑色的轿车，嘎然而止，一声亲切的呼唤，上车吧！"}]}},mounted:function(){var t=this,img=new Image;img.src="/image/rain/rain-bg.gif",img.onload=function(){t.loading=!1,t.img=img.src},this.$nextTick((function(){t.music(0,!1)}))},methods:{toIndex:function(){this.$router.push("/")},music:function(t,n){this.$set(this.rainIcon[t],"active",!n);var o=document.getElementsByClassName("music");n?o[t].pause():o[t].play()}}},e=(o(253),o(6)),component=Object(e.a)(r,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"rain"},[o("div",{staticClass:"logo-img",on:{click:t.toIndex}},[o("img",{attrs:{src:"/image/logo/logo1.png"}})]),t._v(" "),o("img",{staticClass:"rain-bg",attrs:{src:t.img,draggable:"false"}}),t._v(" "),o("img",{staticClass:"words",attrs:{src:"/image/rain/words.png",draggable:"false"}}),t._v(" "),o("ul",{staticClass:"option"},t._l(t.rainIcon,(function(n,r){return o("li",{key:r},[o("span",{on:{click:function(o){return t.music(r,n.active)}}},[n.active?o("img",{attrs:{src:n.on,draggable:"false"}}):o("img",{attrs:{src:n.off,draggable:"false"}})]),t._v(" "),o("audio",{staticClass:"music",attrs:{loop:"loop",preload:"auto"}},[o("source",{attrs:{type:"audio/mpeg",src:n.music}})])])})),0),t._v(" "),t.loading?o("Loading"):t._e()],1)}),[],!1,null,"7457547d",null);n.default=component.exports}}]);