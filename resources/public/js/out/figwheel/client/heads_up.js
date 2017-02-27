// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20558__auto__ = [];
var len__20551__auto___28290 = arguments.length;
var i__20552__auto___28291 = (0);
while(true){
if((i__20552__auto___28291 < len__20551__auto___28290)){
args__20558__auto__.push((arguments[i__20552__auto___28291]));

var G__28292 = (i__20552__auto___28291 + (1));
i__20552__auto___28291 = G__28292;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((2) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20559__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28282_28293 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28283_28294 = null;
var count__28284_28295 = (0);
var i__28285_28296 = (0);
while(true){
if((i__28285_28296 < count__28284_28295)){
var k_28297 = cljs.core._nth.call(null,chunk__28283_28294,i__28285_28296);
e.setAttribute(cljs.core.name.call(null,k_28297),cljs.core.get.call(null,attrs,k_28297));

var G__28298 = seq__28282_28293;
var G__28299 = chunk__28283_28294;
var G__28300 = count__28284_28295;
var G__28301 = (i__28285_28296 + (1));
seq__28282_28293 = G__28298;
chunk__28283_28294 = G__28299;
count__28284_28295 = G__28300;
i__28285_28296 = G__28301;
continue;
} else {
var temp__4657__auto___28302 = cljs.core.seq.call(null,seq__28282_28293);
if(temp__4657__auto___28302){
var seq__28282_28303__$1 = temp__4657__auto___28302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28282_28303__$1)){
var c__20257__auto___28304 = cljs.core.chunk_first.call(null,seq__28282_28303__$1);
var G__28305 = cljs.core.chunk_rest.call(null,seq__28282_28303__$1);
var G__28306 = c__20257__auto___28304;
var G__28307 = cljs.core.count.call(null,c__20257__auto___28304);
var G__28308 = (0);
seq__28282_28293 = G__28305;
chunk__28283_28294 = G__28306;
count__28284_28295 = G__28307;
i__28285_28296 = G__28308;
continue;
} else {
var k_28309 = cljs.core.first.call(null,seq__28282_28303__$1);
e.setAttribute(cljs.core.name.call(null,k_28309),cljs.core.get.call(null,attrs,k_28309));

var G__28310 = cljs.core.next.call(null,seq__28282_28303__$1);
var G__28311 = null;
var G__28312 = (0);
var G__28313 = (0);
seq__28282_28293 = G__28310;
chunk__28283_28294 = G__28311;
count__28284_28295 = G__28312;
i__28285_28296 = G__28313;
continue;
}
} else {
}
}
break;
}

var seq__28286_28314 = cljs.core.seq.call(null,children);
var chunk__28287_28315 = null;
var count__28288_28316 = (0);
var i__28289_28317 = (0);
while(true){
if((i__28289_28317 < count__28288_28316)){
var ch_28318 = cljs.core._nth.call(null,chunk__28287_28315,i__28289_28317);
e.appendChild(ch_28318);

var G__28319 = seq__28286_28314;
var G__28320 = chunk__28287_28315;
var G__28321 = count__28288_28316;
var G__28322 = (i__28289_28317 + (1));
seq__28286_28314 = G__28319;
chunk__28287_28315 = G__28320;
count__28288_28316 = G__28321;
i__28289_28317 = G__28322;
continue;
} else {
var temp__4657__auto___28323 = cljs.core.seq.call(null,seq__28286_28314);
if(temp__4657__auto___28323){
var seq__28286_28324__$1 = temp__4657__auto___28323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28286_28324__$1)){
var c__20257__auto___28325 = cljs.core.chunk_first.call(null,seq__28286_28324__$1);
var G__28326 = cljs.core.chunk_rest.call(null,seq__28286_28324__$1);
var G__28327 = c__20257__auto___28325;
var G__28328 = cljs.core.count.call(null,c__20257__auto___28325);
var G__28329 = (0);
seq__28286_28314 = G__28326;
chunk__28287_28315 = G__28327;
count__28288_28316 = G__28328;
i__28289_28317 = G__28329;
continue;
} else {
var ch_28330 = cljs.core.first.call(null,seq__28286_28324__$1);
e.appendChild(ch_28330);

var G__28331 = cljs.core.next.call(null,seq__28286_28324__$1);
var G__28332 = null;
var G__28333 = (0);
var G__28334 = (0);
seq__28286_28314 = G__28331;
chunk__28287_28315 = G__28332;
count__28288_28316 = G__28333;
i__28289_28317 = G__28334;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28279){
var G__28280 = cljs.core.first.call(null,seq28279);
var seq28279__$1 = cljs.core.next.call(null,seq28279);
var G__28281 = cljs.core.first.call(null,seq28279__$1);
var seq28279__$2 = cljs.core.next.call(null,seq28279__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28280,G__28281,seq28279__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20372__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20373__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20374__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20375__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20371__auto__,prefer_table__20372__auto__,method_cache__20373__auto__,cached_hierarchy__20374__auto__,hierarchy__20375__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20371__auto__,prefer_table__20372__auto__,method_cache__20373__auto__,cached_hierarchy__20374__auto__,hierarchy__20375__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20375__auto__,method_table__20371__auto__,prefer_table__20372__auto__,method_cache__20373__auto__,cached_hierarchy__20374__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_28335 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;")].join('')], null));
el_28335.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28335.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28335.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28335);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28336,st_map){
var map__28343 = p__28336;
var map__28343__$1 = ((((!((map__28343 == null)))?((((map__28343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28343):map__28343);
var container_el = cljs.core.get.call(null,map__28343__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28343,map__28343__$1,container_el){
return (function (p__28345){
var vec__28346 = p__28345;
var k = cljs.core.nth.call(null,vec__28346,(0),null);
var v = cljs.core.nth.call(null,vec__28346,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28343,map__28343__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28349,dom_str){
var map__28352 = p__28349;
var map__28352__$1 = ((((!((map__28352 == null)))?((((map__28352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28352):map__28352);
var c = map__28352__$1;
var content_area_el = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28354){
var map__28357 = p__28354;
var map__28357__$1 = ((((!((map__28357 == null)))?((((map__28357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28357):map__28357);
var content_area_el = cljs.core.get.call(null,map__28357__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_28400){
var state_val_28401 = (state_28400[(1)]);
if((state_val_28401 === (1))){
var inst_28385 = (state_28400[(7)]);
var inst_28385__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28386 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28387 = ["10px","10px","100%","68px","1.0"];
var inst_28388 = cljs.core.PersistentHashMap.fromArrays(inst_28386,inst_28387);
var inst_28389 = cljs.core.merge.call(null,inst_28388,style);
var inst_28390 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28385__$1,inst_28389);
var inst_28391 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28385__$1,msg);
var inst_28392 = cljs.core.async.timeout.call(null,(300));
var state_28400__$1 = (function (){var statearr_28402 = state_28400;
(statearr_28402[(7)] = inst_28385__$1);

(statearr_28402[(8)] = inst_28391);

(statearr_28402[(9)] = inst_28390);

return statearr_28402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28400__$1,(2),inst_28392);
} else {
if((state_val_28401 === (2))){
var inst_28385 = (state_28400[(7)]);
var inst_28394 = (state_28400[(2)]);
var inst_28395 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28396 = ["auto"];
var inst_28397 = cljs.core.PersistentHashMap.fromArrays(inst_28395,inst_28396);
var inst_28398 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28385,inst_28397);
var state_28400__$1 = (function (){var statearr_28403 = state_28400;
(statearr_28403[(10)] = inst_28394);

return statearr_28403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28400__$1,inst_28398);
} else {
return null;
}
}
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto____0 = (function (){
var statearr_28407 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28407[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto__);

(statearr_28407[(1)] = (1));

return statearr_28407;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto____1 = (function (state_28400){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_28400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e28408){if((e28408 instanceof Object)){
var ex__21799__auto__ = e28408;
var statearr_28409_28411 = state_28400;
(statearr_28409_28411[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28412 = state_28400;
state_28400 = G__28412;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_28410 = f__21908__auto__.call(null);
(statearr_28410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_28410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28416 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__28416,(0),null);
var ln = cljs.core.nth.call(null,vec__28416,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28423 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28423,(0),null);
var file_line = cljs.core.nth.call(null,vec__28423,(1),null);
var file_column = cljs.core.nth.call(null,vec__28423,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28423,file_name,file_line,file_column){
return (function (p1__28419_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.htmlEscape(p1__28419_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(vec__28423,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19438__auto__ = file_line;
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
var and__19426__auto__ = cause;
if(cljs.core.truth_(and__19426__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19426__auto__;
}
}
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cause)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28428 = figwheel.client.heads_up.ensure_container.call(null);
var map__28428__$1 = ((((!((map__28428 == null)))?((((map__28428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28428):map__28428);
var content_area_el = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_28476){
var state_val_28477 = (state_28476[(1)]);
if((state_val_28477 === (1))){
var inst_28459 = (state_28476[(7)]);
var inst_28459__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28460 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28461 = ["0.0"];
var inst_28462 = cljs.core.PersistentHashMap.fromArrays(inst_28460,inst_28461);
var inst_28463 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28459__$1,inst_28462);
var inst_28464 = cljs.core.async.timeout.call(null,(300));
var state_28476__$1 = (function (){var statearr_28478 = state_28476;
(statearr_28478[(8)] = inst_28463);

(statearr_28478[(7)] = inst_28459__$1);

return statearr_28478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28476__$1,(2),inst_28464);
} else {
if((state_val_28477 === (2))){
var inst_28459 = (state_28476[(7)]);
var inst_28466 = (state_28476[(2)]);
var inst_28467 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28468 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28469 = cljs.core.PersistentHashMap.fromArrays(inst_28467,inst_28468);
var inst_28470 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28459,inst_28469);
var inst_28471 = cljs.core.async.timeout.call(null,(200));
var state_28476__$1 = (function (){var statearr_28479 = state_28476;
(statearr_28479[(9)] = inst_28470);

(statearr_28479[(10)] = inst_28466);

return statearr_28479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28476__$1,(3),inst_28471);
} else {
if((state_val_28477 === (3))){
var inst_28459 = (state_28476[(7)]);
var inst_28473 = (state_28476[(2)]);
var inst_28474 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28459,"");
var state_28476__$1 = (function (){var statearr_28480 = state_28476;
(statearr_28480[(11)] = inst_28473);

return statearr_28480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28476__$1,inst_28474);
} else {
return null;
}
}
}
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21796__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21796__auto____0 = (function (){
var statearr_28484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28484[(0)] = figwheel$client$heads_up$clear_$_state_machine__21796__auto__);

(statearr_28484[(1)] = (1));

return statearr_28484;
});
var figwheel$client$heads_up$clear_$_state_machine__21796__auto____1 = (function (state_28476){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_28476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e28485){if((e28485 instanceof Object)){
var ex__21799__auto__ = e28485;
var statearr_28486_28488 = state_28476;
(statearr_28486_28488[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28489 = state_28476;
state_28476 = G__28489;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21796__auto__ = function(state_28476){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21796__auto____1.call(this,state_28476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21796__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21796__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_28487 = f__21908__auto__.call(null);
(statearr_28487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_28487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_28521){
var state_val_28522 = (state_28521[(1)]);
if((state_val_28522 === (1))){
var inst_28511 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(2),inst_28511);
} else {
if((state_val_28522 === (2))){
var inst_28513 = (state_28521[(2)]);
var inst_28514 = cljs.core.async.timeout.call(null,(400));
var state_28521__$1 = (function (){var statearr_28523 = state_28521;
(statearr_28523[(7)] = inst_28513);

return statearr_28523;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(3),inst_28514);
} else {
if((state_val_28522 === (3))){
var inst_28516 = (state_28521[(2)]);
var inst_28517 = figwheel.client.heads_up.clear.call(null);
var state_28521__$1 = (function (){var statearr_28524 = state_28521;
(statearr_28524[(8)] = inst_28516);

return statearr_28524;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28521__$1,(4),inst_28517);
} else {
if((state_val_28522 === (4))){
var inst_28519 = (state_28521[(2)]);
var state_28521__$1 = state_28521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28521__$1,inst_28519);
} else {
return null;
}
}
}
}
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto____0 = (function (){
var statearr_28528 = [null,null,null,null,null,null,null,null,null];
(statearr_28528[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto__);

(statearr_28528[(1)] = (1));

return statearr_28528;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto____1 = (function (state_28521){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_28521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e28529){if((e28529 instanceof Object)){
var ex__21799__auto__ = e28529;
var statearr_28530_28532 = state_28521;
(statearr_28530_28532[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28533 = state_28521;
state_28521 = G__28533;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto__ = function(state_28521){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto____1.call(this,state_28521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_28531 = f__21908__auto__.call(null);
(statearr_28531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_28531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1488147691508