// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27997){
var map__28022 = p__27997;
var map__28022__$1 = ((((!((map__28022 == null)))?((((map__28022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28022):map__28022);
var m = map__28022__$1;
var n = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28024_28046 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28025_28047 = null;
var count__28026_28048 = (0);
var i__28027_28049 = (0);
while(true){
if((i__28027_28049 < count__28026_28048)){
var f_28050 = cljs.core._nth.call(null,chunk__28025_28047,i__28027_28049);
cljs.core.println.call(null,"  ",f_28050);

var G__28051 = seq__28024_28046;
var G__28052 = chunk__28025_28047;
var G__28053 = count__28026_28048;
var G__28054 = (i__28027_28049 + (1));
seq__28024_28046 = G__28051;
chunk__28025_28047 = G__28052;
count__28026_28048 = G__28053;
i__28027_28049 = G__28054;
continue;
} else {
var temp__4657__auto___28055 = cljs.core.seq.call(null,seq__28024_28046);
if(temp__4657__auto___28055){
var seq__28024_28056__$1 = temp__4657__auto___28055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28024_28056__$1)){
var c__20257__auto___28057 = cljs.core.chunk_first.call(null,seq__28024_28056__$1);
var G__28058 = cljs.core.chunk_rest.call(null,seq__28024_28056__$1);
var G__28059 = c__20257__auto___28057;
var G__28060 = cljs.core.count.call(null,c__20257__auto___28057);
var G__28061 = (0);
seq__28024_28046 = G__28058;
chunk__28025_28047 = G__28059;
count__28026_28048 = G__28060;
i__28027_28049 = G__28061;
continue;
} else {
var f_28062 = cljs.core.first.call(null,seq__28024_28056__$1);
cljs.core.println.call(null,"  ",f_28062);

var G__28063 = cljs.core.next.call(null,seq__28024_28056__$1);
var G__28064 = null;
var G__28065 = (0);
var G__28066 = (0);
seq__28024_28046 = G__28063;
chunk__28025_28047 = G__28064;
count__28026_28048 = G__28065;
i__28027_28049 = G__28066;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28067 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19438__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28067);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28067)))?cljs.core.second.call(null,arglists_28067):arglists_28067));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28028_28068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28029_28069 = null;
var count__28030_28070 = (0);
var i__28031_28071 = (0);
while(true){
if((i__28031_28071 < count__28030_28070)){
var vec__28032_28072 = cljs.core._nth.call(null,chunk__28029_28069,i__28031_28071);
var name_28073 = cljs.core.nth.call(null,vec__28032_28072,(0),null);
var map__28035_28074 = cljs.core.nth.call(null,vec__28032_28072,(1),null);
var map__28035_28075__$1 = ((((!((map__28035_28074 == null)))?((((map__28035_28074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28035_28074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28035_28074):map__28035_28074);
var doc_28076 = cljs.core.get.call(null,map__28035_28075__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28077 = cljs.core.get.call(null,map__28035_28075__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28073);

cljs.core.println.call(null," ",arglists_28077);

if(cljs.core.truth_(doc_28076)){
cljs.core.println.call(null," ",doc_28076);
} else {
}

var G__28078 = seq__28028_28068;
var G__28079 = chunk__28029_28069;
var G__28080 = count__28030_28070;
var G__28081 = (i__28031_28071 + (1));
seq__28028_28068 = G__28078;
chunk__28029_28069 = G__28079;
count__28030_28070 = G__28080;
i__28031_28071 = G__28081;
continue;
} else {
var temp__4657__auto___28082 = cljs.core.seq.call(null,seq__28028_28068);
if(temp__4657__auto___28082){
var seq__28028_28083__$1 = temp__4657__auto___28082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28028_28083__$1)){
var c__20257__auto___28084 = cljs.core.chunk_first.call(null,seq__28028_28083__$1);
var G__28085 = cljs.core.chunk_rest.call(null,seq__28028_28083__$1);
var G__28086 = c__20257__auto___28084;
var G__28087 = cljs.core.count.call(null,c__20257__auto___28084);
var G__28088 = (0);
seq__28028_28068 = G__28085;
chunk__28029_28069 = G__28086;
count__28030_28070 = G__28087;
i__28031_28071 = G__28088;
continue;
} else {
var vec__28037_28089 = cljs.core.first.call(null,seq__28028_28083__$1);
var name_28090 = cljs.core.nth.call(null,vec__28037_28089,(0),null);
var map__28040_28091 = cljs.core.nth.call(null,vec__28037_28089,(1),null);
var map__28040_28092__$1 = ((((!((map__28040_28091 == null)))?((((map__28040_28091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28040_28091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28040_28091):map__28040_28091);
var doc_28093 = cljs.core.get.call(null,map__28040_28092__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28094 = cljs.core.get.call(null,map__28040_28092__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28090);

cljs.core.println.call(null," ",arglists_28094);

if(cljs.core.truth_(doc_28093)){
cljs.core.println.call(null," ",doc_28093);
} else {
}

var G__28095 = cljs.core.next.call(null,seq__28028_28083__$1);
var G__28096 = null;
var G__28097 = (0);
var G__28098 = (0);
seq__28028_28068 = G__28095;
chunk__28029_28069 = G__28096;
count__28030_28070 = G__28097;
i__28031_28071 = G__28098;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__28042 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28043 = null;
var count__28044 = (0);
var i__28045 = (0);
while(true){
if((i__28045 < count__28044)){
var role = cljs.core._nth.call(null,chunk__28043,i__28045);
var temp__4657__auto___28099__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28099__$1)){
var spec_28100 = temp__4657__auto___28099__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_28100));
} else {
}

var G__28101 = seq__28042;
var G__28102 = chunk__28043;
var G__28103 = count__28044;
var G__28104 = (i__28045 + (1));
seq__28042 = G__28101;
chunk__28043 = G__28102;
count__28044 = G__28103;
i__28045 = G__28104;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__28042);
if(temp__4657__auto____$1){
var seq__28042__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28042__$1)){
var c__20257__auto__ = cljs.core.chunk_first.call(null,seq__28042__$1);
var G__28105 = cljs.core.chunk_rest.call(null,seq__28042__$1);
var G__28106 = c__20257__auto__;
var G__28107 = cljs.core.count.call(null,c__20257__auto__);
var G__28108 = (0);
seq__28042 = G__28105;
chunk__28043 = G__28106;
count__28044 = G__28107;
i__28045 = G__28108;
continue;
} else {
var role = cljs.core.first.call(null,seq__28042__$1);
var temp__4657__auto___28109__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___28109__$2)){
var spec_28110 = temp__4657__auto___28109__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_28110));
} else {
}

var G__28111 = cljs.core.next.call(null,seq__28042__$1);
var G__28112 = null;
var G__28113 = (0);
var G__28114 = (0);
seq__28042 = G__28111;
chunk__28043 = G__28112;
count__28044 = G__28113;
i__28045 = G__28114;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1488147691110