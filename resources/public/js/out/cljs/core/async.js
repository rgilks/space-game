// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21952 = [];
var len__20551__auto___21958 = arguments.length;
var i__20552__auto___21959 = (0);
while(true){
if((i__20552__auto___21959 < len__20551__auto___21958)){
args21952.push((arguments[i__20552__auto___21959]));

var G__21960 = (i__20552__auto___21959 + (1));
i__20552__auto___21959 = G__21960;
continue;
} else {
}
break;
}

var G__21954 = args21952.length;
switch (G__21954) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21952.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21955 = (function (f,blockable,meta21956){
this.f = f;
this.blockable = blockable;
this.meta21956 = meta21956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21957,meta21956__$1){
var self__ = this;
var _21957__$1 = this;
return (new cljs.core.async.t_cljs$core$async21955(self__.f,self__.blockable,meta21956__$1));
});

cljs.core.async.t_cljs$core$async21955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21957){
var self__ = this;
var _21957__$1 = this;
return self__.meta21956;
});

cljs.core.async.t_cljs$core$async21955.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21956","meta21956",-406484411,null)], null);
});

cljs.core.async.t_cljs$core$async21955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21955";

cljs.core.async.t_cljs$core$async21955.cljs$lang$ctorPrWriter = (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async21955");
});

cljs.core.async.__GT_t_cljs$core$async21955 = (function cljs$core$async$__GT_t_cljs$core$async21955(f__$1,blockable__$1,meta21956){
return (new cljs.core.async.t_cljs$core$async21955(f__$1,blockable__$1,meta21956));
});

}

return (new cljs.core.async.t_cljs$core$async21955(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21964 = [];
var len__20551__auto___21967 = arguments.length;
var i__20552__auto___21968 = (0);
while(true){
if((i__20552__auto___21968 < len__20551__auto___21967)){
args21964.push((arguments[i__20552__auto___21968]));

var G__21969 = (i__20552__auto___21968 + (1));
i__20552__auto___21968 = G__21969;
continue;
} else {
}
break;
}

var G__21966 = args21964.length;
switch (G__21966) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21964.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21971 = [];
var len__20551__auto___21974 = arguments.length;
var i__20552__auto___21975 = (0);
while(true){
if((i__20552__auto___21975 < len__20551__auto___21974)){
args21971.push((arguments[i__20552__auto___21975]));

var G__21976 = (i__20552__auto___21975 + (1));
i__20552__auto___21975 = G__21976;
continue;
} else {
}
break;
}

var G__21973 = args21971.length;
switch (G__21973) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21971.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21978 = [];
var len__20551__auto___21981 = arguments.length;
var i__20552__auto___21982 = (0);
while(true){
if((i__20552__auto___21982 < len__20551__auto___21981)){
args21978.push((arguments[i__20552__auto___21982]));

var G__21983 = (i__20552__auto___21982 + (1));
i__20552__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var G__21980 = args21978.length;
switch (G__21980) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21978.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21985 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21985);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21985,ret){
return (function (){
return fn1.call(null,val_21985);
});})(val_21985,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21986 = [];
var len__20551__auto___21989 = arguments.length;
var i__20552__auto___21990 = (0);
while(true){
if((i__20552__auto___21990 < len__20551__auto___21989)){
args21986.push((arguments[i__20552__auto___21990]));

var G__21991 = (i__20552__auto___21990 + (1));
i__20552__auto___21990 = G__21991;
continue;
} else {
}
break;
}

var G__21988 = args21986.length;
switch (G__21988) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21986.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20361__auto___21993 = n;
var x_21994 = (0);
while(true){
if((x_21994 < n__20361__auto___21993)){
(a[x_21994] = (0));

var G__21995 = (x_21994 + (1));
x_21994 = G__21995;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21996 = (i + (1));
i = G__21996;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22000 = (function (flag,meta22001){
this.flag = flag;
this.meta22001 = meta22001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22002,meta22001__$1){
var self__ = this;
var _22002__$1 = this;
return (new cljs.core.async.t_cljs$core$async22000(self__.flag,meta22001__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22002){
var self__ = this;
var _22002__$1 = this;
return self__.meta22001;
});})(flag))
;

cljs.core.async.t_cljs$core$async22000.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22000.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22001","meta22001",-1869457245,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22000";

cljs.core.async.t_cljs$core$async22000.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async22000");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22000 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22000(flag__$1,meta22001){
return (new cljs.core.async.t_cljs$core$async22000(flag__$1,meta22001));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22000(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22006 = (function (flag,cb,meta22007){
this.flag = flag;
this.cb = cb;
this.meta22007 = meta22007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22008,meta22007__$1){
var self__ = this;
var _22008__$1 = this;
return (new cljs.core.async.t_cljs$core$async22006(self__.flag,self__.cb,meta22007__$1));
});

cljs.core.async.t_cljs$core$async22006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22008){
var self__ = this;
var _22008__$1 = this;
return self__.meta22007;
});

cljs.core.async.t_cljs$core$async22006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22007","meta22007",-602831581,null)], null);
});

cljs.core.async.t_cljs$core$async22006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22006";

cljs.core.async.t_cljs$core$async22006.cljs$lang$ctorPrWriter = (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async22006");
});

cljs.core.async.__GT_t_cljs$core$async22006 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22006(flag__$1,cb__$1,meta22007){
return (new cljs.core.async.t_cljs$core$async22006(flag__$1,cb__$1,meta22007));
});

}

return (new cljs.core.async.t_cljs$core$async22006(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22009_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22010_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22010_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19438__auto__ = wport;
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22011 = (i + (1));
i = G__22011;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19438__auto__ = ret;
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19426__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19426__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19426__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20558__auto__ = [];
var len__20551__auto___22017 = arguments.length;
var i__20552__auto___22018 = (0);
while(true){
if((i__20552__auto___22018 < len__20551__auto___22017)){
args__20558__auto__.push((arguments[i__20552__auto___22018]));

var G__22019 = (i__20552__auto___22018 + (1));
i__20552__auto___22018 = G__22019;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((1) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20559__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22014){
var map__22015 = p__22014;
var map__22015__$1 = ((((!((map__22015 == null)))?((((map__22015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22015):map__22015);
var opts = map__22015__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22012){
var G__22013 = cljs.core.first.call(null,seq22012);
var seq22012__$1 = cljs.core.next.call(null,seq22012);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22013,seq22012__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22020 = [];
var len__20551__auto___22070 = arguments.length;
var i__20552__auto___22071 = (0);
while(true){
if((i__20552__auto___22071 < len__20551__auto___22070)){
args22020.push((arguments[i__20552__auto___22071]));

var G__22072 = (i__20552__auto___22071 + (1));
i__20552__auto___22071 = G__22072;
continue;
} else {
}
break;
}

var G__22022 = args22020.length;
switch (G__22022) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22020.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21907__auto___22074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___22074){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___22074){
return (function (state_22046){
var state_val_22047 = (state_22046[(1)]);
if((state_val_22047 === (7))){
var inst_22042 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22048_22075 = state_22046__$1;
(statearr_22048_22075[(2)] = inst_22042);

(statearr_22048_22075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (1))){
var state_22046__$1 = state_22046;
var statearr_22049_22076 = state_22046__$1;
(statearr_22049_22076[(2)] = null);

(statearr_22049_22076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (4))){
var inst_22025 = (state_22046[(7)]);
var inst_22025__$1 = (state_22046[(2)]);
var inst_22026 = (inst_22025__$1 == null);
var state_22046__$1 = (function (){var statearr_22050 = state_22046;
(statearr_22050[(7)] = inst_22025__$1);

return statearr_22050;
})();
if(cljs.core.truth_(inst_22026)){
var statearr_22051_22077 = state_22046__$1;
(statearr_22051_22077[(1)] = (5));

} else {
var statearr_22052_22078 = state_22046__$1;
(statearr_22052_22078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (13))){
var state_22046__$1 = state_22046;
var statearr_22053_22079 = state_22046__$1;
(statearr_22053_22079[(2)] = null);

(statearr_22053_22079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (6))){
var inst_22025 = (state_22046[(7)]);
var state_22046__$1 = state_22046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22046__$1,(11),to,inst_22025);
} else {
if((state_val_22047 === (3))){
var inst_22044 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22046__$1,inst_22044);
} else {
if((state_val_22047 === (12))){
var state_22046__$1 = state_22046;
var statearr_22054_22080 = state_22046__$1;
(statearr_22054_22080[(2)] = null);

(statearr_22054_22080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (2))){
var state_22046__$1 = state_22046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22046__$1,(4),from);
} else {
if((state_val_22047 === (11))){
var inst_22035 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
if(cljs.core.truth_(inst_22035)){
var statearr_22055_22081 = state_22046__$1;
(statearr_22055_22081[(1)] = (12));

} else {
var statearr_22056_22082 = state_22046__$1;
(statearr_22056_22082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (9))){
var state_22046__$1 = state_22046;
var statearr_22057_22083 = state_22046__$1;
(statearr_22057_22083[(2)] = null);

(statearr_22057_22083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (5))){
var state_22046__$1 = state_22046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22058_22084 = state_22046__$1;
(statearr_22058_22084[(1)] = (8));

} else {
var statearr_22059_22085 = state_22046__$1;
(statearr_22059_22085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (14))){
var inst_22040 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22060_22086 = state_22046__$1;
(statearr_22060_22086[(2)] = inst_22040);

(statearr_22060_22086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (10))){
var inst_22032 = (state_22046[(2)]);
var state_22046__$1 = state_22046;
var statearr_22061_22087 = state_22046__$1;
(statearr_22061_22087[(2)] = inst_22032);

(statearr_22061_22087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22047 === (8))){
var inst_22029 = cljs.core.async.close_BANG_.call(null,to);
var state_22046__$1 = state_22046;
var statearr_22062_22088 = state_22046__$1;
(statearr_22062_22088[(2)] = inst_22029);

(statearr_22062_22088[(1)] = (10));


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
});})(c__21907__auto___22074))
;
return ((function (switch__21795__auto__,c__21907__auto___22074){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_22066 = [null,null,null,null,null,null,null,null];
(statearr_22066[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_22066[(1)] = (1));

return statearr_22066;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_22046){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22067){if((e22067 instanceof Object)){
var ex__21799__auto__ = e22067;
var statearr_22068_22089 = state_22046;
(statearr_22068_22089[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22090 = state_22046;
state_22046 = G__22090;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_22046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_22046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___22074))
})();
var state__21909__auto__ = (function (){var statearr_22069 = f__21908__auto__.call(null);
(statearr_22069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___22074);

return statearr_22069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___22074))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22278){
var vec__22279 = p__22278;
var v = cljs.core.nth.call(null,vec__22279,(0),null);
var p = cljs.core.nth.call(null,vec__22279,(1),null);
var job = vec__22279;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21907__auto___22465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___22465,res,vec__22279,v,p,job,jobs,results){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___22465,res,vec__22279,v,p,job,jobs,results){
return (function (state_22286){
var state_val_22287 = (state_22286[(1)]);
if((state_val_22287 === (1))){
var state_22286__$1 = state_22286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22286__$1,(2),res,v);
} else {
if((state_val_22287 === (2))){
var inst_22283 = (state_22286[(2)]);
var inst_22284 = cljs.core.async.close_BANG_.call(null,res);
var state_22286__$1 = (function (){var statearr_22288 = state_22286;
(statearr_22288[(7)] = inst_22283);

return statearr_22288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22286__$1,inst_22284);
} else {
return null;
}
}
});})(c__21907__auto___22465,res,vec__22279,v,p,job,jobs,results))
;
return ((function (switch__21795__auto__,c__21907__auto___22465,res,vec__22279,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0 = (function (){
var statearr_22292 = [null,null,null,null,null,null,null,null];
(statearr_22292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__);

(statearr_22292[(1)] = (1));

return statearr_22292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1 = (function (state_22286){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22293){if((e22293 instanceof Object)){
var ex__21799__auto__ = e22293;
var statearr_22294_22466 = state_22286;
(statearr_22294_22466[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22467 = state_22286;
state_22286 = G__22467;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = function(state_22286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1.call(this,state_22286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___22465,res,vec__22279,v,p,job,jobs,results))
})();
var state__21909__auto__ = (function (){var statearr_22295 = f__21908__auto__.call(null);
(statearr_22295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___22465);

return statearr_22295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___22465,res,vec__22279,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22296){
var vec__22297 = p__22296;
var v = cljs.core.nth.call(null,vec__22297,(0),null);
var p = cljs.core.nth.call(null,vec__22297,(1),null);
var job = vec__22297;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20361__auto___22468 = n;
var __22469 = (0);
while(true){
if((__22469 < n__20361__auto___22468)){
var G__22300_22470 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22300_22470) {
case "compute":
var c__21907__auto___22472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22469,c__21907__auto___22472,G__22300_22470,n__20361__auto___22468,jobs,results,process,async){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (__22469,c__21907__auto___22472,G__22300_22470,n__20361__auto___22468,jobs,results,process,async){
return (function (state_22313){
var state_val_22314 = (state_22313[(1)]);
if((state_val_22314 === (1))){
var state_22313__$1 = state_22313;
var statearr_22315_22473 = state_22313__$1;
(statearr_22315_22473[(2)] = null);

(statearr_22315_22473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22314 === (2))){
var state_22313__$1 = state_22313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22313__$1,(4),jobs);
} else {
if((state_val_22314 === (3))){
var inst_22311 = (state_22313[(2)]);
var state_22313__$1 = state_22313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22313__$1,inst_22311);
} else {
if((state_val_22314 === (4))){
var inst_22303 = (state_22313[(2)]);
var inst_22304 = process.call(null,inst_22303);
var state_22313__$1 = state_22313;
if(cljs.core.truth_(inst_22304)){
var statearr_22316_22474 = state_22313__$1;
(statearr_22316_22474[(1)] = (5));

} else {
var statearr_22317_22475 = state_22313__$1;
(statearr_22317_22475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22314 === (5))){
var state_22313__$1 = state_22313;
var statearr_22318_22476 = state_22313__$1;
(statearr_22318_22476[(2)] = null);

(statearr_22318_22476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22314 === (6))){
var state_22313__$1 = state_22313;
var statearr_22319_22477 = state_22313__$1;
(statearr_22319_22477[(2)] = null);

(statearr_22319_22477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22314 === (7))){
var inst_22309 = (state_22313[(2)]);
var state_22313__$1 = state_22313;
var statearr_22320_22478 = state_22313__$1;
(statearr_22320_22478[(2)] = inst_22309);

(statearr_22320_22478[(1)] = (3));


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
});})(__22469,c__21907__auto___22472,G__22300_22470,n__20361__auto___22468,jobs,results,process,async))
;
return ((function (__22469,switch__21795__auto__,c__21907__auto___22472,G__22300_22470,n__20361__auto___22468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0 = (function (){
var statearr_22324 = [null,null,null,null,null,null,null];
(statearr_22324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__);

(statearr_22324[(1)] = (1));

return statearr_22324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1 = (function (state_22313){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22325){if((e22325 instanceof Object)){
var ex__21799__auto__ = e22325;
var statearr_22326_22479 = state_22313;
(statearr_22326_22479[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22480 = state_22313;
state_22313 = G__22480;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = function(state_22313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1.call(this,state_22313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__;
})()
;})(__22469,switch__21795__auto__,c__21907__auto___22472,G__22300_22470,n__20361__auto___22468,jobs,results,process,async))
})();
var state__21909__auto__ = (function (){var statearr_22327 = f__21908__auto__.call(null);
(statearr_22327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___22472);

return statearr_22327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(__22469,c__21907__auto___22472,G__22300_22470,n__20361__auto___22468,jobs,results,process,async))
);


break;
case "async":
var c__21907__auto___22481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22469,c__21907__auto___22481,G__22300_22470,n__20361__auto___22468,jobs,results,process,async){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (__22469,c__21907__auto___22481,G__22300_22470,n__20361__auto___22468,jobs,results,process,async){
return (function (state_22340){
var state_val_22341 = (state_22340[(1)]);
if((state_val_22341 === (1))){
var state_22340__$1 = state_22340;
var statearr_22342_22482 = state_22340__$1;
(statearr_22342_22482[(2)] = null);

(statearr_22342_22482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22341 === (2))){
var state_22340__$1 = state_22340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22340__$1,(4),jobs);
} else {
if((state_val_22341 === (3))){
var inst_22338 = (state_22340[(2)]);
var state_22340__$1 = state_22340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22340__$1,inst_22338);
} else {
if((state_val_22341 === (4))){
var inst_22330 = (state_22340[(2)]);
var inst_22331 = async.call(null,inst_22330);
var state_22340__$1 = state_22340;
if(cljs.core.truth_(inst_22331)){
var statearr_22343_22483 = state_22340__$1;
(statearr_22343_22483[(1)] = (5));

} else {
var statearr_22344_22484 = state_22340__$1;
(statearr_22344_22484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22341 === (5))){
var state_22340__$1 = state_22340;
var statearr_22345_22485 = state_22340__$1;
(statearr_22345_22485[(2)] = null);

(statearr_22345_22485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22341 === (6))){
var state_22340__$1 = state_22340;
var statearr_22346_22486 = state_22340__$1;
(statearr_22346_22486[(2)] = null);

(statearr_22346_22486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22341 === (7))){
var inst_22336 = (state_22340[(2)]);
var state_22340__$1 = state_22340;
var statearr_22347_22487 = state_22340__$1;
(statearr_22347_22487[(2)] = inst_22336);

(statearr_22347_22487[(1)] = (3));


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
});})(__22469,c__21907__auto___22481,G__22300_22470,n__20361__auto___22468,jobs,results,process,async))
;
return ((function (__22469,switch__21795__auto__,c__21907__auto___22481,G__22300_22470,n__20361__auto___22468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0 = (function (){
var statearr_22351 = [null,null,null,null,null,null,null];
(statearr_22351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__);

(statearr_22351[(1)] = (1));

return statearr_22351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1 = (function (state_22340){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22352){if((e22352 instanceof Object)){
var ex__21799__auto__ = e22352;
var statearr_22353_22488 = state_22340;
(statearr_22353_22488[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22489 = state_22340;
state_22340 = G__22489;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = function(state_22340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1.call(this,state_22340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__;
})()
;})(__22469,switch__21795__auto__,c__21907__auto___22481,G__22300_22470,n__20361__auto___22468,jobs,results,process,async))
})();
var state__21909__auto__ = (function (){var statearr_22354 = f__21908__auto__.call(null);
(statearr_22354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___22481);

return statearr_22354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(__22469,c__21907__auto___22481,G__22300_22470,n__20361__auto___22468,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__22490 = (__22469 + (1));
__22469 = G__22490;
continue;
} else {
}
break;
}

var c__21907__auto___22491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___22491,jobs,results,process,async){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___22491,jobs,results,process,async){
return (function (state_22376){
var state_val_22377 = (state_22376[(1)]);
if((state_val_22377 === (1))){
var state_22376__$1 = state_22376;
var statearr_22378_22492 = state_22376__$1;
(statearr_22378_22492[(2)] = null);

(statearr_22378_22492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (2))){
var state_22376__$1 = state_22376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22376__$1,(4),from);
} else {
if((state_val_22377 === (3))){
var inst_22374 = (state_22376[(2)]);
var state_22376__$1 = state_22376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22376__$1,inst_22374);
} else {
if((state_val_22377 === (4))){
var inst_22357 = (state_22376[(7)]);
var inst_22357__$1 = (state_22376[(2)]);
var inst_22358 = (inst_22357__$1 == null);
var state_22376__$1 = (function (){var statearr_22379 = state_22376;
(statearr_22379[(7)] = inst_22357__$1);

return statearr_22379;
})();
if(cljs.core.truth_(inst_22358)){
var statearr_22380_22493 = state_22376__$1;
(statearr_22380_22493[(1)] = (5));

} else {
var statearr_22381_22494 = state_22376__$1;
(statearr_22381_22494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (5))){
var inst_22360 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22376__$1 = state_22376;
var statearr_22382_22495 = state_22376__$1;
(statearr_22382_22495[(2)] = inst_22360);

(statearr_22382_22495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (6))){
var inst_22357 = (state_22376[(7)]);
var inst_22362 = (state_22376[(8)]);
var inst_22362__$1 = cljs.core.async.chan.call(null,(1));
var inst_22363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22364 = [inst_22357,inst_22362__$1];
var inst_22365 = (new cljs.core.PersistentVector(null,2,(5),inst_22363,inst_22364,null));
var state_22376__$1 = (function (){var statearr_22383 = state_22376;
(statearr_22383[(8)] = inst_22362__$1);

return statearr_22383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22376__$1,(8),jobs,inst_22365);
} else {
if((state_val_22377 === (7))){
var inst_22372 = (state_22376[(2)]);
var state_22376__$1 = state_22376;
var statearr_22384_22496 = state_22376__$1;
(statearr_22384_22496[(2)] = inst_22372);

(statearr_22384_22496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22377 === (8))){
var inst_22362 = (state_22376[(8)]);
var inst_22367 = (state_22376[(2)]);
var state_22376__$1 = (function (){var statearr_22385 = state_22376;
(statearr_22385[(9)] = inst_22367);

return statearr_22385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22376__$1,(9),results,inst_22362);
} else {
if((state_val_22377 === (9))){
var inst_22369 = (state_22376[(2)]);
var state_22376__$1 = (function (){var statearr_22386 = state_22376;
(statearr_22386[(10)] = inst_22369);

return statearr_22386;
})();
var statearr_22387_22497 = state_22376__$1;
(statearr_22387_22497[(2)] = null);

(statearr_22387_22497[(1)] = (2));


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
});})(c__21907__auto___22491,jobs,results,process,async))
;
return ((function (switch__21795__auto__,c__21907__auto___22491,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0 = (function (){
var statearr_22391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__);

(statearr_22391[(1)] = (1));

return statearr_22391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1 = (function (state_22376){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22392){if((e22392 instanceof Object)){
var ex__21799__auto__ = e22392;
var statearr_22393_22498 = state_22376;
(statearr_22393_22498[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22499 = state_22376;
state_22376 = G__22499;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = function(state_22376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1.call(this,state_22376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___22491,jobs,results,process,async))
})();
var state__21909__auto__ = (function (){var statearr_22394 = f__21908__auto__.call(null);
(statearr_22394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___22491);

return statearr_22394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___22491,jobs,results,process,async))
);


var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__,jobs,results,process,async){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__,jobs,results,process,async){
return (function (state_22432){
var state_val_22433 = (state_22432[(1)]);
if((state_val_22433 === (7))){
var inst_22428 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22434_22500 = state_22432__$1;
(statearr_22434_22500[(2)] = inst_22428);

(statearr_22434_22500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (20))){
var state_22432__$1 = state_22432;
var statearr_22435_22501 = state_22432__$1;
(statearr_22435_22501[(2)] = null);

(statearr_22435_22501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (1))){
var state_22432__$1 = state_22432;
var statearr_22436_22502 = state_22432__$1;
(statearr_22436_22502[(2)] = null);

(statearr_22436_22502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (4))){
var inst_22397 = (state_22432[(7)]);
var inst_22397__$1 = (state_22432[(2)]);
var inst_22398 = (inst_22397__$1 == null);
var state_22432__$1 = (function (){var statearr_22437 = state_22432;
(statearr_22437[(7)] = inst_22397__$1);

return statearr_22437;
})();
if(cljs.core.truth_(inst_22398)){
var statearr_22438_22503 = state_22432__$1;
(statearr_22438_22503[(1)] = (5));

} else {
var statearr_22439_22504 = state_22432__$1;
(statearr_22439_22504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (15))){
var inst_22410 = (state_22432[(8)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22432__$1,(18),to,inst_22410);
} else {
if((state_val_22433 === (21))){
var inst_22423 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22440_22505 = state_22432__$1;
(statearr_22440_22505[(2)] = inst_22423);

(statearr_22440_22505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (13))){
var inst_22425 = (state_22432[(2)]);
var state_22432__$1 = (function (){var statearr_22441 = state_22432;
(statearr_22441[(9)] = inst_22425);

return statearr_22441;
})();
var statearr_22442_22506 = state_22432__$1;
(statearr_22442_22506[(2)] = null);

(statearr_22442_22506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (6))){
var inst_22397 = (state_22432[(7)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22432__$1,(11),inst_22397);
} else {
if((state_val_22433 === (17))){
var inst_22418 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22418)){
var statearr_22443_22507 = state_22432__$1;
(statearr_22443_22507[(1)] = (19));

} else {
var statearr_22444_22508 = state_22432__$1;
(statearr_22444_22508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (3))){
var inst_22430 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22432__$1,inst_22430);
} else {
if((state_val_22433 === (12))){
var inst_22407 = (state_22432[(10)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22432__$1,(14),inst_22407);
} else {
if((state_val_22433 === (2))){
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22432__$1,(4),results);
} else {
if((state_val_22433 === (19))){
var state_22432__$1 = state_22432;
var statearr_22445_22509 = state_22432__$1;
(statearr_22445_22509[(2)] = null);

(statearr_22445_22509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (11))){
var inst_22407 = (state_22432[(2)]);
var state_22432__$1 = (function (){var statearr_22446 = state_22432;
(statearr_22446[(10)] = inst_22407);

return statearr_22446;
})();
var statearr_22447_22510 = state_22432__$1;
(statearr_22447_22510[(2)] = null);

(statearr_22447_22510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (9))){
var state_22432__$1 = state_22432;
var statearr_22448_22511 = state_22432__$1;
(statearr_22448_22511[(2)] = null);

(statearr_22448_22511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (5))){
var state_22432__$1 = state_22432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22449_22512 = state_22432__$1;
(statearr_22449_22512[(1)] = (8));

} else {
var statearr_22450_22513 = state_22432__$1;
(statearr_22450_22513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (14))){
var inst_22412 = (state_22432[(11)]);
var inst_22410 = (state_22432[(8)]);
var inst_22410__$1 = (state_22432[(2)]);
var inst_22411 = (inst_22410__$1 == null);
var inst_22412__$1 = cljs.core.not.call(null,inst_22411);
var state_22432__$1 = (function (){var statearr_22451 = state_22432;
(statearr_22451[(11)] = inst_22412__$1);

(statearr_22451[(8)] = inst_22410__$1);

return statearr_22451;
})();
if(inst_22412__$1){
var statearr_22452_22514 = state_22432__$1;
(statearr_22452_22514[(1)] = (15));

} else {
var statearr_22453_22515 = state_22432__$1;
(statearr_22453_22515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (16))){
var inst_22412 = (state_22432[(11)]);
var state_22432__$1 = state_22432;
var statearr_22454_22516 = state_22432__$1;
(statearr_22454_22516[(2)] = inst_22412);

(statearr_22454_22516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (10))){
var inst_22404 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22455_22517 = state_22432__$1;
(statearr_22455_22517[(2)] = inst_22404);

(statearr_22455_22517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (18))){
var inst_22415 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22456_22518 = state_22432__$1;
(statearr_22456_22518[(2)] = inst_22415);

(statearr_22456_22518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22433 === (8))){
var inst_22401 = cljs.core.async.close_BANG_.call(null,to);
var state_22432__$1 = state_22432;
var statearr_22457_22519 = state_22432__$1;
(statearr_22457_22519[(2)] = inst_22401);

(statearr_22457_22519[(1)] = (10));


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
}
}
}
}
});})(c__21907__auto__,jobs,results,process,async))
;
return ((function (switch__21795__auto__,c__21907__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0 = (function (){
var statearr_22461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__);

(statearr_22461[(1)] = (1));

return statearr_22461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1 = (function (state_22432){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22462){if((e22462 instanceof Object)){
var ex__21799__auto__ = e22462;
var statearr_22463_22520 = state_22432;
(statearr_22463_22520[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22521 = state_22432;
state_22432 = G__22521;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__ = function(state_22432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1.call(this,state_22432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__,jobs,results,process,async))
})();
var state__21909__auto__ = (function (){var statearr_22464 = f__21908__auto__.call(null);
(statearr_22464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_22464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__,jobs,results,process,async))
);

return c__21907__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22522 = [];
var len__20551__auto___22525 = arguments.length;
var i__20552__auto___22526 = (0);
while(true){
if((i__20552__auto___22526 < len__20551__auto___22525)){
args22522.push((arguments[i__20552__auto___22526]));

var G__22527 = (i__20552__auto___22526 + (1));
i__20552__auto___22526 = G__22527;
continue;
} else {
}
break;
}

var G__22524 = args22522.length;
switch (G__22524) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22522.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22529 = [];
var len__20551__auto___22532 = arguments.length;
var i__20552__auto___22533 = (0);
while(true){
if((i__20552__auto___22533 < len__20551__auto___22532)){
args22529.push((arguments[i__20552__auto___22533]));

var G__22534 = (i__20552__auto___22533 + (1));
i__20552__auto___22533 = G__22534;
continue;
} else {
}
break;
}

var G__22531 = args22529.length;
switch (G__22531) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22529.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22536 = [];
var len__20551__auto___22589 = arguments.length;
var i__20552__auto___22590 = (0);
while(true){
if((i__20552__auto___22590 < len__20551__auto___22589)){
args22536.push((arguments[i__20552__auto___22590]));

var G__22591 = (i__20552__auto___22590 + (1));
i__20552__auto___22590 = G__22591;
continue;
} else {
}
break;
}

var G__22538 = args22536.length;
switch (G__22538) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22536.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21907__auto___22593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___22593,tc,fc){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___22593,tc,fc){
return (function (state_22564){
var state_val_22565 = (state_22564[(1)]);
if((state_val_22565 === (7))){
var inst_22560 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
var statearr_22566_22594 = state_22564__$1;
(statearr_22566_22594[(2)] = inst_22560);

(statearr_22566_22594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (1))){
var state_22564__$1 = state_22564;
var statearr_22567_22595 = state_22564__$1;
(statearr_22567_22595[(2)] = null);

(statearr_22567_22595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (4))){
var inst_22541 = (state_22564[(7)]);
var inst_22541__$1 = (state_22564[(2)]);
var inst_22542 = (inst_22541__$1 == null);
var state_22564__$1 = (function (){var statearr_22568 = state_22564;
(statearr_22568[(7)] = inst_22541__$1);

return statearr_22568;
})();
if(cljs.core.truth_(inst_22542)){
var statearr_22569_22596 = state_22564__$1;
(statearr_22569_22596[(1)] = (5));

} else {
var statearr_22570_22597 = state_22564__$1;
(statearr_22570_22597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (13))){
var state_22564__$1 = state_22564;
var statearr_22571_22598 = state_22564__$1;
(statearr_22571_22598[(2)] = null);

(statearr_22571_22598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (6))){
var inst_22541 = (state_22564[(7)]);
var inst_22547 = p.call(null,inst_22541);
var state_22564__$1 = state_22564;
if(cljs.core.truth_(inst_22547)){
var statearr_22572_22599 = state_22564__$1;
(statearr_22572_22599[(1)] = (9));

} else {
var statearr_22573_22600 = state_22564__$1;
(statearr_22573_22600[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (3))){
var inst_22562 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22564__$1,inst_22562);
} else {
if((state_val_22565 === (12))){
var state_22564__$1 = state_22564;
var statearr_22574_22601 = state_22564__$1;
(statearr_22574_22601[(2)] = null);

(statearr_22574_22601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (2))){
var state_22564__$1 = state_22564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22564__$1,(4),ch);
} else {
if((state_val_22565 === (11))){
var inst_22541 = (state_22564[(7)]);
var inst_22551 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22564__$1,(8),inst_22551,inst_22541);
} else {
if((state_val_22565 === (9))){
var state_22564__$1 = state_22564;
var statearr_22575_22602 = state_22564__$1;
(statearr_22575_22602[(2)] = tc);

(statearr_22575_22602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (5))){
var inst_22544 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22545 = cljs.core.async.close_BANG_.call(null,fc);
var state_22564__$1 = (function (){var statearr_22576 = state_22564;
(statearr_22576[(8)] = inst_22544);

return statearr_22576;
})();
var statearr_22577_22603 = state_22564__$1;
(statearr_22577_22603[(2)] = inst_22545);

(statearr_22577_22603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (14))){
var inst_22558 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
var statearr_22578_22604 = state_22564__$1;
(statearr_22578_22604[(2)] = inst_22558);

(statearr_22578_22604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (10))){
var state_22564__$1 = state_22564;
var statearr_22579_22605 = state_22564__$1;
(statearr_22579_22605[(2)] = fc);

(statearr_22579_22605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (8))){
var inst_22553 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
if(cljs.core.truth_(inst_22553)){
var statearr_22580_22606 = state_22564__$1;
(statearr_22580_22606[(1)] = (12));

} else {
var statearr_22581_22607 = state_22564__$1;
(statearr_22581_22607[(1)] = (13));

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
});})(c__21907__auto___22593,tc,fc))
;
return ((function (switch__21795__auto__,c__21907__auto___22593,tc,fc){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_22585 = [null,null,null,null,null,null,null,null,null];
(statearr_22585[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_22585[(1)] = (1));

return statearr_22585;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_22564){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22586){if((e22586 instanceof Object)){
var ex__21799__auto__ = e22586;
var statearr_22587_22608 = state_22564;
(statearr_22587_22608[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22609 = state_22564;
state_22564 = G__22609;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_22564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_22564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___22593,tc,fc))
})();
var state__21909__auto__ = (function (){var statearr_22588 = f__21908__auto__.call(null);
(statearr_22588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___22593);

return statearr_22588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___22593,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_22673){
var state_val_22674 = (state_22673[(1)]);
if((state_val_22674 === (7))){
var inst_22669 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
var statearr_22675_22696 = state_22673__$1;
(statearr_22675_22696[(2)] = inst_22669);

(statearr_22675_22696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (1))){
var inst_22653 = init;
var state_22673__$1 = (function (){var statearr_22676 = state_22673;
(statearr_22676[(7)] = inst_22653);

return statearr_22676;
})();
var statearr_22677_22697 = state_22673__$1;
(statearr_22677_22697[(2)] = null);

(statearr_22677_22697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (4))){
var inst_22656 = (state_22673[(8)]);
var inst_22656__$1 = (state_22673[(2)]);
var inst_22657 = (inst_22656__$1 == null);
var state_22673__$1 = (function (){var statearr_22678 = state_22673;
(statearr_22678[(8)] = inst_22656__$1);

return statearr_22678;
})();
if(cljs.core.truth_(inst_22657)){
var statearr_22679_22698 = state_22673__$1;
(statearr_22679_22698[(1)] = (5));

} else {
var statearr_22680_22699 = state_22673__$1;
(statearr_22680_22699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (6))){
var inst_22656 = (state_22673[(8)]);
var inst_22653 = (state_22673[(7)]);
var inst_22660 = (state_22673[(9)]);
var inst_22660__$1 = f.call(null,inst_22653,inst_22656);
var inst_22661 = cljs.core.reduced_QMARK_.call(null,inst_22660__$1);
var state_22673__$1 = (function (){var statearr_22681 = state_22673;
(statearr_22681[(9)] = inst_22660__$1);

return statearr_22681;
})();
if(inst_22661){
var statearr_22682_22700 = state_22673__$1;
(statearr_22682_22700[(1)] = (8));

} else {
var statearr_22683_22701 = state_22673__$1;
(statearr_22683_22701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (3))){
var inst_22671 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22673__$1,inst_22671);
} else {
if((state_val_22674 === (2))){
var state_22673__$1 = state_22673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22673__$1,(4),ch);
} else {
if((state_val_22674 === (9))){
var inst_22660 = (state_22673[(9)]);
var inst_22653 = inst_22660;
var state_22673__$1 = (function (){var statearr_22684 = state_22673;
(statearr_22684[(7)] = inst_22653);

return statearr_22684;
})();
var statearr_22685_22702 = state_22673__$1;
(statearr_22685_22702[(2)] = null);

(statearr_22685_22702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (5))){
var inst_22653 = (state_22673[(7)]);
var state_22673__$1 = state_22673;
var statearr_22686_22703 = state_22673__$1;
(statearr_22686_22703[(2)] = inst_22653);

(statearr_22686_22703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (10))){
var inst_22667 = (state_22673[(2)]);
var state_22673__$1 = state_22673;
var statearr_22687_22704 = state_22673__$1;
(statearr_22687_22704[(2)] = inst_22667);

(statearr_22687_22704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22674 === (8))){
var inst_22660 = (state_22673[(9)]);
var inst_22663 = cljs.core.deref.call(null,inst_22660);
var state_22673__$1 = state_22673;
var statearr_22688_22705 = state_22673__$1;
(statearr_22688_22705[(2)] = inst_22663);

(statearr_22688_22705[(1)] = (10));


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
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21796__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21796__auto____0 = (function (){
var statearr_22692 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22692[(0)] = cljs$core$async$reduce_$_state_machine__21796__auto__);

(statearr_22692[(1)] = (1));

return statearr_22692;
});
var cljs$core$async$reduce_$_state_machine__21796__auto____1 = (function (state_22673){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22693){if((e22693 instanceof Object)){
var ex__21799__auto__ = e22693;
var statearr_22694_22706 = state_22673;
(statearr_22694_22706[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22707 = state_22673;
state_22673 = G__22707;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21796__auto__ = function(state_22673){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21796__auto____1.call(this,state_22673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21796__auto____0;
cljs$core$async$reduce_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21796__auto____1;
return cljs$core$async$reduce_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_22695 = f__21908__auto__.call(null);
(statearr_22695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_22695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22708 = [];
var len__20551__auto___22760 = arguments.length;
var i__20552__auto___22761 = (0);
while(true){
if((i__20552__auto___22761 < len__20551__auto___22760)){
args22708.push((arguments[i__20552__auto___22761]));

var G__22762 = (i__20552__auto___22761 + (1));
i__20552__auto___22761 = G__22762;
continue;
} else {
}
break;
}

var G__22710 = args22708.length;
switch (G__22710) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22708.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_22735){
var state_val_22736 = (state_22735[(1)]);
if((state_val_22736 === (7))){
var inst_22717 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
var statearr_22737_22764 = state_22735__$1;
(statearr_22737_22764[(2)] = inst_22717);

(statearr_22737_22764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (1))){
var inst_22711 = cljs.core.seq.call(null,coll);
var inst_22712 = inst_22711;
var state_22735__$1 = (function (){var statearr_22738 = state_22735;
(statearr_22738[(7)] = inst_22712);

return statearr_22738;
})();
var statearr_22739_22765 = state_22735__$1;
(statearr_22739_22765[(2)] = null);

(statearr_22739_22765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (4))){
var inst_22712 = (state_22735[(7)]);
var inst_22715 = cljs.core.first.call(null,inst_22712);
var state_22735__$1 = state_22735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22735__$1,(7),ch,inst_22715);
} else {
if((state_val_22736 === (13))){
var inst_22729 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
var statearr_22740_22766 = state_22735__$1;
(statearr_22740_22766[(2)] = inst_22729);

(statearr_22740_22766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (6))){
var inst_22720 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
if(cljs.core.truth_(inst_22720)){
var statearr_22741_22767 = state_22735__$1;
(statearr_22741_22767[(1)] = (8));

} else {
var statearr_22742_22768 = state_22735__$1;
(statearr_22742_22768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (3))){
var inst_22733 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22735__$1,inst_22733);
} else {
if((state_val_22736 === (12))){
var state_22735__$1 = state_22735;
var statearr_22743_22769 = state_22735__$1;
(statearr_22743_22769[(2)] = null);

(statearr_22743_22769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (2))){
var inst_22712 = (state_22735[(7)]);
var state_22735__$1 = state_22735;
if(cljs.core.truth_(inst_22712)){
var statearr_22744_22770 = state_22735__$1;
(statearr_22744_22770[(1)] = (4));

} else {
var statearr_22745_22771 = state_22735__$1;
(statearr_22745_22771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (11))){
var inst_22726 = cljs.core.async.close_BANG_.call(null,ch);
var state_22735__$1 = state_22735;
var statearr_22746_22772 = state_22735__$1;
(statearr_22746_22772[(2)] = inst_22726);

(statearr_22746_22772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (9))){
var state_22735__$1 = state_22735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22747_22773 = state_22735__$1;
(statearr_22747_22773[(1)] = (11));

} else {
var statearr_22748_22774 = state_22735__$1;
(statearr_22748_22774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (5))){
var inst_22712 = (state_22735[(7)]);
var state_22735__$1 = state_22735;
var statearr_22749_22775 = state_22735__$1;
(statearr_22749_22775[(2)] = inst_22712);

(statearr_22749_22775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (10))){
var inst_22731 = (state_22735[(2)]);
var state_22735__$1 = state_22735;
var statearr_22750_22776 = state_22735__$1;
(statearr_22750_22776[(2)] = inst_22731);

(statearr_22750_22776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22736 === (8))){
var inst_22712 = (state_22735[(7)]);
var inst_22722 = cljs.core.next.call(null,inst_22712);
var inst_22712__$1 = inst_22722;
var state_22735__$1 = (function (){var statearr_22751 = state_22735;
(statearr_22751[(7)] = inst_22712__$1);

return statearr_22751;
})();
var statearr_22752_22777 = state_22735__$1;
(statearr_22752_22777[(2)] = null);

(statearr_22752_22777[(1)] = (2));


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
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_22756 = [null,null,null,null,null,null,null,null];
(statearr_22756[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_22756[(1)] = (1));

return statearr_22756;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_22735){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_22735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e22757){if((e22757 instanceof Object)){
var ex__21799__auto__ = e22757;
var statearr_22758_22778 = state_22735;
(statearr_22758_22778[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22779 = state_22735;
state_22735 = G__22779;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_22735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_22735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_22759 = f__21908__auto__.call(null);
(statearr_22759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_22759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20106__auto__ = (((_ == null))?null:_);
var m__20107__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,_);
} else {
var m__20107__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20107__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m,ch);
} else {
var m__20107__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m);
} else {
var m__20107__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23005 = (function (ch,cs,meta23006){
this.ch = ch;
this.cs = cs;
this.meta23006 = meta23006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23007,meta23006__$1){
var self__ = this;
var _23007__$1 = this;
return (new cljs.core.async.t_cljs$core$async23005(self__.ch,self__.cs,meta23006__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23007){
var self__ = this;
var _23007__$1 = this;
return self__.meta23006;
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23006","meta23006",346848565,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23005";

cljs.core.async.t_cljs$core$async23005.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async23005");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23005 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23005(ch__$1,cs__$1,meta23006){
return (new cljs.core.async.t_cljs$core$async23005(ch__$1,cs__$1,meta23006));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23005(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21907__auto___23230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___23230,cs,m,dchan,dctr,done){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___23230,cs,m,dchan,dctr,done){
return (function (state_23142){
var state_val_23143 = (state_23142[(1)]);
if((state_val_23143 === (7))){
var inst_23138 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23144_23231 = state_23142__$1;
(statearr_23144_23231[(2)] = inst_23138);

(statearr_23144_23231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (20))){
var inst_23041 = (state_23142[(7)]);
var inst_23053 = cljs.core.first.call(null,inst_23041);
var inst_23054 = cljs.core.nth.call(null,inst_23053,(0),null);
var inst_23055 = cljs.core.nth.call(null,inst_23053,(1),null);
var state_23142__$1 = (function (){var statearr_23145 = state_23142;
(statearr_23145[(8)] = inst_23054);

return statearr_23145;
})();
if(cljs.core.truth_(inst_23055)){
var statearr_23146_23232 = state_23142__$1;
(statearr_23146_23232[(1)] = (22));

} else {
var statearr_23147_23233 = state_23142__$1;
(statearr_23147_23233[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (27))){
var inst_23085 = (state_23142[(9)]);
var inst_23090 = (state_23142[(10)]);
var inst_23083 = (state_23142[(11)]);
var inst_23010 = (state_23142[(12)]);
var inst_23090__$1 = cljs.core._nth.call(null,inst_23083,inst_23085);
var inst_23091 = cljs.core.async.put_BANG_.call(null,inst_23090__$1,inst_23010,done);
var state_23142__$1 = (function (){var statearr_23148 = state_23142;
(statearr_23148[(10)] = inst_23090__$1);

return statearr_23148;
})();
if(cljs.core.truth_(inst_23091)){
var statearr_23149_23234 = state_23142__$1;
(statearr_23149_23234[(1)] = (30));

} else {
var statearr_23150_23235 = state_23142__$1;
(statearr_23150_23235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (1))){
var state_23142__$1 = state_23142;
var statearr_23151_23236 = state_23142__$1;
(statearr_23151_23236[(2)] = null);

(statearr_23151_23236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (24))){
var inst_23041 = (state_23142[(7)]);
var inst_23060 = (state_23142[(2)]);
var inst_23061 = cljs.core.next.call(null,inst_23041);
var inst_23019 = inst_23061;
var inst_23020 = null;
var inst_23021 = (0);
var inst_23022 = (0);
var state_23142__$1 = (function (){var statearr_23152 = state_23142;
(statearr_23152[(13)] = inst_23060);

(statearr_23152[(14)] = inst_23022);

(statearr_23152[(15)] = inst_23020);

(statearr_23152[(16)] = inst_23019);

(statearr_23152[(17)] = inst_23021);

return statearr_23152;
})();
var statearr_23153_23237 = state_23142__$1;
(statearr_23153_23237[(2)] = null);

(statearr_23153_23237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (39))){
var state_23142__$1 = state_23142;
var statearr_23157_23238 = state_23142__$1;
(statearr_23157_23238[(2)] = null);

(statearr_23157_23238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (4))){
var inst_23010 = (state_23142[(12)]);
var inst_23010__$1 = (state_23142[(2)]);
var inst_23011 = (inst_23010__$1 == null);
var state_23142__$1 = (function (){var statearr_23158 = state_23142;
(statearr_23158[(12)] = inst_23010__$1);

return statearr_23158;
})();
if(cljs.core.truth_(inst_23011)){
var statearr_23159_23239 = state_23142__$1;
(statearr_23159_23239[(1)] = (5));

} else {
var statearr_23160_23240 = state_23142__$1;
(statearr_23160_23240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (15))){
var inst_23022 = (state_23142[(14)]);
var inst_23020 = (state_23142[(15)]);
var inst_23019 = (state_23142[(16)]);
var inst_23021 = (state_23142[(17)]);
var inst_23037 = (state_23142[(2)]);
var inst_23038 = (inst_23022 + (1));
var tmp23154 = inst_23020;
var tmp23155 = inst_23019;
var tmp23156 = inst_23021;
var inst_23019__$1 = tmp23155;
var inst_23020__$1 = tmp23154;
var inst_23021__$1 = tmp23156;
var inst_23022__$1 = inst_23038;
var state_23142__$1 = (function (){var statearr_23161 = state_23142;
(statearr_23161[(14)] = inst_23022__$1);

(statearr_23161[(18)] = inst_23037);

(statearr_23161[(15)] = inst_23020__$1);

(statearr_23161[(16)] = inst_23019__$1);

(statearr_23161[(17)] = inst_23021__$1);

return statearr_23161;
})();
var statearr_23162_23241 = state_23142__$1;
(statearr_23162_23241[(2)] = null);

(statearr_23162_23241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (21))){
var inst_23064 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23166_23242 = state_23142__$1;
(statearr_23166_23242[(2)] = inst_23064);

(statearr_23166_23242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (31))){
var inst_23090 = (state_23142[(10)]);
var inst_23094 = done.call(null,null);
var inst_23095 = cljs.core.async.untap_STAR_.call(null,m,inst_23090);
var state_23142__$1 = (function (){var statearr_23167 = state_23142;
(statearr_23167[(19)] = inst_23094);

return statearr_23167;
})();
var statearr_23168_23243 = state_23142__$1;
(statearr_23168_23243[(2)] = inst_23095);

(statearr_23168_23243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (32))){
var inst_23085 = (state_23142[(9)]);
var inst_23082 = (state_23142[(20)]);
var inst_23084 = (state_23142[(21)]);
var inst_23083 = (state_23142[(11)]);
var inst_23097 = (state_23142[(2)]);
var inst_23098 = (inst_23085 + (1));
var tmp23163 = inst_23082;
var tmp23164 = inst_23084;
var tmp23165 = inst_23083;
var inst_23082__$1 = tmp23163;
var inst_23083__$1 = tmp23165;
var inst_23084__$1 = tmp23164;
var inst_23085__$1 = inst_23098;
var state_23142__$1 = (function (){var statearr_23169 = state_23142;
(statearr_23169[(9)] = inst_23085__$1);

(statearr_23169[(20)] = inst_23082__$1);

(statearr_23169[(22)] = inst_23097);

(statearr_23169[(21)] = inst_23084__$1);

(statearr_23169[(11)] = inst_23083__$1);

return statearr_23169;
})();
var statearr_23170_23244 = state_23142__$1;
(statearr_23170_23244[(2)] = null);

(statearr_23170_23244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (40))){
var inst_23110 = (state_23142[(23)]);
var inst_23114 = done.call(null,null);
var inst_23115 = cljs.core.async.untap_STAR_.call(null,m,inst_23110);
var state_23142__$1 = (function (){var statearr_23171 = state_23142;
(statearr_23171[(24)] = inst_23114);

return statearr_23171;
})();
var statearr_23172_23245 = state_23142__$1;
(statearr_23172_23245[(2)] = inst_23115);

(statearr_23172_23245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (33))){
var inst_23101 = (state_23142[(25)]);
var inst_23103 = cljs.core.chunked_seq_QMARK_.call(null,inst_23101);
var state_23142__$1 = state_23142;
if(inst_23103){
var statearr_23173_23246 = state_23142__$1;
(statearr_23173_23246[(1)] = (36));

} else {
var statearr_23174_23247 = state_23142__$1;
(statearr_23174_23247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (13))){
var inst_23031 = (state_23142[(26)]);
var inst_23034 = cljs.core.async.close_BANG_.call(null,inst_23031);
var state_23142__$1 = state_23142;
var statearr_23175_23248 = state_23142__$1;
(statearr_23175_23248[(2)] = inst_23034);

(statearr_23175_23248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (22))){
var inst_23054 = (state_23142[(8)]);
var inst_23057 = cljs.core.async.close_BANG_.call(null,inst_23054);
var state_23142__$1 = state_23142;
var statearr_23176_23249 = state_23142__$1;
(statearr_23176_23249[(2)] = inst_23057);

(statearr_23176_23249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (36))){
var inst_23101 = (state_23142[(25)]);
var inst_23105 = cljs.core.chunk_first.call(null,inst_23101);
var inst_23106 = cljs.core.chunk_rest.call(null,inst_23101);
var inst_23107 = cljs.core.count.call(null,inst_23105);
var inst_23082 = inst_23106;
var inst_23083 = inst_23105;
var inst_23084 = inst_23107;
var inst_23085 = (0);
var state_23142__$1 = (function (){var statearr_23177 = state_23142;
(statearr_23177[(9)] = inst_23085);

(statearr_23177[(20)] = inst_23082);

(statearr_23177[(21)] = inst_23084);

(statearr_23177[(11)] = inst_23083);

return statearr_23177;
})();
var statearr_23178_23250 = state_23142__$1;
(statearr_23178_23250[(2)] = null);

(statearr_23178_23250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (41))){
var inst_23101 = (state_23142[(25)]);
var inst_23117 = (state_23142[(2)]);
var inst_23118 = cljs.core.next.call(null,inst_23101);
var inst_23082 = inst_23118;
var inst_23083 = null;
var inst_23084 = (0);
var inst_23085 = (0);
var state_23142__$1 = (function (){var statearr_23179 = state_23142;
(statearr_23179[(9)] = inst_23085);

(statearr_23179[(20)] = inst_23082);

(statearr_23179[(21)] = inst_23084);

(statearr_23179[(11)] = inst_23083);

(statearr_23179[(27)] = inst_23117);

return statearr_23179;
})();
var statearr_23180_23251 = state_23142__$1;
(statearr_23180_23251[(2)] = null);

(statearr_23180_23251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (43))){
var state_23142__$1 = state_23142;
var statearr_23181_23252 = state_23142__$1;
(statearr_23181_23252[(2)] = null);

(statearr_23181_23252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (29))){
var inst_23126 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23182_23253 = state_23142__$1;
(statearr_23182_23253[(2)] = inst_23126);

(statearr_23182_23253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (44))){
var inst_23135 = (state_23142[(2)]);
var state_23142__$1 = (function (){var statearr_23183 = state_23142;
(statearr_23183[(28)] = inst_23135);

return statearr_23183;
})();
var statearr_23184_23254 = state_23142__$1;
(statearr_23184_23254[(2)] = null);

(statearr_23184_23254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (6))){
var inst_23074 = (state_23142[(29)]);
var inst_23073 = cljs.core.deref.call(null,cs);
var inst_23074__$1 = cljs.core.keys.call(null,inst_23073);
var inst_23075 = cljs.core.count.call(null,inst_23074__$1);
var inst_23076 = cljs.core.reset_BANG_.call(null,dctr,inst_23075);
var inst_23081 = cljs.core.seq.call(null,inst_23074__$1);
var inst_23082 = inst_23081;
var inst_23083 = null;
var inst_23084 = (0);
var inst_23085 = (0);
var state_23142__$1 = (function (){var statearr_23185 = state_23142;
(statearr_23185[(9)] = inst_23085);

(statearr_23185[(20)] = inst_23082);

(statearr_23185[(30)] = inst_23076);

(statearr_23185[(29)] = inst_23074__$1);

(statearr_23185[(21)] = inst_23084);

(statearr_23185[(11)] = inst_23083);

return statearr_23185;
})();
var statearr_23186_23255 = state_23142__$1;
(statearr_23186_23255[(2)] = null);

(statearr_23186_23255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (28))){
var inst_23082 = (state_23142[(20)]);
var inst_23101 = (state_23142[(25)]);
var inst_23101__$1 = cljs.core.seq.call(null,inst_23082);
var state_23142__$1 = (function (){var statearr_23187 = state_23142;
(statearr_23187[(25)] = inst_23101__$1);

return statearr_23187;
})();
if(inst_23101__$1){
var statearr_23188_23256 = state_23142__$1;
(statearr_23188_23256[(1)] = (33));

} else {
var statearr_23189_23257 = state_23142__$1;
(statearr_23189_23257[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (25))){
var inst_23085 = (state_23142[(9)]);
var inst_23084 = (state_23142[(21)]);
var inst_23087 = (inst_23085 < inst_23084);
var inst_23088 = inst_23087;
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23088)){
var statearr_23190_23258 = state_23142__$1;
(statearr_23190_23258[(1)] = (27));

} else {
var statearr_23191_23259 = state_23142__$1;
(statearr_23191_23259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (34))){
var state_23142__$1 = state_23142;
var statearr_23192_23260 = state_23142__$1;
(statearr_23192_23260[(2)] = null);

(statearr_23192_23260[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (17))){
var state_23142__$1 = state_23142;
var statearr_23193_23261 = state_23142__$1;
(statearr_23193_23261[(2)] = null);

(statearr_23193_23261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (3))){
var inst_23140 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23142__$1,inst_23140);
} else {
if((state_val_23143 === (12))){
var inst_23069 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23194_23262 = state_23142__$1;
(statearr_23194_23262[(2)] = inst_23069);

(statearr_23194_23262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (2))){
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23142__$1,(4),ch);
} else {
if((state_val_23143 === (23))){
var state_23142__$1 = state_23142;
var statearr_23195_23263 = state_23142__$1;
(statearr_23195_23263[(2)] = null);

(statearr_23195_23263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (35))){
var inst_23124 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23196_23264 = state_23142__$1;
(statearr_23196_23264[(2)] = inst_23124);

(statearr_23196_23264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (19))){
var inst_23041 = (state_23142[(7)]);
var inst_23045 = cljs.core.chunk_first.call(null,inst_23041);
var inst_23046 = cljs.core.chunk_rest.call(null,inst_23041);
var inst_23047 = cljs.core.count.call(null,inst_23045);
var inst_23019 = inst_23046;
var inst_23020 = inst_23045;
var inst_23021 = inst_23047;
var inst_23022 = (0);
var state_23142__$1 = (function (){var statearr_23197 = state_23142;
(statearr_23197[(14)] = inst_23022);

(statearr_23197[(15)] = inst_23020);

(statearr_23197[(16)] = inst_23019);

(statearr_23197[(17)] = inst_23021);

return statearr_23197;
})();
var statearr_23198_23265 = state_23142__$1;
(statearr_23198_23265[(2)] = null);

(statearr_23198_23265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (11))){
var inst_23041 = (state_23142[(7)]);
var inst_23019 = (state_23142[(16)]);
var inst_23041__$1 = cljs.core.seq.call(null,inst_23019);
var state_23142__$1 = (function (){var statearr_23199 = state_23142;
(statearr_23199[(7)] = inst_23041__$1);

return statearr_23199;
})();
if(inst_23041__$1){
var statearr_23200_23266 = state_23142__$1;
(statearr_23200_23266[(1)] = (16));

} else {
var statearr_23201_23267 = state_23142__$1;
(statearr_23201_23267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (9))){
var inst_23071 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23202_23268 = state_23142__$1;
(statearr_23202_23268[(2)] = inst_23071);

(statearr_23202_23268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (5))){
var inst_23017 = cljs.core.deref.call(null,cs);
var inst_23018 = cljs.core.seq.call(null,inst_23017);
var inst_23019 = inst_23018;
var inst_23020 = null;
var inst_23021 = (0);
var inst_23022 = (0);
var state_23142__$1 = (function (){var statearr_23203 = state_23142;
(statearr_23203[(14)] = inst_23022);

(statearr_23203[(15)] = inst_23020);

(statearr_23203[(16)] = inst_23019);

(statearr_23203[(17)] = inst_23021);

return statearr_23203;
})();
var statearr_23204_23269 = state_23142__$1;
(statearr_23204_23269[(2)] = null);

(statearr_23204_23269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (14))){
var state_23142__$1 = state_23142;
var statearr_23205_23270 = state_23142__$1;
(statearr_23205_23270[(2)] = null);

(statearr_23205_23270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (45))){
var inst_23132 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23206_23271 = state_23142__$1;
(statearr_23206_23271[(2)] = inst_23132);

(statearr_23206_23271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (26))){
var inst_23074 = (state_23142[(29)]);
var inst_23128 = (state_23142[(2)]);
var inst_23129 = cljs.core.seq.call(null,inst_23074);
var state_23142__$1 = (function (){var statearr_23207 = state_23142;
(statearr_23207[(31)] = inst_23128);

return statearr_23207;
})();
if(inst_23129){
var statearr_23208_23272 = state_23142__$1;
(statearr_23208_23272[(1)] = (42));

} else {
var statearr_23209_23273 = state_23142__$1;
(statearr_23209_23273[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (16))){
var inst_23041 = (state_23142[(7)]);
var inst_23043 = cljs.core.chunked_seq_QMARK_.call(null,inst_23041);
var state_23142__$1 = state_23142;
if(inst_23043){
var statearr_23210_23274 = state_23142__$1;
(statearr_23210_23274[(1)] = (19));

} else {
var statearr_23211_23275 = state_23142__$1;
(statearr_23211_23275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (38))){
var inst_23121 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23212_23276 = state_23142__$1;
(statearr_23212_23276[(2)] = inst_23121);

(statearr_23212_23276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (30))){
var state_23142__$1 = state_23142;
var statearr_23213_23277 = state_23142__$1;
(statearr_23213_23277[(2)] = null);

(statearr_23213_23277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (10))){
var inst_23022 = (state_23142[(14)]);
var inst_23020 = (state_23142[(15)]);
var inst_23030 = cljs.core._nth.call(null,inst_23020,inst_23022);
var inst_23031 = cljs.core.nth.call(null,inst_23030,(0),null);
var inst_23032 = cljs.core.nth.call(null,inst_23030,(1),null);
var state_23142__$1 = (function (){var statearr_23214 = state_23142;
(statearr_23214[(26)] = inst_23031);

return statearr_23214;
})();
if(cljs.core.truth_(inst_23032)){
var statearr_23215_23278 = state_23142__$1;
(statearr_23215_23278[(1)] = (13));

} else {
var statearr_23216_23279 = state_23142__$1;
(statearr_23216_23279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (18))){
var inst_23067 = (state_23142[(2)]);
var state_23142__$1 = state_23142;
var statearr_23217_23280 = state_23142__$1;
(statearr_23217_23280[(2)] = inst_23067);

(statearr_23217_23280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (42))){
var state_23142__$1 = state_23142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23142__$1,(45),dchan);
} else {
if((state_val_23143 === (37))){
var inst_23110 = (state_23142[(23)]);
var inst_23010 = (state_23142[(12)]);
var inst_23101 = (state_23142[(25)]);
var inst_23110__$1 = cljs.core.first.call(null,inst_23101);
var inst_23111 = cljs.core.async.put_BANG_.call(null,inst_23110__$1,inst_23010,done);
var state_23142__$1 = (function (){var statearr_23218 = state_23142;
(statearr_23218[(23)] = inst_23110__$1);

return statearr_23218;
})();
if(cljs.core.truth_(inst_23111)){
var statearr_23219_23281 = state_23142__$1;
(statearr_23219_23281[(1)] = (39));

} else {
var statearr_23220_23282 = state_23142__$1;
(statearr_23220_23282[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23143 === (8))){
var inst_23022 = (state_23142[(14)]);
var inst_23021 = (state_23142[(17)]);
var inst_23024 = (inst_23022 < inst_23021);
var inst_23025 = inst_23024;
var state_23142__$1 = state_23142;
if(cljs.core.truth_(inst_23025)){
var statearr_23221_23283 = state_23142__$1;
(statearr_23221_23283[(1)] = (10));

} else {
var statearr_23222_23284 = state_23142__$1;
(statearr_23222_23284[(1)] = (11));

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
});})(c__21907__auto___23230,cs,m,dchan,dctr,done))
;
return ((function (switch__21795__auto__,c__21907__auto___23230,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21796__auto__ = null;
var cljs$core$async$mult_$_state_machine__21796__auto____0 = (function (){
var statearr_23226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23226[(0)] = cljs$core$async$mult_$_state_machine__21796__auto__);

(statearr_23226[(1)] = (1));

return statearr_23226;
});
var cljs$core$async$mult_$_state_machine__21796__auto____1 = (function (state_23142){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_23142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e23227){if((e23227 instanceof Object)){
var ex__21799__auto__ = e23227;
var statearr_23228_23285 = state_23142;
(statearr_23228_23285[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23286 = state_23142;
state_23142 = G__23286;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21796__auto__ = function(state_23142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21796__auto____1.call(this,state_23142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21796__auto____0;
cljs$core$async$mult_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21796__auto____1;
return cljs$core$async$mult_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___23230,cs,m,dchan,dctr,done))
})();
var state__21909__auto__ = (function (){var statearr_23229 = f__21908__auto__.call(null);
(statearr_23229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___23230);

return statearr_23229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___23230,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23287 = [];
var len__20551__auto___23290 = arguments.length;
var i__20552__auto___23291 = (0);
while(true){
if((i__20552__auto___23291 < len__20551__auto___23290)){
args23287.push((arguments[i__20552__auto___23291]));

var G__23292 = (i__20552__auto___23291 + (1));
i__20552__auto___23291 = G__23292;
continue;
} else {
}
break;
}

var G__23289 = args23287.length;
switch (G__23289) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23287.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m,ch);
} else {
var m__20107__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m,ch);
} else {
var m__20107__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m);
} else {
var m__20107__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m,state_map);
} else {
var m__20107__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20106__auto__ = (((m == null))?null:m);
var m__20107__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,m,mode);
} else {
var m__20107__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20558__auto__ = [];
var len__20551__auto___23304 = arguments.length;
var i__20552__auto___23305 = (0);
while(true){
if((i__20552__auto___23305 < len__20551__auto___23304)){
args__20558__auto__.push((arguments[i__20552__auto___23305]));

var G__23306 = (i__20552__auto___23305 + (1));
i__20552__auto___23305 = G__23306;
continue;
} else {
}
break;
}

var argseq__20559__auto__ = ((((3) < args__20558__auto__.length))?(new cljs.core.IndexedSeq(args__20558__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20559__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23298){
var map__23299 = p__23298;
var map__23299__$1 = ((((!((map__23299 == null)))?((((map__23299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23299):map__23299);
var opts = map__23299__$1;
var statearr_23301_23307 = state;
(statearr_23301_23307[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23299,map__23299__$1,opts){
return (function (val){
var statearr_23302_23308 = state;
(statearr_23302_23308[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23299,map__23299__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23303_23309 = state;
(statearr_23303_23309[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23294){
var G__23295 = cljs.core.first.call(null,seq23294);
var seq23294__$1 = cljs.core.next.call(null,seq23294);
var G__23296 = cljs.core.first.call(null,seq23294__$1);
var seq23294__$2 = cljs.core.next.call(null,seq23294__$1);
var G__23297 = cljs.core.first.call(null,seq23294__$2);
var seq23294__$3 = cljs.core.next.call(null,seq23294__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23295,G__23296,G__23297,seq23294__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23477 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta23478){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta23478 = meta23478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23479,meta23478__$1){
var self__ = this;
var _23479__$1 = this;
return (new cljs.core.async.t_cljs$core$async23477(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta23478__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23479){
var self__ = this;
var _23479__$1 = this;
return self__.meta23478;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta23478","meta23478",339804642,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23477";

cljs.core.async.t_cljs$core$async23477.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async23477");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23477 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23477(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23478){
return (new cljs.core.async.t_cljs$core$async23477(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta23478));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23477(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21907__auto___23644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___23644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___23644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23581){
var state_val_23582 = (state_23581[(1)]);
if((state_val_23582 === (7))){
var inst_23496 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
var statearr_23583_23645 = state_23581__$1;
(statearr_23583_23645[(2)] = inst_23496);

(statearr_23583_23645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (20))){
var inst_23508 = (state_23581[(7)]);
var state_23581__$1 = state_23581;
var statearr_23584_23646 = state_23581__$1;
(statearr_23584_23646[(2)] = inst_23508);

(statearr_23584_23646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (27))){
var state_23581__$1 = state_23581;
var statearr_23585_23647 = state_23581__$1;
(statearr_23585_23647[(2)] = null);

(statearr_23585_23647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (1))){
var inst_23483 = (state_23581[(8)]);
var inst_23483__$1 = calc_state.call(null);
var inst_23485 = (inst_23483__$1 == null);
var inst_23486 = cljs.core.not.call(null,inst_23485);
var state_23581__$1 = (function (){var statearr_23586 = state_23581;
(statearr_23586[(8)] = inst_23483__$1);

return statearr_23586;
})();
if(inst_23486){
var statearr_23587_23648 = state_23581__$1;
(statearr_23587_23648[(1)] = (2));

} else {
var statearr_23588_23649 = state_23581__$1;
(statearr_23588_23649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (24))){
var inst_23541 = (state_23581[(9)]);
var inst_23555 = (state_23581[(10)]);
var inst_23532 = (state_23581[(11)]);
var inst_23555__$1 = inst_23532.call(null,inst_23541);
var state_23581__$1 = (function (){var statearr_23589 = state_23581;
(statearr_23589[(10)] = inst_23555__$1);

return statearr_23589;
})();
if(cljs.core.truth_(inst_23555__$1)){
var statearr_23590_23650 = state_23581__$1;
(statearr_23590_23650[(1)] = (29));

} else {
var statearr_23591_23651 = state_23581__$1;
(statearr_23591_23651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (4))){
var inst_23499 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23499)){
var statearr_23592_23652 = state_23581__$1;
(statearr_23592_23652[(1)] = (8));

} else {
var statearr_23593_23653 = state_23581__$1;
(statearr_23593_23653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (15))){
var inst_23526 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23526)){
var statearr_23594_23654 = state_23581__$1;
(statearr_23594_23654[(1)] = (19));

} else {
var statearr_23595_23655 = state_23581__$1;
(statearr_23595_23655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (21))){
var inst_23531 = (state_23581[(12)]);
var inst_23531__$1 = (state_23581[(2)]);
var inst_23532 = cljs.core.get.call(null,inst_23531__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23533 = cljs.core.get.call(null,inst_23531__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23534 = cljs.core.get.call(null,inst_23531__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23581__$1 = (function (){var statearr_23596 = state_23581;
(statearr_23596[(13)] = inst_23533);

(statearr_23596[(11)] = inst_23532);

(statearr_23596[(12)] = inst_23531__$1);

return statearr_23596;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23581__$1,(22),inst_23534);
} else {
if((state_val_23582 === (31))){
var inst_23563 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23563)){
var statearr_23597_23656 = state_23581__$1;
(statearr_23597_23656[(1)] = (32));

} else {
var statearr_23598_23657 = state_23581__$1;
(statearr_23598_23657[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (32))){
var inst_23540 = (state_23581[(14)]);
var state_23581__$1 = state_23581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23581__$1,(35),out,inst_23540);
} else {
if((state_val_23582 === (33))){
var inst_23531 = (state_23581[(12)]);
var inst_23508 = inst_23531;
var state_23581__$1 = (function (){var statearr_23599 = state_23581;
(statearr_23599[(7)] = inst_23508);

return statearr_23599;
})();
var statearr_23600_23658 = state_23581__$1;
(statearr_23600_23658[(2)] = null);

(statearr_23600_23658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (13))){
var inst_23508 = (state_23581[(7)]);
var inst_23515 = inst_23508.cljs$lang$protocol_mask$partition0$;
var inst_23516 = (inst_23515 & (64));
var inst_23517 = inst_23508.cljs$core$ISeq$;
var inst_23518 = (cljs.core.PROTOCOL_SENTINEL === inst_23517);
var inst_23519 = (inst_23516) || (inst_23518);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23519)){
var statearr_23601_23659 = state_23581__$1;
(statearr_23601_23659[(1)] = (16));

} else {
var statearr_23602_23660 = state_23581__$1;
(statearr_23602_23660[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (22))){
var inst_23540 = (state_23581[(14)]);
var inst_23541 = (state_23581[(9)]);
var inst_23539 = (state_23581[(2)]);
var inst_23540__$1 = cljs.core.nth.call(null,inst_23539,(0),null);
var inst_23541__$1 = cljs.core.nth.call(null,inst_23539,(1),null);
var inst_23542 = (inst_23540__$1 == null);
var inst_23543 = cljs.core._EQ_.call(null,inst_23541__$1,change);
var inst_23544 = (inst_23542) || (inst_23543);
var state_23581__$1 = (function (){var statearr_23603 = state_23581;
(statearr_23603[(14)] = inst_23540__$1);

(statearr_23603[(9)] = inst_23541__$1);

return statearr_23603;
})();
if(cljs.core.truth_(inst_23544)){
var statearr_23604_23661 = state_23581__$1;
(statearr_23604_23661[(1)] = (23));

} else {
var statearr_23605_23662 = state_23581__$1;
(statearr_23605_23662[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (36))){
var inst_23531 = (state_23581[(12)]);
var inst_23508 = inst_23531;
var state_23581__$1 = (function (){var statearr_23606 = state_23581;
(statearr_23606[(7)] = inst_23508);

return statearr_23606;
})();
var statearr_23607_23663 = state_23581__$1;
(statearr_23607_23663[(2)] = null);

(statearr_23607_23663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (29))){
var inst_23555 = (state_23581[(10)]);
var state_23581__$1 = state_23581;
var statearr_23608_23664 = state_23581__$1;
(statearr_23608_23664[(2)] = inst_23555);

(statearr_23608_23664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (6))){
var state_23581__$1 = state_23581;
var statearr_23609_23665 = state_23581__$1;
(statearr_23609_23665[(2)] = false);

(statearr_23609_23665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (28))){
var inst_23551 = (state_23581[(2)]);
var inst_23552 = calc_state.call(null);
var inst_23508 = inst_23552;
var state_23581__$1 = (function (){var statearr_23610 = state_23581;
(statearr_23610[(7)] = inst_23508);

(statearr_23610[(15)] = inst_23551);

return statearr_23610;
})();
var statearr_23611_23666 = state_23581__$1;
(statearr_23611_23666[(2)] = null);

(statearr_23611_23666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (25))){
var inst_23577 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
var statearr_23612_23667 = state_23581__$1;
(statearr_23612_23667[(2)] = inst_23577);

(statearr_23612_23667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (34))){
var inst_23575 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
var statearr_23613_23668 = state_23581__$1;
(statearr_23613_23668[(2)] = inst_23575);

(statearr_23613_23668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (17))){
var state_23581__$1 = state_23581;
var statearr_23614_23669 = state_23581__$1;
(statearr_23614_23669[(2)] = false);

(statearr_23614_23669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (3))){
var state_23581__$1 = state_23581;
var statearr_23615_23670 = state_23581__$1;
(statearr_23615_23670[(2)] = false);

(statearr_23615_23670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (12))){
var inst_23579 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23581__$1,inst_23579);
} else {
if((state_val_23582 === (2))){
var inst_23483 = (state_23581[(8)]);
var inst_23488 = inst_23483.cljs$lang$protocol_mask$partition0$;
var inst_23489 = (inst_23488 & (64));
var inst_23490 = inst_23483.cljs$core$ISeq$;
var inst_23491 = (cljs.core.PROTOCOL_SENTINEL === inst_23490);
var inst_23492 = (inst_23489) || (inst_23491);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23492)){
var statearr_23616_23671 = state_23581__$1;
(statearr_23616_23671[(1)] = (5));

} else {
var statearr_23617_23672 = state_23581__$1;
(statearr_23617_23672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (23))){
var inst_23540 = (state_23581[(14)]);
var inst_23546 = (inst_23540 == null);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23546)){
var statearr_23618_23673 = state_23581__$1;
(statearr_23618_23673[(1)] = (26));

} else {
var statearr_23619_23674 = state_23581__$1;
(statearr_23619_23674[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (35))){
var inst_23566 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
if(cljs.core.truth_(inst_23566)){
var statearr_23620_23675 = state_23581__$1;
(statearr_23620_23675[(1)] = (36));

} else {
var statearr_23621_23676 = state_23581__$1;
(statearr_23621_23676[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (19))){
var inst_23508 = (state_23581[(7)]);
var inst_23528 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23508);
var state_23581__$1 = state_23581;
var statearr_23622_23677 = state_23581__$1;
(statearr_23622_23677[(2)] = inst_23528);

(statearr_23622_23677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (11))){
var inst_23508 = (state_23581[(7)]);
var inst_23512 = (inst_23508 == null);
var inst_23513 = cljs.core.not.call(null,inst_23512);
var state_23581__$1 = state_23581;
if(inst_23513){
var statearr_23623_23678 = state_23581__$1;
(statearr_23623_23678[(1)] = (13));

} else {
var statearr_23624_23679 = state_23581__$1;
(statearr_23624_23679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (9))){
var inst_23483 = (state_23581[(8)]);
var state_23581__$1 = state_23581;
var statearr_23625_23680 = state_23581__$1;
(statearr_23625_23680[(2)] = inst_23483);

(statearr_23625_23680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (5))){
var state_23581__$1 = state_23581;
var statearr_23626_23681 = state_23581__$1;
(statearr_23626_23681[(2)] = true);

(statearr_23626_23681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (14))){
var state_23581__$1 = state_23581;
var statearr_23627_23682 = state_23581__$1;
(statearr_23627_23682[(2)] = false);

(statearr_23627_23682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (26))){
var inst_23541 = (state_23581[(9)]);
var inst_23548 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23541);
var state_23581__$1 = state_23581;
var statearr_23628_23683 = state_23581__$1;
(statearr_23628_23683[(2)] = inst_23548);

(statearr_23628_23683[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (16))){
var state_23581__$1 = state_23581;
var statearr_23629_23684 = state_23581__$1;
(statearr_23629_23684[(2)] = true);

(statearr_23629_23684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (38))){
var inst_23571 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
var statearr_23630_23685 = state_23581__$1;
(statearr_23630_23685[(2)] = inst_23571);

(statearr_23630_23685[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (30))){
var inst_23533 = (state_23581[(13)]);
var inst_23541 = (state_23581[(9)]);
var inst_23532 = (state_23581[(11)]);
var inst_23558 = cljs.core.empty_QMARK_.call(null,inst_23532);
var inst_23559 = inst_23533.call(null,inst_23541);
var inst_23560 = cljs.core.not.call(null,inst_23559);
var inst_23561 = (inst_23558) && (inst_23560);
var state_23581__$1 = state_23581;
var statearr_23631_23686 = state_23581__$1;
(statearr_23631_23686[(2)] = inst_23561);

(statearr_23631_23686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (10))){
var inst_23483 = (state_23581[(8)]);
var inst_23504 = (state_23581[(2)]);
var inst_23505 = cljs.core.get.call(null,inst_23504,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23506 = cljs.core.get.call(null,inst_23504,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23507 = cljs.core.get.call(null,inst_23504,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23508 = inst_23483;
var state_23581__$1 = (function (){var statearr_23632 = state_23581;
(statearr_23632[(16)] = inst_23506);

(statearr_23632[(17)] = inst_23507);

(statearr_23632[(18)] = inst_23505);

(statearr_23632[(7)] = inst_23508);

return statearr_23632;
})();
var statearr_23633_23687 = state_23581__$1;
(statearr_23633_23687[(2)] = null);

(statearr_23633_23687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (18))){
var inst_23523 = (state_23581[(2)]);
var state_23581__$1 = state_23581;
var statearr_23634_23688 = state_23581__$1;
(statearr_23634_23688[(2)] = inst_23523);

(statearr_23634_23688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (37))){
var state_23581__$1 = state_23581;
var statearr_23635_23689 = state_23581__$1;
(statearr_23635_23689[(2)] = null);

(statearr_23635_23689[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23582 === (8))){
var inst_23483 = (state_23581[(8)]);
var inst_23501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23483);
var state_23581__$1 = state_23581;
var statearr_23636_23690 = state_23581__$1;
(statearr_23636_23690[(2)] = inst_23501);

(statearr_23636_23690[(1)] = (10));


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
});})(c__21907__auto___23644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21795__auto__,c__21907__auto___23644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21796__auto__ = null;
var cljs$core$async$mix_$_state_machine__21796__auto____0 = (function (){
var statearr_23640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23640[(0)] = cljs$core$async$mix_$_state_machine__21796__auto__);

(statearr_23640[(1)] = (1));

return statearr_23640;
});
var cljs$core$async$mix_$_state_machine__21796__auto____1 = (function (state_23581){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_23581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e23641){if((e23641 instanceof Object)){
var ex__21799__auto__ = e23641;
var statearr_23642_23691 = state_23581;
(statearr_23642_23691[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23692 = state_23581;
state_23581 = G__23692;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21796__auto__ = function(state_23581){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21796__auto____1.call(this,state_23581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21796__auto____0;
cljs$core$async$mix_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21796__auto____1;
return cljs$core$async$mix_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___23644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21909__auto__ = (function (){var statearr_23643 = f__21908__auto__.call(null);
(statearr_23643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___23644);

return statearr_23643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___23644,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20106__auto__ = (((p == null))?null:p);
var m__20107__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20107__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20106__auto__ = (((p == null))?null:p);
var m__20107__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,p,v,ch);
} else {
var m__20107__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23693 = [];
var len__20551__auto___23696 = arguments.length;
var i__20552__auto___23697 = (0);
while(true){
if((i__20552__auto___23697 < len__20551__auto___23696)){
args23693.push((arguments[i__20552__auto___23697]));

var G__23698 = (i__20552__auto___23697 + (1));
i__20552__auto___23697 = G__23698;
continue;
} else {
}
break;
}

var G__23695 = args23693.length;
switch (G__23695) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23693.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20106__auto__ = (((p == null))?null:p);
var m__20107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,p);
} else {
var m__20107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20106__auto__ = (((p == null))?null:p);
var m__20107__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20106__auto__)]);
if(!((m__20107__auto__ == null))){
return m__20107__auto__.call(null,p,v);
} else {
var m__20107__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20107__auto____$1 == null))){
return m__20107__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23701 = [];
var len__20551__auto___23826 = arguments.length;
var i__20552__auto___23827 = (0);
while(true){
if((i__20552__auto___23827 < len__20551__auto___23826)){
args23701.push((arguments[i__20552__auto___23827]));

var G__23828 = (i__20552__auto___23827 + (1));
i__20552__auto___23827 = G__23828;
continue;
} else {
}
break;
}

var G__23703 = args23701.length;
switch (G__23703) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23701.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19438__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19438__auto__,mults){
return (function (p1__23700_SHARP_){
if(cljs.core.truth_(p1__23700_SHARP_.call(null,topic))){
return p1__23700_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23700_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19438__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23704 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23705){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23705 = meta23705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23706,meta23705__$1){
var self__ = this;
var _23706__$1 = this;
return (new cljs.core.async.t_cljs$core$async23704(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23705__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23706){
var self__ = this;
var _23706__$1 = this;
return self__.meta23705;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23705","meta23705",1649677962,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23704";

cljs.core.async.t_cljs$core$async23704.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async23704");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23704 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23704(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23705){
return (new cljs.core.async.t_cljs$core$async23704(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23705));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23704(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21907__auto___23830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___23830,mults,ensure_mult,p){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___23830,mults,ensure_mult,p){
return (function (state_23778){
var state_val_23779 = (state_23778[(1)]);
if((state_val_23779 === (7))){
var inst_23774 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
var statearr_23780_23831 = state_23778__$1;
(statearr_23780_23831[(2)] = inst_23774);

(statearr_23780_23831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (20))){
var state_23778__$1 = state_23778;
var statearr_23781_23832 = state_23778__$1;
(statearr_23781_23832[(2)] = null);

(statearr_23781_23832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (1))){
var state_23778__$1 = state_23778;
var statearr_23782_23833 = state_23778__$1;
(statearr_23782_23833[(2)] = null);

(statearr_23782_23833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (24))){
var inst_23757 = (state_23778[(7)]);
var inst_23766 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23757);
var state_23778__$1 = state_23778;
var statearr_23783_23834 = state_23778__$1;
(statearr_23783_23834[(2)] = inst_23766);

(statearr_23783_23834[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (4))){
var inst_23709 = (state_23778[(8)]);
var inst_23709__$1 = (state_23778[(2)]);
var inst_23710 = (inst_23709__$1 == null);
var state_23778__$1 = (function (){var statearr_23784 = state_23778;
(statearr_23784[(8)] = inst_23709__$1);

return statearr_23784;
})();
if(cljs.core.truth_(inst_23710)){
var statearr_23785_23835 = state_23778__$1;
(statearr_23785_23835[(1)] = (5));

} else {
var statearr_23786_23836 = state_23778__$1;
(statearr_23786_23836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (15))){
var inst_23751 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
var statearr_23787_23837 = state_23778__$1;
(statearr_23787_23837[(2)] = inst_23751);

(statearr_23787_23837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (21))){
var inst_23771 = (state_23778[(2)]);
var state_23778__$1 = (function (){var statearr_23788 = state_23778;
(statearr_23788[(9)] = inst_23771);

return statearr_23788;
})();
var statearr_23789_23838 = state_23778__$1;
(statearr_23789_23838[(2)] = null);

(statearr_23789_23838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (13))){
var inst_23733 = (state_23778[(10)]);
var inst_23735 = cljs.core.chunked_seq_QMARK_.call(null,inst_23733);
var state_23778__$1 = state_23778;
if(inst_23735){
var statearr_23790_23839 = state_23778__$1;
(statearr_23790_23839[(1)] = (16));

} else {
var statearr_23791_23840 = state_23778__$1;
(statearr_23791_23840[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (22))){
var inst_23763 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
if(cljs.core.truth_(inst_23763)){
var statearr_23792_23841 = state_23778__$1;
(statearr_23792_23841[(1)] = (23));

} else {
var statearr_23793_23842 = state_23778__$1;
(statearr_23793_23842[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (6))){
var inst_23709 = (state_23778[(8)]);
var inst_23757 = (state_23778[(7)]);
var inst_23759 = (state_23778[(11)]);
var inst_23757__$1 = topic_fn.call(null,inst_23709);
var inst_23758 = cljs.core.deref.call(null,mults);
var inst_23759__$1 = cljs.core.get.call(null,inst_23758,inst_23757__$1);
var state_23778__$1 = (function (){var statearr_23794 = state_23778;
(statearr_23794[(7)] = inst_23757__$1);

(statearr_23794[(11)] = inst_23759__$1);

return statearr_23794;
})();
if(cljs.core.truth_(inst_23759__$1)){
var statearr_23795_23843 = state_23778__$1;
(statearr_23795_23843[(1)] = (19));

} else {
var statearr_23796_23844 = state_23778__$1;
(statearr_23796_23844[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (25))){
var inst_23768 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
var statearr_23797_23845 = state_23778__$1;
(statearr_23797_23845[(2)] = inst_23768);

(statearr_23797_23845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (17))){
var inst_23733 = (state_23778[(10)]);
var inst_23742 = cljs.core.first.call(null,inst_23733);
var inst_23743 = cljs.core.async.muxch_STAR_.call(null,inst_23742);
var inst_23744 = cljs.core.async.close_BANG_.call(null,inst_23743);
var inst_23745 = cljs.core.next.call(null,inst_23733);
var inst_23719 = inst_23745;
var inst_23720 = null;
var inst_23721 = (0);
var inst_23722 = (0);
var state_23778__$1 = (function (){var statearr_23798 = state_23778;
(statearr_23798[(12)] = inst_23722);

(statearr_23798[(13)] = inst_23721);

(statearr_23798[(14)] = inst_23720);

(statearr_23798[(15)] = inst_23719);

(statearr_23798[(16)] = inst_23744);

return statearr_23798;
})();
var statearr_23799_23846 = state_23778__$1;
(statearr_23799_23846[(2)] = null);

(statearr_23799_23846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (3))){
var inst_23776 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23778__$1,inst_23776);
} else {
if((state_val_23779 === (12))){
var inst_23753 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
var statearr_23800_23847 = state_23778__$1;
(statearr_23800_23847[(2)] = inst_23753);

(statearr_23800_23847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (2))){
var state_23778__$1 = state_23778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23778__$1,(4),ch);
} else {
if((state_val_23779 === (23))){
var state_23778__$1 = state_23778;
var statearr_23801_23848 = state_23778__$1;
(statearr_23801_23848[(2)] = null);

(statearr_23801_23848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (19))){
var inst_23709 = (state_23778[(8)]);
var inst_23759 = (state_23778[(11)]);
var inst_23761 = cljs.core.async.muxch_STAR_.call(null,inst_23759);
var state_23778__$1 = state_23778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23778__$1,(22),inst_23761,inst_23709);
} else {
if((state_val_23779 === (11))){
var inst_23733 = (state_23778[(10)]);
var inst_23719 = (state_23778[(15)]);
var inst_23733__$1 = cljs.core.seq.call(null,inst_23719);
var state_23778__$1 = (function (){var statearr_23802 = state_23778;
(statearr_23802[(10)] = inst_23733__$1);

return statearr_23802;
})();
if(inst_23733__$1){
var statearr_23803_23849 = state_23778__$1;
(statearr_23803_23849[(1)] = (13));

} else {
var statearr_23804_23850 = state_23778__$1;
(statearr_23804_23850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (9))){
var inst_23755 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
var statearr_23805_23851 = state_23778__$1;
(statearr_23805_23851[(2)] = inst_23755);

(statearr_23805_23851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (5))){
var inst_23716 = cljs.core.deref.call(null,mults);
var inst_23717 = cljs.core.vals.call(null,inst_23716);
var inst_23718 = cljs.core.seq.call(null,inst_23717);
var inst_23719 = inst_23718;
var inst_23720 = null;
var inst_23721 = (0);
var inst_23722 = (0);
var state_23778__$1 = (function (){var statearr_23806 = state_23778;
(statearr_23806[(12)] = inst_23722);

(statearr_23806[(13)] = inst_23721);

(statearr_23806[(14)] = inst_23720);

(statearr_23806[(15)] = inst_23719);

return statearr_23806;
})();
var statearr_23807_23852 = state_23778__$1;
(statearr_23807_23852[(2)] = null);

(statearr_23807_23852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (14))){
var state_23778__$1 = state_23778;
var statearr_23811_23853 = state_23778__$1;
(statearr_23811_23853[(2)] = null);

(statearr_23811_23853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (16))){
var inst_23733 = (state_23778[(10)]);
var inst_23737 = cljs.core.chunk_first.call(null,inst_23733);
var inst_23738 = cljs.core.chunk_rest.call(null,inst_23733);
var inst_23739 = cljs.core.count.call(null,inst_23737);
var inst_23719 = inst_23738;
var inst_23720 = inst_23737;
var inst_23721 = inst_23739;
var inst_23722 = (0);
var state_23778__$1 = (function (){var statearr_23812 = state_23778;
(statearr_23812[(12)] = inst_23722);

(statearr_23812[(13)] = inst_23721);

(statearr_23812[(14)] = inst_23720);

(statearr_23812[(15)] = inst_23719);

return statearr_23812;
})();
var statearr_23813_23854 = state_23778__$1;
(statearr_23813_23854[(2)] = null);

(statearr_23813_23854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (10))){
var inst_23722 = (state_23778[(12)]);
var inst_23721 = (state_23778[(13)]);
var inst_23720 = (state_23778[(14)]);
var inst_23719 = (state_23778[(15)]);
var inst_23727 = cljs.core._nth.call(null,inst_23720,inst_23722);
var inst_23728 = cljs.core.async.muxch_STAR_.call(null,inst_23727);
var inst_23729 = cljs.core.async.close_BANG_.call(null,inst_23728);
var inst_23730 = (inst_23722 + (1));
var tmp23808 = inst_23721;
var tmp23809 = inst_23720;
var tmp23810 = inst_23719;
var inst_23719__$1 = tmp23810;
var inst_23720__$1 = tmp23809;
var inst_23721__$1 = tmp23808;
var inst_23722__$1 = inst_23730;
var state_23778__$1 = (function (){var statearr_23814 = state_23778;
(statearr_23814[(12)] = inst_23722__$1);

(statearr_23814[(17)] = inst_23729);

(statearr_23814[(13)] = inst_23721__$1);

(statearr_23814[(14)] = inst_23720__$1);

(statearr_23814[(15)] = inst_23719__$1);

return statearr_23814;
})();
var statearr_23815_23855 = state_23778__$1;
(statearr_23815_23855[(2)] = null);

(statearr_23815_23855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (18))){
var inst_23748 = (state_23778[(2)]);
var state_23778__$1 = state_23778;
var statearr_23816_23856 = state_23778__$1;
(statearr_23816_23856[(2)] = inst_23748);

(statearr_23816_23856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23779 === (8))){
var inst_23722 = (state_23778[(12)]);
var inst_23721 = (state_23778[(13)]);
var inst_23724 = (inst_23722 < inst_23721);
var inst_23725 = inst_23724;
var state_23778__$1 = state_23778;
if(cljs.core.truth_(inst_23725)){
var statearr_23817_23857 = state_23778__$1;
(statearr_23817_23857[(1)] = (10));

} else {
var statearr_23818_23858 = state_23778__$1;
(statearr_23818_23858[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21907__auto___23830,mults,ensure_mult,p))
;
return ((function (switch__21795__auto__,c__21907__auto___23830,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_23822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23822[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_23822[(1)] = (1));

return statearr_23822;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_23778){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_23778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e23823){if((e23823 instanceof Object)){
var ex__21799__auto__ = e23823;
var statearr_23824_23859 = state_23778;
(statearr_23824_23859[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23860 = state_23778;
state_23778 = G__23860;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_23778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_23778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___23830,mults,ensure_mult,p))
})();
var state__21909__auto__ = (function (){var statearr_23825 = f__21908__auto__.call(null);
(statearr_23825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___23830);

return statearr_23825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___23830,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23861 = [];
var len__20551__auto___23864 = arguments.length;
var i__20552__auto___23865 = (0);
while(true){
if((i__20552__auto___23865 < len__20551__auto___23864)){
args23861.push((arguments[i__20552__auto___23865]));

var G__23866 = (i__20552__auto___23865 + (1));
i__20552__auto___23865 = G__23866;
continue;
} else {
}
break;
}

var G__23863 = args23861.length;
switch (G__23863) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23861.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23868 = [];
var len__20551__auto___23871 = arguments.length;
var i__20552__auto___23872 = (0);
while(true){
if((i__20552__auto___23872 < len__20551__auto___23871)){
args23868.push((arguments[i__20552__auto___23872]));

var G__23873 = (i__20552__auto___23872 + (1));
i__20552__auto___23872 = G__23873;
continue;
} else {
}
break;
}

var G__23870 = args23868.length;
switch (G__23870) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23868.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23875 = [];
var len__20551__auto___23946 = arguments.length;
var i__20552__auto___23947 = (0);
while(true){
if((i__20552__auto___23947 < len__20551__auto___23946)){
args23875.push((arguments[i__20552__auto___23947]));

var G__23948 = (i__20552__auto___23947 + (1));
i__20552__auto___23947 = G__23948;
continue;
} else {
}
break;
}

var G__23877 = args23875.length;
switch (G__23877) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23875.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21907__auto___23950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___23950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___23950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23916){
var state_val_23917 = (state_23916[(1)]);
if((state_val_23917 === (7))){
var state_23916__$1 = state_23916;
var statearr_23918_23951 = state_23916__$1;
(statearr_23918_23951[(2)] = null);

(statearr_23918_23951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (1))){
var state_23916__$1 = state_23916;
var statearr_23919_23952 = state_23916__$1;
(statearr_23919_23952[(2)] = null);

(statearr_23919_23952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (4))){
var inst_23880 = (state_23916[(7)]);
var inst_23882 = (inst_23880 < cnt);
var state_23916__$1 = state_23916;
if(cljs.core.truth_(inst_23882)){
var statearr_23920_23953 = state_23916__$1;
(statearr_23920_23953[(1)] = (6));

} else {
var statearr_23921_23954 = state_23916__$1;
(statearr_23921_23954[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (15))){
var inst_23912 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
var statearr_23922_23955 = state_23916__$1;
(statearr_23922_23955[(2)] = inst_23912);

(statearr_23922_23955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (13))){
var inst_23905 = cljs.core.async.close_BANG_.call(null,out);
var state_23916__$1 = state_23916;
var statearr_23923_23956 = state_23916__$1;
(statearr_23923_23956[(2)] = inst_23905);

(statearr_23923_23956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (6))){
var state_23916__$1 = state_23916;
var statearr_23924_23957 = state_23916__$1;
(statearr_23924_23957[(2)] = null);

(statearr_23924_23957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (3))){
var inst_23914 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23916__$1,inst_23914);
} else {
if((state_val_23917 === (12))){
var inst_23902 = (state_23916[(8)]);
var inst_23902__$1 = (state_23916[(2)]);
var inst_23903 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23902__$1);
var state_23916__$1 = (function (){var statearr_23925 = state_23916;
(statearr_23925[(8)] = inst_23902__$1);

return statearr_23925;
})();
if(cljs.core.truth_(inst_23903)){
var statearr_23926_23958 = state_23916__$1;
(statearr_23926_23958[(1)] = (13));

} else {
var statearr_23927_23959 = state_23916__$1;
(statearr_23927_23959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (2))){
var inst_23879 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23880 = (0);
var state_23916__$1 = (function (){var statearr_23928 = state_23916;
(statearr_23928[(9)] = inst_23879);

(statearr_23928[(7)] = inst_23880);

return statearr_23928;
})();
var statearr_23929_23960 = state_23916__$1;
(statearr_23929_23960[(2)] = null);

(statearr_23929_23960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (11))){
var inst_23880 = (state_23916[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23916,(10),Object,null,(9));
var inst_23889 = chs__$1.call(null,inst_23880);
var inst_23890 = done.call(null,inst_23880);
var inst_23891 = cljs.core.async.take_BANG_.call(null,inst_23889,inst_23890);
var state_23916__$1 = state_23916;
var statearr_23930_23961 = state_23916__$1;
(statearr_23930_23961[(2)] = inst_23891);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (9))){
var inst_23880 = (state_23916[(7)]);
var inst_23893 = (state_23916[(2)]);
var inst_23894 = (inst_23880 + (1));
var inst_23880__$1 = inst_23894;
var state_23916__$1 = (function (){var statearr_23931 = state_23916;
(statearr_23931[(7)] = inst_23880__$1);

(statearr_23931[(10)] = inst_23893);

return statearr_23931;
})();
var statearr_23932_23962 = state_23916__$1;
(statearr_23932_23962[(2)] = null);

(statearr_23932_23962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (5))){
var inst_23900 = (state_23916[(2)]);
var state_23916__$1 = (function (){var statearr_23933 = state_23916;
(statearr_23933[(11)] = inst_23900);

return statearr_23933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23916__$1,(12),dchan);
} else {
if((state_val_23917 === (14))){
var inst_23902 = (state_23916[(8)]);
var inst_23907 = cljs.core.apply.call(null,f,inst_23902);
var state_23916__$1 = state_23916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23916__$1,(16),out,inst_23907);
} else {
if((state_val_23917 === (16))){
var inst_23909 = (state_23916[(2)]);
var state_23916__$1 = (function (){var statearr_23934 = state_23916;
(statearr_23934[(12)] = inst_23909);

return statearr_23934;
})();
var statearr_23935_23963 = state_23916__$1;
(statearr_23935_23963[(2)] = null);

(statearr_23935_23963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (10))){
var inst_23884 = (state_23916[(2)]);
var inst_23885 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23916__$1 = (function (){var statearr_23936 = state_23916;
(statearr_23936[(13)] = inst_23884);

return statearr_23936;
})();
var statearr_23937_23964 = state_23916__$1;
(statearr_23937_23964[(2)] = inst_23885);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23916__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23917 === (8))){
var inst_23898 = (state_23916[(2)]);
var state_23916__$1 = state_23916;
var statearr_23938_23965 = state_23916__$1;
(statearr_23938_23965[(2)] = inst_23898);

(statearr_23938_23965[(1)] = (5));


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
});})(c__21907__auto___23950,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21795__auto__,c__21907__auto___23950,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_23942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23942[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_23942[(1)] = (1));

return statearr_23942;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_23916){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_23916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e23943){if((e23943 instanceof Object)){
var ex__21799__auto__ = e23943;
var statearr_23944_23966 = state_23916;
(statearr_23944_23966[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23967 = state_23916;
state_23916 = G__23967;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_23916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_23916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___23950,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21909__auto__ = (function (){var statearr_23945 = f__21908__auto__.call(null);
(statearr_23945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___23950);

return statearr_23945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___23950,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23969 = [];
var len__20551__auto___24027 = arguments.length;
var i__20552__auto___24028 = (0);
while(true){
if((i__20552__auto___24028 < len__20551__auto___24027)){
args23969.push((arguments[i__20552__auto___24028]));

var G__24029 = (i__20552__auto___24028 + (1));
i__20552__auto___24028 = G__24029;
continue;
} else {
}
break;
}

var G__23971 = args23969.length;
switch (G__23971) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23969.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21907__auto___24031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___24031,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___24031,out){
return (function (state_24003){
var state_val_24004 = (state_24003[(1)]);
if((state_val_24004 === (7))){
var inst_23982 = (state_24003[(7)]);
var inst_23983 = (state_24003[(8)]);
var inst_23982__$1 = (state_24003[(2)]);
var inst_23983__$1 = cljs.core.nth.call(null,inst_23982__$1,(0),null);
var inst_23984 = cljs.core.nth.call(null,inst_23982__$1,(1),null);
var inst_23985 = (inst_23983__$1 == null);
var state_24003__$1 = (function (){var statearr_24005 = state_24003;
(statearr_24005[(7)] = inst_23982__$1);

(statearr_24005[(9)] = inst_23984);

(statearr_24005[(8)] = inst_23983__$1);

return statearr_24005;
})();
if(cljs.core.truth_(inst_23985)){
var statearr_24006_24032 = state_24003__$1;
(statearr_24006_24032[(1)] = (8));

} else {
var statearr_24007_24033 = state_24003__$1;
(statearr_24007_24033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (1))){
var inst_23972 = cljs.core.vec.call(null,chs);
var inst_23973 = inst_23972;
var state_24003__$1 = (function (){var statearr_24008 = state_24003;
(statearr_24008[(10)] = inst_23973);

return statearr_24008;
})();
var statearr_24009_24034 = state_24003__$1;
(statearr_24009_24034[(2)] = null);

(statearr_24009_24034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (4))){
var inst_23973 = (state_24003[(10)]);
var state_24003__$1 = state_24003;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24003__$1,(7),inst_23973);
} else {
if((state_val_24004 === (6))){
var inst_23999 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24010_24035 = state_24003__$1;
(statearr_24010_24035[(2)] = inst_23999);

(statearr_24010_24035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (3))){
var inst_24001 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24003__$1,inst_24001);
} else {
if((state_val_24004 === (2))){
var inst_23973 = (state_24003[(10)]);
var inst_23975 = cljs.core.count.call(null,inst_23973);
var inst_23976 = (inst_23975 > (0));
var state_24003__$1 = state_24003;
if(cljs.core.truth_(inst_23976)){
var statearr_24012_24036 = state_24003__$1;
(statearr_24012_24036[(1)] = (4));

} else {
var statearr_24013_24037 = state_24003__$1;
(statearr_24013_24037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (11))){
var inst_23973 = (state_24003[(10)]);
var inst_23992 = (state_24003[(2)]);
var tmp24011 = inst_23973;
var inst_23973__$1 = tmp24011;
var state_24003__$1 = (function (){var statearr_24014 = state_24003;
(statearr_24014[(10)] = inst_23973__$1);

(statearr_24014[(11)] = inst_23992);

return statearr_24014;
})();
var statearr_24015_24038 = state_24003__$1;
(statearr_24015_24038[(2)] = null);

(statearr_24015_24038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (9))){
var inst_23983 = (state_24003[(8)]);
var state_24003__$1 = state_24003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24003__$1,(11),out,inst_23983);
} else {
if((state_val_24004 === (5))){
var inst_23997 = cljs.core.async.close_BANG_.call(null,out);
var state_24003__$1 = state_24003;
var statearr_24016_24039 = state_24003__$1;
(statearr_24016_24039[(2)] = inst_23997);

(statearr_24016_24039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (10))){
var inst_23995 = (state_24003[(2)]);
var state_24003__$1 = state_24003;
var statearr_24017_24040 = state_24003__$1;
(statearr_24017_24040[(2)] = inst_23995);

(statearr_24017_24040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24004 === (8))){
var inst_23982 = (state_24003[(7)]);
var inst_23973 = (state_24003[(10)]);
var inst_23984 = (state_24003[(9)]);
var inst_23983 = (state_24003[(8)]);
var inst_23987 = (function (){var cs = inst_23973;
var vec__23978 = inst_23982;
var v = inst_23983;
var c = inst_23984;
return ((function (cs,vec__23978,v,c,inst_23982,inst_23973,inst_23984,inst_23983,state_val_24004,c__21907__auto___24031,out){
return (function (p1__23968_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23968_SHARP_);
});
;})(cs,vec__23978,v,c,inst_23982,inst_23973,inst_23984,inst_23983,state_val_24004,c__21907__auto___24031,out))
})();
var inst_23988 = cljs.core.filterv.call(null,inst_23987,inst_23973);
var inst_23973__$1 = inst_23988;
var state_24003__$1 = (function (){var statearr_24018 = state_24003;
(statearr_24018[(10)] = inst_23973__$1);

return statearr_24018;
})();
var statearr_24019_24041 = state_24003__$1;
(statearr_24019_24041[(2)] = null);

(statearr_24019_24041[(1)] = (2));


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
});})(c__21907__auto___24031,out))
;
return ((function (switch__21795__auto__,c__21907__auto___24031,out){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_24023 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24023[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_24023[(1)] = (1));

return statearr_24023;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_24003){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24024){if((e24024 instanceof Object)){
var ex__21799__auto__ = e24024;
var statearr_24025_24042 = state_24003;
(statearr_24025_24042[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24043 = state_24003;
state_24003 = G__24043;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_24003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___24031,out))
})();
var state__21909__auto__ = (function (){var statearr_24026 = f__21908__auto__.call(null);
(statearr_24026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___24031);

return statearr_24026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___24031,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24044 = [];
var len__20551__auto___24093 = arguments.length;
var i__20552__auto___24094 = (0);
while(true){
if((i__20552__auto___24094 < len__20551__auto___24093)){
args24044.push((arguments[i__20552__auto___24094]));

var G__24095 = (i__20552__auto___24094 + (1));
i__20552__auto___24094 = G__24095;
continue;
} else {
}
break;
}

var G__24046 = args24044.length;
switch (G__24046) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24044.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21907__auto___24097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___24097,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___24097,out){
return (function (state_24070){
var state_val_24071 = (state_24070[(1)]);
if((state_val_24071 === (7))){
var inst_24052 = (state_24070[(7)]);
var inst_24052__$1 = (state_24070[(2)]);
var inst_24053 = (inst_24052__$1 == null);
var inst_24054 = cljs.core.not.call(null,inst_24053);
var state_24070__$1 = (function (){var statearr_24072 = state_24070;
(statearr_24072[(7)] = inst_24052__$1);

return statearr_24072;
})();
if(inst_24054){
var statearr_24073_24098 = state_24070__$1;
(statearr_24073_24098[(1)] = (8));

} else {
var statearr_24074_24099 = state_24070__$1;
(statearr_24074_24099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (1))){
var inst_24047 = (0);
var state_24070__$1 = (function (){var statearr_24075 = state_24070;
(statearr_24075[(8)] = inst_24047);

return statearr_24075;
})();
var statearr_24076_24100 = state_24070__$1;
(statearr_24076_24100[(2)] = null);

(statearr_24076_24100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (4))){
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24070__$1,(7),ch);
} else {
if((state_val_24071 === (6))){
var inst_24065 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
var statearr_24077_24101 = state_24070__$1;
(statearr_24077_24101[(2)] = inst_24065);

(statearr_24077_24101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (3))){
var inst_24067 = (state_24070[(2)]);
var inst_24068 = cljs.core.async.close_BANG_.call(null,out);
var state_24070__$1 = (function (){var statearr_24078 = state_24070;
(statearr_24078[(9)] = inst_24067);

return statearr_24078;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24070__$1,inst_24068);
} else {
if((state_val_24071 === (2))){
var inst_24047 = (state_24070[(8)]);
var inst_24049 = (inst_24047 < n);
var state_24070__$1 = state_24070;
if(cljs.core.truth_(inst_24049)){
var statearr_24079_24102 = state_24070__$1;
(statearr_24079_24102[(1)] = (4));

} else {
var statearr_24080_24103 = state_24070__$1;
(statearr_24080_24103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (11))){
var inst_24047 = (state_24070[(8)]);
var inst_24057 = (state_24070[(2)]);
var inst_24058 = (inst_24047 + (1));
var inst_24047__$1 = inst_24058;
var state_24070__$1 = (function (){var statearr_24081 = state_24070;
(statearr_24081[(10)] = inst_24057);

(statearr_24081[(8)] = inst_24047__$1);

return statearr_24081;
})();
var statearr_24082_24104 = state_24070__$1;
(statearr_24082_24104[(2)] = null);

(statearr_24082_24104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (9))){
var state_24070__$1 = state_24070;
var statearr_24083_24105 = state_24070__$1;
(statearr_24083_24105[(2)] = null);

(statearr_24083_24105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (5))){
var state_24070__$1 = state_24070;
var statearr_24084_24106 = state_24070__$1;
(statearr_24084_24106[(2)] = null);

(statearr_24084_24106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (10))){
var inst_24062 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
var statearr_24085_24107 = state_24070__$1;
(statearr_24085_24107[(2)] = inst_24062);

(statearr_24085_24107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (8))){
var inst_24052 = (state_24070[(7)]);
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24070__$1,(11),out,inst_24052);
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
});})(c__21907__auto___24097,out))
;
return ((function (switch__21795__auto__,c__21907__auto___24097,out){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_24089 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24089[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_24089[(1)] = (1));

return statearr_24089;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_24070){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24090){if((e24090 instanceof Object)){
var ex__21799__auto__ = e24090;
var statearr_24091_24108 = state_24070;
(statearr_24091_24108[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24109 = state_24070;
state_24070 = G__24109;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_24070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_24070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___24097,out))
})();
var state__21909__auto__ = (function (){var statearr_24092 = f__21908__auto__.call(null);
(statearr_24092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___24097);

return statearr_24092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___24097,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24117 = (function (f,ch,meta24118){
this.f = f;
this.ch = ch;
this.meta24118 = meta24118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24119,meta24118__$1){
var self__ = this;
var _24119__$1 = this;
return (new cljs.core.async.t_cljs$core$async24117(self__.f,self__.ch,meta24118__$1));
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24119){
var self__ = this;
var _24119__$1 = this;
return self__.meta24118;
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24120 = (function (f,ch,meta24118,_,fn1,meta24121){
this.f = f;
this.ch = ch;
this.meta24118 = meta24118;
this._ = _;
this.fn1 = fn1;
this.meta24121 = meta24121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24122,meta24121__$1){
var self__ = this;
var _24122__$1 = this;
return (new cljs.core.async.t_cljs$core$async24120(self__.f,self__.ch,self__.meta24118,self__._,self__.fn1,meta24121__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24122){
var self__ = this;
var _24122__$1 = this;
return self__.meta24121;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24110_SHARP_){
return f1.call(null,(((p1__24110_SHARP_ == null))?null:self__.f.call(null,p1__24110_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24120.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24118","meta24118",1801534590,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24117","cljs.core.async/t_cljs$core$async24117",-856193475,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24121","meta24121",1870832536,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24120";

cljs.core.async.t_cljs$core$async24120.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async24120");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24120 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24120(f__$1,ch__$1,meta24118__$1,___$2,fn1__$1,meta24121){
return (new cljs.core.async.t_cljs$core$async24120(f__$1,ch__$1,meta24118__$1,___$2,fn1__$1,meta24121));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24120(self__.f,self__.ch,self__.meta24118,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19426__auto__ = ret;
if(cljs.core.truth_(and__19426__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19426__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24118","meta24118",1801534590,null)], null);
});

cljs.core.async.t_cljs$core$async24117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24117";

cljs.core.async.t_cljs$core$async24117.cljs$lang$ctorPrWriter = (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async24117");
});

cljs.core.async.__GT_t_cljs$core$async24117 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24117(f__$1,ch__$1,meta24118){
return (new cljs.core.async.t_cljs$core$async24117(f__$1,ch__$1,meta24118));
});

}

return (new cljs.core.async.t_cljs$core$async24117(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24126 = (function (f,ch,meta24127){
this.f = f;
this.ch = ch;
this.meta24127 = meta24127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24128,meta24127__$1){
var self__ = this;
var _24128__$1 = this;
return (new cljs.core.async.t_cljs$core$async24126(self__.f,self__.ch,meta24127__$1));
});

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24128){
var self__ = this;
var _24128__$1 = this;
return self__.meta24127;
});

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24127","meta24127",1731615980,null)], null);
});

cljs.core.async.t_cljs$core$async24126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24126";

cljs.core.async.t_cljs$core$async24126.cljs$lang$ctorPrWriter = (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async24126");
});

cljs.core.async.__GT_t_cljs$core$async24126 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24126(f__$1,ch__$1,meta24127){
return (new cljs.core.async.t_cljs$core$async24126(f__$1,ch__$1,meta24127));
});

}

return (new cljs.core.async.t_cljs$core$async24126(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24132 = (function (p,ch,meta24133){
this.p = p;
this.ch = ch;
this.meta24133 = meta24133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24134,meta24133__$1){
var self__ = this;
var _24134__$1 = this;
return (new cljs.core.async.t_cljs$core$async24132(self__.p,self__.ch,meta24133__$1));
});

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24134){
var self__ = this;
var _24134__$1 = this;
return self__.meta24133;
});

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24133","meta24133",861054610,null)], null);
});

cljs.core.async.t_cljs$core$async24132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24132";

cljs.core.async.t_cljs$core$async24132.cljs$lang$ctorPrWriter = (function (this__20049__auto__,writer__20050__auto__,opt__20051__auto__){
return cljs.core._write.call(null,writer__20050__auto__,"cljs.core.async/t_cljs$core$async24132");
});

cljs.core.async.__GT_t_cljs$core$async24132 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24132(p__$1,ch__$1,meta24133){
return (new cljs.core.async.t_cljs$core$async24132(p__$1,ch__$1,meta24133));
});

}

return (new cljs.core.async.t_cljs$core$async24132(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24135 = [];
var len__20551__auto___24179 = arguments.length;
var i__20552__auto___24180 = (0);
while(true){
if((i__20552__auto___24180 < len__20551__auto___24179)){
args24135.push((arguments[i__20552__auto___24180]));

var G__24181 = (i__20552__auto___24180 + (1));
i__20552__auto___24180 = G__24181;
continue;
} else {
}
break;
}

var G__24137 = args24135.length;
switch (G__24137) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24135.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21907__auto___24183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___24183,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___24183,out){
return (function (state_24158){
var state_val_24159 = (state_24158[(1)]);
if((state_val_24159 === (7))){
var inst_24154 = (state_24158[(2)]);
var state_24158__$1 = state_24158;
var statearr_24160_24184 = state_24158__$1;
(statearr_24160_24184[(2)] = inst_24154);

(statearr_24160_24184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (1))){
var state_24158__$1 = state_24158;
var statearr_24161_24185 = state_24158__$1;
(statearr_24161_24185[(2)] = null);

(statearr_24161_24185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (4))){
var inst_24140 = (state_24158[(7)]);
var inst_24140__$1 = (state_24158[(2)]);
var inst_24141 = (inst_24140__$1 == null);
var state_24158__$1 = (function (){var statearr_24162 = state_24158;
(statearr_24162[(7)] = inst_24140__$1);

return statearr_24162;
})();
if(cljs.core.truth_(inst_24141)){
var statearr_24163_24186 = state_24158__$1;
(statearr_24163_24186[(1)] = (5));

} else {
var statearr_24164_24187 = state_24158__$1;
(statearr_24164_24187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (6))){
var inst_24140 = (state_24158[(7)]);
var inst_24145 = p.call(null,inst_24140);
var state_24158__$1 = state_24158;
if(cljs.core.truth_(inst_24145)){
var statearr_24165_24188 = state_24158__$1;
(statearr_24165_24188[(1)] = (8));

} else {
var statearr_24166_24189 = state_24158__$1;
(statearr_24166_24189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (3))){
var inst_24156 = (state_24158[(2)]);
var state_24158__$1 = state_24158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24158__$1,inst_24156);
} else {
if((state_val_24159 === (2))){
var state_24158__$1 = state_24158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24158__$1,(4),ch);
} else {
if((state_val_24159 === (11))){
var inst_24148 = (state_24158[(2)]);
var state_24158__$1 = state_24158;
var statearr_24167_24190 = state_24158__$1;
(statearr_24167_24190[(2)] = inst_24148);

(statearr_24167_24190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (9))){
var state_24158__$1 = state_24158;
var statearr_24168_24191 = state_24158__$1;
(statearr_24168_24191[(2)] = null);

(statearr_24168_24191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (5))){
var inst_24143 = cljs.core.async.close_BANG_.call(null,out);
var state_24158__$1 = state_24158;
var statearr_24169_24192 = state_24158__$1;
(statearr_24169_24192[(2)] = inst_24143);

(statearr_24169_24192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (10))){
var inst_24151 = (state_24158[(2)]);
var state_24158__$1 = (function (){var statearr_24170 = state_24158;
(statearr_24170[(8)] = inst_24151);

return statearr_24170;
})();
var statearr_24171_24193 = state_24158__$1;
(statearr_24171_24193[(2)] = null);

(statearr_24171_24193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24159 === (8))){
var inst_24140 = (state_24158[(7)]);
var state_24158__$1 = state_24158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24158__$1,(11),out,inst_24140);
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
});})(c__21907__auto___24183,out))
;
return ((function (switch__21795__auto__,c__21907__auto___24183,out){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_24175 = [null,null,null,null,null,null,null,null,null];
(statearr_24175[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_24175[(1)] = (1));

return statearr_24175;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_24158){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24176){if((e24176 instanceof Object)){
var ex__21799__auto__ = e24176;
var statearr_24177_24194 = state_24158;
(statearr_24177_24194[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24195 = state_24158;
state_24158 = G__24195;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_24158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_24158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___24183,out))
})();
var state__21909__auto__ = (function (){var statearr_24178 = f__21908__auto__.call(null);
(statearr_24178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___24183);

return statearr_24178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___24183,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24196 = [];
var len__20551__auto___24199 = arguments.length;
var i__20552__auto___24200 = (0);
while(true){
if((i__20552__auto___24200 < len__20551__auto___24199)){
args24196.push((arguments[i__20552__auto___24200]));

var G__24201 = (i__20552__auto___24200 + (1));
i__20552__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var G__24198 = args24196.length;
switch (G__24198) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24196.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_24368){
var state_val_24369 = (state_24368[(1)]);
if((state_val_24369 === (7))){
var inst_24364 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24370_24411 = state_24368__$1;
(statearr_24370_24411[(2)] = inst_24364);

(statearr_24370_24411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (20))){
var inst_24334 = (state_24368[(7)]);
var inst_24345 = (state_24368[(2)]);
var inst_24346 = cljs.core.next.call(null,inst_24334);
var inst_24320 = inst_24346;
var inst_24321 = null;
var inst_24322 = (0);
var inst_24323 = (0);
var state_24368__$1 = (function (){var statearr_24371 = state_24368;
(statearr_24371[(8)] = inst_24320);

(statearr_24371[(9)] = inst_24322);

(statearr_24371[(10)] = inst_24321);

(statearr_24371[(11)] = inst_24323);

(statearr_24371[(12)] = inst_24345);

return statearr_24371;
})();
var statearr_24372_24412 = state_24368__$1;
(statearr_24372_24412[(2)] = null);

(statearr_24372_24412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (1))){
var state_24368__$1 = state_24368;
var statearr_24373_24413 = state_24368__$1;
(statearr_24373_24413[(2)] = null);

(statearr_24373_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (4))){
var inst_24309 = (state_24368[(13)]);
var inst_24309__$1 = (state_24368[(2)]);
var inst_24310 = (inst_24309__$1 == null);
var state_24368__$1 = (function (){var statearr_24374 = state_24368;
(statearr_24374[(13)] = inst_24309__$1);

return statearr_24374;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24375_24414 = state_24368__$1;
(statearr_24375_24414[(1)] = (5));

} else {
var statearr_24376_24415 = state_24368__$1;
(statearr_24376_24415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (15))){
var state_24368__$1 = state_24368;
var statearr_24380_24416 = state_24368__$1;
(statearr_24380_24416[(2)] = null);

(statearr_24380_24416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (21))){
var state_24368__$1 = state_24368;
var statearr_24381_24417 = state_24368__$1;
(statearr_24381_24417[(2)] = null);

(statearr_24381_24417[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (13))){
var inst_24320 = (state_24368[(8)]);
var inst_24322 = (state_24368[(9)]);
var inst_24321 = (state_24368[(10)]);
var inst_24323 = (state_24368[(11)]);
var inst_24330 = (state_24368[(2)]);
var inst_24331 = (inst_24323 + (1));
var tmp24377 = inst_24320;
var tmp24378 = inst_24322;
var tmp24379 = inst_24321;
var inst_24320__$1 = tmp24377;
var inst_24321__$1 = tmp24379;
var inst_24322__$1 = tmp24378;
var inst_24323__$1 = inst_24331;
var state_24368__$1 = (function (){var statearr_24382 = state_24368;
(statearr_24382[(8)] = inst_24320__$1);

(statearr_24382[(9)] = inst_24322__$1);

(statearr_24382[(14)] = inst_24330);

(statearr_24382[(10)] = inst_24321__$1);

(statearr_24382[(11)] = inst_24323__$1);

return statearr_24382;
})();
var statearr_24383_24418 = state_24368__$1;
(statearr_24383_24418[(2)] = null);

(statearr_24383_24418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (22))){
var state_24368__$1 = state_24368;
var statearr_24384_24419 = state_24368__$1;
(statearr_24384_24419[(2)] = null);

(statearr_24384_24419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (6))){
var inst_24309 = (state_24368[(13)]);
var inst_24318 = f.call(null,inst_24309);
var inst_24319 = cljs.core.seq.call(null,inst_24318);
var inst_24320 = inst_24319;
var inst_24321 = null;
var inst_24322 = (0);
var inst_24323 = (0);
var state_24368__$1 = (function (){var statearr_24385 = state_24368;
(statearr_24385[(8)] = inst_24320);

(statearr_24385[(9)] = inst_24322);

(statearr_24385[(10)] = inst_24321);

(statearr_24385[(11)] = inst_24323);

return statearr_24385;
})();
var statearr_24386_24420 = state_24368__$1;
(statearr_24386_24420[(2)] = null);

(statearr_24386_24420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (17))){
var inst_24334 = (state_24368[(7)]);
var inst_24338 = cljs.core.chunk_first.call(null,inst_24334);
var inst_24339 = cljs.core.chunk_rest.call(null,inst_24334);
var inst_24340 = cljs.core.count.call(null,inst_24338);
var inst_24320 = inst_24339;
var inst_24321 = inst_24338;
var inst_24322 = inst_24340;
var inst_24323 = (0);
var state_24368__$1 = (function (){var statearr_24387 = state_24368;
(statearr_24387[(8)] = inst_24320);

(statearr_24387[(9)] = inst_24322);

(statearr_24387[(10)] = inst_24321);

(statearr_24387[(11)] = inst_24323);

return statearr_24387;
})();
var statearr_24388_24421 = state_24368__$1;
(statearr_24388_24421[(2)] = null);

(statearr_24388_24421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (3))){
var inst_24366 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24368__$1,inst_24366);
} else {
if((state_val_24369 === (12))){
var inst_24354 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24389_24422 = state_24368__$1;
(statearr_24389_24422[(2)] = inst_24354);

(statearr_24389_24422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (2))){
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24368__$1,(4),in$);
} else {
if((state_val_24369 === (23))){
var inst_24362 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24390_24423 = state_24368__$1;
(statearr_24390_24423[(2)] = inst_24362);

(statearr_24390_24423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (19))){
var inst_24349 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24391_24424 = state_24368__$1;
(statearr_24391_24424[(2)] = inst_24349);

(statearr_24391_24424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (11))){
var inst_24320 = (state_24368[(8)]);
var inst_24334 = (state_24368[(7)]);
var inst_24334__$1 = cljs.core.seq.call(null,inst_24320);
var state_24368__$1 = (function (){var statearr_24392 = state_24368;
(statearr_24392[(7)] = inst_24334__$1);

return statearr_24392;
})();
if(inst_24334__$1){
var statearr_24393_24425 = state_24368__$1;
(statearr_24393_24425[(1)] = (14));

} else {
var statearr_24394_24426 = state_24368__$1;
(statearr_24394_24426[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (9))){
var inst_24356 = (state_24368[(2)]);
var inst_24357 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24368__$1 = (function (){var statearr_24395 = state_24368;
(statearr_24395[(15)] = inst_24356);

return statearr_24395;
})();
if(cljs.core.truth_(inst_24357)){
var statearr_24396_24427 = state_24368__$1;
(statearr_24396_24427[(1)] = (21));

} else {
var statearr_24397_24428 = state_24368__$1;
(statearr_24397_24428[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (5))){
var inst_24312 = cljs.core.async.close_BANG_.call(null,out);
var state_24368__$1 = state_24368;
var statearr_24398_24429 = state_24368__$1;
(statearr_24398_24429[(2)] = inst_24312);

(statearr_24398_24429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (14))){
var inst_24334 = (state_24368[(7)]);
var inst_24336 = cljs.core.chunked_seq_QMARK_.call(null,inst_24334);
var state_24368__$1 = state_24368;
if(inst_24336){
var statearr_24399_24430 = state_24368__$1;
(statearr_24399_24430[(1)] = (17));

} else {
var statearr_24400_24431 = state_24368__$1;
(statearr_24400_24431[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (16))){
var inst_24352 = (state_24368[(2)]);
var state_24368__$1 = state_24368;
var statearr_24401_24432 = state_24368__$1;
(statearr_24401_24432[(2)] = inst_24352);

(statearr_24401_24432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24369 === (10))){
var inst_24321 = (state_24368[(10)]);
var inst_24323 = (state_24368[(11)]);
var inst_24328 = cljs.core._nth.call(null,inst_24321,inst_24323);
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24368__$1,(13),out,inst_24328);
} else {
if((state_val_24369 === (18))){
var inst_24334 = (state_24368[(7)]);
var inst_24343 = cljs.core.first.call(null,inst_24334);
var state_24368__$1 = state_24368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24368__$1,(20),out,inst_24343);
} else {
if((state_val_24369 === (8))){
var inst_24322 = (state_24368[(9)]);
var inst_24323 = (state_24368[(11)]);
var inst_24325 = (inst_24323 < inst_24322);
var inst_24326 = inst_24325;
var state_24368__$1 = state_24368;
if(cljs.core.truth_(inst_24326)){
var statearr_24402_24433 = state_24368__$1;
(statearr_24402_24433[(1)] = (10));

} else {
var statearr_24403_24434 = state_24368__$1;
(statearr_24403_24434[(1)] = (11));

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
}
}
}
}
}
}
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21796__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21796__auto____0 = (function (){
var statearr_24407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24407[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21796__auto__);

(statearr_24407[(1)] = (1));

return statearr_24407;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21796__auto____1 = (function (state_24368){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24408){if((e24408 instanceof Object)){
var ex__21799__auto__ = e24408;
var statearr_24409_24435 = state_24368;
(statearr_24409_24435[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24436 = state_24368;
state_24368 = G__24436;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21796__auto__ = function(state_24368){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21796__auto____1.call(this,state_24368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21796__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21796__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_24410 = f__21908__auto__.call(null);
(statearr_24410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_24410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24437 = [];
var len__20551__auto___24440 = arguments.length;
var i__20552__auto___24441 = (0);
while(true){
if((i__20552__auto___24441 < len__20551__auto___24440)){
args24437.push((arguments[i__20552__auto___24441]));

var G__24442 = (i__20552__auto___24441 + (1));
i__20552__auto___24441 = G__24442;
continue;
} else {
}
break;
}

var G__24439 = args24437.length;
switch (G__24439) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24437.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24444 = [];
var len__20551__auto___24447 = arguments.length;
var i__20552__auto___24448 = (0);
while(true){
if((i__20552__auto___24448 < len__20551__auto___24447)){
args24444.push((arguments[i__20552__auto___24448]));

var G__24449 = (i__20552__auto___24448 + (1));
i__20552__auto___24448 = G__24449;
continue;
} else {
}
break;
}

var G__24446 = args24444.length;
switch (G__24446) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24444.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24451 = [];
var len__20551__auto___24502 = arguments.length;
var i__20552__auto___24503 = (0);
while(true){
if((i__20552__auto___24503 < len__20551__auto___24502)){
args24451.push((arguments[i__20552__auto___24503]));

var G__24504 = (i__20552__auto___24503 + (1));
i__20552__auto___24503 = G__24504;
continue;
} else {
}
break;
}

var G__24453 = args24451.length;
switch (G__24453) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24451.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21907__auto___24506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___24506,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___24506,out){
return (function (state_24477){
var state_val_24478 = (state_24477[(1)]);
if((state_val_24478 === (7))){
var inst_24472 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24479_24507 = state_24477__$1;
(statearr_24479_24507[(2)] = inst_24472);

(statearr_24479_24507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (1))){
var inst_24454 = null;
var state_24477__$1 = (function (){var statearr_24480 = state_24477;
(statearr_24480[(7)] = inst_24454);

return statearr_24480;
})();
var statearr_24481_24508 = state_24477__$1;
(statearr_24481_24508[(2)] = null);

(statearr_24481_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (4))){
var inst_24457 = (state_24477[(8)]);
var inst_24457__$1 = (state_24477[(2)]);
var inst_24458 = (inst_24457__$1 == null);
var inst_24459 = cljs.core.not.call(null,inst_24458);
var state_24477__$1 = (function (){var statearr_24482 = state_24477;
(statearr_24482[(8)] = inst_24457__$1);

return statearr_24482;
})();
if(inst_24459){
var statearr_24483_24509 = state_24477__$1;
(statearr_24483_24509[(1)] = (5));

} else {
var statearr_24484_24510 = state_24477__$1;
(statearr_24484_24510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (6))){
var state_24477__$1 = state_24477;
var statearr_24485_24511 = state_24477__$1;
(statearr_24485_24511[(2)] = null);

(statearr_24485_24511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (3))){
var inst_24474 = (state_24477[(2)]);
var inst_24475 = cljs.core.async.close_BANG_.call(null,out);
var state_24477__$1 = (function (){var statearr_24486 = state_24477;
(statearr_24486[(9)] = inst_24474);

return statearr_24486;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24477__$1,inst_24475);
} else {
if((state_val_24478 === (2))){
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24477__$1,(4),ch);
} else {
if((state_val_24478 === (11))){
var inst_24457 = (state_24477[(8)]);
var inst_24466 = (state_24477[(2)]);
var inst_24454 = inst_24457;
var state_24477__$1 = (function (){var statearr_24487 = state_24477;
(statearr_24487[(7)] = inst_24454);

(statearr_24487[(10)] = inst_24466);

return statearr_24487;
})();
var statearr_24488_24512 = state_24477__$1;
(statearr_24488_24512[(2)] = null);

(statearr_24488_24512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (9))){
var inst_24457 = (state_24477[(8)]);
var state_24477__$1 = state_24477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24477__$1,(11),out,inst_24457);
} else {
if((state_val_24478 === (5))){
var inst_24457 = (state_24477[(8)]);
var inst_24454 = (state_24477[(7)]);
var inst_24461 = cljs.core._EQ_.call(null,inst_24457,inst_24454);
var state_24477__$1 = state_24477;
if(inst_24461){
var statearr_24490_24513 = state_24477__$1;
(statearr_24490_24513[(1)] = (8));

} else {
var statearr_24491_24514 = state_24477__$1;
(statearr_24491_24514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (10))){
var inst_24469 = (state_24477[(2)]);
var state_24477__$1 = state_24477;
var statearr_24492_24515 = state_24477__$1;
(statearr_24492_24515[(2)] = inst_24469);

(statearr_24492_24515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24478 === (8))){
var inst_24454 = (state_24477[(7)]);
var tmp24489 = inst_24454;
var inst_24454__$1 = tmp24489;
var state_24477__$1 = (function (){var statearr_24493 = state_24477;
(statearr_24493[(7)] = inst_24454__$1);

return statearr_24493;
})();
var statearr_24494_24516 = state_24477__$1;
(statearr_24494_24516[(2)] = null);

(statearr_24494_24516[(1)] = (2));


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
});})(c__21907__auto___24506,out))
;
return ((function (switch__21795__auto__,c__21907__auto___24506,out){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_24498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24498[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_24498[(1)] = (1));

return statearr_24498;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_24477){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24499){if((e24499 instanceof Object)){
var ex__21799__auto__ = e24499;
var statearr_24500_24517 = state_24477;
(statearr_24500_24517[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24518 = state_24477;
state_24477 = G__24518;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_24477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_24477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___24506,out))
})();
var state__21909__auto__ = (function (){var statearr_24501 = f__21908__auto__.call(null);
(statearr_24501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___24506);

return statearr_24501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___24506,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24519 = [];
var len__20551__auto___24589 = arguments.length;
var i__20552__auto___24590 = (0);
while(true){
if((i__20552__auto___24590 < len__20551__auto___24589)){
args24519.push((arguments[i__20552__auto___24590]));

var G__24591 = (i__20552__auto___24590 + (1));
i__20552__auto___24590 = G__24591;
continue;
} else {
}
break;
}

var G__24521 = args24519.length;
switch (G__24521) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24519.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21907__auto___24593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___24593,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___24593,out){
return (function (state_24559){
var state_val_24560 = (state_24559[(1)]);
if((state_val_24560 === (7))){
var inst_24555 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24561_24594 = state_24559__$1;
(statearr_24561_24594[(2)] = inst_24555);

(statearr_24561_24594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (1))){
var inst_24522 = (new Array(n));
var inst_24523 = inst_24522;
var inst_24524 = (0);
var state_24559__$1 = (function (){var statearr_24562 = state_24559;
(statearr_24562[(7)] = inst_24523);

(statearr_24562[(8)] = inst_24524);

return statearr_24562;
})();
var statearr_24563_24595 = state_24559__$1;
(statearr_24563_24595[(2)] = null);

(statearr_24563_24595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (4))){
var inst_24527 = (state_24559[(9)]);
var inst_24527__$1 = (state_24559[(2)]);
var inst_24528 = (inst_24527__$1 == null);
var inst_24529 = cljs.core.not.call(null,inst_24528);
var state_24559__$1 = (function (){var statearr_24564 = state_24559;
(statearr_24564[(9)] = inst_24527__$1);

return statearr_24564;
})();
if(inst_24529){
var statearr_24565_24596 = state_24559__$1;
(statearr_24565_24596[(1)] = (5));

} else {
var statearr_24566_24597 = state_24559__$1;
(statearr_24566_24597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (15))){
var inst_24549 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24567_24598 = state_24559__$1;
(statearr_24567_24598[(2)] = inst_24549);

(statearr_24567_24598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (13))){
var state_24559__$1 = state_24559;
var statearr_24568_24599 = state_24559__$1;
(statearr_24568_24599[(2)] = null);

(statearr_24568_24599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (6))){
var inst_24524 = (state_24559[(8)]);
var inst_24545 = (inst_24524 > (0));
var state_24559__$1 = state_24559;
if(cljs.core.truth_(inst_24545)){
var statearr_24569_24600 = state_24559__$1;
(statearr_24569_24600[(1)] = (12));

} else {
var statearr_24570_24601 = state_24559__$1;
(statearr_24570_24601[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (3))){
var inst_24557 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24559__$1,inst_24557);
} else {
if((state_val_24560 === (12))){
var inst_24523 = (state_24559[(7)]);
var inst_24547 = cljs.core.vec.call(null,inst_24523);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24559__$1,(15),out,inst_24547);
} else {
if((state_val_24560 === (2))){
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24559__$1,(4),ch);
} else {
if((state_val_24560 === (11))){
var inst_24539 = (state_24559[(2)]);
var inst_24540 = (new Array(n));
var inst_24523 = inst_24540;
var inst_24524 = (0);
var state_24559__$1 = (function (){var statearr_24571 = state_24559;
(statearr_24571[(7)] = inst_24523);

(statearr_24571[(8)] = inst_24524);

(statearr_24571[(10)] = inst_24539);

return statearr_24571;
})();
var statearr_24572_24602 = state_24559__$1;
(statearr_24572_24602[(2)] = null);

(statearr_24572_24602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (9))){
var inst_24523 = (state_24559[(7)]);
var inst_24537 = cljs.core.vec.call(null,inst_24523);
var state_24559__$1 = state_24559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24559__$1,(11),out,inst_24537);
} else {
if((state_val_24560 === (5))){
var inst_24527 = (state_24559[(9)]);
var inst_24523 = (state_24559[(7)]);
var inst_24524 = (state_24559[(8)]);
var inst_24532 = (state_24559[(11)]);
var inst_24531 = (inst_24523[inst_24524] = inst_24527);
var inst_24532__$1 = (inst_24524 + (1));
var inst_24533 = (inst_24532__$1 < n);
var state_24559__$1 = (function (){var statearr_24573 = state_24559;
(statearr_24573[(12)] = inst_24531);

(statearr_24573[(11)] = inst_24532__$1);

return statearr_24573;
})();
if(cljs.core.truth_(inst_24533)){
var statearr_24574_24603 = state_24559__$1;
(statearr_24574_24603[(1)] = (8));

} else {
var statearr_24575_24604 = state_24559__$1;
(statearr_24575_24604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (14))){
var inst_24552 = (state_24559[(2)]);
var inst_24553 = cljs.core.async.close_BANG_.call(null,out);
var state_24559__$1 = (function (){var statearr_24577 = state_24559;
(statearr_24577[(13)] = inst_24552);

return statearr_24577;
})();
var statearr_24578_24605 = state_24559__$1;
(statearr_24578_24605[(2)] = inst_24553);

(statearr_24578_24605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (10))){
var inst_24543 = (state_24559[(2)]);
var state_24559__$1 = state_24559;
var statearr_24579_24606 = state_24559__$1;
(statearr_24579_24606[(2)] = inst_24543);

(statearr_24579_24606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24560 === (8))){
var inst_24523 = (state_24559[(7)]);
var inst_24532 = (state_24559[(11)]);
var tmp24576 = inst_24523;
var inst_24523__$1 = tmp24576;
var inst_24524 = inst_24532;
var state_24559__$1 = (function (){var statearr_24580 = state_24559;
(statearr_24580[(7)] = inst_24523__$1);

(statearr_24580[(8)] = inst_24524);

return statearr_24580;
})();
var statearr_24581_24607 = state_24559__$1;
(statearr_24581_24607[(2)] = null);

(statearr_24581_24607[(1)] = (2));


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
});})(c__21907__auto___24593,out))
;
return ((function (switch__21795__auto__,c__21907__auto___24593,out){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_24585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24585[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_24585[(1)] = (1));

return statearr_24585;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_24559){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24586){if((e24586 instanceof Object)){
var ex__21799__auto__ = e24586;
var statearr_24587_24608 = state_24559;
(statearr_24587_24608[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24609 = state_24559;
state_24559 = G__24609;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_24559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_24559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___24593,out))
})();
var state__21909__auto__ = (function (){var statearr_24588 = f__21908__auto__.call(null);
(statearr_24588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___24593);

return statearr_24588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___24593,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24610 = [];
var len__20551__auto___24684 = arguments.length;
var i__20552__auto___24685 = (0);
while(true){
if((i__20552__auto___24685 < len__20551__auto___24684)){
args24610.push((arguments[i__20552__auto___24685]));

var G__24686 = (i__20552__auto___24685 + (1));
i__20552__auto___24685 = G__24686;
continue;
} else {
}
break;
}

var G__24612 = args24610.length;
switch (G__24612) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24610.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21907__auto___24688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___24688,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___24688,out){
return (function (state_24654){
var state_val_24655 = (state_24654[(1)]);
if((state_val_24655 === (7))){
var inst_24650 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24656_24689 = state_24654__$1;
(statearr_24656_24689[(2)] = inst_24650);

(statearr_24656_24689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (1))){
var inst_24613 = [];
var inst_24614 = inst_24613;
var inst_24615 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24654__$1 = (function (){var statearr_24657 = state_24654;
(statearr_24657[(7)] = inst_24615);

(statearr_24657[(8)] = inst_24614);

return statearr_24657;
})();
var statearr_24658_24690 = state_24654__$1;
(statearr_24658_24690[(2)] = null);

(statearr_24658_24690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (4))){
var inst_24618 = (state_24654[(9)]);
var inst_24618__$1 = (state_24654[(2)]);
var inst_24619 = (inst_24618__$1 == null);
var inst_24620 = cljs.core.not.call(null,inst_24619);
var state_24654__$1 = (function (){var statearr_24659 = state_24654;
(statearr_24659[(9)] = inst_24618__$1);

return statearr_24659;
})();
if(inst_24620){
var statearr_24660_24691 = state_24654__$1;
(statearr_24660_24691[(1)] = (5));

} else {
var statearr_24661_24692 = state_24654__$1;
(statearr_24661_24692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (15))){
var inst_24644 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24662_24693 = state_24654__$1;
(statearr_24662_24693[(2)] = inst_24644);

(statearr_24662_24693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (13))){
var state_24654__$1 = state_24654;
var statearr_24663_24694 = state_24654__$1;
(statearr_24663_24694[(2)] = null);

(statearr_24663_24694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (6))){
var inst_24614 = (state_24654[(8)]);
var inst_24639 = inst_24614.length;
var inst_24640 = (inst_24639 > (0));
var state_24654__$1 = state_24654;
if(cljs.core.truth_(inst_24640)){
var statearr_24664_24695 = state_24654__$1;
(statearr_24664_24695[(1)] = (12));

} else {
var statearr_24665_24696 = state_24654__$1;
(statearr_24665_24696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (3))){
var inst_24652 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24654__$1,inst_24652);
} else {
if((state_val_24655 === (12))){
var inst_24614 = (state_24654[(8)]);
var inst_24642 = cljs.core.vec.call(null,inst_24614);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24654__$1,(15),out,inst_24642);
} else {
if((state_val_24655 === (2))){
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24654__$1,(4),ch);
} else {
if((state_val_24655 === (11))){
var inst_24618 = (state_24654[(9)]);
var inst_24622 = (state_24654[(10)]);
var inst_24632 = (state_24654[(2)]);
var inst_24633 = [];
var inst_24634 = inst_24633.push(inst_24618);
var inst_24614 = inst_24633;
var inst_24615 = inst_24622;
var state_24654__$1 = (function (){var statearr_24666 = state_24654;
(statearr_24666[(7)] = inst_24615);

(statearr_24666[(8)] = inst_24614);

(statearr_24666[(11)] = inst_24632);

(statearr_24666[(12)] = inst_24634);

return statearr_24666;
})();
var statearr_24667_24697 = state_24654__$1;
(statearr_24667_24697[(2)] = null);

(statearr_24667_24697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (9))){
var inst_24614 = (state_24654[(8)]);
var inst_24630 = cljs.core.vec.call(null,inst_24614);
var state_24654__$1 = state_24654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24654__$1,(11),out,inst_24630);
} else {
if((state_val_24655 === (5))){
var inst_24615 = (state_24654[(7)]);
var inst_24618 = (state_24654[(9)]);
var inst_24622 = (state_24654[(10)]);
var inst_24622__$1 = f.call(null,inst_24618);
var inst_24623 = cljs.core._EQ_.call(null,inst_24622__$1,inst_24615);
var inst_24624 = cljs.core.keyword_identical_QMARK_.call(null,inst_24615,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24625 = (inst_24623) || (inst_24624);
var state_24654__$1 = (function (){var statearr_24668 = state_24654;
(statearr_24668[(10)] = inst_24622__$1);

return statearr_24668;
})();
if(cljs.core.truth_(inst_24625)){
var statearr_24669_24698 = state_24654__$1;
(statearr_24669_24698[(1)] = (8));

} else {
var statearr_24670_24699 = state_24654__$1;
(statearr_24670_24699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (14))){
var inst_24647 = (state_24654[(2)]);
var inst_24648 = cljs.core.async.close_BANG_.call(null,out);
var state_24654__$1 = (function (){var statearr_24672 = state_24654;
(statearr_24672[(13)] = inst_24647);

return statearr_24672;
})();
var statearr_24673_24700 = state_24654__$1;
(statearr_24673_24700[(2)] = inst_24648);

(statearr_24673_24700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (10))){
var inst_24637 = (state_24654[(2)]);
var state_24654__$1 = state_24654;
var statearr_24674_24701 = state_24654__$1;
(statearr_24674_24701[(2)] = inst_24637);

(statearr_24674_24701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24655 === (8))){
var inst_24618 = (state_24654[(9)]);
var inst_24614 = (state_24654[(8)]);
var inst_24622 = (state_24654[(10)]);
var inst_24627 = inst_24614.push(inst_24618);
var tmp24671 = inst_24614;
var inst_24614__$1 = tmp24671;
var inst_24615 = inst_24622;
var state_24654__$1 = (function (){var statearr_24675 = state_24654;
(statearr_24675[(7)] = inst_24615);

(statearr_24675[(14)] = inst_24627);

(statearr_24675[(8)] = inst_24614__$1);

return statearr_24675;
})();
var statearr_24676_24702 = state_24654__$1;
(statearr_24676_24702[(2)] = null);

(statearr_24676_24702[(1)] = (2));


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
});})(c__21907__auto___24688,out))
;
return ((function (switch__21795__auto__,c__21907__auto___24688,out){
return (function() {
var cljs$core$async$state_machine__21796__auto__ = null;
var cljs$core$async$state_machine__21796__auto____0 = (function (){
var statearr_24680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24680[(0)] = cljs$core$async$state_machine__21796__auto__);

(statearr_24680[(1)] = (1));

return statearr_24680;
});
var cljs$core$async$state_machine__21796__auto____1 = (function (state_24654){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_24654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e24681){if((e24681 instanceof Object)){
var ex__21799__auto__ = e24681;
var statearr_24682_24703 = state_24654;
(statearr_24682_24703[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24704 = state_24654;
state_24654 = G__24704;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
cljs$core$async$state_machine__21796__auto__ = function(state_24654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21796__auto____1.call(this,state_24654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21796__auto____0;
cljs$core$async$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21796__auto____1;
return cljs$core$async$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___24688,out))
})();
var state__21909__auto__ = (function (){var statearr_24683 = f__21908__auto__.call(null);
(statearr_24683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___24688);

return statearr_24683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___24688,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1488147687832