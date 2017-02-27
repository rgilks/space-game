// Compiled by ClojureScript 1.9.473 {}
goog.provide('space_game.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.pprint');
goog.require('quil.sketch');
cljs.core.enable_console_print_BANG_.call(null);
space_game.core.faster = (function space_game$core$faster(speed){
var x__19752__auto__ = 1.0;
var y__19753__auto__ = (speed + 0.25);
return ((x__19752__auto__ < y__19753__auto__) ? x__19752__auto__ : y__19753__auto__);
});
space_game.core.slower = (function space_game$core$slower(speed){
var x__19745__auto__ = 0.0;
var y__19746__auto__ = (speed - 0.25);
return ((x__19745__auto__ > y__19746__auto__) ? x__19745__auto__ : y__19746__auto__);
});
space_game.core.log = (function space_game$core$log(m){
return console.log(m);
});
space_game.core.toJSON = (function space_game$core$toJSON(o){
var o__$1 = ((cljs.core.map_QMARK_.call(null,o))?cljs.core.clj__GT_js.call(null,o):o);
return window.JSON.stringify(o__$1);
});
space_game.core.parseJSON = (function space_game$core$parseJSON(x){
return window.JSON.parse(x);
});
space_game.core.websocket_STAR_ = cljs.core.atom.call(null,null);
space_game.core.send_chat_msg = (function space_game$core$send_chat_msg(m){
return cljs.core.deref.call(null,space_game.core.websocket_STAR_).send(space_game.core.toJSON.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),m], null)));
});
space_game.core.receive_chat_msg = (function space_game$core$receive_chat_msg(m){
var id = (m[(0)]);
var cmd = cljs.core.keyword.call(null,(m[(1)]));
debugger;;

return space_game.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmd)].join(''));
});
space_game.core.pulse = (function space_game$core$pulse(low,high,rate){
var diff = (high - low);
var half = (diff / (2));
var mid = (low + half);
var s = (quil.core.millis.call(null) / 1000.0);
var x = quil.core.sin.call(null,(s * (1.0 / rate)));
return (mid + (x * half));
});
space_game.core.rand_between = (function space_game$core$rand_between(low,high){
var diff = (high - low);
return (low + cljs.core.rand.call(null,diff));
});
space_game.core.rand_coord = (function space_game$core$rand_coord(size){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_game.core.rand_between.call(null,(- size),size),space_game.core.rand_between.call(null,(- size),size)], null);
});
space_game.core.translate_v2 = (function space_game$core$translate_v2(p__21160,p__21161){
var vec__21168 = p__21160;
var x = cljs.core.nth.call(null,vec__21168,(0),null);
var y = cljs.core.nth.call(null,vec__21168,(1),null);
var vec__21171 = p__21161;
var dx = cljs.core.nth.call(null,vec__21171,(0),null);
var dy = cljs.core.nth.call(null,vec__21171,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
});
space_game.core.render_ship = (function space_game$core$render_ship(ship){
quil.core.fill.call(null,(50),(80),(50));

quil.core.rect.call(null,(-2),(0),(5),(14));

quil.core.fill.call(null,(150),(180),(150));

quil.core.triangle.call(null,(0),(-10),(25),(0),(0),(10));

quil.core.fill.call(null,(30),(100),(30));

return quil.core.ellipse.call(null,(8),(0),(8),(8));
});
space_game.core.get_key = (function space_game$core$get_key(key_length){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,key_length,cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_nth.call(null,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ");
}))));
});
space_game.core.create_ship = (function space_game$core$create_ship(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),space_game.core.get_key.call(null,(6)),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1000),(1000)], null),new cljs.core.Keyword(null,"dir","dir",1734754661),-0.4,new cljs.core.Keyword(null,"dir-change","dir-change",-1176146714),0.0,new cljs.core.Keyword(null,"speed","speed",1257663751),0.1,new cljs.core.Keyword(null,"z","z",-789527183),1.0,new cljs.core.Keyword(null,"render-fn","render-fn",398796518),space_game.core.render_ship], null);
});
space_game.core.render_star = (function space_game$core$render_star(star){
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(star);
quil.core.fill.call(null,(255));

return quil.core.rect.call(null,(0),(0),size,size);
});
space_game.core.create_star = (function space_game$core$create_star(pos){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"dir","dir",1734754661),cljs.core.rand.call(null,quil.core.TWO_PI),new cljs.core.Keyword(null,"size","size",1098693007),(1.0 + cljs.core.rand.call(null,3.0)),new cljs.core.Keyword(null,"z","z",-789527183),space_game.core.rand_between.call(null,0.2,0.7),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),space_game.core.render_star], null);
});
space_game.core.random_star = (function space_game$core$random_star(){
return space_game.core.create_star.call(null,space_game.core.rand_coord.call(null,(1000)));
});
space_game.core.render_smoke = (function space_game$core$render_smoke(smoke){
var age = new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(smoke);
var size = (function (){var x__19745__auto__ = 0.0;
var y__19746__auto__ = (10.0 - (5.0 * age));
return ((x__19745__auto__ > y__19746__auto__) ? x__19745__auto__ : y__19746__auto__);
})();
var vec__21177 = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(smoke);
var r = cljs.core.nth.call(null,vec__21177,(0),null);
var g = cljs.core.nth.call(null,vec__21177,(1),null);
var b = cljs.core.nth.call(null,vec__21177,(2),null);
quil.core.fill.call(null,r,g,b,(200));

return quil.core.ellipse.call(null,(0),(0),size,size);
});
space_game.core.create_smoke = (function space_game$core$create_smoke(p__21180){
var vec__21184 = p__21180;
var x = cljs.core.nth.call(null,vec__21184,(0),null);
var y = cljs.core.nth.call(null,vec__21184,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + space_game.core.rand_between.call(null,(-3),(3))),(y + space_game.core.rand_between.call(null,(-3),(3)))], null),new cljs.core.Keyword(null,"dir","dir",1734754661),0.0,new cljs.core.Keyword(null,"age","age",-604307804),0.0,new cljs.core.Keyword(null,"z","z",-789527183),1.0,new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_game.core.rand_between.call(null,(150),(255)),space_game.core.rand_between.call(null,(100),(200)),space_game.core.rand_between.call(null,(0),(100))], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),space_game.core.render_smoke], null);
});
space_game.core.render_planet = (function space_game$core$render_planet(planet){
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(planet);
var vec__21200 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(planet);
var r = cljs.core.nth.call(null,vec__21200,(0),null);
var g = cljs.core.nth.call(null,vec__21200,(1),null);
var b = cljs.core.nth.call(null,vec__21200,(2),null);
quil.core.fill.call(null,r,g,b);

var rs = new cljs.core.Keyword(null,"rs","rs",913581969).cljs$core$IFn$_invoke$arity$1(planet);
var step = (quil.core.TWO_PI / cljs.core.count.call(null,rs));
quil.core.begin_shape.call(null);

var seq__21203_21213 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(0),quil.core.TWO_PI,step),rs));
var chunk__21204_21214 = null;
var count__21205_21215 = (0);
var i__21206_21216 = (0);
while(true){
if((i__21206_21216 < count__21205_21215)){
var vec__21207_21217 = cljs.core._nth.call(null,chunk__21204_21214,i__21206_21216);
var angle_21218 = cljs.core.nth.call(null,vec__21207_21217,(0),null);
var radius_21219 = cljs.core.nth.call(null,vec__21207_21217,(1),null);
quil.core.vertex.call(null,((size * radius_21219) * quil.core.cos.call(null,angle_21218)),((size * radius_21219) * quil.core.sin.call(null,angle_21218)));

var G__21220 = seq__21203_21213;
var G__21221 = chunk__21204_21214;
var G__21222 = count__21205_21215;
var G__21223 = (i__21206_21216 + (1));
seq__21203_21213 = G__21220;
chunk__21204_21214 = G__21221;
count__21205_21215 = G__21222;
i__21206_21216 = G__21223;
continue;
} else {
var temp__4657__auto___21224 = cljs.core.seq.call(null,seq__21203_21213);
if(temp__4657__auto___21224){
var seq__21203_21225__$1 = temp__4657__auto___21224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21203_21225__$1)){
var c__20228__auto___21226 = cljs.core.chunk_first.call(null,seq__21203_21225__$1);
var G__21227 = cljs.core.chunk_rest.call(null,seq__21203_21225__$1);
var G__21228 = c__20228__auto___21226;
var G__21229 = cljs.core.count.call(null,c__20228__auto___21226);
var G__21230 = (0);
seq__21203_21213 = G__21227;
chunk__21204_21214 = G__21228;
count__21205_21215 = G__21229;
i__21206_21216 = G__21230;
continue;
} else {
var vec__21210_21231 = cljs.core.first.call(null,seq__21203_21225__$1);
var angle_21232 = cljs.core.nth.call(null,vec__21210_21231,(0),null);
var radius_21233 = cljs.core.nth.call(null,vec__21210_21231,(1),null);
quil.core.vertex.call(null,((size * radius_21233) * quil.core.cos.call(null,angle_21232)),((size * radius_21233) * quil.core.sin.call(null,angle_21232)));

var G__21234 = cljs.core.next.call(null,seq__21203_21225__$1);
var G__21235 = null;
var G__21236 = (0);
var G__21237 = (0);
seq__21203_21213 = G__21234;
chunk__21204_21214 = G__21235;
count__21205_21215 = G__21236;
i__21206_21216 = G__21237;
continue;
}
} else {
}
}
break;
}

return quil.core.end_shape.call(null);
});
space_game.core.generate_radiuses = (function space_game$core$generate_radiuses(){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,((5) + cljs.core.rand_int.call(null,(7))),cljs.core.repeatedly.call(null,(function (){
return space_game.core.rand_between.call(null,0.5,1.0);
}))));
});
space_game.core.create_planet = (function space_game$core$create_planet(pos,color){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"dir","dir",1734754661),new cljs.core.Keyword(null,"dir-change","dir-change",-1176146714),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"rs","rs",913581969),new cljs.core.Keyword(null,"drift","drift",-192419756)],[color,cljs.core.rand.call(null,quil.core.TWO_PI),space_game.core.rand_between.call(null,-0.01,0.01),space_game.core.render_planet,pos,(50.0 + cljs.core.rand.call(null,50.0)),1.0,space_game.core.generate_radiuses.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_game.core.rand_between.call(null,-0.3,0.3),space_game.core.rand_between.call(null,-0.3,0.3)], null)]);
});
space_game.core.random_planet = (function space_game$core$random_planet(){
return space_game.core.create_planet.call(null,space_game.core.rand_coord.call(null,(1000)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [space_game.core.rand_between.call(null,(0),(255)),space_game.core.rand_between.call(null,(50),(150)),space_game.core.rand_between.call(null,(50),(150))], null));
});
space_game.core.setup = (function space_game$core$setup(state){
quil.core.rect_mode.call(null,new cljs.core.Keyword(null,"center","center",-748944368));

quil.core.frame_rate.call(null,(30));

space_game.core.log.call(null,"establishing websocket...");

cljs.core.reset_BANG_.call(null,space_game.core.websocket_STAR_,(new WebSocket("ws://localhost:8081/websocket")));

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__21238_SHARP_){
return (cljs.core.deref.call(null,space_game.core.websocket_STAR_)[cljs.core.first.call(null,p1__21238_SHARP_)] = cljs.core.second.call(null,p1__21238_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["onopen",(function (){
return space_game.core.log.call(null,"OPEN");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["onclose",(function (){
return space_game.core.log.call(null,"CLOSE");
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["onerror",(function (e){
return space_game.core.log.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ERROR:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["onmessage",(function (m){
var data = m.data;
var d = space_game.core.parseJSON.call(null,data);
var m__$1 = d.m;
return space_game.core.receive_chat_msg.call(null,m__$1);
})], null)], null)));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ship","ship",197863473),space_game.core.create_ship.call(null),new cljs.core.Keyword(null,"smoke","smoke",1634119064),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"stars","stars",-556837771),cljs.core.take.call(null,(3000),cljs.core.repeatedly.call(null,space_game.core.random_star)),new cljs.core.Keyword(null,"planets","planets",1711765443),cljs.core.take.call(null,(50),cljs.core.repeatedly.call(null,space_game.core.random_planet))], null);
});
space_game.core.move_ship = (function space_game$core$move_ship(ship){
var speed = (1.0 + (7.0 * new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(ship)));
var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ship);
var dx = (speed * quil.core.cos.call(null,dir));
var dy = (speed * quil.core.sin.call(null,dir));
return cljs.core.update_in.call(null,ship,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),space_game.core.translate_v2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
});
space_game.core.auto_rotate = (function space_game$core$auto_rotate(entity){
var dir_change = new cljs.core.Keyword(null,"dir-change","dir-change",-1176146714).cljs$core$IFn$_invoke$arity$1(entity);
return cljs.core.update_in.call(null,entity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (dir_change){
return (function (p1__21239_SHARP_){
return (p1__21239_SHARP_ + dir_change);
});})(dir_change))
);
});
space_game.core.wiggle_ship = (function space_game$core$wiggle_ship(ship){
var speed = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(ship);
var a = (0.01 + (0.03 * speed));
return cljs.core.update_in.call(null,ship,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dir","dir",1734754661)], null),((function (speed,a){
return (function (p1__21240_SHARP_){
return (p1__21240_SHARP_ + space_game.core.pulse.call(null,(- a),a,0.1));
});})(speed,a))
);
});
space_game.core.drift_planet = (function space_game$core$drift_planet(planet){
var vec__21244 = new cljs.core.Keyword(null,"drift","drift",-192419756).cljs$core$IFn$_invoke$arity$1(planet);
var dx = cljs.core.nth.call(null,vec__21244,(0),null);
var dy = cljs.core.nth.call(null,vec__21244,(1),null);
return cljs.core.update_in.call(null,planet,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),space_game.core.translate_v2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
});
space_game.core.emit_smoke = (function space_game$core$emit_smoke(state){
var speed = new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
if((cljs.core.rand.call(null) < (0.2 + speed))){
var ship_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smoke","smoke",1634119064)], null),cljs.core.conj,space_game.core.create_smoke.call(null,ship_pos));
} else {
return state;
}
});
space_game.core.age_smoke = (function space_game$core$age_smoke(smoke){
return cljs.core.update_in.call(null,smoke,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"age","age",-604307804)], null),(function (p1__21247_SHARP_){
return (p1__21247_SHARP_ + 0.033);
}));
});
space_game.core.old_QMARK_ = (function space_game$core$old_QMARK_(smoke){
return (3.0 < new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(smoke));
});
space_game.core.remove_old_smokes = (function space_game$core$remove_old_smokes(smokes){
return cljs.core.remove.call(null,space_game.core.old_QMARK_,smokes);
});
space_game.core.update_state = (function space_game$core$update_state(state){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,space_game.core.emit_smoke.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),space_game.core.auto_rotate),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),space_game.core.wiggle_ship),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473)], null),space_game.core.move_ship)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smoke","smoke",1634119064)], null),(function (smokes){
return cljs.core.map.call(null,space_game.core.age_smoke,smokes);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"smoke","smoke",1634119064)], null),space_game.core.remove_old_smokes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),(function (p1__21248_SHARP_){
return cljs.core.map.call(null,space_game.core.auto_rotate,p1__21248_SHARP_);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planets","planets",1711765443)], null),(function (p1__21249_SHARP_){
return cljs.core.map.call(null,space_game.core.drift_planet,p1__21249_SHARP_);
}));
});
space_game.core.on_key_down = (function space_game$core$on_key_down(state,event){
space_game.core.send_chat_msg.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event)], null));

var G__21251 = (((new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event).fqn:null);
switch (G__21251) {
case "up":
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),space_game.core.faster);

break;
case "down":
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),space_game.core.slower);

break;
case "left":
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"dir-change","dir-change",-1176146714)], null),-0.15);

break;
case "right":
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"dir-change","dir-change",-1176146714)], null),0.15);

break;
default:
return state;

}
});
space_game.core.on_key_up = (function space_game$core$on_key_up(state){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"d","d",1972142424),null,new cljs.core.Keyword(null,"a","a",-2123407586),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),quil.core.key_as_keyword.call(null))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword(null,"dir-change","dir-change",-1176146714)], null),(0));
} else {
return state;
}
});
space_game.core.on_screen_QMARK_ = (function space_game$core$on_screen_QMARK_(x,y){
var margin = (100);
return ((((- margin) <= x)) && ((x <= (margin + quil.core.width.call(null))))) && ((((- margin) <= y)) && ((y <= (margin + quil.core.height.call(null)))));
});
space_game.core.draw_entity = (function space_game$core$draw_entity(entity,p__21253){
var vec__21260 = p__21253;
var cam_x = cljs.core.nth.call(null,vec__21260,(0),null);
var cam_y = cljs.core.nth.call(null,vec__21260,(1),null);
var vec__21263 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(entity);
var x = cljs.core.nth.call(null,vec__21263,(0),null);
var y = cljs.core.nth.call(null,vec__21263,(1),null);
var dir = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(entity);
var z = new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(entity);
var render_fn = new cljs.core.Keyword(null,"render-fn","render-fn",398796518).cljs$core$IFn$_invoke$arity$1(entity);
var screen_x = (x - (z * cam_x));
var screen_y = (y - (z * cam_y));
if(cljs.core.truth_(space_game.core.on_screen_QMARK_.call(null,screen_x,screen_y))){
quil.core.push_matrix.call(null);

quil.core.translate.call(null,screen_x,screen_y);

quil.core.rotate.call(null,dir);

render_fn.call(null,entity);

return quil.core.pop_matrix.call(null);
} else {
return null;
}
});
space_game.core.draw_state = (function space_game$core$draw_state(state){
quil.core.background.call(null,space_game.core.pulse.call(null,(60),(40),15.0),space_game.core.pulse.call(null,(40),(60),40.0),space_game.core.pulse.call(null,(50),(70),5.0));

quil.core.no_stroke.call(null);

var ship_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state));
var cam_pos = space_game.core.translate_v2.call(null,ship_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (quil.core.width.call(null) / (2))),(- (quil.core.height.call(null) / (2)))], null));
var seq__21278_21290 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"stars","stars",-556837771).cljs$core$IFn$_invoke$arity$1(state));
var chunk__21279_21291 = null;
var count__21280_21292 = (0);
var i__21281_21293 = (0);
while(true){
if((i__21281_21293 < count__21280_21292)){
var star_21294 = cljs.core._nth.call(null,chunk__21279_21291,i__21281_21293);
space_game.core.draw_entity.call(null,star_21294,cam_pos);

var G__21295 = seq__21278_21290;
var G__21296 = chunk__21279_21291;
var G__21297 = count__21280_21292;
var G__21298 = (i__21281_21293 + (1));
seq__21278_21290 = G__21295;
chunk__21279_21291 = G__21296;
count__21280_21292 = G__21297;
i__21281_21293 = G__21298;
continue;
} else {
var temp__4657__auto___21299 = cljs.core.seq.call(null,seq__21278_21290);
if(temp__4657__auto___21299){
var seq__21278_21300__$1 = temp__4657__auto___21299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21278_21300__$1)){
var c__20228__auto___21301 = cljs.core.chunk_first.call(null,seq__21278_21300__$1);
var G__21302 = cljs.core.chunk_rest.call(null,seq__21278_21300__$1);
var G__21303 = c__20228__auto___21301;
var G__21304 = cljs.core.count.call(null,c__20228__auto___21301);
var G__21305 = (0);
seq__21278_21290 = G__21302;
chunk__21279_21291 = G__21303;
count__21280_21292 = G__21304;
i__21281_21293 = G__21305;
continue;
} else {
var star_21306 = cljs.core.first.call(null,seq__21278_21300__$1);
space_game.core.draw_entity.call(null,star_21306,cam_pos);

var G__21307 = cljs.core.next.call(null,seq__21278_21300__$1);
var G__21308 = null;
var G__21309 = (0);
var G__21310 = (0);
seq__21278_21290 = G__21307;
chunk__21279_21291 = G__21308;
count__21280_21292 = G__21309;
i__21281_21293 = G__21310;
continue;
}
} else {
}
}
break;
}

var seq__21282_21311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(state));
var chunk__21283_21312 = null;
var count__21284_21313 = (0);
var i__21285_21314 = (0);
while(true){
if((i__21285_21314 < count__21284_21313)){
var planet_21315 = cljs.core._nth.call(null,chunk__21283_21312,i__21285_21314);
space_game.core.draw_entity.call(null,planet_21315,cam_pos);

var G__21316 = seq__21282_21311;
var G__21317 = chunk__21283_21312;
var G__21318 = count__21284_21313;
var G__21319 = (i__21285_21314 + (1));
seq__21282_21311 = G__21316;
chunk__21283_21312 = G__21317;
count__21284_21313 = G__21318;
i__21285_21314 = G__21319;
continue;
} else {
var temp__4657__auto___21320 = cljs.core.seq.call(null,seq__21282_21311);
if(temp__4657__auto___21320){
var seq__21282_21321__$1 = temp__4657__auto___21320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21282_21321__$1)){
var c__20228__auto___21322 = cljs.core.chunk_first.call(null,seq__21282_21321__$1);
var G__21323 = cljs.core.chunk_rest.call(null,seq__21282_21321__$1);
var G__21324 = c__20228__auto___21322;
var G__21325 = cljs.core.count.call(null,c__20228__auto___21322);
var G__21326 = (0);
seq__21282_21311 = G__21323;
chunk__21283_21312 = G__21324;
count__21284_21313 = G__21325;
i__21285_21314 = G__21326;
continue;
} else {
var planet_21327 = cljs.core.first.call(null,seq__21282_21321__$1);
space_game.core.draw_entity.call(null,planet_21327,cam_pos);

var G__21328 = cljs.core.next.call(null,seq__21282_21321__$1);
var G__21329 = null;
var G__21330 = (0);
var G__21331 = (0);
seq__21282_21311 = G__21328;
chunk__21283_21312 = G__21329;
count__21284_21313 = G__21330;
i__21285_21314 = G__21331;
continue;
}
} else {
}
}
break;
}

var seq__21286_21332 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"smoke","smoke",1634119064).cljs$core$IFn$_invoke$arity$1(state));
var chunk__21287_21333 = null;
var count__21288_21334 = (0);
var i__21289_21335 = (0);
while(true){
if((i__21289_21335 < count__21288_21334)){
var smoke_21336 = cljs.core._nth.call(null,chunk__21287_21333,i__21289_21335);
space_game.core.draw_entity.call(null,smoke_21336,cam_pos);

var G__21337 = seq__21286_21332;
var G__21338 = chunk__21287_21333;
var G__21339 = count__21288_21334;
var G__21340 = (i__21289_21335 + (1));
seq__21286_21332 = G__21337;
chunk__21287_21333 = G__21338;
count__21288_21334 = G__21339;
i__21289_21335 = G__21340;
continue;
} else {
var temp__4657__auto___21341 = cljs.core.seq.call(null,seq__21286_21332);
if(temp__4657__auto___21341){
var seq__21286_21342__$1 = temp__4657__auto___21341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21286_21342__$1)){
var c__20228__auto___21343 = cljs.core.chunk_first.call(null,seq__21286_21342__$1);
var G__21344 = cljs.core.chunk_rest.call(null,seq__21286_21342__$1);
var G__21345 = c__20228__auto___21343;
var G__21346 = cljs.core.count.call(null,c__20228__auto___21343);
var G__21347 = (0);
seq__21286_21332 = G__21344;
chunk__21287_21333 = G__21345;
count__21288_21334 = G__21346;
i__21289_21335 = G__21347;
continue;
} else {
var smoke_21348 = cljs.core.first.call(null,seq__21286_21342__$1);
space_game.core.draw_entity.call(null,smoke_21348,cam_pos);

var G__21349 = cljs.core.next.call(null,seq__21286_21342__$1);
var G__21350 = null;
var G__21351 = (0);
var G__21352 = (0);
seq__21286_21332 = G__21349;
chunk__21287_21333 = G__21350;
count__21288_21334 = G__21351;
i__21289_21335 = G__21352;
continue;
}
} else {
}
}
break;
}

return space_game.core.draw_entity.call(null,new cljs.core.Keyword(null,"ship","ship",197863473).cljs$core$IFn$_invoke$arity$1(state),cam_pos);
});
space_game.core.nanoscopic = (function space_game$core$nanoscopic(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"host",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,space_game.core.update_state))?(function() { 
var G__21353__delegate = function (args){
return cljs.core.apply.call(null,space_game.core.update_state,args);
};
var G__21353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21354__i = 0, G__21354__a = new Array(arguments.length -  0);
while (G__21354__i < G__21354__a.length) {G__21354__a[G__21354__i] = arguments[G__21354__i + 0]; ++G__21354__i;}
  args = new cljs.core.IndexedSeq(G__21354__a,0);
} 
return G__21353__delegate.call(this,args);};
G__21353.cljs$lang$maxFixedArity = 0;
G__21353.cljs$lang$applyTo = (function (arglist__21355){
var args = cljs.core.seq(arglist__21355);
return G__21353__delegate(args);
});
G__21353.cljs$core$IFn$_invoke$arity$variadic = G__21353__delegate;
return G__21353;
})()
:space_game.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(800),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,space_game.core.setup))?(function() { 
var G__21356__delegate = function (args){
return cljs.core.apply.call(null,space_game.core.setup,args);
};
var G__21356 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21357__i = 0, G__21357__a = new Array(arguments.length -  0);
while (G__21357__i < G__21357__a.length) {G__21357__a[G__21357__i] = arguments[G__21357__i + 0]; ++G__21357__i;}
  args = new cljs.core.IndexedSeq(G__21357__a,0);
} 
return G__21356__delegate.call(this,args);};
G__21356.cljs$lang$maxFixedArity = 0;
G__21356.cljs$lang$applyTo = (function (arglist__21358){
var args = cljs.core.seq(arglist__21358);
return G__21356__delegate(args);
});
G__21356.cljs$core$IFn$_invoke$arity$variadic = G__21356__delegate;
return G__21356;
})()
:space_game.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,space_game.core.on_key_down))?(function() { 
var G__21359__delegate = function (args){
return cljs.core.apply.call(null,space_game.core.on_key_down,args);
};
var G__21359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21360__i = 0, G__21360__a = new Array(arguments.length -  0);
while (G__21360__i < G__21360__a.length) {G__21360__a[G__21360__i] = arguments[G__21360__i + 0]; ++G__21360__i;}
  args = new cljs.core.IndexedSeq(G__21360__a,0);
} 
return G__21359__delegate.call(this,args);};
G__21359.cljs$lang$maxFixedArity = 0;
G__21359.cljs$lang$applyTo = (function (arglist__21361){
var args = cljs.core.seq(arglist__21361);
return G__21359__delegate(args);
});
G__21359.cljs$core$IFn$_invoke$arity$variadic = G__21359__delegate;
return G__21359;
})()
:space_game.core.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,space_game.core.on_key_up))?(function() { 
var G__21362__delegate = function (args){
return cljs.core.apply.call(null,space_game.core.on_key_up,args);
};
var G__21362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21363__i = 0, G__21363__a = new Array(arguments.length -  0);
while (G__21363__i < G__21363__a.length) {G__21363__a[G__21363__i] = arguments[G__21363__i + 0]; ++G__21363__i;}
  args = new cljs.core.IndexedSeq(G__21363__a,0);
} 
return G__21362__delegate.call(this,args);};
G__21362.cljs$lang$maxFixedArity = 0;
G__21362.cljs$lang$applyTo = (function (arglist__21364){
var args = cljs.core.seq(arglist__21364);
return G__21362__delegate(args);
});
G__21362.cljs$core$IFn$_invoke$arity$variadic = G__21362__delegate;
return G__21362;
})()
:space_game.core.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,space_game.core.draw_state))?(function() { 
var G__21365__delegate = function (args){
return cljs.core.apply.call(null,space_game.core.draw_state,args);
};
var G__21365 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21366__i = 0, G__21366__a = new Array(arguments.length -  0);
while (G__21366__i < G__21366__a.length) {G__21366__a[G__21366__i] = arguments[G__21366__i + 0]; ++G__21366__i;}
  args = new cljs.core.IndexedSeq(G__21366__a,0);
} 
return G__21365__delegate.call(this,args);};
G__21365.cljs$lang$maxFixedArity = 0;
G__21365.cljs$lang$applyTo = (function (arglist__21367){
var args = cljs.core.seq(arglist__21367);
return G__21365__delegate(args);
});
G__21365.cljs$core$IFn$_invoke$arity$variadic = G__21365__delegate;
return G__21365;
})()
:space_game.core.draw_state));
});
goog.exportSymbol('space_game.core.nanoscopic', space_game.core.nanoscopic);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20606__20607__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20606__20607__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),space_game.core.nanoscopic,new cljs.core.Keyword(null,"host-id","host-id",742376279),"host"], null));
}

//# sourceMappingURL=core.js.map?rel=1488148065916