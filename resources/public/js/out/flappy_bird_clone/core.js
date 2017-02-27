// Compiled by ClojureScript 1.9.293 {}
goog.provide('flappy_bird_clone.core');
goog.require('cljs.core');
goog.require('play_cljs.core');
goog.require('goog.events');
if(typeof flappy_bird_clone.core.game !== 'undefined'){
} else {
flappy_bird_clone.core.game = play_cljs.core.create_game.call(null,(500),(500));
}
if(typeof flappy_bird_clone.core.state !== 'undefined'){
} else {
flappy_bird_clone.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"timeoutid","timeoutid",1946178583),(0),new cljs.core.Keyword(null,"bird-p","bird-p",-2122649266),(100),new cljs.core.Keyword(null,"bird-v","bird-v",-1656573579),(0),new cljs.core.Keyword(null,"bird-a","bird-a",-1236320895),(1),new cljs.core.Keyword(null,"pipes","pipes",-2098535323),cljs.core.PersistentVector.EMPTY], null));
}
var G__23992_23993 = flappy_bird_clone.core.game;
play_cljs.core.load_image.call(null,G__23992_23993,"splash.png");

play_cljs.core.load_image.call(null,G__23992_23993,"sky.png");

play_cljs.core.load_image.call(null,G__23992_23993,"land.png");

play_cljs.core.load_image.call(null,G__23992_23993,"Flappy_Bird.png");

play_cljs.core.load_image.call(null,G__23992_23993,"pipe.png");

play_cljs.core.load_image.call(null,G__23992_23993,"pipedwn.png");

flappy_bird_clone.core.calc_p = (function flappy_bird_clone$core$calc_p(p,v,a){
var t = 0.25;
return (((((0.5 * t) * t) * a) + (t * v)) + p);
});
flappy_bird_clone.core.calc_v = (function flappy_bird_clone$core$calc_v(v,a){
var t = 0.25;
return ((t * a) + v);
});
flappy_bird_clone.core.move_bird = (function flappy_bird_clone$core$move_bird(p__23994){
var map__23997 = p__23994;
var map__23997__$1 = ((((!((map__23997 == null)))?((((map__23997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23997):map__23997);
var state = map__23997__$1;
var bird_p = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"bird-p","bird-p",-2122649266));
var bird_v = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"bird-v","bird-v",-1656573579));
var bird_a = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"bird-a","bird-a",-1236320895));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bird-p","bird-p",-2122649266),flappy_bird_clone.core.calc_p.call(null,bird_p,bird_v,bird_a),new cljs.core.Keyword(null,"bird-v","bird-v",-1656573579),flappy_bird_clone.core.calc_v.call(null,bird_v,bird_a));
});
goog.events.listen(window,"mousedown",(function (_){
var gme = play_cljs.core.get_screen.call(null,flappy_bird_clone.core.game);
if(cljs.core._EQ_.call(null,gme,flappy_bird_clone.core.title_screen)){
return play_cljs.core.set_screen.call(null,flappy_bird_clone.core.game,flappy_bird_clone.core.main_screen);
} else {
if(cljs.core._EQ_.call(null,gme,flappy_bird_clone.core.main_screen)){
return cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bird-v","bird-v",-1656573579)], null),((function (gme){
return (function (){
return (- (12));
});})(gme))
);
} else {
return null;
}
}
}));
flappy_bird_clone.core.pipe_gen = (function flappy_bird_clone$core$pipe_gen(){
var rnd = cljs.core.rand.call(null,(350));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"pipedwn.png",new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"x","x",2099068185),(550),new cljs.core.Keyword(null,"y","y",-1757859776),((-400) + rnd)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"pipe.png",new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"x","x",2099068185),(550),new cljs.core.Keyword(null,"y","y",-1757859776),((200) + rnd)], null)], null)], null);
});
flappy_bird_clone.core.collision_detection = (function flappy_bird_clone$core$collision_detection(images,p__24000){
var vec__24015 = p__24000;
var _ = cljs.core.nth.call(null,vec__24015,(0),null);
var map__24018 = cljs.core.nth.call(null,vec__24015,(1),null);
var map__24018__$1 = ((((!((map__24018 == null)))?((((map__24018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24018):map__24018);
var bird = map__24018__$1;
var x = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__24018__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var diags = cljs.core.map.call(null,((function (vec__24015,_,map__24018,map__24018__$1,bird,x,y,width,height){
return (function (p__24020){
var vec__24021 = p__24020;
var ___$1 = cljs.core.nth.call(null,vec__24021,(0),null);
var map__24024 = cljs.core.nth.call(null,vec__24021,(1),null);
var map__24024__$1 = ((((!((map__24024 == null)))?((((map__24024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24024):map__24024);
var image = map__24024__$1;
var x__$1 = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y__$1 = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width__$1 = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height__$1 = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),x__$1,new cljs.core.Keyword(null,"y1","y1",589123466),y__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x__$1 + width__$1),new cljs.core.Keyword(null,"y2","y2",-718691301),(y__$1 + height__$1)], null);
});})(vec__24015,_,map__24018,map__24018__$1,bird,x,y,width,height))
,images);
var overlap_check = ((function (diags,vec__24015,_,map__24018,map__24018__$1,bird,x,y,width,height){
return (function (p__24026){
var map__24027 = p__24026;
var map__24027__$1 = ((((!((map__24027 == null)))?((((map__24027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);
var x1 = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var birdx1 = x;
var birdy1 = y;
var birdx2 = (x + (60));
var birdy2 = (y + (60));
if((birdx2 < x1)){
return false;
} else {
if((birdx1 > x2)){
return false;
} else {
if((birdy1 > y2)){
return false;
} else {
if((y1 > birdy2)){
return false;
} else {
return true;

}
}
}
}
});})(diags,vec__24015,_,map__24018,map__24018__$1,bird,x,y,width,height))
;
var overlaps = cljs.core.map.call(null,overlap_check,diags);
return cljs.core.some.call(null,((function (diags,overlap_check,overlaps,vec__24015,_,map__24018,map__24018__$1,bird,x,y,width,height){
return (function (p1__23999_SHARP_){
return cljs.core._EQ_.call(null,true,p1__23999_SHARP_);
});})(diags,overlap_check,overlaps,vec__24015,_,map__24018,map__24018__$1,bird,x,y,width,height))
,overlaps);
});
flappy_bird_clone.core.main_screen = (function (){
if(typeof flappy_bird_clone.core.t_flappy_bird_clone$core24029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
flappy_bird_clone.core.t_flappy_bird_clone$core24029 = (function (meta24030){
this.meta24030 = meta24030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
flappy_bird_clone.core.t_flappy_bird_clone$core24029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24031,meta24030__$1){
var self__ = this;
var _24031__$1 = this;
return (new flappy_bird_clone.core.t_flappy_bird_clone$core24029(meta24030__$1));
});

flappy_bird_clone.core.t_flappy_bird_clone$core24029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24031){
var self__ = this;
var _24031__$1 = this;
return self__.meta24030;
});

flappy_bird_clone.core.t_flappy_bird_clone$core24029.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

flappy_bird_clone.core.t_flappy_bird_clone$core24029.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeoutid","timeoutid",1946178583)], null),((function (this$__$1){
return (function (_){
return setInterval(((function (this$__$1){
return (function (){
return cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipes","pipes",-2098535323)], null),((function (this$__$1){
return (function (pipes){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.filter.call(null,((function (this$__$1){
return (function (pipe){
return ((0) < cljs.core.get_in.call(null,pipe,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185)], null)));
});})(this$__$1))
,pipes),flappy_bird_clone.core.pipe_gen.call(null));
});})(this$__$1))
);
});})(this$__$1))
,(4000));
});})(this$__$1))
);
});

flappy_bird_clone.core.t_flappy_bird_clone$core24029.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clearInterval(new cljs.core.Keyword(null,"timeoutid","timeoutid",1946178583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,flappy_bird_clone.core.state)));
});

flappy_bird_clone.core.t_flappy_bird_clone$core24029.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var map__24032 = cljs.core.deref.call(null,flappy_bird_clone.core.state);
var map__24032__$1 = ((((!((map__24032 == null)))?((((map__24032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24032):map__24032);
var bird_p = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"bird-p","bird-p",-2122649266));
var pipe = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"pipe","pipe",336575849));
var pipes = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"pipes","pipes",-2098535323));
var bird_img = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Flappy_Bird.png",new cljs.core.Keyword(null,"width","width",-384071477),(60),new cljs.core.Keyword(null,"height","height",1025178622),(60),new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),bird_p], null)], null);
if(cljs.core.truth_((function (){var or__19156__auto__ = ((400) < bird_p);
if(or__19156__auto__){
return or__19156__auto__;
} else {
return flappy_bird_clone.core.collision_detection.call(null,pipes,bird_img);
}
})())){
cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipes","pipes",-2098535323)], null),((function (map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1){
return (function (_){
return cljs.core.PersistentVector.EMPTY;
});})(map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1))
);

cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bird-p","bird-p",-2122649266)], null),((function (map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1){
return (function (_){
return (0);
});})(map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1))
);

play_cljs.core.set_screen.call(null,flappy_bird_clone.core.game,flappy_bird_clone.core.title_screen);
} else {
}

cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,flappy_bird_clone.core.move_bird);

cljs.core.swap_BANG_.call(null,flappy_bird_clone.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipes","pipes",-2098535323)], null),((function (map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1){
return (function (pipes__$1){
return cljs.core.map.call(null,((function (map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1){
return (function (pipe__$1){
return cljs.core.update_in.call(null,pipe__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.dec);
});})(map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1))
,pipes__$1);
});})(map__24032,map__24032__$1,bird_p,pipe,pipes,bird_img,this$__$1))
);

play_cljs.core.render.call(null,flappy_bird_clone.core.game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sky.png",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"land.png",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(450)], null)], null),bird_img], null));

return play_cljs.core.render.call(null,flappy_bird_clone.core.game,pipes);
});

flappy_bird_clone.core.t_flappy_bird_clone$core24029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24030","meta24030",-1922250783,null)], null);
});

flappy_bird_clone.core.t_flappy_bird_clone$core24029.cljs$lang$type = true;

flappy_bird_clone.core.t_flappy_bird_clone$core24029.cljs$lang$ctorStr = "flappy-bird-clone.core/t_flappy_bird_clone$core24029";

flappy_bird_clone.core.t_flappy_bird_clone$core24029.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"flappy-bird-clone.core/t_flappy_bird_clone$core24029");
});

flappy_bird_clone.core.__GT_t_flappy_bird_clone$core24029 = (function flappy_bird_clone$core$__GT_t_flappy_bird_clone$core24029(meta24030){
return (new flappy_bird_clone.core.t_flappy_bird_clone$core24029(meta24030));
});

}

return (new flappy_bird_clone.core.t_flappy_bird_clone$core24029(cljs.core.PersistentArrayMap.EMPTY));
})()
;
flappy_bird_clone.core.title_screen = (function (){
if(typeof flappy_bird_clone.core.t_flappy_bird_clone$core24034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
flappy_bird_clone.core.t_flappy_bird_clone$core24034 = (function (meta24035){
this.meta24035 = meta24035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
flappy_bird_clone.core.t_flappy_bird_clone$core24034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24036,meta24035__$1){
var self__ = this;
var _24036__$1 = this;
return (new flappy_bird_clone.core.t_flappy_bird_clone$core24034(meta24035__$1));
});

flappy_bird_clone.core.t_flappy_bird_clone$core24034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24036){
var self__ = this;
var _24036__$1 = this;
return self__.meta24035;
});

flappy_bird_clone.core.t_flappy_bird_clone$core24034.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

flappy_bird_clone.core.t_flappy_bird_clone$core24034.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

flappy_bird_clone.core.t_flappy_bird_clone$core24034.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

flappy_bird_clone.core.t_flappy_bird_clone$core24034.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.render.call(null,flappy_bird_clone.core.game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sky.png",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"splash.png",new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"land.png",new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(450)], null)], null)], null));
});

flappy_bird_clone.core.t_flappy_bird_clone$core24034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24035","meta24035",1306540749,null)], null);
});

flappy_bird_clone.core.t_flappy_bird_clone$core24034.cljs$lang$type = true;

flappy_bird_clone.core.t_flappy_bird_clone$core24034.cljs$lang$ctorStr = "flappy-bird-clone.core/t_flappy_bird_clone$core24034";

flappy_bird_clone.core.t_flappy_bird_clone$core24034.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"flappy-bird-clone.core/t_flappy_bird_clone$core24034");
});

flappy_bird_clone.core.__GT_t_flappy_bird_clone$core24034 = (function flappy_bird_clone$core$__GT_t_flappy_bird_clone$core24034(meta24035){
return (new flappy_bird_clone.core.t_flappy_bird_clone$core24034(meta24035));
});

}

return (new flappy_bird_clone.core.t_flappy_bird_clone$core24034(cljs.core.PersistentArrayMap.EMPTY));
})()
;
var G__24037_24038 = flappy_bird_clone.core.game;
play_cljs.core.start.call(null,G__24037_24038);

play_cljs.core.set_screen.call(null,G__24037_24038,flappy_bird_clone.core.title_screen);


//# sourceMappingURL=core.js.map?rel=1488086894064