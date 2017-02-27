// Compiled by ClojureScript 1.9.473 {}
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Function that does nothing.
 */
quil.util.no_fn = (function quil$util$no_fn(){
return null;
});
/**
 * Returns the val associated with key in mappings or key directly if it
 *   is one of the vals in mappings. Otherwise throws an exception.
 */
quil.util.resolve_constant_key = (function quil$util$resolve_constant_key(key,mappings){
if(cljs.core.truth_(cljs.core.get.call(null,mappings,key))){
return cljs.core.get.call(null,mappings,key);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([key], true),cljs.core.vals.call(null,mappings)))){
return key;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expecting a keyword, got: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". Expected one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,mappings))))].join('')));

}
}
});
/**
 * Returns the length of the longest key of map m. Assumes m's keys are strings
 * and returns 0 if map is empty:
 * (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
 * (length-of-longest-key {}) ;=> 0
 */
quil.util.length_of_longest_key = (function quil$util$length_of_longest_key(m){
var or__19438__auto__ = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__20764_SHARP_){
return p1__20764_SHARP_.length();
}),cljs.core.keys.call(null,m))));
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return (0);
}
});
/**
 * Generates a padding string starting concatting s with len times pad:
 * (gen-padding "" 5 "b") ;=> "bbbbb"
 * May be called without starting string s in which case it defaults to the
 * empty string and also without pad in which case it defaults to a single space
 */
quil.util.gen_padding = (function quil$util$gen_padding(var_args){
var args20765 = [];
var len__20551__auto___20768 = arguments.length;
var i__20552__auto___20769 = (0);
while(true){
if((i__20552__auto___20769 < len__20551__auto___20768)){
args20765.push((arguments[i__20552__auto___20769]));

var G__20770 = (i__20552__auto___20769 + (1));
i__20552__auto___20769 = G__20770;
continue;
} else {
}
break;
}

var G__20767 = args20765.length;
switch (G__20767) {
case 1:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20765.length)].join('')));

}
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1 = (function (len){
return quil.util.gen_padding.call(null,"",len," ");
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2 = (function (len,pad){
return quil.util.gen_padding.call(null,"",len,pad);
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3 = (function (s,len,pad){
if((len > (0))){
return quil.util.gen_padding.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad)].join(''),(len - (1)),pad);
} else {
return s;
}
});

quil.util.gen_padding.cljs$lang$maxFixedArity = 3;

quil.util.print_definition_list = (function quil$util$print_definition_list(definitions){
var longest_key = quil.util.length_of_longest_key.call(null,definitions);
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (longest_key){
return (function (p__20776){
var vec__20777 = p__20776;
var k = cljs.core.nth.call(null,vec__20777,(0),null);
var v = cljs.core.nth.call(null,vec__20777,(1),null);
var len = k.length();
var diff = (longest_key - len);
var pad = quil.util.gen_padding.call(null,diff);
return cljs.core.println.call(null,k,pad,"- ",v);
});})(longest_key))
,definitions));
});
quil.util.clj_compilation_QMARK_ = (function quil$util$clj_compilation_QMARK_(){
return false;
});
quil.util.prepare_quil_name = (function quil$util$prepare_quil_name(const_keyword){
return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,const_keyword)),/-/,"_");
});
quil.util.prepare_quil_clj_constants = (function quil$util$prepare_quil_clj_constants(constants){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__20780_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20780_SHARP_,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("PConstants/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quil.util.prepare_quil_name.call(null,p1__20780_SHARP_))].join(''))],null));
}),constants));
});
quil.util.prepare_quil_cljs_constants = (function quil$util$prepare_quil_cljs_constants(constants){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__20781_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20781_SHARP_,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Processing.prototype.PConstants","js/Processing.prototype.PConstants",2034048972,null)),(function (){var x__20280__auto__ = quil.util.prepare_quil_name.call(null,p1__20781_SHARP_);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20280__auto__);
})())))],null));
}),constants));
});
quil.util.make_quil_constant_map = (function quil$util$make_quil_constant_map(target,const_map_name,const_map){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__20280__auto__ = const_map_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20280__auto__);
})(),(function (){var x__20280__auto__ = ((cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"clj","clj",-660495428)))?quil.util.prepare_quil_clj_constants.call(null,const_map):quil.util.prepare_quil_cljs_constants.call(null,const_map));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20280__auto__);
})())));
});
quil.util.generate_quil_constants = (function quil$util$generate_quil_constants(var_args){
var args__20558__auto__ = [];
var len__20551__auto___20787 = arguments.length;
var i__20552__auto___20788 = (0);
while(true){
if((i__20552__auto___20788 < len__20551__auto___20787)){
args__20558__auto__.push((arguments[i__20552__auto___20788]));

var G__20789 = (i__20552__auto___20788 + (1));
i__20552__auto___20788 = G__20789;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((3) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((3)),(0),null)):null);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20559__auto__);
});

quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,target,opts){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__20782_SHARP_){
return quil.util.make_quil_constant_map.call(null,target,cljs.core.first.call(null,p1__20782_SHARP_),cljs.core.second.call(null,p1__20782_SHARP_));
}),cljs.core.partition.call(null,(2),opts)))));
});

quil.util.generate_quil_constants.cljs$lang$maxFixedArity = (3);

quil.util.generate_quil_constants.cljs$lang$applyTo = (function (seq20783){
var G__20784 = cljs.core.first.call(null,seq20783);
var seq20783__$1 = cljs.core.next.call(null,seq20783);
var G__20785 = cljs.core.first.call(null,seq20783__$1);
var seq20783__$2 = cljs.core.next.call(null,seq20783__$1);
var G__20786 = cljs.core.first.call(null,seq20783__$2);
var seq20783__$3 = cljs.core.next.call(null,seq20783__$2);
return quil.util.generate_quil_constants.cljs$core$IFn$_invoke$arity$variadic(G__20784,G__20785,G__20786,seq20783__$3);
});


quil.util.generate_quil_constants.cljs$lang$macro = true;

//# sourceMappingURL=util.js.map?rel=1488147685822