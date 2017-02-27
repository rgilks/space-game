// Compiled by ClojureScript 1.9.293 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('p5.core');
goog.require('p5.tiled_map');
goog.require('cljs.core.async');

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_show$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_show$arity$1(this$);
} else {
var x__20948__auto__ = (((this$ == null))?null:this$);
var m__20949__auto__ = (play_cljs.core.on_show[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,this$);
} else {
var m__20949__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-show",this$);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_hide$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_hide$arity$1(this$);
} else {
var x__20948__auto__ = (((this$ == null))?null:this$);
var m__20949__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,this$);
} else {
var m__20949__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-hide",this$);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_render$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_render$arity$1(this$);
} else {
var x__20948__auto__ = (((this$ == null))?null:this$);
var m__20949__auto__ = (play_cljs.core.on_render[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,this$);
} else {
var m__20949__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-render",this$);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling [create-game](#create-game).
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null)))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.start[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.start",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null)))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.render[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,content);
} else {
var m__20949__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an [Image](#Image) object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null)))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,image_name,width,height,content);
} else {
var m__20949__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,image_name,width,height,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an [Image](#Image) object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null)))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.load_image[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,path);
} else {
var m__20949__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,path);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a [TiledMap](#TiledMap) object. 
 * A tiled map with the provided name must already be loaded 
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null)))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,map_name);
} else {
var m__20949__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,map_name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the [Screen](#Screen) object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null)))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-screen",game);
}
}
}
});

/**
 * Sets the [Screen](#Screen) object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null)))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,screen);
} else {
var m__20949__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null)))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null)))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null)))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null)))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_width[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null)))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_height[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null)))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.set_size[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,width,height);
} else {
var m__20949__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,width,height);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-size",game);
}
}
}
});

/**
 * Gets the asset with the given name.
 */
play_cljs.core.get_asset = (function play_cljs$core$get_asset(game,name){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_asset$arity$2 == null)))){
return game.play_cljs$core$Game$get_asset$arity$2(game,name);
} else {
var x__20948__auto__ = (((game == null))?null:game);
var m__20949__auto__ = (play_cljs.core.get_asset[goog.typeOf(x__20948__auto__)]);
if(!((m__20949__auto__ == null))){
return m__20949__auto__.call(null,game,name);
} else {
var m__20949__auto____$1 = (play_cljs.core.get_asset["_"]);
if(!((m__20949__auto____$1 == null))){
return m__20949__auto____$1.call(null,game,name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-asset",game);
}
}
}
});

p5.disableFriendlyErrors = true;
play_cljs.core.update_opts = (function play_cljs$core$update_opts(opts,parent_opts,defaults){
var parent_opts__$1 = cljs.core.merge.call(null,defaults,parent_opts);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,defaults,cljs.core.dissoc.call(null,parent_opts__$1,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),opts),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_opts__$1)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_opts__$1));
});
play_cljs.core.basic_defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null);
play_cljs.core.text_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"valign","valign",1485197511),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"leading","leading",-1239035032),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null));
play_cljs.core.img_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"sy","sy",227523849),(0)], null));
play_cljs.core.rgb_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-r","max-r",1711699344),(255),new cljs.core.Keyword(null,"max-g","max-g",-1655662483),(255),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(255),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.core.hsb_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-h","max-h",1409940394),(360),new cljs.core.Keyword(null,"max-s","max-s",781928940),(100),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(100),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.core.halign__GT_constant = (function play_cljs$core$halign__GT_constant(renderer,halign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),renderer.LEFT,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"right","right",-452581833),renderer.RIGHT], null),halign);
});
play_cljs.core.valign__GT_constant = (function play_cljs$core$valign__GT_constant(renderer,valign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),renderer.TOP,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),renderer.BOTTOM,new cljs.core.Keyword(null,"baseline","baseline",1151033280),renderer.BASELINE], null),valign);
});
play_cljs.core.style__GT_constant = (function play_cljs$core$style__GT_constant(renderer,style){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"normal","normal",-1519123858),renderer.NORMAL,new cljs.core.Keyword(null,"italic","italic",32599196),renderer.ITALIC,new cljs.core.Keyword(null,"bold","bold",-116809535),renderer.BOLD], null),style);
});
if(typeof play_cljs.core.draw_sketch_BANG_ !== 'undefined'){
} else {
play_cljs.core.draw_sketch_BANG_ = (function (){var method_table__21213__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21214__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21215__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21216__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21217__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"play-cljs.core","draw-sketch!"),((function (method_table__21213__auto__,prefer_table__21214__auto__,method_cache__21215__auto__,cached_hierarchy__21216__auto__,hierarchy__21217__auto__){
return (function (game,renderer,content,parent_opts){
return cljs.core.first.call(null,content);
});})(method_table__21213__auto__,prefer_table__21214__auto__,method_cache__21215__auto__,cached_hierarchy__21216__auto__,hierarchy__21217__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21217__auto__,method_table__21213__auto__,prefer_table__21214__auto__,method_cache__21215__auto__,cached_hierarchy__21216__auto__));
})();
}
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"div","div",1057191632),(function (game,renderer,content,parent_opts){
var vec__31678 = content;
var seq__31679 = cljs.core.seq.call(null,vec__31678);
var first__31680 = cljs.core.first.call(null,seq__31679);
var seq__31679__$1 = cljs.core.next.call(null,seq__31679);
var command = first__31680;
var first__31680__$1 = cljs.core.first.call(null,seq__31679__$1);
var seq__31679__$2 = cljs.core.next.call(null,seq__31679__$1);
var opts = first__31680__$1;
var children = seq__31679__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,renderer,content,parent_opts){
var vec__31681 = content;
var seq__31682 = cljs.core.seq.call(null,vec__31681);
var first__31683 = cljs.core.first.call(null,seq__31682);
var seq__31682__$1 = cljs.core.next.call(null,seq__31682);
var command = first__31683;
var first__31683__$1 = cljs.core.first.call(null,seq__31682__$1);
var seq__31682__$2 = cljs.core.next.call(null,seq__31682__$1);
var opts = first__31683__$1;
var children = seq__31682__$2;
var map__31684 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.text_defaults);
var map__31684__$1 = ((((!((map__31684 == null)))?((((map__31684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31684):map__31684);
var opts__$1 = map__31684__$1;
var value = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var G__31686_31687 = renderer;
G__31686_31687.textSize(size);

G__31686_31687.textFont(font);

G__31686_31687.textAlign(play_cljs.core.halign__GT_constant.call(null,renderer,halign),play_cljs.core.valign__GT_constant.call(null,renderer,valign));

G__31686_31687.textLeading(leading);

G__31686_31687.textStyle(play_cljs.core.style__GT_constant.call(null,renderer,style));

G__31686_31687.text(value,x,y);


return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (game,renderer,content,parent_opts){
var vec__31688 = content;
var seq__31689 = cljs.core.seq.call(null,vec__31688);
var first__31690 = cljs.core.first.call(null,seq__31689);
var seq__31689__$1 = cljs.core.next.call(null,seq__31689);
var command = first__31690;
var first__31690__$1 = cljs.core.first.call(null,seq__31689__$1);
var seq__31689__$2 = cljs.core.next.call(null,seq__31689__$1);
var opts = first__31690__$1;
var children = seq__31689__$2;
var map__31691 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31691__$1 = ((((!((map__31691 == null)))?((((map__31691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31691):map__31691);
var opts__$1 = map__31691__$1;
var x = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__31691__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
renderer.arc(x,y,width,height,start,stop);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (game,renderer,content,parent_opts){
var vec__31693 = content;
var seq__31694 = cljs.core.seq.call(null,vec__31693);
var first__31695 = cljs.core.first.call(null,seq__31694);
var seq__31694__$1 = cljs.core.next.call(null,seq__31694);
var command = first__31695;
var first__31695__$1 = cljs.core.first.call(null,seq__31694__$1);
var seq__31694__$2 = cljs.core.next.call(null,seq__31694__$1);
var opts = first__31695__$1;
var children = seq__31694__$2;
var map__31696 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31696__$1 = ((((!((map__31696 == null)))?((((map__31696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31696):map__31696);
var opts__$1 = map__31696__$1;
var x = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31696__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.ellipse(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (game,renderer,content,parent_opts){
var vec__31698 = content;
var seq__31699 = cljs.core.seq.call(null,vec__31698);
var first__31700 = cljs.core.first.call(null,seq__31699);
var seq__31699__$1 = cljs.core.next.call(null,seq__31699);
var command = first__31700;
var first__31700__$1 = cljs.core.first.call(null,seq__31699__$1);
var seq__31699__$2 = cljs.core.next.call(null,seq__31699__$1);
var opts = first__31700__$1;
var children = seq__31699__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31701 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__31701__$1 = ((((!((map__31701 == null)))?((((map__31701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31701):map__31701);
var opts__$2 = map__31701__$1;
var x1 = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (game,renderer,content,parent_opts){
var vec__31703 = content;
var seq__31704 = cljs.core.seq.call(null,vec__31703);
var first__31705 = cljs.core.first.call(null,seq__31704);
var seq__31704__$1 = cljs.core.next.call(null,seq__31704);
var command = first__31705;
var first__31705__$1 = cljs.core.first.call(null,seq__31704__$1);
var seq__31704__$2 = cljs.core.next.call(null,seq__31704__$1);
var opts = first__31705__$1;
var children = seq__31704__$2;
var map__31706 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31706__$1 = ((((!((map__31706 == null)))?((((map__31706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31706):map__31706);
var opts__$1 = map__31706__$1;
var x = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31706__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
renderer.point(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (game,renderer,content,parent_opts){
var vec__31708 = content;
var seq__31709 = cljs.core.seq.call(null,vec__31708);
var first__31710 = cljs.core.first.call(null,seq__31709);
var seq__31709__$1 = cljs.core.next.call(null,seq__31709);
var command = first__31710;
var first__31710__$1 = cljs.core.first.call(null,seq__31709__$1);
var seq__31709__$2 = cljs.core.next.call(null,seq__31709__$1);
var opts = first__31710__$1;
var children = seq__31709__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31711 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__31711__$1 = ((((!((map__31711 == null)))?((((map__31711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31711):map__31711);
var opts__$2 = map__31711__$1;
var x1 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__31711__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,renderer,content,parent_opts){
var vec__31713 = content;
var seq__31714 = cljs.core.seq.call(null,vec__31713);
var first__31715 = cljs.core.first.call(null,seq__31714);
var seq__31714__$1 = cljs.core.next.call(null,seq__31714);
var command = first__31715;
var first__31715__$1 = cljs.core.first.call(null,seq__31714__$1);
var seq__31714__$2 = cljs.core.next.call(null,seq__31714__$1);
var opts = first__31715__$1;
var children = seq__31714__$2;
var map__31716 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31716__$1 = ((((!((map__31716 == null)))?((((map__31716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31716):map__31716);
var opts__$1 = map__31716__$1;
var x = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__31716__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.rect(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (game,renderer,content,parent_opts){
var vec__31718 = content;
var seq__31719 = cljs.core.seq.call(null,vec__31718);
var first__31720 = cljs.core.first.call(null,seq__31719);
var seq__31719__$1 = cljs.core.next.call(null,seq__31719);
var command = first__31720;
var first__31720__$1 = cljs.core.first.call(null,seq__31719__$1);
var seq__31719__$2 = cljs.core.next.call(null,seq__31719__$1);
var opts = first__31720__$1;
var children = seq__31719__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31721 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__31721__$1 = ((((!((map__31721 == null)))?((((map__31721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31721):map__31721);
var opts__$2 = map__31721__$1;
var x1 = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__31721__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (game,renderer,content,parent_opts){
var vec__31723 = content;
var seq__31724 = cljs.core.seq.call(null,vec__31723);
var first__31725 = cljs.core.first.call(null,seq__31724);
var seq__31724__$1 = cljs.core.next.call(null,seq__31724);
var command = first__31725;
var first__31725__$1 = cljs.core.first.call(null,seq__31724__$1);
var seq__31724__$2 = cljs.core.next.call(null,seq__31724__$1);
var opts = first__31725__$1;
var children = seq__31724__$2;
var map__31726 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.img_defaults);
var map__31726__$1 = ((((!((map__31726 == null)))?((((map__31726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31726.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31726):map__31726);
var opts__$1 = map__31726__$1;
var x = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var sheight = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__31726__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var value__$1 = (function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
var or__20285__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__20285__auto____$1)){
return or__20285__auto____$1;
} else {
return play_cljs.core.load_image.call(null,game,name);
}
}
})();
var swidth__$1 = (function (){var or__20285__auto__ = swidth;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__20285__auto__ = sheight;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return value__$1.height;
}
})();
renderer.scale(scale_x,scale_y);

renderer.image(value__$1,x,y,(function (){var or__20285__auto__ = width;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__20285__auto__ = height;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return sheight__$1;
}
})(),sx,sy,swidth__$1,sheight__$1);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"animation","animation",-1248293244),(function (game,renderer,content,parent_opts){
var vec__31728 = content;
var seq__31729 = cljs.core.seq.call(null,vec__31728);
var first__31730 = cljs.core.first.call(null,seq__31729);
var seq__31729__$1 = cljs.core.next.call(null,seq__31729);
var command = first__31730;
var first__31730__$1 = cljs.core.first.call(null,seq__31729__$1);
var seq__31729__$2 = cljs.core.next.call(null,seq__31729__$1);
var opts = first__31730__$1;
var children = seq__31729__$2;
var map__31731 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31731__$1 = ((((!((map__31731 == null)))?((((map__31731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31731):map__31731);
var opts__$1 = map__31731__$1;
var duration = cljs.core.get.call(null,map__31731__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,play_cljs.core.get_total_time.call(null,game),(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (game,renderer,content,parent_opts){
var vec__31733 = content;
var seq__31734 = cljs.core.seq.call(null,vec__31733);
var first__31735 = cljs.core.first.call(null,seq__31734);
var seq__31734__$1 = cljs.core.next.call(null,seq__31734);
var command = first__31735;
var first__31735__$1 = cljs.core.first.call(null,seq__31734__$1);
var seq__31734__$2 = cljs.core.next.call(null,seq__31734__$1);
var opts = first__31735__$1;
var children = seq__31734__$2;
var map__31736 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31736__$1 = ((((!((map__31736 == null)))?((((map__31736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31736):map__31736);
var opts__$1 = map__31736__$1;
var grayscale = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var fill_fn = (cljs.core.truth_(grayscale)?((function (vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.fill(grayscale);
});})(vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(color)?((function (vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.fill(color);
});})(vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(colors)?(function (){var vec__31738 = colors;
var n1 = cljs.core.nth.call(null,vec__31738,(0),null);
var n2 = cljs.core.nth.call(null,vec__31738,(1),null);
var n3 = cljs.core.nth.call(null,vec__31738,(2),null);
return ((function (vec__31738,n1,n2,n3,vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.fill(n1,n2,n3);
});
;})(vec__31738,n1,n2,n3,vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors))
})():((function (vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.noFill();
});})(vec__31733,seq__31734,first__31735,seq__31734__$1,command,first__31735__$1,seq__31734__$2,opts,children,map__31736,map__31736__$1,opts__$1,grayscale,color,colors))

)));
fill_fn.call(null);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"fill-fn","fill-fn",-323742174),fill_fn));

renderer.fill("white");

renderer._renderer._fillSet = false;

var temp__4657__auto__ = new cljs.core.Keyword(null,"fill-fn","fill-fn",-323742174).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var fill_fn__$1 = temp__4657__auto__;
return fill_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (game,renderer,content,parent_opts){
var vec__31741 = content;
var seq__31742 = cljs.core.seq.call(null,vec__31741);
var first__31743 = cljs.core.first.call(null,seq__31742);
var seq__31742__$1 = cljs.core.next.call(null,seq__31742);
var command = first__31743;
var first__31743__$1 = cljs.core.first.call(null,seq__31742__$1);
var seq__31742__$2 = cljs.core.next.call(null,seq__31742__$1);
var opts = first__31743__$1;
var children = seq__31742__$2;
var map__31744 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31744__$1 = ((((!((map__31744 == null)))?((((map__31744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31744):map__31744);
var opts__$1 = map__31744__$1;
var grayscale = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var stroke_fn = (cljs.core.truth_(grayscale)?((function (vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.stroke(grayscale);
});})(vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(color)?((function (vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.stroke(color);
});})(vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors))
:(cljs.core.truth_(colors)?(function (){var vec__31746 = colors;
var n1 = cljs.core.nth.call(null,vec__31746,(0),null);
var n2 = cljs.core.nth.call(null,vec__31746,(1),null);
var n3 = cljs.core.nth.call(null,vec__31746,(2),null);
return ((function (vec__31746,n1,n2,n3,vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.stroke(n1,n2,n3);
});
;})(vec__31746,n1,n2,n3,vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors))
})():((function (vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors){
return (function (){
return renderer.noStroke();
});})(vec__31741,seq__31742,first__31743,seq__31742__$1,command,first__31743__$1,seq__31742__$2,opts,children,map__31744,map__31744__$1,opts__$1,grayscale,color,colors))

)));
stroke_fn.call(null);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"stroke-fn","stroke-fn",636867052),stroke_fn));

renderer.stroke("black");

renderer._renderer._strokeSet = false;

var temp__4657__auto__ = new cljs.core.Keyword(null,"stroke-fn","stroke-fn",636867052).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var stroke_fn__$1 = temp__4657__auto__;
return stroke_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (game,renderer,content,parent_opts){
var vec__31749 = content;
var seq__31750 = cljs.core.seq.call(null,vec__31749);
var first__31751 = cljs.core.first.call(null,seq__31750);
var seq__31750__$1 = cljs.core.next.call(null,seq__31750);
var command = first__31751;
var first__31751__$1 = cljs.core.first.call(null,seq__31750__$1);
var seq__31750__$2 = cljs.core.next.call(null,seq__31750__$1);
var opts = first__31751__$1;
var children = seq__31750__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31752 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__31752__$1 = ((((!((map__31752 == null)))?((((map__31752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31752):map__31752);
var opts__$2 = map__31752__$1;
var x1 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__31752__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__20273__auto__ = x1;
if(cljs.core.truth_(and__20273__auto__)){
var and__20273__auto____$1 = y1;
if(cljs.core.truth_(and__20273__auto____$1)){
var and__20273__auto____$2 = x2;
if(cljs.core.truth_(and__20273__auto____$2)){
var and__20273__auto____$3 = y2;
if(cljs.core.truth_(and__20273__auto____$3)){
var and__20273__auto____$4 = x3;
if(cljs.core.truth_(and__20273__auto____$4)){
var and__20273__auto____$5 = y3;
if(cljs.core.truth_(and__20273__auto____$5)){
var and__20273__auto____$6 = x4;
if(cljs.core.truth_(and__20273__auto____$6)){
return y4;
} else {
return and__20273__auto____$6;
}
} else {
return and__20273__auto____$5;
}
} else {
return and__20273__auto____$4;
}
} else {
return and__20273__auto____$3;
}
} else {
return and__20273__auto____$2;
}
} else {
return and__20273__auto____$1;
}
} else {
return and__20273__auto__;
}
})())){
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__20273__auto__ = z1;
if(cljs.core.truth_(and__20273__auto__)){
var and__20273__auto____$1 = z2;
if(cljs.core.truth_(and__20273__auto____$1)){
var and__20273__auto____$2 = z3;
if(cljs.core.truth_(and__20273__auto____$2)){
return z4;
} else {
return and__20273__auto____$2;
}
} else {
return and__20273__auto____$1;
}
} else {
return and__20273__auto__;
}
})())){
renderer.bezier(z1,z2,z3,z4);
} else {
throw "Invalid args for bezier";

}
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"curve","curve",-569677866),(function (game,renderer,content,parent_opts){
var vec__31754 = content;
var seq__31755 = cljs.core.seq.call(null,vec__31754);
var first__31756 = cljs.core.first.call(null,seq__31755);
var seq__31755__$1 = cljs.core.next.call(null,seq__31755);
var command = first__31756;
var first__31756__$1 = cljs.core.first.call(null,seq__31755__$1);
var seq__31755__$2 = cljs.core.next.call(null,seq__31755__$1);
var opts = first__31756__$1;
var children = seq__31755__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31757 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__31757__$1 = ((((!((map__31757 == null)))?((((map__31757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31757):map__31757);
var opts__$2 = map__31757__$1;
var x1 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__31757__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__20273__auto__ = x1;
if(cljs.core.truth_(and__20273__auto__)){
var and__20273__auto____$1 = y1;
if(cljs.core.truth_(and__20273__auto____$1)){
var and__20273__auto____$2 = x2;
if(cljs.core.truth_(and__20273__auto____$2)){
var and__20273__auto____$3 = y2;
if(cljs.core.truth_(and__20273__auto____$3)){
var and__20273__auto____$4 = x3;
if(cljs.core.truth_(and__20273__auto____$4)){
var and__20273__auto____$5 = y3;
if(cljs.core.truth_(and__20273__auto____$5)){
var and__20273__auto____$6 = x4;
if(cljs.core.truth_(and__20273__auto____$6)){
return y4;
} else {
return and__20273__auto____$6;
}
} else {
return and__20273__auto____$5;
}
} else {
return and__20273__auto____$4;
}
} else {
return and__20273__auto____$3;
}
} else {
return and__20273__auto____$2;
}
} else {
return and__20273__auto____$1;
}
} else {
return and__20273__auto__;
}
})())){
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__20273__auto__ = z1;
if(cljs.core.truth_(and__20273__auto__)){
var and__20273__auto____$1 = z2;
if(cljs.core.truth_(and__20273__auto____$1)){
var and__20273__auto____$2 = z3;
if(cljs.core.truth_(and__20273__auto____$2)){
return z4;
} else {
return and__20273__auto____$2;
}
} else {
return and__20273__auto____$1;
}
} else {
return and__20273__auto__;
}
})())){
renderer.curve(z1,z2,z3,z4);
} else {
throw "Invalid args for curve";

}
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(function (game,renderer,content,parent_opts){
var vec__31759 = content;
var seq__31760 = cljs.core.seq.call(null,vec__31759);
var first__31761 = cljs.core.first.call(null,seq__31760);
var seq__31760__$1 = cljs.core.next.call(null,seq__31760);
var command = first__31761;
var first__31761__$1 = cljs.core.first.call(null,seq__31760__$1);
var seq__31760__$2 = cljs.core.next.call(null,seq__31760__$1);
var opts = first__31761__$1;
var children = seq__31760__$2;
var map__31762 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.rgb_defaults);
var map__31762__$1 = ((((!((map__31762 == null)))?((((map__31762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31762):map__31762);
var opts__$1 = map__31762__$1;
var max_r = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
var color_fn = ((function (vec__31759,seq__31760,first__31761,seq__31760__$1,command,first__31761__$1,seq__31760__$2,opts,children,map__31762,map__31762__$1,opts__$1,max_r,max_g,max_b,max_a){
return (function (){
return renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);
});})(vec__31759,seq__31760,first__31761,seq__31760__$1,command,first__31761__$1,seq__31760__$2,opts,children,map__31762,map__31762__$1,opts__$1,max_r,max_g,max_b,max_a))
;
color_fn.call(null);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"color-fn","color-fn",1518098073),color_fn));

var map__31764_31766 = play_cljs.core.rgb_defaults;
var map__31764_31767__$1 = ((((!((map__31764_31766 == null)))?((((map__31764_31766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31764_31766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31764_31766):map__31764_31766);
var max_r_31768__$1 = cljs.core.get.call(null,map__31764_31767__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g_31769__$1 = cljs.core.get.call(null,map__31764_31767__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b_31770__$1 = cljs.core.get.call(null,map__31764_31767__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a_31771__$1 = cljs.core.get.call(null,map__31764_31767__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.colorMode(renderer.RGB,max_r_31768__$1,max_g_31769__$1,max_b_31770__$1,max_a_31771__$1);

var temp__4657__auto__ = new cljs.core.Keyword(null,"color-fn","color-fn",1518098073).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var color_fn__$1 = temp__4657__auto__;
return color_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (game,renderer,content,parent_opts){
var vec__31772 = content;
var seq__31773 = cljs.core.seq.call(null,vec__31772);
var first__31774 = cljs.core.first.call(null,seq__31773);
var seq__31773__$1 = cljs.core.next.call(null,seq__31773);
var command = first__31774;
var first__31774__$1 = cljs.core.first.call(null,seq__31773__$1);
var seq__31773__$2 = cljs.core.next.call(null,seq__31773__$1);
var opts = first__31774__$1;
var children = seq__31773__$2;
var map__31775 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.hsb_defaults);
var map__31775__$1 = ((((!((map__31775 == null)))?((((map__31775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31775):map__31775);
var opts__$1 = map__31775__$1;
var max_h = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__31775__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
var color_fn = ((function (vec__31772,seq__31773,first__31774,seq__31773__$1,command,first__31774__$1,seq__31773__$2,opts,children,map__31775,map__31775__$1,opts__$1,max_h,max_s,max_b,max_a){
return (function (){
return renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);
});})(vec__31772,seq__31773,first__31774,seq__31773__$1,command,first__31774__$1,seq__31773__$2,opts,children,map__31775,map__31775__$1,opts__$1,max_h,max_s,max_b,max_a))
;
color_fn.call(null);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"color-fn","color-fn",1518098073),color_fn));

var map__31777_31779 = play_cljs.core.rgb_defaults;
var map__31777_31780__$1 = ((((!((map__31777_31779 == null)))?((((map__31777_31779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31777_31779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31777_31779):map__31777_31779);
var max_r_31781 = cljs.core.get.call(null,map__31777_31780__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g_31782 = cljs.core.get.call(null,map__31777_31780__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b_31783__$1 = cljs.core.get.call(null,map__31777_31780__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a_31784__$1 = cljs.core.get.call(null,map__31777_31780__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.colorMode(renderer.RGB,max_r_31781,max_g_31782,max_b_31783__$1,max_a_31784__$1);

var temp__4657__auto__ = new cljs.core.Keyword(null,"color-fn","color-fn",1518098073).cljs$core$IFn$_invoke$arity$1(parent_opts);
if(cljs.core.truth_(temp__4657__auto__)){
var color_fn__$1 = temp__4657__auto__;
return color_fn__$1.call(null);
} else {
return null;
}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (game,renderer,content,parent_opts){
var vec__31785 = content;
var seq__31786 = cljs.core.seq.call(null,vec__31785);
var first__31787 = cljs.core.first.call(null,seq__31786);
var seq__31786__$1 = cljs.core.next.call(null,seq__31786);
var command = first__31787;
var first__31787__$1 = cljs.core.first.call(null,seq__31786__$1);
var seq__31786__$2 = cljs.core.next.call(null,seq__31786__$1);
var opts = first__31787__$1;
var children = seq__31786__$2;
var map__31788 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__31788__$1 = ((((!((map__31788 == null)))?((((map__31788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31788):map__31788);
var opts__$1 = map__31788__$1;
var value = cljs.core.get.call(null,map__31788__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__31788__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__31788__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31788__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value__$1 = (function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
var or__20285__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__20285__auto____$1)){
return or__20285__auto____$1;
} else {
return play_cljs.core.load_tiled_map.call(null,game,name);
}
}
})();
value__$1.draw(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (game,renderer,content,parent_opts){
var vec__31790 = content;
var seq__31791 = cljs.core.seq.call(null,vec__31790);
var first__31792 = cljs.core.first.call(null,seq__31791);
var seq__31791__$1 = cljs.core.next.call(null,seq__31791);
var command = first__31792;
var first__31792__$1 = cljs.core.first.call(null,seq__31791__$1);
var seq__31791__$2 = cljs.core.next.call(null,seq__31791__$1);
var opts = first__31792__$1;
var children = seq__31791__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":shape requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginShape();

var G__31796_31803 = points;
var vec__31797_31804 = G__31796_31803;
var seq__31798_31805 = cljs.core.seq.call(null,vec__31797_31804);
var first__31799_31806 = cljs.core.first.call(null,seq__31798_31805);
var seq__31798_31807__$1 = cljs.core.next.call(null,seq__31798_31805);
var x_31808 = first__31799_31806;
var first__31799_31809__$1 = cljs.core.first.call(null,seq__31798_31807__$1);
var seq__31798_31810__$2 = cljs.core.next.call(null,seq__31798_31807__$1);
var y_31811 = first__31799_31809__$1;
var rest_31812 = seq__31798_31810__$2;
var G__31796_31813__$1 = G__31796_31803;
while(true){
var vec__31800_31814 = G__31796_31813__$1;
var seq__31801_31815 = cljs.core.seq.call(null,vec__31800_31814);
var first__31802_31816 = cljs.core.first.call(null,seq__31801_31815);
var seq__31801_31817__$1 = cljs.core.next.call(null,seq__31801_31815);
var x_31818__$1 = first__31802_31816;
var first__31802_31819__$1 = cljs.core.first.call(null,seq__31801_31817__$1);
var seq__31801_31820__$2 = cljs.core.next.call(null,seq__31801_31817__$1);
var y_31821__$1 = first__31802_31819__$1;
var rest_31822__$1 = seq__31801_31820__$2;
renderer.vertex(x_31818__$1,y_31821__$1);

if(rest_31822__$1){
var G__31823 = rest_31822__$1;
G__31796_31813__$1 = G__31823;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endShape(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"contour","contour",-943960423),(function (game,renderer,content,parent_opts){
var vec__31824 = content;
var seq__31825 = cljs.core.seq.call(null,vec__31824);
var first__31826 = cljs.core.first.call(null,seq__31825);
var seq__31825__$1 = cljs.core.next.call(null,seq__31825);
var command = first__31826;
var first__31826__$1 = cljs.core.first.call(null,seq__31825__$1);
var seq__31825__$2 = cljs.core.next.call(null,seq__31825__$1);
var opts = first__31826__$1;
var children = seq__31825__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":contour requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginContour();

var G__31830_31837 = points;
var vec__31831_31838 = G__31830_31837;
var seq__31832_31839 = cljs.core.seq.call(null,vec__31831_31838);
var first__31833_31840 = cljs.core.first.call(null,seq__31832_31839);
var seq__31832_31841__$1 = cljs.core.next.call(null,seq__31832_31839);
var x_31842 = first__31833_31840;
var first__31833_31843__$1 = cljs.core.first.call(null,seq__31832_31841__$1);
var seq__31832_31844__$2 = cljs.core.next.call(null,seq__31832_31841__$1);
var y_31845 = first__31833_31843__$1;
var rest_31846 = seq__31832_31844__$2;
var G__31830_31847__$1 = G__31830_31837;
while(true){
var vec__31834_31848 = G__31830_31847__$1;
var seq__31835_31849 = cljs.core.seq.call(null,vec__31834_31848);
var first__31836_31850 = cljs.core.first.call(null,seq__31835_31849);
var seq__31835_31851__$1 = cljs.core.next.call(null,seq__31835_31849);
var x_31852__$1 = first__31836_31850;
var first__31836_31853__$1 = cljs.core.first.call(null,seq__31835_31851__$1);
var seq__31835_31854__$2 = cljs.core.next.call(null,seq__31835_31851__$1);
var y_31855__$1 = first__31836_31853__$1;
var rest_31856__$1 = seq__31835_31854__$2;
renderer.vertex(x_31852__$1,y_31855__$1);

if(rest_31856__$1){
var G__31857 = rest_31856__$1;
G__31830_31847__$1 = G__31857;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endContour(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (game,renderer,content,parent_opts){
if(cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,content))){
return cljs.core.run_BANG_.call(null,(function (p1__31858_SHARP_){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__31858_SHARP_,parent_opts);
}),content);
} else {
if((cljs.core.first.call(null,content) == null)){
return null;
} else {
throw (new Error([cljs.core.str("Invalid sketch command: "),cljs.core.str(cljs.core.pr_str.call(null,content))].join('')));

}
}
}));
/**
 * Returns a game object.
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(width,height){
var renderer = (new p5((function (_){
return null;
})));
var hidden_state_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),(0),new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(0),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.call(null);
var preloads = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
if(typeof play_cljs.core.t_play_cljs$core31959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core31959 = (function (width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,meta31960){
this.width = width;
this.height = height;
this.renderer = renderer;
this.hidden_state_atom = hidden_state_atom;
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.preloads = preloads;
this.meta31960 = meta31960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
play_cljs.core.t_play_cljs$core31959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_31961,meta31960__$1){
var self__ = this;
var _31961__$1 = this;
return (new play_cljs.core.t_play_cljs$core31959(self__.width,self__.height,self__.renderer,self__.hidden_state_atom,self__.setup_finished_QMARK_,self__.preloads,meta31960__$1));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_31961){
var self__ = this;
var _31961__$1 = this;
return self__.meta31960;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
return self__.renderer.resizeCanvas(width__$1,height__$1);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var object = self__.renderer.createGraphics(width__$1,height__$1);
play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadImage(path,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,path,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.width;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.hidden_state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.height;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$start$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
self__.renderer.setup = ((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var canvas_wrapper_32059 = self__.renderer.createCanvas(self__.width,self__.height);
var canvas_32060 = canvas_wrapper_32059.canvas;
canvas_32060.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_32060);

return cljs.core.async.put_BANG_.call(null,self__.setup_finished_QMARK_,true);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

cljs.core.run_BANG_.call(null,goog.events.unlistenByKey,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom)));

return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(window,"keydown",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,e.keyCode);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"keyup",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,e.keyCode);
}
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"blur",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
)], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$render$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,self__.renderer,content,cljs.core.PersistentArrayMap.EMPTY);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadTiledMap(map_name,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,map_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__22658__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var f__22659__auto__ = (function (){var switch__22546__auto__ = ((function (c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (state_32022){
var state_val_32023 = (state_32022[(1)]);
if((state_val_32023 === (7))){
var inst_32016 = (state_32022[(2)]);
var inst_32017 = cljs.core.PersistentVector.EMPTY;
var inst_32018 = cljs.core.reset_BANG_.call(null,self__.preloads,inst_32017);
var inst_32019 = (function (){return ((function (inst_32016,inst_32017,inst_32018,state_val_32023,c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,((function (inst_32016,inst_32017,inst_32018,state_val_32023,c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (hidden_state){
var time = self__.renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(inst_32016,inst_32017,inst_32018,state_val_32023,c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

self__.renderer.clear();

return play_cljs.core.on_render.call(null,screen);
});
;})(inst_32016,inst_32017,inst_32018,state_val_32023,c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var inst_32020 = self__.renderer.draw = inst_32019;
var state_32022__$1 = (function (){var statearr_32024 = state_32022;
(statearr_32024[(7)] = inst_32018);

(statearr_32024[(8)] = inst_32016);

return statearr_32024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32022__$1,inst_32020);
} else {
if((state_val_32023 === (1))){
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32022__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_32023 === (4))){
var inst_31965 = (state_32022[(9)]);
var inst_31969 = play_cljs.core.on_hide.call(null,inst_31965);
var state_32022__$1 = state_32022;
var statearr_32025_32061 = state_32022__$1;
(statearr_32025_32061[(2)] = inst_31969);

(statearr_32025_32061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (15))){
var inst_31994 = (state_32022[(10)]);
var inst_31998 = cljs.core.chunk_first.call(null,inst_31994);
var inst_31999 = cljs.core.chunk_rest.call(null,inst_31994);
var inst_32000 = cljs.core.count.call(null,inst_31998);
var inst_31980 = inst_31999;
var inst_31981 = inst_31998;
var inst_31982 = inst_32000;
var inst_31983 = (0);
var state_32022__$1 = (function (){var statearr_32026 = state_32022;
(statearr_32026[(11)] = inst_31982);

(statearr_32026[(12)] = inst_31980);

(statearr_32026[(13)] = inst_31981);

(statearr_32026[(14)] = inst_31983);

return statearr_32026;
})();
var statearr_32027_32062 = state_32022__$1;
(statearr_32027_32062[(2)] = null);

(statearr_32027_32062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (13))){
var state_32022__$1 = state_32022;
var statearr_32028_32063 = state_32022__$1;
(statearr_32028_32063[(2)] = null);

(statearr_32028_32063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (6))){
var inst_31982 = (state_32022[(11)]);
var inst_31983 = (state_32022[(14)]);
var inst_31985 = (inst_31983 < inst_31982);
var inst_31986 = inst_31985;
var state_32022__$1 = state_32022;
if(cljs.core.truth_(inst_31986)){
var statearr_32029_32064 = state_32022__$1;
(statearr_32029_32064[(1)] = (8));

} else {
var statearr_32030_32065 = state_32022__$1;
(statearr_32030_32065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (17))){
var inst_32009 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32031_32066 = state_32022__$1;
(statearr_32031_32066[(2)] = inst_32009);

(statearr_32031_32066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (3))){
var state_32022__$1 = state_32022;
var statearr_32032_32067 = state_32022__$1;
(statearr_32032_32067[(2)] = null);

(statearr_32032_32067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (12))){
var inst_31994 = (state_32022[(10)]);
var inst_31996 = cljs.core.chunked_seq_QMARK_.call(null,inst_31994);
var state_32022__$1 = state_32022;
if(inst_31996){
var statearr_32036_32068 = state_32022__$1;
(statearr_32036_32068[(1)] = (15));

} else {
var statearr_32037_32069 = state_32022__$1;
(statearr_32037_32069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (2))){
var inst_31965 = (state_32022[(9)]);
var inst_31963 = (state_32022[(2)]);
var inst_31965__$1 = play_cljs.core.get_screen.call(null,this$__$1);
var inst_31966 = (inst_31965__$1 == null);
var state_32022__$1 = (function (){var statearr_32038 = state_32022;
(statearr_32038[(15)] = inst_31963);

(statearr_32038[(9)] = inst_31965__$1);

return statearr_32038;
})();
if(cljs.core.truth_(inst_31966)){
var statearr_32039_32070 = state_32022__$1;
(statearr_32039_32070[(1)] = (3));

} else {
var statearr_32040_32071 = state_32022__$1;
(statearr_32040_32071[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (11))){
var inst_31982 = (state_32022[(11)]);
var inst_31980 = (state_32022[(12)]);
var inst_31981 = (state_32022[(13)]);
var inst_31983 = (state_32022[(14)]);
var inst_31990 = (state_32022[(2)]);
var inst_31991 = (inst_31983 + (1));
var tmp32033 = inst_31982;
var tmp32034 = inst_31980;
var tmp32035 = inst_31981;
var inst_31980__$1 = tmp32034;
var inst_31981__$1 = tmp32035;
var inst_31982__$1 = tmp32033;
var inst_31983__$1 = inst_31991;
var state_32022__$1 = (function (){var statearr_32041 = state_32022;
(statearr_32041[(11)] = inst_31982__$1);

(statearr_32041[(12)] = inst_31980__$1);

(statearr_32041[(16)] = inst_31990);

(statearr_32041[(13)] = inst_31981__$1);

(statearr_32041[(14)] = inst_31983__$1);

return statearr_32041;
})();
var statearr_32042_32072 = state_32022__$1;
(statearr_32042_32072[(2)] = null);

(statearr_32042_32072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (9))){
var inst_31980 = (state_32022[(12)]);
var inst_31994 = (state_32022[(10)]);
var inst_31994__$1 = cljs.core.seq.call(null,inst_31980);
var state_32022__$1 = (function (){var statearr_32043 = state_32022;
(statearr_32043[(10)] = inst_31994__$1);

return statearr_32043;
})();
if(inst_31994__$1){
var statearr_32044_32073 = state_32022__$1;
(statearr_32044_32073[(1)] = (12));

} else {
var statearr_32045_32074 = state_32022__$1;
(statearr_32045_32074[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (5))){
var inst_31971 = (state_32022[(2)]);
var inst_31972 = cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_31973 = play_cljs.core.on_show.call(null,screen);
var inst_31978 = cljs.core.deref.call(null,self__.preloads);
var inst_31979 = cljs.core.seq.call(null,inst_31978);
var inst_31980 = inst_31979;
var inst_31981 = null;
var inst_31982 = (0);
var inst_31983 = (0);
var state_32022__$1 = (function (){var statearr_32046 = state_32022;
(statearr_32046[(11)] = inst_31982);

(statearr_32046[(12)] = inst_31980);

(statearr_32046[(17)] = inst_31971);

(statearr_32046[(13)] = inst_31981);

(statearr_32046[(18)] = inst_31972);

(statearr_32046[(14)] = inst_31983);

(statearr_32046[(19)] = inst_31973);

return statearr_32046;
})();
var statearr_32047_32075 = state_32022__$1;
(statearr_32047_32075[(2)] = null);

(statearr_32047_32075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (14))){
var inst_32012 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32048_32076 = state_32022__$1;
(statearr_32048_32076[(2)] = inst_32012);

(statearr_32048_32076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (16))){
var inst_31994 = (state_32022[(10)]);
var inst_32003 = cljs.core.first.call(null,inst_31994);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32022__$1,(18),inst_32003);
} else {
if((state_val_32023 === (10))){
var inst_32014 = (state_32022[(2)]);
var state_32022__$1 = state_32022;
var statearr_32049_32077 = state_32022__$1;
(statearr_32049_32077[(2)] = inst_32014);

(statearr_32049_32077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (18))){
var inst_31994 = (state_32022[(10)]);
var inst_32005 = (state_32022[(2)]);
var inst_32006 = cljs.core.next.call(null,inst_31994);
var inst_31980 = inst_32006;
var inst_31981 = null;
var inst_31982 = (0);
var inst_31983 = (0);
var state_32022__$1 = (function (){var statearr_32050 = state_32022;
(statearr_32050[(11)] = inst_31982);

(statearr_32050[(12)] = inst_31980);

(statearr_32050[(13)] = inst_31981);

(statearr_32050[(20)] = inst_32005);

(statearr_32050[(14)] = inst_31983);

return statearr_32050;
})();
var statearr_32051_32078 = state_32022__$1;
(statearr_32051_32078[(2)] = null);

(statearr_32051_32078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32023 === (8))){
var inst_31981 = (state_32022[(13)]);
var inst_31983 = (state_32022[(14)]);
var inst_31988 = cljs.core._nth.call(null,inst_31981,inst_31983);
var state_32022__$1 = state_32022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32022__$1,(11),inst_31988);
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
});})(c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;
return ((function (switch__22546__auto__,c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function() {
var play_cljs$core$create_game_$_state_machine__22547__auto__ = null;
var play_cljs$core$create_game_$_state_machine__22547__auto____0 = (function (){
var statearr_32055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32055[(0)] = play_cljs$core$create_game_$_state_machine__22547__auto__);

(statearr_32055[(1)] = (1));

return statearr_32055;
});
var play_cljs$core$create_game_$_state_machine__22547__auto____1 = (function (state_32022){
while(true){
var ret_value__22548__auto__ = (function (){try{while(true){
var result__22549__auto__ = switch__22546__auto__.call(null,state_32022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22549__auto__;
}
break;
}
}catch (e32056){if((e32056 instanceof Object)){
var ex__22550__auto__ = e32056;
var statearr_32057_32079 = state_32022;
(statearr_32057_32079[(5)] = ex__22550__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32080 = state_32022;
state_32022 = G__32080;
continue;
} else {
return ret_value__22548__auto__;
}
break;
}
});
play_cljs$core$create_game_$_state_machine__22547__auto__ = function(state_32022){
switch(arguments.length){
case 0:
return play_cljs$core$create_game_$_state_machine__22547__auto____0.call(this);
case 1:
return play_cljs$core$create_game_$_state_machine__22547__auto____1.call(this,state_32022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_cljs$core$create_game_$_state_machine__22547__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$create_game_$_state_machine__22547__auto____0;
play_cljs$core$create_game_$_state_machine__22547__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$create_game_$_state_machine__22547__auto____1;
return play_cljs$core$create_game_$_state_machine__22547__auto__;
})()
;})(switch__22546__auto__,c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var state__22660__auto__ = (function (){var statearr_32058 = f__22659__auto__.call(null);
(statearr_32058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22658__auto__);

return statearr_32058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22660__auto__);
});})(c__22658__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

return c__22658__auto__;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.getBasis = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","p5","js/p5",-237683270,null)], null)),new cljs.core.Symbol(null,"hidden-state-atom","hidden-state-atom",1737146278,null),new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"preloads","preloads",-1034105580,null),new cljs.core.Symbol(null,"meta31960","meta31960",1323344699,null)], null);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core31959.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core31959.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core31959";

play_cljs.core.t_play_cljs$core31959.cljs$lang$ctorPrWriter = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"play-cljs.core/t_play_cljs$core31959");
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.__GT_t_play_cljs$core31959 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function play_cljs$core$create_game_$___GT_t_play_cljs$core31959(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta31960){
return (new play_cljs.core.t_play_cljs$core31959(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta31960));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

}

return (new play_cljs.core.t_play_cljs$core31959(width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=core.js.map?rel=1488085475303