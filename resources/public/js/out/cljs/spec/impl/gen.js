// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26642 = arguments.length;
var i__20552__auto___26643 = (0);
while(true){
if((i__20552__auto___26643 < len__20551__auto___26642)){
args__20558__auto__.push((arguments[i__20552__auto___26643]));

var G__26644 = (i__20552__auto___26643 + (1));
i__20552__auto___26643 = G__26644;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq26641){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26641));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26646 = arguments.length;
var i__20552__auto___26647 = (0);
while(true){
if((i__20552__auto___26647 < len__20551__auto___26646)){
args__20558__auto__.push((arguments[i__20552__auto___26647]));

var G__26648 = (i__20552__auto___26647 + (1));
i__20552__auto___26647 = G__26648;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq26645){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26645));
});

var g_QMARK__26649 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_26650 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26649){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__26649))
,null));
var mkg_26651 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__26649,g_26650){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__26649,g_26650))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__26649,g_26650,mkg_26651){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__26649).call(null,x);
});})(g_QMARK__26649,g_26650,mkg_26651))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__26649,g_26650,mkg_26651){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_26651).call(null,gfn);
});})(g_QMARK__26649,g_26650,mkg_26651))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__26649,g_26650,mkg_26651){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_26650).call(null,generator);
});})(g_QMARK__26649,g_26650,mkg_26651))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26613__auto___26671 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26613__auto___26671){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26672 = arguments.length;
var i__20552__auto___26673 = (0);
while(true){
if((i__20552__auto___26673 < len__20551__auto___26672)){
args__20558__auto__.push((arguments[i__20552__auto___26673]));

var G__26674 = (i__20552__auto___26673 + (1));
i__20552__auto___26673 = G__26674;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26671))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26671),args);
});})(g__26613__auto___26671))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26613__auto___26671){
return (function (seq26652){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26652));
});})(g__26613__auto___26671))
;


var g__26613__auto___26675 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26613__auto___26675){
return (function cljs$spec$impl$gen$list(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26676 = arguments.length;
var i__20552__auto___26677 = (0);
while(true){
if((i__20552__auto___26677 < len__20551__auto___26676)){
args__20558__auto__.push((arguments[i__20552__auto___26677]));

var G__26678 = (i__20552__auto___26677 + (1));
i__20552__auto___26677 = G__26678;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26675))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26675),args);
});})(g__26613__auto___26675))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26613__auto___26675){
return (function (seq26653){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26653));
});})(g__26613__auto___26675))
;


var g__26613__auto___26679 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26613__auto___26679){
return (function cljs$spec$impl$gen$map(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26680 = arguments.length;
var i__20552__auto___26681 = (0);
while(true){
if((i__20552__auto___26681 < len__20551__auto___26680)){
args__20558__auto__.push((arguments[i__20552__auto___26681]));

var G__26682 = (i__20552__auto___26681 + (1));
i__20552__auto___26681 = G__26682;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26679))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26679),args);
});})(g__26613__auto___26679))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26613__auto___26679){
return (function (seq26654){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26654));
});})(g__26613__auto___26679))
;


var g__26613__auto___26683 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26613__auto___26683){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26684 = arguments.length;
var i__20552__auto___26685 = (0);
while(true){
if((i__20552__auto___26685 < len__20551__auto___26684)){
args__20558__auto__.push((arguments[i__20552__auto___26685]));

var G__26686 = (i__20552__auto___26685 + (1));
i__20552__auto___26685 = G__26686;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26683))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26683),args);
});})(g__26613__auto___26683))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26613__auto___26683){
return (function (seq26655){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26655));
});})(g__26613__auto___26683))
;


var g__26613__auto___26687 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26613__auto___26687){
return (function cljs$spec$impl$gen$set(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26688 = arguments.length;
var i__20552__auto___26689 = (0);
while(true){
if((i__20552__auto___26689 < len__20551__auto___26688)){
args__20558__auto__.push((arguments[i__20552__auto___26689]));

var G__26690 = (i__20552__auto___26689 + (1));
i__20552__auto___26689 = G__26690;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26687))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26687),args);
});})(g__26613__auto___26687))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26613__auto___26687){
return (function (seq26656){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26656));
});})(g__26613__auto___26687))
;


var g__26613__auto___26691 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26613__auto___26691){
return (function cljs$spec$impl$gen$vector(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26692 = arguments.length;
var i__20552__auto___26693 = (0);
while(true){
if((i__20552__auto___26693 < len__20551__auto___26692)){
args__20558__auto__.push((arguments[i__20552__auto___26693]));

var G__26694 = (i__20552__auto___26693 + (1));
i__20552__auto___26693 = G__26694;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26691))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26691),args);
});})(g__26613__auto___26691))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26613__auto___26691){
return (function (seq26657){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26657));
});})(g__26613__auto___26691))
;


var g__26613__auto___26695 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26613__auto___26695){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26696 = arguments.length;
var i__20552__auto___26697 = (0);
while(true){
if((i__20552__auto___26697 < len__20551__auto___26696)){
args__20558__auto__.push((arguments[i__20552__auto___26697]));

var G__26698 = (i__20552__auto___26697 + (1));
i__20552__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26695))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26695),args);
});})(g__26613__auto___26695))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26613__auto___26695){
return (function (seq26658){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26658));
});})(g__26613__auto___26695))
;


var g__26613__auto___26699 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26613__auto___26699){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26700 = arguments.length;
var i__20552__auto___26701 = (0);
while(true){
if((i__20552__auto___26701 < len__20551__auto___26700)){
args__20558__auto__.push((arguments[i__20552__auto___26701]));

var G__26702 = (i__20552__auto___26701 + (1));
i__20552__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26699))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26699),args);
});})(g__26613__auto___26699))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26613__auto___26699){
return (function (seq26659){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26659));
});})(g__26613__auto___26699))
;


var g__26613__auto___26703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26613__auto___26703){
return (function cljs$spec$impl$gen$elements(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26704 = arguments.length;
var i__20552__auto___26705 = (0);
while(true){
if((i__20552__auto___26705 < len__20551__auto___26704)){
args__20558__auto__.push((arguments[i__20552__auto___26705]));

var G__26706 = (i__20552__auto___26705 + (1));
i__20552__auto___26705 = G__26706;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26703))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26703),args);
});})(g__26613__auto___26703))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26613__auto___26703){
return (function (seq26660){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26660));
});})(g__26613__auto___26703))
;


var g__26613__auto___26707 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26613__auto___26707){
return (function cljs$spec$impl$gen$bind(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26708 = arguments.length;
var i__20552__auto___26709 = (0);
while(true){
if((i__20552__auto___26709 < len__20551__auto___26708)){
args__20558__auto__.push((arguments[i__20552__auto___26709]));

var G__26710 = (i__20552__auto___26709 + (1));
i__20552__auto___26709 = G__26710;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26707))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26707),args);
});})(g__26613__auto___26707))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26613__auto___26707){
return (function (seq26661){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26661));
});})(g__26613__auto___26707))
;


var g__26613__auto___26711 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26613__auto___26711){
return (function cljs$spec$impl$gen$choose(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26712 = arguments.length;
var i__20552__auto___26713 = (0);
while(true){
if((i__20552__auto___26713 < len__20551__auto___26712)){
args__20558__auto__.push((arguments[i__20552__auto___26713]));

var G__26714 = (i__20552__auto___26713 + (1));
i__20552__auto___26713 = G__26714;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26711))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26711),args);
});})(g__26613__auto___26711))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26613__auto___26711){
return (function (seq26662){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26662));
});})(g__26613__auto___26711))
;


var g__26613__auto___26715 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26613__auto___26715){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26716 = arguments.length;
var i__20552__auto___26717 = (0);
while(true){
if((i__20552__auto___26717 < len__20551__auto___26716)){
args__20558__auto__.push((arguments[i__20552__auto___26717]));

var G__26718 = (i__20552__auto___26717 + (1));
i__20552__auto___26717 = G__26718;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26715))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26715),args);
});})(g__26613__auto___26715))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26613__auto___26715){
return (function (seq26663){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26663));
});})(g__26613__auto___26715))
;


var g__26613__auto___26719 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26613__auto___26719){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26720 = arguments.length;
var i__20552__auto___26721 = (0);
while(true){
if((i__20552__auto___26721 < len__20551__auto___26720)){
args__20558__auto__.push((arguments[i__20552__auto___26721]));

var G__26722 = (i__20552__auto___26721 + (1));
i__20552__auto___26721 = G__26722;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26719))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26719),args);
});})(g__26613__auto___26719))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26613__auto___26719){
return (function (seq26664){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26664));
});})(g__26613__auto___26719))
;


var g__26613__auto___26723 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26613__auto___26723){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26724 = arguments.length;
var i__20552__auto___26725 = (0);
while(true){
if((i__20552__auto___26725 < len__20551__auto___26724)){
args__20558__auto__.push((arguments[i__20552__auto___26725]));

var G__26726 = (i__20552__auto___26725 + (1));
i__20552__auto___26725 = G__26726;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26723))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26723),args);
});})(g__26613__auto___26723))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26613__auto___26723){
return (function (seq26665){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26665));
});})(g__26613__auto___26723))
;


var g__26613__auto___26727 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26613__auto___26727){
return (function cljs$spec$impl$gen$sample(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26728 = arguments.length;
var i__20552__auto___26729 = (0);
while(true){
if((i__20552__auto___26729 < len__20551__auto___26728)){
args__20558__auto__.push((arguments[i__20552__auto___26729]));

var G__26730 = (i__20552__auto___26729 + (1));
i__20552__auto___26729 = G__26730;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26727))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26727),args);
});})(g__26613__auto___26727))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26613__auto___26727){
return (function (seq26666){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26666));
});})(g__26613__auto___26727))
;


var g__26613__auto___26731 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26613__auto___26731){
return (function cljs$spec$impl$gen$return(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26732 = arguments.length;
var i__20552__auto___26733 = (0);
while(true){
if((i__20552__auto___26733 < len__20551__auto___26732)){
args__20558__auto__.push((arguments[i__20552__auto___26733]));

var G__26734 = (i__20552__auto___26733 + (1));
i__20552__auto___26733 = G__26734;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26731))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26731),args);
});})(g__26613__auto___26731))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26613__auto___26731){
return (function (seq26667){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26667));
});})(g__26613__auto___26731))
;


var g__26613__auto___26735 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26613__auto___26735){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26736 = arguments.length;
var i__20552__auto___26737 = (0);
while(true){
if((i__20552__auto___26737 < len__20551__auto___26736)){
args__20558__auto__.push((arguments[i__20552__auto___26737]));

var G__26738 = (i__20552__auto___26737 + (1));
i__20552__auto___26737 = G__26738;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26735))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26735),args);
});})(g__26613__auto___26735))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26613__auto___26735){
return (function (seq26668){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26668));
});})(g__26613__auto___26735))
;


var g__26613__auto___26739 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26613__auto___26739){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26740 = arguments.length;
var i__20552__auto___26741 = (0);
while(true){
if((i__20552__auto___26741 < len__20551__auto___26740)){
args__20558__auto__.push((arguments[i__20552__auto___26741]));

var G__26742 = (i__20552__auto___26741 + (1));
i__20552__auto___26741 = G__26742;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26739))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26739),args);
});})(g__26613__auto___26739))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26613__auto___26739){
return (function (seq26669){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26669));
});})(g__26613__auto___26739))
;


var g__26613__auto___26743 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__26613__auto___26743){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26744 = arguments.length;
var i__20552__auto___26745 = (0);
while(true){
if((i__20552__auto___26745 < len__20551__auto___26744)){
args__20558__auto__.push((arguments[i__20552__auto___26745]));

var G__26746 = (i__20552__auto___26745 + (1));
i__20552__auto___26745 = G__26746;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26613__auto___26743))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26613__auto___26743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26613__auto___26743),args);
});})(g__26613__auto___26743))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__26613__auto___26743){
return (function (seq26670){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26670));
});})(g__26613__auto___26743))
;

var g__26626__auto___26768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__26626__auto___26768){
return (function cljs$spec$impl$gen$any(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26769 = arguments.length;
var i__20552__auto___26770 = (0);
while(true){
if((i__20552__auto___26770 < len__20551__auto___26769)){
args__20558__auto__.push((arguments[i__20552__auto___26770]));

var G__26771 = (i__20552__auto___26770 + (1));
i__20552__auto___26770 = G__26771;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26768))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26768){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26768);
});})(g__26626__auto___26768))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__26626__auto___26768){
return (function (seq26747){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26747));
});})(g__26626__auto___26768))
;


var g__26626__auto___26772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__26626__auto___26772){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26773 = arguments.length;
var i__20552__auto___26774 = (0);
while(true){
if((i__20552__auto___26774 < len__20551__auto___26773)){
args__20558__auto__.push((arguments[i__20552__auto___26774]));

var G__26775 = (i__20552__auto___26774 + (1));
i__20552__auto___26774 = G__26775;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26772))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26772){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26772);
});})(g__26626__auto___26772))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__26626__auto___26772){
return (function (seq26748){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26748));
});})(g__26626__auto___26772))
;


var g__26626__auto___26776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__26626__auto___26776){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26777 = arguments.length;
var i__20552__auto___26778 = (0);
while(true){
if((i__20552__auto___26778 < len__20551__auto___26777)){
args__20558__auto__.push((arguments[i__20552__auto___26778]));

var G__26779 = (i__20552__auto___26778 + (1));
i__20552__auto___26778 = G__26779;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26776))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26776){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26776);
});})(g__26626__auto___26776))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__26626__auto___26776){
return (function (seq26749){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26749));
});})(g__26626__auto___26776))
;


var g__26626__auto___26780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__26626__auto___26780){
return (function cljs$spec$impl$gen$char(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26781 = arguments.length;
var i__20552__auto___26782 = (0);
while(true){
if((i__20552__auto___26782 < len__20551__auto___26781)){
args__20558__auto__.push((arguments[i__20552__auto___26782]));

var G__26783 = (i__20552__auto___26782 + (1));
i__20552__auto___26782 = G__26783;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26780))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26780){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26780);
});})(g__26626__auto___26780))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__26626__auto___26780){
return (function (seq26750){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26750));
});})(g__26626__auto___26780))
;


var g__26626__auto___26784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__26626__auto___26784){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26785 = arguments.length;
var i__20552__auto___26786 = (0);
while(true){
if((i__20552__auto___26786 < len__20551__auto___26785)){
args__20558__auto__.push((arguments[i__20552__auto___26786]));

var G__26787 = (i__20552__auto___26786 + (1));
i__20552__auto___26786 = G__26787;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26784))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26784){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26784);
});})(g__26626__auto___26784))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__26626__auto___26784){
return (function (seq26751){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26751));
});})(g__26626__auto___26784))
;


var g__26626__auto___26788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__26626__auto___26788){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26789 = arguments.length;
var i__20552__auto___26790 = (0);
while(true){
if((i__20552__auto___26790 < len__20551__auto___26789)){
args__20558__auto__.push((arguments[i__20552__auto___26790]));

var G__26791 = (i__20552__auto___26790 + (1));
i__20552__auto___26790 = G__26791;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26788))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26788){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26788);
});})(g__26626__auto___26788))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__26626__auto___26788){
return (function (seq26752){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26752));
});})(g__26626__auto___26788))
;


var g__26626__auto___26792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__26626__auto___26792){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26793 = arguments.length;
var i__20552__auto___26794 = (0);
while(true){
if((i__20552__auto___26794 < len__20551__auto___26793)){
args__20558__auto__.push((arguments[i__20552__auto___26794]));

var G__26795 = (i__20552__auto___26794 + (1));
i__20552__auto___26794 = G__26795;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26792))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26792){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26792);
});})(g__26626__auto___26792))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__26626__auto___26792){
return (function (seq26753){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26753));
});})(g__26626__auto___26792))
;


var g__26626__auto___26796 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__26626__auto___26796){
return (function cljs$spec$impl$gen$double(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26797 = arguments.length;
var i__20552__auto___26798 = (0);
while(true){
if((i__20552__auto___26798 < len__20551__auto___26797)){
args__20558__auto__.push((arguments[i__20552__auto___26798]));

var G__26799 = (i__20552__auto___26798 + (1));
i__20552__auto___26798 = G__26799;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26796))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26796){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26796);
});})(g__26626__auto___26796))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__26626__auto___26796){
return (function (seq26754){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26754));
});})(g__26626__auto___26796))
;


var g__26626__auto___26800 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__26626__auto___26800){
return (function cljs$spec$impl$gen$int(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26801 = arguments.length;
var i__20552__auto___26802 = (0);
while(true){
if((i__20552__auto___26802 < len__20551__auto___26801)){
args__20558__auto__.push((arguments[i__20552__auto___26802]));

var G__26803 = (i__20552__auto___26802 + (1));
i__20552__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26800))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26800){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26800);
});})(g__26626__auto___26800))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__26626__auto___26800){
return (function (seq26755){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26755));
});})(g__26626__auto___26800))
;


var g__26626__auto___26804 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__26626__auto___26804){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26805 = arguments.length;
var i__20552__auto___26806 = (0);
while(true){
if((i__20552__auto___26806 < len__20551__auto___26805)){
args__20558__auto__.push((arguments[i__20552__auto___26806]));

var G__26807 = (i__20552__auto___26806 + (1));
i__20552__auto___26806 = G__26807;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26804))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26804){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26804);
});})(g__26626__auto___26804))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__26626__auto___26804){
return (function (seq26756){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26756));
});})(g__26626__auto___26804))
;


var g__26626__auto___26808 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__26626__auto___26808){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26809 = arguments.length;
var i__20552__auto___26810 = (0);
while(true){
if((i__20552__auto___26810 < len__20551__auto___26809)){
args__20558__auto__.push((arguments[i__20552__auto___26810]));

var G__26811 = (i__20552__auto___26810 + (1));
i__20552__auto___26810 = G__26811;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26808))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26808){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26808);
});})(g__26626__auto___26808))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__26626__auto___26808){
return (function (seq26757){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26757));
});})(g__26626__auto___26808))
;


var g__26626__auto___26812 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__26626__auto___26812){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26813 = arguments.length;
var i__20552__auto___26814 = (0);
while(true){
if((i__20552__auto___26814 < len__20551__auto___26813)){
args__20558__auto__.push((arguments[i__20552__auto___26814]));

var G__26815 = (i__20552__auto___26814 + (1));
i__20552__auto___26814 = G__26815;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26812))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26812){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26812);
});})(g__26626__auto___26812))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__26626__auto___26812){
return (function (seq26758){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26758));
});})(g__26626__auto___26812))
;


var g__26626__auto___26816 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__26626__auto___26816){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26817 = arguments.length;
var i__20552__auto___26818 = (0);
while(true){
if((i__20552__auto___26818 < len__20551__auto___26817)){
args__20558__auto__.push((arguments[i__20552__auto___26818]));

var G__26819 = (i__20552__auto___26818 + (1));
i__20552__auto___26818 = G__26819;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26816))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26816){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26816);
});})(g__26626__auto___26816))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__26626__auto___26816){
return (function (seq26759){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26759));
});})(g__26626__auto___26816))
;


var g__26626__auto___26820 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__26626__auto___26820){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26821 = arguments.length;
var i__20552__auto___26822 = (0);
while(true){
if((i__20552__auto___26822 < len__20551__auto___26821)){
args__20558__auto__.push((arguments[i__20552__auto___26822]));

var G__26823 = (i__20552__auto___26822 + (1));
i__20552__auto___26822 = G__26823;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26820))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26820){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26820);
});})(g__26626__auto___26820))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__26626__auto___26820){
return (function (seq26760){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26760));
});})(g__26626__auto___26820))
;


var g__26626__auto___26824 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__26626__auto___26824){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26825 = arguments.length;
var i__20552__auto___26826 = (0);
while(true){
if((i__20552__auto___26826 < len__20551__auto___26825)){
args__20558__auto__.push((arguments[i__20552__auto___26826]));

var G__26827 = (i__20552__auto___26826 + (1));
i__20552__auto___26826 = G__26827;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26824))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26824){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26824);
});})(g__26626__auto___26824))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__26626__auto___26824){
return (function (seq26761){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26761));
});})(g__26626__auto___26824))
;


var g__26626__auto___26828 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__26626__auto___26828){
return (function cljs$spec$impl$gen$string(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26829 = arguments.length;
var i__20552__auto___26830 = (0);
while(true){
if((i__20552__auto___26830 < len__20551__auto___26829)){
args__20558__auto__.push((arguments[i__20552__auto___26830]));

var G__26831 = (i__20552__auto___26830 + (1));
i__20552__auto___26830 = G__26831;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26828))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26828){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26828);
});})(g__26626__auto___26828))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__26626__auto___26828){
return (function (seq26762){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26762));
});})(g__26626__auto___26828))
;


var g__26626__auto___26832 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__26626__auto___26832){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26833 = arguments.length;
var i__20552__auto___26834 = (0);
while(true){
if((i__20552__auto___26834 < len__20551__auto___26833)){
args__20558__auto__.push((arguments[i__20552__auto___26834]));

var G__26835 = (i__20552__auto___26834 + (1));
i__20552__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26832))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26832){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26832);
});})(g__26626__auto___26832))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__26626__auto___26832){
return (function (seq26763){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26763));
});})(g__26626__auto___26832))
;


var g__26626__auto___26836 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__26626__auto___26836){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26837 = arguments.length;
var i__20552__auto___26838 = (0);
while(true){
if((i__20552__auto___26838 < len__20551__auto___26837)){
args__20558__auto__.push((arguments[i__20552__auto___26838]));

var G__26839 = (i__20552__auto___26838 + (1));
i__20552__auto___26838 = G__26839;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26836))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26836){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26836);
});})(g__26626__auto___26836))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__26626__auto___26836){
return (function (seq26764){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26764));
});})(g__26626__auto___26836))
;


var g__26626__auto___26840 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__26626__auto___26840){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26841 = arguments.length;
var i__20552__auto___26842 = (0);
while(true){
if((i__20552__auto___26842 < len__20551__auto___26841)){
args__20558__auto__.push((arguments[i__20552__auto___26842]));

var G__26843 = (i__20552__auto___26842 + (1));
i__20552__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26840))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26840){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26840);
});})(g__26626__auto___26840))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__26626__auto___26840){
return (function (seq26765){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26765));
});})(g__26626__auto___26840))
;


var g__26626__auto___26844 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__26626__auto___26844){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26845 = arguments.length;
var i__20552__auto___26846 = (0);
while(true){
if((i__20552__auto___26846 < len__20551__auto___26845)){
args__20558__auto__.push((arguments[i__20552__auto___26846]));

var G__26847 = (i__20552__auto___26846 + (1));
i__20552__auto___26846 = G__26847;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26844))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26844){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26844);
});})(g__26626__auto___26844))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__26626__auto___26844){
return (function (seq26766){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26766));
});})(g__26626__auto___26844))
;


var g__26626__auto___26848 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__26626__auto___26848){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26849 = arguments.length;
var i__20552__auto___26850 = (0);
while(true){
if((i__20552__auto___26850 < len__20551__auto___26849)){
args__20558__auto__.push((arguments[i__20552__auto___26850]));

var G__26851 = (i__20552__auto___26850 + (1));
i__20552__auto___26850 = G__26851;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});})(g__26626__auto___26848))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26626__auto___26848){
return (function (args){
return cljs.core.deref.call(null,g__26626__auto___26848);
});})(g__26626__auto___26848))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__26626__auto___26848){
return (function (seq26767){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26767));
});})(g__26626__auto___26848))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__20558__auto__ = [];
var len__20551__auto___26854 = arguments.length;
var i__20552__auto___26855 = (0);
while(true){
if((i__20552__auto___26855 < len__20551__auto___26854)){
args__20558__auto__.push((arguments[i__20552__auto___26855]));

var G__26856 = (i__20552__auto___26855 + (1));
i__20552__auto___26855 = G__26856;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((0) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__20559__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__26852_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__26852_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq26853){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26853));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__26857_SHARP_){
return (new Date(p1__26857_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1488147689969