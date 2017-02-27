// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28536 = cljs.core._EQ_;
var expr__28537 = (function (){var or__19438__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28536.call(null,"true",expr__28537))){
return true;
} else {
if(cljs.core.truth_(pred__28536.call(null,"false",expr__28537))){
return false;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28537)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28539__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28540__i = 0, G__28540__a = new Array(arguments.length -  0);
while (G__28540__i < G__28540__a.length) {G__28540__a[G__28540__i] = arguments[G__28540__i + 0]; ++G__28540__i;}
  args = new cljs.core.IndexedSeq(G__28540__a,0);
} 
return G__28539__delegate.call(this,args);};
G__28539.cljs$lang$maxFixedArity = 0;
G__28539.cljs$lang$applyTo = (function (arglist__28541){
var args = cljs.core.seq(arglist__28541);
return G__28539__delegate(args);
});
G__28539.cljs$core$IFn$_invoke$arity$variadic = G__28539__delegate;
return G__28539;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28542){
var map__28545 = p__28542;
var map__28545__$1 = ((((!((map__28545 == null)))?((((map__28545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28545):map__28545);
var message = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28545__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19438__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19426__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19426__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19426__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21907__auto___28707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___28707,ch){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___28707,ch){
return (function (state_28676){
var state_val_28677 = (state_28676[(1)]);
if((state_val_28677 === (7))){
var inst_28672 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28678_28708 = state_28676__$1;
(statearr_28678_28708[(2)] = inst_28672);

(statearr_28678_28708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (1))){
var state_28676__$1 = state_28676;
var statearr_28679_28709 = state_28676__$1;
(statearr_28679_28709[(2)] = null);

(statearr_28679_28709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (4))){
var inst_28629 = (state_28676[(7)]);
var inst_28629__$1 = (state_28676[(2)]);
var state_28676__$1 = (function (){var statearr_28680 = state_28676;
(statearr_28680[(7)] = inst_28629__$1);

return statearr_28680;
})();
if(cljs.core.truth_(inst_28629__$1)){
var statearr_28681_28710 = state_28676__$1;
(statearr_28681_28710[(1)] = (5));

} else {
var statearr_28682_28711 = state_28676__$1;
(statearr_28682_28711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (15))){
var inst_28636 = (state_28676[(8)]);
var inst_28651 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28636);
var inst_28652 = cljs.core.first.call(null,inst_28651);
var inst_28653 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28652);
var inst_28654 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28653)].join('');
var inst_28655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28654);
var state_28676__$1 = state_28676;
var statearr_28683_28712 = state_28676__$1;
(statearr_28683_28712[(2)] = inst_28655);

(statearr_28683_28712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (13))){
var inst_28660 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28684_28713 = state_28676__$1;
(statearr_28684_28713[(2)] = inst_28660);

(statearr_28684_28713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (6))){
var state_28676__$1 = state_28676;
var statearr_28685_28714 = state_28676__$1;
(statearr_28685_28714[(2)] = null);

(statearr_28685_28714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (17))){
var inst_28658 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28686_28715 = state_28676__$1;
(statearr_28686_28715[(2)] = inst_28658);

(statearr_28686_28715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (3))){
var inst_28674 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28676__$1,inst_28674);
} else {
if((state_val_28677 === (12))){
var inst_28635 = (state_28676[(9)]);
var inst_28649 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28635,opts);
var state_28676__$1 = state_28676;
if(cljs.core.truth_(inst_28649)){
var statearr_28687_28716 = state_28676__$1;
(statearr_28687_28716[(1)] = (15));

} else {
var statearr_28688_28717 = state_28676__$1;
(statearr_28688_28717[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (2))){
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28676__$1,(4),ch);
} else {
if((state_val_28677 === (11))){
var inst_28636 = (state_28676[(8)]);
var inst_28641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28642 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28636);
var inst_28643 = cljs.core.async.timeout.call(null,(1000));
var inst_28644 = [inst_28642,inst_28643];
var inst_28645 = (new cljs.core.PersistentVector(null,2,(5),inst_28641,inst_28644,null));
var state_28676__$1 = state_28676;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28676__$1,(14),inst_28645);
} else {
if((state_val_28677 === (9))){
var inst_28636 = (state_28676[(8)]);
var inst_28662 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28663 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28636);
var inst_28664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28663);
var inst_28665 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28664)].join('');
var inst_28666 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28665);
var state_28676__$1 = (function (){var statearr_28689 = state_28676;
(statearr_28689[(10)] = inst_28662);

return statearr_28689;
})();
var statearr_28690_28718 = state_28676__$1;
(statearr_28690_28718[(2)] = inst_28666);

(statearr_28690_28718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (5))){
var inst_28629 = (state_28676[(7)]);
var inst_28631 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28632 = (new cljs.core.PersistentArrayMap(null,2,inst_28631,null));
var inst_28633 = (new cljs.core.PersistentHashSet(null,inst_28632,null));
var inst_28634 = figwheel.client.focus_msgs.call(null,inst_28633,inst_28629);
var inst_28635 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28634);
var inst_28636 = cljs.core.first.call(null,inst_28634);
var inst_28637 = figwheel.client.autoload_QMARK_.call(null);
var state_28676__$1 = (function (){var statearr_28691 = state_28676;
(statearr_28691[(8)] = inst_28636);

(statearr_28691[(9)] = inst_28635);

return statearr_28691;
})();
if(cljs.core.truth_(inst_28637)){
var statearr_28692_28719 = state_28676__$1;
(statearr_28692_28719[(1)] = (8));

} else {
var statearr_28693_28720 = state_28676__$1;
(statearr_28693_28720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (14))){
var inst_28647 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28694_28721 = state_28676__$1;
(statearr_28694_28721[(2)] = inst_28647);

(statearr_28694_28721[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (16))){
var state_28676__$1 = state_28676;
var statearr_28695_28722 = state_28676__$1;
(statearr_28695_28722[(2)] = null);

(statearr_28695_28722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (10))){
var inst_28668 = (state_28676[(2)]);
var state_28676__$1 = (function (){var statearr_28696 = state_28676;
(statearr_28696[(11)] = inst_28668);

return statearr_28696;
})();
var statearr_28697_28723 = state_28676__$1;
(statearr_28697_28723[(2)] = null);

(statearr_28697_28723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (8))){
var inst_28635 = (state_28676[(9)]);
var inst_28639 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28635,opts);
var state_28676__$1 = state_28676;
if(cljs.core.truth_(inst_28639)){
var statearr_28698_28724 = state_28676__$1;
(statearr_28698_28724[(1)] = (11));

} else {
var statearr_28699_28725 = state_28676__$1;
(statearr_28699_28725[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21907__auto___28707,ch))
;
return ((function (switch__21795__auto__,c__21907__auto___28707,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21796__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21796__auto____0 = (function (){
var statearr_28703 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28703[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21796__auto__);

(statearr_28703[(1)] = (1));

return statearr_28703;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21796__auto____1 = (function (state_28676){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_28676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e28704){if((e28704 instanceof Object)){
var ex__21799__auto__ = e28704;
var statearr_28705_28726 = state_28676;
(statearr_28705_28726[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28727 = state_28676;
state_28676 = G__28727;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21796__auto__ = function(state_28676){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21796__auto____1.call(this,state_28676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21796__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21796__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___28707,ch))
})();
var state__21909__auto__ = (function (){var statearr_28706 = f__21908__auto__.call(null);
(statearr_28706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___28707);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___28707,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28728_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28728_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28735 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28735){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28733 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28734 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28733,_STAR_print_newline_STAR_28734,base_path_28735){
return (function() { 
var G__28736__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28737__i = 0, G__28737__a = new Array(arguments.length -  0);
while (G__28737__i < G__28737__a.length) {G__28737__a[G__28737__i] = arguments[G__28737__i + 0]; ++G__28737__i;}
  args = new cljs.core.IndexedSeq(G__28737__a,0);
} 
return G__28736__delegate.call(this,args);};
G__28736.cljs$lang$maxFixedArity = 0;
G__28736.cljs$lang$applyTo = (function (arglist__28738){
var args = cljs.core.seq(arglist__28738);
return G__28736__delegate(args);
});
G__28736.cljs$core$IFn$_invoke$arity$variadic = G__28736__delegate;
return G__28736;
})()
;})(_STAR_print_fn_STAR_28733,_STAR_print_newline_STAR_28734,base_path_28735))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28734;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28733;
}}catch (e28732){if((e28732 instanceof Error)){
var e = e28732;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28735], null));
} else {
var e = e28732;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28735))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28739){
var map__28748 = p__28739;
var map__28748__$1 = ((((!((map__28748 == null)))?((((map__28748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28748):map__28748);
var opts = map__28748__$1;
var build_id = cljs.core.get.call(null,map__28748__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28748,map__28748__$1,opts,build_id){
return (function (p__28750){
var vec__28751 = p__28750;
var seq__28752 = cljs.core.seq.call(null,vec__28751);
var first__28753 = cljs.core.first.call(null,seq__28752);
var seq__28752__$1 = cljs.core.next.call(null,seq__28752);
var map__28754 = first__28753;
var map__28754__$1 = ((((!((map__28754 == null)))?((((map__28754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28754.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);
var msg = map__28754__$1;
var msg_name = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28752__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28751,seq__28752,first__28753,seq__28752__$1,map__28754,map__28754__$1,msg,msg_name,_,map__28748,map__28748__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28751,seq__28752,first__28753,seq__28752__$1,map__28754,map__28754__$1,msg,msg_name,_,map__28748,map__28748__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28748,map__28748__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28762){
var vec__28763 = p__28762;
var seq__28764 = cljs.core.seq.call(null,vec__28763);
var first__28765 = cljs.core.first.call(null,seq__28764);
var seq__28764__$1 = cljs.core.next.call(null,seq__28764);
var map__28766 = first__28765;
var map__28766__$1 = ((((!((map__28766 == null)))?((((map__28766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28766):map__28766);
var msg = map__28766__$1;
var msg_name = cljs.core.get.call(null,map__28766__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28764__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28768){
var map__28780 = p__28768;
var map__28780__$1 = ((((!((map__28780 == null)))?((((map__28780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28780):map__28780);
var on_compile_warning = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28780__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28780,map__28780__$1,on_compile_warning,on_compile_fail){
return (function (p__28782){
var vec__28783 = p__28782;
var seq__28784 = cljs.core.seq.call(null,vec__28783);
var first__28785 = cljs.core.first.call(null,seq__28784);
var seq__28784__$1 = cljs.core.next.call(null,seq__28784);
var map__28786 = first__28785;
var map__28786__$1 = ((((!((map__28786 == null)))?((((map__28786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28786):map__28786);
var msg = map__28786__$1;
var msg_name = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28784__$1;
var pred__28788 = cljs.core._EQ_;
var expr__28789 = msg_name;
if(cljs.core.truth_(pred__28788.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28789))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28788.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28789))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28780,map__28780__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__,msg_hist,msg_names,msg){
return (function (state_29005){
var state_val_29006 = (state_29005[(1)]);
if((state_val_29006 === (7))){
var inst_28929 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28929)){
var statearr_29007_29053 = state_29005__$1;
(statearr_29007_29053[(1)] = (8));

} else {
var statearr_29008_29054 = state_29005__$1;
(statearr_29008_29054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (20))){
var inst_28999 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29009_29055 = state_29005__$1;
(statearr_29009_29055[(2)] = inst_28999);

(statearr_29009_29055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (27))){
var inst_28995 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29010_29056 = state_29005__$1;
(statearr_29010_29056[(2)] = inst_28995);

(statearr_29010_29056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (1))){
var inst_28922 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28922)){
var statearr_29011_29057 = state_29005__$1;
(statearr_29011_29057[(1)] = (2));

} else {
var statearr_29012_29058 = state_29005__$1;
(statearr_29012_29058[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (24))){
var inst_28997 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29013_29059 = state_29005__$1;
(statearr_29013_29059[(2)] = inst_28997);

(statearr_29013_29059[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (4))){
var inst_29003 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29005__$1,inst_29003);
} else {
if((state_val_29006 === (15))){
var inst_29001 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29014_29060 = state_29005__$1;
(statearr_29014_29060[(2)] = inst_29001);

(statearr_29014_29060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (21))){
var inst_28960 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29015_29061 = state_29005__$1;
(statearr_29015_29061[(2)] = inst_28960);

(statearr_29015_29061[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (31))){
var inst_28984 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28984)){
var statearr_29016_29062 = state_29005__$1;
(statearr_29016_29062[(1)] = (34));

} else {
var statearr_29017_29063 = state_29005__$1;
(statearr_29017_29063[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (32))){
var inst_28993 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29018_29064 = state_29005__$1;
(statearr_29018_29064[(2)] = inst_28993);

(statearr_29018_29064[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (33))){
var inst_28982 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29019_29065 = state_29005__$1;
(statearr_29019_29065[(2)] = inst_28982);

(statearr_29019_29065[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (13))){
var inst_28943 = figwheel.client.heads_up.clear.call(null);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(16),inst_28943);
} else {
if((state_val_29006 === (22))){
var inst_28964 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28965 = figwheel.client.heads_up.append_message.call(null,inst_28964);
var state_29005__$1 = state_29005;
var statearr_29020_29066 = state_29005__$1;
(statearr_29020_29066[(2)] = inst_28965);

(statearr_29020_29066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (36))){
var inst_28991 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29021_29067 = state_29005__$1;
(statearr_29021_29067[(2)] = inst_28991);

(statearr_29021_29067[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (29))){
var inst_28975 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29022_29068 = state_29005__$1;
(statearr_29022_29068[(2)] = inst_28975);

(statearr_29022_29068[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (6))){
var inst_28924 = (state_29005[(7)]);
var state_29005__$1 = state_29005;
var statearr_29023_29069 = state_29005__$1;
(statearr_29023_29069[(2)] = inst_28924);

(statearr_29023_29069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (28))){
var inst_28971 = (state_29005[(2)]);
var inst_28972 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28973 = figwheel.client.heads_up.display_warning.call(null,inst_28972);
var state_29005__$1 = (function (){var statearr_29024 = state_29005;
(statearr_29024[(8)] = inst_28971);

return statearr_29024;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(29),inst_28973);
} else {
if((state_val_29006 === (25))){
var inst_28969 = figwheel.client.heads_up.clear.call(null);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(28),inst_28969);
} else {
if((state_val_29006 === (34))){
var inst_28986 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(37),inst_28986);
} else {
if((state_val_29006 === (17))){
var inst_28951 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29025_29070 = state_29005__$1;
(statearr_29025_29070[(2)] = inst_28951);

(statearr_29025_29070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (3))){
var inst_28941 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28941)){
var statearr_29026_29071 = state_29005__$1;
(statearr_29026_29071[(1)] = (13));

} else {
var statearr_29027_29072 = state_29005__$1;
(statearr_29027_29072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (12))){
var inst_28937 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29028_29073 = state_29005__$1;
(statearr_29028_29073[(2)] = inst_28937);

(statearr_29028_29073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (2))){
var inst_28924 = (state_29005[(7)]);
var inst_28924__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29005__$1 = (function (){var statearr_29029 = state_29005;
(statearr_29029[(7)] = inst_28924__$1);

return statearr_29029;
})();
if(cljs.core.truth_(inst_28924__$1)){
var statearr_29030_29074 = state_29005__$1;
(statearr_29030_29074[(1)] = (5));

} else {
var statearr_29031_29075 = state_29005__$1;
(statearr_29031_29075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (23))){
var inst_28967 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28967)){
var statearr_29032_29076 = state_29005__$1;
(statearr_29032_29076[(1)] = (25));

} else {
var statearr_29033_29077 = state_29005__$1;
(statearr_29033_29077[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (35))){
var state_29005__$1 = state_29005;
var statearr_29034_29078 = state_29005__$1;
(statearr_29034_29078[(2)] = null);

(statearr_29034_29078[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (19))){
var inst_28962 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28962)){
var statearr_29035_29079 = state_29005__$1;
(statearr_29035_29079[(1)] = (22));

} else {
var statearr_29036_29080 = state_29005__$1;
(statearr_29036_29080[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (11))){
var inst_28933 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29037_29081 = state_29005__$1;
(statearr_29037_29081[(2)] = inst_28933);

(statearr_29037_29081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (9))){
var inst_28935 = figwheel.client.heads_up.clear.call(null);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(12),inst_28935);
} else {
if((state_val_29006 === (5))){
var inst_28926 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29005__$1 = state_29005;
var statearr_29038_29082 = state_29005__$1;
(statearr_29038_29082[(2)] = inst_28926);

(statearr_29038_29082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (14))){
var inst_28953 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28953)){
var statearr_29039_29083 = state_29005__$1;
(statearr_29039_29083[(1)] = (18));

} else {
var statearr_29040_29084 = state_29005__$1;
(statearr_29040_29084[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (26))){
var inst_28977 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29005__$1 = state_29005;
if(cljs.core.truth_(inst_28977)){
var statearr_29041_29085 = state_29005__$1;
(statearr_29041_29085[(1)] = (30));

} else {
var statearr_29042_29086 = state_29005__$1;
(statearr_29042_29086[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (16))){
var inst_28945 = (state_29005[(2)]);
var inst_28946 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28947 = figwheel.client.format_messages.call(null,inst_28946);
var inst_28948 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28949 = figwheel.client.heads_up.display_error.call(null,inst_28947,inst_28948);
var state_29005__$1 = (function (){var statearr_29043 = state_29005;
(statearr_29043[(9)] = inst_28945);

return statearr_29043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(17),inst_28949);
} else {
if((state_val_29006 === (30))){
var inst_28979 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28980 = figwheel.client.heads_up.display_warning.call(null,inst_28979);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(33),inst_28980);
} else {
if((state_val_29006 === (10))){
var inst_28939 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29044_29087 = state_29005__$1;
(statearr_29044_29087[(2)] = inst_28939);

(statearr_29044_29087[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (18))){
var inst_28955 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28956 = figwheel.client.format_messages.call(null,inst_28955);
var inst_28957 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28958 = figwheel.client.heads_up.display_error.call(null,inst_28956,inst_28957);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(21),inst_28958);
} else {
if((state_val_29006 === (37))){
var inst_28988 = (state_29005[(2)]);
var state_29005__$1 = state_29005;
var statearr_29045_29088 = state_29005__$1;
(statearr_29045_29088[(2)] = inst_28988);

(statearr_29045_29088[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29006 === (8))){
var inst_28931 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29005__$1 = state_29005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29005__$1,(11),inst_28931);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21907__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21795__auto__,c__21907__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto____0 = (function (){
var statearr_29049 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29049[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto__);

(statearr_29049[(1)] = (1));

return statearr_29049;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto____1 = (function (state_29005){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_29005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e29050){if((e29050 instanceof Object)){
var ex__21799__auto__ = e29050;
var statearr_29051_29089 = state_29005;
(statearr_29051_29089[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29090 = state_29005;
state_29005 = G__29090;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto__ = function(state_29005){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto____1.call(this,state_29005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__,msg_hist,msg_names,msg))
})();
var state__21909__auto__ = (function (){var statearr_29052 = f__21908__auto__.call(null);
(statearr_29052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_29052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__,msg_hist,msg_names,msg))
);

return c__21907__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21907__auto___29153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___29153,ch){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___29153,ch){
return (function (state_29136){
var state_val_29137 = (state_29136[(1)]);
if((state_val_29137 === (1))){
var state_29136__$1 = state_29136;
var statearr_29138_29154 = state_29136__$1;
(statearr_29138_29154[(2)] = null);

(statearr_29138_29154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (2))){
var state_29136__$1 = state_29136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29136__$1,(4),ch);
} else {
if((state_val_29137 === (3))){
var inst_29134 = (state_29136[(2)]);
var state_29136__$1 = state_29136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29136__$1,inst_29134);
} else {
if((state_val_29137 === (4))){
var inst_29124 = (state_29136[(7)]);
var inst_29124__$1 = (state_29136[(2)]);
var state_29136__$1 = (function (){var statearr_29139 = state_29136;
(statearr_29139[(7)] = inst_29124__$1);

return statearr_29139;
})();
if(cljs.core.truth_(inst_29124__$1)){
var statearr_29140_29155 = state_29136__$1;
(statearr_29140_29155[(1)] = (5));

} else {
var statearr_29141_29156 = state_29136__$1;
(statearr_29141_29156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (5))){
var inst_29124 = (state_29136[(7)]);
var inst_29126 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29124);
var state_29136__$1 = state_29136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29136__$1,(8),inst_29126);
} else {
if((state_val_29137 === (6))){
var state_29136__$1 = state_29136;
var statearr_29142_29157 = state_29136__$1;
(statearr_29142_29157[(2)] = null);

(statearr_29142_29157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (7))){
var inst_29132 = (state_29136[(2)]);
var state_29136__$1 = state_29136;
var statearr_29143_29158 = state_29136__$1;
(statearr_29143_29158[(2)] = inst_29132);

(statearr_29143_29158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29137 === (8))){
var inst_29128 = (state_29136[(2)]);
var state_29136__$1 = (function (){var statearr_29144 = state_29136;
(statearr_29144[(8)] = inst_29128);

return statearr_29144;
})();
var statearr_29145_29159 = state_29136__$1;
(statearr_29145_29159[(2)] = null);

(statearr_29145_29159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21907__auto___29153,ch))
;
return ((function (switch__21795__auto__,c__21907__auto___29153,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21796__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21796__auto____0 = (function (){
var statearr_29149 = [null,null,null,null,null,null,null,null,null];
(statearr_29149[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21796__auto__);

(statearr_29149[(1)] = (1));

return statearr_29149;
});
var figwheel$client$heads_up_plugin_$_state_machine__21796__auto____1 = (function (state_29136){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_29136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e29150){if((e29150 instanceof Object)){
var ex__21799__auto__ = e29150;
var statearr_29151_29160 = state_29136;
(statearr_29151_29160[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29161 = state_29136;
state_29136 = G__29161;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21796__auto__ = function(state_29136){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21796__auto____1.call(this,state_29136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21796__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21796__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___29153,ch))
})();
var state__21909__auto__ = (function (){var statearr_29152 = f__21908__auto__.call(null);
(statearr_29152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___29153);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___29153,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_29182){
var state_val_29183 = (state_29182[(1)]);
if((state_val_29183 === (1))){
var inst_29177 = cljs.core.async.timeout.call(null,(3000));
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29182__$1,(2),inst_29177);
} else {
if((state_val_29183 === (2))){
var inst_29179 = (state_29182[(2)]);
var inst_29180 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29182__$1 = (function (){var statearr_29184 = state_29182;
(statearr_29184[(7)] = inst_29179);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29182__$1,inst_29180);
} else {
return null;
}
}
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21796__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21796__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21796__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21796__auto____1 = (function (state_29182){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_29182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__21799__auto__ = e29189;
var statearr_29190_29192 = state_29182;
(statearr_29190_29192[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29193 = state_29182;
state_29182 = G__29193;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21796__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21796__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21796__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21796__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_29191 = f__21908__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29194){
var map__29201 = p__29194;
var map__29201__$1 = ((((!((map__29201 == null)))?((((map__29201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29201):map__29201);
var ed = map__29201__$1;
var formatted_exception = cljs.core.get.call(null,map__29201__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29201__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29201__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29203_29207 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29204_29208 = null;
var count__29205_29209 = (0);
var i__29206_29210 = (0);
while(true){
if((i__29206_29210 < count__29205_29209)){
var msg_29211 = cljs.core._nth.call(null,chunk__29204_29208,i__29206_29210);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29211);

var G__29212 = seq__29203_29207;
var G__29213 = chunk__29204_29208;
var G__29214 = count__29205_29209;
var G__29215 = (i__29206_29210 + (1));
seq__29203_29207 = G__29212;
chunk__29204_29208 = G__29213;
count__29205_29209 = G__29214;
i__29206_29210 = G__29215;
continue;
} else {
var temp__4657__auto___29216 = cljs.core.seq.call(null,seq__29203_29207);
if(temp__4657__auto___29216){
var seq__29203_29217__$1 = temp__4657__auto___29216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29203_29217__$1)){
var c__20257__auto___29218 = cljs.core.chunk_first.call(null,seq__29203_29217__$1);
var G__29219 = cljs.core.chunk_rest.call(null,seq__29203_29217__$1);
var G__29220 = c__20257__auto___29218;
var G__29221 = cljs.core.count.call(null,c__20257__auto___29218);
var G__29222 = (0);
seq__29203_29207 = G__29219;
chunk__29204_29208 = G__29220;
count__29205_29209 = G__29221;
i__29206_29210 = G__29222;
continue;
} else {
var msg_29223 = cljs.core.first.call(null,seq__29203_29217__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29223);

var G__29224 = cljs.core.next.call(null,seq__29203_29217__$1);
var G__29225 = null;
var G__29226 = (0);
var G__29227 = (0);
seq__29203_29207 = G__29224;
chunk__29204_29208 = G__29225;
count__29205_29209 = G__29226;
i__29206_29210 = G__29227;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29228){
var map__29231 = p__29228;
var map__29231__$1 = ((((!((map__29231 == null)))?((((map__29231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29231):map__29231);
var w = map__29231__$1;
var message = cljs.core.get.call(null,map__29231__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19426__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19426__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19426__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29243 = cljs.core.seq.call(null,plugins);
var chunk__29244 = null;
var count__29245 = (0);
var i__29246 = (0);
while(true){
if((i__29246 < count__29245)){
var vec__29247 = cljs.core._nth.call(null,chunk__29244,i__29246);
var k = cljs.core.nth.call(null,vec__29247,(0),null);
var plugin = cljs.core.nth.call(null,vec__29247,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29253 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29243,chunk__29244,count__29245,i__29246,pl_29253,vec__29247,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29253.call(null,msg_hist);
});})(seq__29243,chunk__29244,count__29245,i__29246,pl_29253,vec__29247,k,plugin))
);
} else {
}

var G__29254 = seq__29243;
var G__29255 = chunk__29244;
var G__29256 = count__29245;
var G__29257 = (i__29246 + (1));
seq__29243 = G__29254;
chunk__29244 = G__29255;
count__29245 = G__29256;
i__29246 = G__29257;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29243);
if(temp__4657__auto__){
var seq__29243__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29243__$1)){
var c__20257__auto__ = cljs.core.chunk_first.call(null,seq__29243__$1);
var G__29258 = cljs.core.chunk_rest.call(null,seq__29243__$1);
var G__29259 = c__20257__auto__;
var G__29260 = cljs.core.count.call(null,c__20257__auto__);
var G__29261 = (0);
seq__29243 = G__29258;
chunk__29244 = G__29259;
count__29245 = G__29260;
i__29246 = G__29261;
continue;
} else {
var vec__29250 = cljs.core.first.call(null,seq__29243__$1);
var k = cljs.core.nth.call(null,vec__29250,(0),null);
var plugin = cljs.core.nth.call(null,vec__29250,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29262 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29243,chunk__29244,count__29245,i__29246,pl_29262,vec__29250,k,plugin,seq__29243__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29262.call(null,msg_hist);
});})(seq__29243,chunk__29244,count__29245,i__29246,pl_29262,vec__29250,k,plugin,seq__29243__$1,temp__4657__auto__))
);
} else {
}

var G__29263 = cljs.core.next.call(null,seq__29243__$1);
var G__29264 = null;
var G__29265 = (0);
var G__29266 = (0);
seq__29243 = G__29263;
chunk__29244 = G__29264;
count__29245 = G__29265;
i__29246 = G__29266;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29267 = [];
var len__20551__auto___29270 = arguments.length;
var i__20552__auto___29271 = (0);
while(true){
if((i__20552__auto___29271 < len__20551__auto___29270)){
args29267.push((arguments[i__20552__auto___29271]));

var G__29272 = (i__20552__auto___29271 + (1));
i__20552__auto___29271 = G__29272;
continue;
} else {
}
break;
}

var G__29269 = args29267.length;
switch (G__29269) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29267.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20558__auto__ = [];
var len__20551__auto___29278 = arguments.length;
var i__20552__auto___29279 = (0);
while(true){
if((i__20552__auto___29279 < len__20551__auto___29278)){
args__20558__auto__.push((arguments[i__20552__auto___29279]));

var G__29280 = (i__20552__auto___29279 + (1));
i__20552__auto___29279 = G__29280;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29275){
var map__29276 = p__29275;
var map__29276__$1 = ((((!((map__29276 == null)))?((((map__29276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29276):map__29276);
var opts = map__29276__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29274){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29274));
});


//# sourceMappingURL=client.js.map?rel=1488147691741