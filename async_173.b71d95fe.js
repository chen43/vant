(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{184:function(t,i,e){"use strict";e.r(i);var n={i18n:{"zh-CN":{group1:"所有城市",group2:"浙江",group3:"江苏",city1:[{text:"杭州",id:1},{text:"温州",id:2},{text:"宁波",id:3,disabled:!0},{text:"义乌",id:4}],city2:[{text:"南京",id:5},{text:"无锡",id:6},{text:"徐州",id:7},{text:"苏州",id:8}]},"en-US":{group1:"All",group2:"Group1",group3:"Group2",city1:[{text:"Delaware",id:1},{text:"Florida",id:2},{text:"Georqia",id:3,disabled:!0},{text:"Indiana",id:4}],city2:[{text:"Alabama",id:5},{text:"Kansas",id:6},{text:"Louisiana",id:7},{text:"Texas",id:8}]}},data:function(){return{mainActiveIndex:0,activeId:1}},computed:{items:function(){return[{text:this.$t("group1"),children:this.$t("city1").concat(this.$t("city2"))},{text:this.$t("group2"),children:this.$t("city1")},{text:this.$t("group3"),children:this.$t("city2")}]}},methods:{onNavClick:function(t){this.mainActiveIndex=t},onItemClick:function(t){this.activeId=t.id}}},c=e(0),a=Object(c.a)(n,function(){var t=this.$createElement,i=this._self._c||t;return i("demo-section",[i("demo-block",{attrs:{title:this.$t("basicUsage")}},[i("van-tree-select",{attrs:{items:this.items,"main-active-index":this.mainActiveIndex,"active-id":this.activeId},on:{navclick:this.onNavClick,itemclick:this.onItemClick}})],1)],1)},[],!1,null,null,null);a.options.__file="index.vue";i.default=a.exports}}]);