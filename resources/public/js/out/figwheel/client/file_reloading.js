// Compiled by ClojureScript 1.9.473 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19438__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19438__auto__){
return or__19438__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("goog/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19438__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24839_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24839_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24844 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24845 = null;
var count__24846 = (0);
var i__24847 = (0);
while(true){
if((i__24847 < count__24846)){
var n = cljs.core._nth.call(null,chunk__24845,i__24847);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24848 = seq__24844;
var G__24849 = chunk__24845;
var G__24850 = count__24846;
var G__24851 = (i__24847 + (1));
seq__24844 = G__24848;
chunk__24845 = G__24849;
count__24846 = G__24850;
i__24847 = G__24851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24844);
if(temp__4657__auto__){
var seq__24844__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24844__$1)){
var c__20257__auto__ = cljs.core.chunk_first.call(null,seq__24844__$1);
var G__24852 = cljs.core.chunk_rest.call(null,seq__24844__$1);
var G__24853 = c__20257__auto__;
var G__24854 = cljs.core.count.call(null,c__20257__auto__);
var G__24855 = (0);
seq__24844 = G__24852;
chunk__24845 = G__24853;
count__24846 = G__24854;
i__24847 = G__24855;
continue;
} else {
var n = cljs.core.first.call(null,seq__24844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24856 = cljs.core.next.call(null,seq__24844__$1);
var G__24857 = null;
var G__24858 = (0);
var G__24859 = (0);
seq__24844 = G__24856;
chunk__24845 = G__24857;
count__24846 = G__24858;
i__24847 = G__24859;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24910_24921 = cljs.core.seq.call(null,deps);
var chunk__24911_24922 = null;
var count__24912_24923 = (0);
var i__24913_24924 = (0);
while(true){
if((i__24913_24924 < count__24912_24923)){
var dep_24925 = cljs.core._nth.call(null,chunk__24911_24922,i__24913_24924);
topo_sort_helper_STAR_.call(null,dep_24925,(depth + (1)),state);

var G__24926 = seq__24910_24921;
var G__24927 = chunk__24911_24922;
var G__24928 = count__24912_24923;
var G__24929 = (i__24913_24924 + (1));
seq__24910_24921 = G__24926;
chunk__24911_24922 = G__24927;
count__24912_24923 = G__24928;
i__24913_24924 = G__24929;
continue;
} else {
var temp__4657__auto___24930 = cljs.core.seq.call(null,seq__24910_24921);
if(temp__4657__auto___24930){
var seq__24910_24931__$1 = temp__4657__auto___24930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24910_24931__$1)){
var c__20257__auto___24932 = cljs.core.chunk_first.call(null,seq__24910_24931__$1);
var G__24933 = cljs.core.chunk_rest.call(null,seq__24910_24931__$1);
var G__24934 = c__20257__auto___24932;
var G__24935 = cljs.core.count.call(null,c__20257__auto___24932);
var G__24936 = (0);
seq__24910_24921 = G__24933;
chunk__24911_24922 = G__24934;
count__24912_24923 = G__24935;
i__24913_24924 = G__24936;
continue;
} else {
var dep_24937 = cljs.core.first.call(null,seq__24910_24931__$1);
topo_sort_helper_STAR_.call(null,dep_24937,(depth + (1)),state);

var G__24938 = cljs.core.next.call(null,seq__24910_24931__$1);
var G__24939 = null;
var G__24940 = (0);
var G__24941 = (0);
seq__24910_24921 = G__24938;
chunk__24911_24922 = G__24939;
count__24912_24923 = G__24940;
i__24913_24924 = G__24941;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24914){
var vec__24918 = p__24914;
var seq__24919 = cljs.core.seq.call(null,vec__24918);
var first__24920 = cljs.core.first.call(null,seq__24919);
var seq__24919__$1 = cljs.core.next.call(null,seq__24919);
var x = first__24920;
var xs = seq__24919__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24918,seq__24919,first__24920,seq__24919__$1,x,xs,get_deps__$1){
return (function (p1__24860_SHARP_){
return clojure.set.difference.call(null,p1__24860_SHARP_,x);
});})(vec__24918,seq__24919,first__24920,seq__24919__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24954 = cljs.core.seq.call(null,provides);
var chunk__24955 = null;
var count__24956 = (0);
var i__24957 = (0);
while(true){
if((i__24957 < count__24956)){
var prov = cljs.core._nth.call(null,chunk__24955,i__24957);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24958_24966 = cljs.core.seq.call(null,requires);
var chunk__24959_24967 = null;
var count__24960_24968 = (0);
var i__24961_24969 = (0);
while(true){
if((i__24961_24969 < count__24960_24968)){
var req_24970 = cljs.core._nth.call(null,chunk__24959_24967,i__24961_24969);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24970,prov);

var G__24971 = seq__24958_24966;
var G__24972 = chunk__24959_24967;
var G__24973 = count__24960_24968;
var G__24974 = (i__24961_24969 + (1));
seq__24958_24966 = G__24971;
chunk__24959_24967 = G__24972;
count__24960_24968 = G__24973;
i__24961_24969 = G__24974;
continue;
} else {
var temp__4657__auto___24975 = cljs.core.seq.call(null,seq__24958_24966);
if(temp__4657__auto___24975){
var seq__24958_24976__$1 = temp__4657__auto___24975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24958_24976__$1)){
var c__20257__auto___24977 = cljs.core.chunk_first.call(null,seq__24958_24976__$1);
var G__24978 = cljs.core.chunk_rest.call(null,seq__24958_24976__$1);
var G__24979 = c__20257__auto___24977;
var G__24980 = cljs.core.count.call(null,c__20257__auto___24977);
var G__24981 = (0);
seq__24958_24966 = G__24978;
chunk__24959_24967 = G__24979;
count__24960_24968 = G__24980;
i__24961_24969 = G__24981;
continue;
} else {
var req_24982 = cljs.core.first.call(null,seq__24958_24976__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24982,prov);

var G__24983 = cljs.core.next.call(null,seq__24958_24976__$1);
var G__24984 = null;
var G__24985 = (0);
var G__24986 = (0);
seq__24958_24966 = G__24983;
chunk__24959_24967 = G__24984;
count__24960_24968 = G__24985;
i__24961_24969 = G__24986;
continue;
}
} else {
}
}
break;
}

var G__24987 = seq__24954;
var G__24988 = chunk__24955;
var G__24989 = count__24956;
var G__24990 = (i__24957 + (1));
seq__24954 = G__24987;
chunk__24955 = G__24988;
count__24956 = G__24989;
i__24957 = G__24990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24954);
if(temp__4657__auto__){
var seq__24954__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24954__$1)){
var c__20257__auto__ = cljs.core.chunk_first.call(null,seq__24954__$1);
var G__24991 = cljs.core.chunk_rest.call(null,seq__24954__$1);
var G__24992 = c__20257__auto__;
var G__24993 = cljs.core.count.call(null,c__20257__auto__);
var G__24994 = (0);
seq__24954 = G__24991;
chunk__24955 = G__24992;
count__24956 = G__24993;
i__24957 = G__24994;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24954__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24962_24995 = cljs.core.seq.call(null,requires);
var chunk__24963_24996 = null;
var count__24964_24997 = (0);
var i__24965_24998 = (0);
while(true){
if((i__24965_24998 < count__24964_24997)){
var req_24999 = cljs.core._nth.call(null,chunk__24963_24996,i__24965_24998);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24999,prov);

var G__25000 = seq__24962_24995;
var G__25001 = chunk__24963_24996;
var G__25002 = count__24964_24997;
var G__25003 = (i__24965_24998 + (1));
seq__24962_24995 = G__25000;
chunk__24963_24996 = G__25001;
count__24964_24997 = G__25002;
i__24965_24998 = G__25003;
continue;
} else {
var temp__4657__auto___25004__$1 = cljs.core.seq.call(null,seq__24962_24995);
if(temp__4657__auto___25004__$1){
var seq__24962_25005__$1 = temp__4657__auto___25004__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24962_25005__$1)){
var c__20257__auto___25006 = cljs.core.chunk_first.call(null,seq__24962_25005__$1);
var G__25007 = cljs.core.chunk_rest.call(null,seq__24962_25005__$1);
var G__25008 = c__20257__auto___25006;
var G__25009 = cljs.core.count.call(null,c__20257__auto___25006);
var G__25010 = (0);
seq__24962_24995 = G__25007;
chunk__24963_24996 = G__25008;
count__24964_24997 = G__25009;
i__24965_24998 = G__25010;
continue;
} else {
var req_25011 = cljs.core.first.call(null,seq__24962_25005__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25011,prov);

var G__25012 = cljs.core.next.call(null,seq__24962_25005__$1);
var G__25013 = null;
var G__25014 = (0);
var G__25015 = (0);
seq__24962_24995 = G__25012;
chunk__24963_24996 = G__25013;
count__24964_24997 = G__25014;
i__24965_24998 = G__25015;
continue;
}
} else {
}
}
break;
}

var G__25016 = cljs.core.next.call(null,seq__24954__$1);
var G__25017 = null;
var G__25018 = (0);
var G__25019 = (0);
seq__24954 = G__25016;
chunk__24955 = G__25017;
count__24956 = G__25018;
i__24957 = G__25019;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25024_25028 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25025_25029 = null;
var count__25026_25030 = (0);
var i__25027_25031 = (0);
while(true){
if((i__25027_25031 < count__25026_25030)){
var ns_25032 = cljs.core._nth.call(null,chunk__25025_25029,i__25027_25031);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25032);

var G__25033 = seq__25024_25028;
var G__25034 = chunk__25025_25029;
var G__25035 = count__25026_25030;
var G__25036 = (i__25027_25031 + (1));
seq__25024_25028 = G__25033;
chunk__25025_25029 = G__25034;
count__25026_25030 = G__25035;
i__25027_25031 = G__25036;
continue;
} else {
var temp__4657__auto___25037 = cljs.core.seq.call(null,seq__25024_25028);
if(temp__4657__auto___25037){
var seq__25024_25038__$1 = temp__4657__auto___25037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25024_25038__$1)){
var c__20257__auto___25039 = cljs.core.chunk_first.call(null,seq__25024_25038__$1);
var G__25040 = cljs.core.chunk_rest.call(null,seq__25024_25038__$1);
var G__25041 = c__20257__auto___25039;
var G__25042 = cljs.core.count.call(null,c__20257__auto___25039);
var G__25043 = (0);
seq__25024_25028 = G__25040;
chunk__25025_25029 = G__25041;
count__25026_25030 = G__25042;
i__25027_25031 = G__25043;
continue;
} else {
var ns_25044 = cljs.core.first.call(null,seq__25024_25038__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25044);

var G__25045 = cljs.core.next.call(null,seq__25024_25038__$1);
var G__25046 = null;
var G__25047 = (0);
var G__25048 = (0);
seq__25024_25028 = G__25045;
chunk__25025_25029 = G__25046;
count__25026_25030 = G__25047;
i__25027_25031 = G__25048;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19438__auto__ = goog.require__;
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25049__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25049 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25050__i = 0, G__25050__a = new Array(arguments.length -  0);
while (G__25050__i < G__25050__a.length) {G__25050__a[G__25050__i] = arguments[G__25050__i + 0]; ++G__25050__i;}
  args = new cljs.core.IndexedSeq(G__25050__a,0);
} 
return G__25049__delegate.call(this,args);};
G__25049.cljs$lang$maxFixedArity = 0;
G__25049.cljs$lang$applyTo = (function (arglist__25051){
var args = cljs.core.seq(arglist__25051);
return G__25049__delegate(args);
});
G__25049.cljs$core$IFn$_invoke$arity$variadic = G__25049__delegate;
return G__25049;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25053 = cljs.core._EQ_;
var expr__25054 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25053.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25054))){
var path_parts = ((function (pred__25053,expr__25054){
return (function (p1__25052_SHARP_){
return clojure.string.split.call(null,p1__25052_SHARP_,/[\/\\]/);
});})(pred__25053,expr__25054))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25053,expr__25054){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25056){if((e25056 instanceof Error)){
var e = e25056;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25056;

}
}})());
});
;})(path_parts,sep,root,pred__25053,expr__25054))
} else {
if(cljs.core.truth_(pred__25053.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25054))){
return ((function (pred__25053,expr__25054){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__25053,expr__25054){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25053,expr__25054))
);

return deferred.addErrback(((function (deferred,pred__25053,expr__25054){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25053,expr__25054))
);
});
;})(pred__25053,expr__25054))
} else {
return ((function (pred__25053,expr__25054){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25053,expr__25054))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25057,callback){
var map__25060 = p__25057;
var map__25060__$1 = ((((!((map__25060 == null)))?((((map__25060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25060):map__25060);
var file_msg = map__25060__$1;
var request_url = cljs.core.get.call(null,map__25060__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25060,map__25060__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25060,map__25060__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__){
return (function (state_25084){
var state_val_25085 = (state_25084[(1)]);
if((state_val_25085 === (7))){
var inst_25080 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25086_25106 = state_25084__$1;
(statearr_25086_25106[(2)] = inst_25080);

(statearr_25086_25106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (1))){
var state_25084__$1 = state_25084;
var statearr_25087_25107 = state_25084__$1;
(statearr_25087_25107[(2)] = null);

(statearr_25087_25107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (4))){
var inst_25064 = (state_25084[(7)]);
var inst_25064__$1 = (state_25084[(2)]);
var state_25084__$1 = (function (){var statearr_25088 = state_25084;
(statearr_25088[(7)] = inst_25064__$1);

return statearr_25088;
})();
if(cljs.core.truth_(inst_25064__$1)){
var statearr_25089_25108 = state_25084__$1;
(statearr_25089_25108[(1)] = (5));

} else {
var statearr_25090_25109 = state_25084__$1;
(statearr_25090_25109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (6))){
var state_25084__$1 = state_25084;
var statearr_25091_25110 = state_25084__$1;
(statearr_25091_25110[(2)] = null);

(statearr_25091_25110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (3))){
var inst_25082 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25084__$1,inst_25082);
} else {
if((state_val_25085 === (2))){
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25085 === (11))){
var inst_25076 = (state_25084[(2)]);
var state_25084__$1 = (function (){var statearr_25092 = state_25084;
(statearr_25092[(8)] = inst_25076);

return statearr_25092;
})();
var statearr_25093_25111 = state_25084__$1;
(statearr_25093_25111[(2)] = null);

(statearr_25093_25111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (9))){
var inst_25068 = (state_25084[(9)]);
var inst_25070 = (state_25084[(10)]);
var inst_25072 = inst_25070.call(null,inst_25068);
var state_25084__$1 = state_25084;
var statearr_25094_25112 = state_25084__$1;
(statearr_25094_25112[(2)] = inst_25072);

(statearr_25094_25112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (5))){
var inst_25064 = (state_25084[(7)]);
var inst_25066 = figwheel.client.file_reloading.blocking_load.call(null,inst_25064);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(8),inst_25066);
} else {
if((state_val_25085 === (10))){
var inst_25068 = (state_25084[(9)]);
var inst_25074 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25068);
var state_25084__$1 = state_25084;
var statearr_25095_25113 = state_25084__$1;
(statearr_25095_25113[(2)] = inst_25074);

(statearr_25095_25113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (8))){
var inst_25064 = (state_25084[(7)]);
var inst_25070 = (state_25084[(10)]);
var inst_25068 = (state_25084[(2)]);
var inst_25069 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25070__$1 = cljs.core.get.call(null,inst_25069,inst_25064);
var state_25084__$1 = (function (){var statearr_25096 = state_25084;
(statearr_25096[(9)] = inst_25068);

(statearr_25096[(10)] = inst_25070__$1);

return statearr_25096;
})();
if(cljs.core.truth_(inst_25070__$1)){
var statearr_25097_25114 = state_25084__$1;
(statearr_25097_25114[(1)] = (9));

} else {
var statearr_25098_25115 = state_25084__$1;
(statearr_25098_25115[(1)] = (10));

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
});})(c__21907__auto__))
;
return ((function (switch__21795__auto__,c__21907__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21796__auto__ = null;
var figwheel$client$file_reloading$state_machine__21796__auto____0 = (function (){
var statearr_25102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25102[(0)] = figwheel$client$file_reloading$state_machine__21796__auto__);

(statearr_25102[(1)] = (1));

return statearr_25102;
});
var figwheel$client$file_reloading$state_machine__21796__auto____1 = (function (state_25084){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_25084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e25103){if((e25103 instanceof Object)){
var ex__21799__auto__ = e25103;
var statearr_25104_25116 = state_25084;
(statearr_25104_25116[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25117 = state_25084;
state_25084 = G__25117;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21796__auto__ = function(state_25084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21796__auto____1.call(this,state_25084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21796__auto____0;
figwheel$client$file_reloading$state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21796__auto____1;
return figwheel$client$file_reloading$state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__))
})();
var state__21909__auto__ = (function (){var statearr_25105 = f__21908__auto__.call(null);
(statearr_25105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_25105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__))
);

return c__21907__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25118,callback){
var map__25121 = p__25118;
var map__25121__$1 = ((((!((map__25121 == null)))?((((map__25121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25121):map__25121);
var file_msg = map__25121__$1;
var namespace = cljs.core.get.call(null,map__25121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25121,map__25121__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25121,map__25121__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25123){
var map__25126 = p__25123;
var map__25126__$1 = ((((!((map__25126 == null)))?((((map__25126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25126):map__25126);
var file_msg = map__25126__$1;
var namespace = cljs.core.get.call(null,map__25126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19426__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19426__auto__){
var or__19438__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19438__auto__)){
return or__19438__auto__;
} else {
var or__19438__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19438__auto____$1)){
return or__19438__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19426__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25128,callback){
var map__25131 = p__25128;
var map__25131__$1 = ((((!((map__25131 == null)))?((((map__25131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25131):map__25131);
var file_msg = map__25131__$1;
var request_url = cljs.core.get.call(null,map__25131__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25131__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21907__auto___25235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto___25235,out){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto___25235,out){
return (function (state_25217){
var state_val_25218 = (state_25217[(1)]);
if((state_val_25218 === (1))){
var inst_25191 = cljs.core.seq.call(null,files);
var inst_25192 = cljs.core.first.call(null,inst_25191);
var inst_25193 = cljs.core.next.call(null,inst_25191);
var inst_25194 = files;
var state_25217__$1 = (function (){var statearr_25219 = state_25217;
(statearr_25219[(7)] = inst_25192);

(statearr_25219[(8)] = inst_25194);

(statearr_25219[(9)] = inst_25193);

return statearr_25219;
})();
var statearr_25220_25236 = state_25217__$1;
(statearr_25220_25236[(2)] = null);

(statearr_25220_25236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (2))){
var inst_25194 = (state_25217[(8)]);
var inst_25200 = (state_25217[(10)]);
var inst_25199 = cljs.core.seq.call(null,inst_25194);
var inst_25200__$1 = cljs.core.first.call(null,inst_25199);
var inst_25201 = cljs.core.next.call(null,inst_25199);
var inst_25202 = (inst_25200__$1 == null);
var inst_25203 = cljs.core.not.call(null,inst_25202);
var state_25217__$1 = (function (){var statearr_25221 = state_25217;
(statearr_25221[(11)] = inst_25201);

(statearr_25221[(10)] = inst_25200__$1);

return statearr_25221;
})();
if(inst_25203){
var statearr_25222_25237 = state_25217__$1;
(statearr_25222_25237[(1)] = (4));

} else {
var statearr_25223_25238 = state_25217__$1;
(statearr_25223_25238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (3))){
var inst_25215 = (state_25217[(2)]);
var state_25217__$1 = state_25217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25217__$1,inst_25215);
} else {
if((state_val_25218 === (4))){
var inst_25200 = (state_25217[(10)]);
var inst_25205 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25200);
var state_25217__$1 = state_25217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25217__$1,(7),inst_25205);
} else {
if((state_val_25218 === (5))){
var inst_25211 = cljs.core.async.close_BANG_.call(null,out);
var state_25217__$1 = state_25217;
var statearr_25224_25239 = state_25217__$1;
(statearr_25224_25239[(2)] = inst_25211);

(statearr_25224_25239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (6))){
var inst_25213 = (state_25217[(2)]);
var state_25217__$1 = state_25217;
var statearr_25225_25240 = state_25217__$1;
(statearr_25225_25240[(2)] = inst_25213);

(statearr_25225_25240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25218 === (7))){
var inst_25201 = (state_25217[(11)]);
var inst_25207 = (state_25217[(2)]);
var inst_25208 = cljs.core.async.put_BANG_.call(null,out,inst_25207);
var inst_25194 = inst_25201;
var state_25217__$1 = (function (){var statearr_25226 = state_25217;
(statearr_25226[(8)] = inst_25194);

(statearr_25226[(12)] = inst_25208);

return statearr_25226;
})();
var statearr_25227_25241 = state_25217__$1;
(statearr_25227_25241[(2)] = null);

(statearr_25227_25241[(1)] = (2));


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
});})(c__21907__auto___25235,out))
;
return ((function (switch__21795__auto__,c__21907__auto___25235,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto____0 = (function (){
var statearr_25231 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25231[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto__);

(statearr_25231[(1)] = (1));

return statearr_25231;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto____1 = (function (state_25217){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_25217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e25232){if((e25232 instanceof Object)){
var ex__21799__auto__ = e25232;
var statearr_25233_25242 = state_25217;
(statearr_25233_25242[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25243 = state_25217;
state_25217 = G__25243;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto__ = function(state_25217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto____1.call(this,state_25217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto___25235,out))
})();
var state__21909__auto__ = (function (){var statearr_25234 = f__21908__auto__.call(null);
(statearr_25234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto___25235);

return statearr_25234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto___25235,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25244,opts){
var map__25248 = p__25244;
var map__25248__$1 = ((((!((map__25248 == null)))?((((map__25248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25248):map__25248);
var eval_body = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19426__auto__ = eval_body;
if(cljs.core.truth_(and__19426__auto__)){
return typeof eval_body === 'string';
} else {
return and__19426__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25250){var e = e25250;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25251_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25251_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25260){
var vec__25261 = p__25260;
var k = cljs.core.nth.call(null,vec__25261,(0),null);
var v = cljs.core.nth.call(null,vec__25261,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25264){
var vec__25265 = p__25264;
var k = cljs.core.nth.call(null,vec__25265,(0),null);
var v = cljs.core.nth.call(null,vec__25265,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25271,p__25272){
var map__25520 = p__25271;
var map__25520__$1 = ((((!((map__25520 == null)))?((((map__25520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25520):map__25520);
var opts = map__25520__$1;
var before_jsload = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25520__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25521 = p__25272;
var map__25521__$1 = ((((!((map__25521 == null)))?((((map__25521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25521):map__25521);
var msg = map__25521__$1;
var files = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21908__auto__ = (function (){var switch__21795__auto__ = ((function (c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25675){
var state_val_25676 = (state_25675[(1)]);
if((state_val_25676 === (7))){
var inst_25537 = (state_25675[(7)]);
var inst_25538 = (state_25675[(8)]);
var inst_25535 = (state_25675[(9)]);
var inst_25536 = (state_25675[(10)]);
var inst_25543 = cljs.core._nth.call(null,inst_25536,inst_25538);
var inst_25544 = figwheel.client.file_reloading.eval_body.call(null,inst_25543,opts);
var inst_25545 = (inst_25538 + (1));
var tmp25677 = inst_25537;
var tmp25678 = inst_25535;
var tmp25679 = inst_25536;
var inst_25535__$1 = tmp25678;
var inst_25536__$1 = tmp25679;
var inst_25537__$1 = tmp25677;
var inst_25538__$1 = inst_25545;
var state_25675__$1 = (function (){var statearr_25680 = state_25675;
(statearr_25680[(11)] = inst_25544);

(statearr_25680[(7)] = inst_25537__$1);

(statearr_25680[(8)] = inst_25538__$1);

(statearr_25680[(9)] = inst_25535__$1);

(statearr_25680[(10)] = inst_25536__$1);

return statearr_25680;
})();
var statearr_25681_25767 = state_25675__$1;
(statearr_25681_25767[(2)] = null);

(statearr_25681_25767[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (20))){
var inst_25578 = (state_25675[(12)]);
var inst_25586 = figwheel.client.file_reloading.sort_files.call(null,inst_25578);
var state_25675__$1 = state_25675;
var statearr_25682_25768 = state_25675__$1;
(statearr_25682_25768[(2)] = inst_25586);

(statearr_25682_25768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (27))){
var state_25675__$1 = state_25675;
var statearr_25683_25769 = state_25675__$1;
(statearr_25683_25769[(2)] = null);

(statearr_25683_25769[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (1))){
var inst_25527 = (state_25675[(13)]);
var inst_25524 = before_jsload.call(null,files);
var inst_25525 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25526 = (function (){return ((function (inst_25527,inst_25524,inst_25525,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25268_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25268_SHARP_);
});
;})(inst_25527,inst_25524,inst_25525,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25527__$1 = cljs.core.filter.call(null,inst_25526,files);
var inst_25528 = cljs.core.not_empty.call(null,inst_25527__$1);
var state_25675__$1 = (function (){var statearr_25684 = state_25675;
(statearr_25684[(14)] = inst_25525);

(statearr_25684[(15)] = inst_25524);

(statearr_25684[(13)] = inst_25527__$1);

return statearr_25684;
})();
if(cljs.core.truth_(inst_25528)){
var statearr_25685_25770 = state_25675__$1;
(statearr_25685_25770[(1)] = (2));

} else {
var statearr_25686_25771 = state_25675__$1;
(statearr_25686_25771[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (24))){
var state_25675__$1 = state_25675;
var statearr_25687_25772 = state_25675__$1;
(statearr_25687_25772[(2)] = null);

(statearr_25687_25772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (39))){
var inst_25628 = (state_25675[(16)]);
var state_25675__$1 = state_25675;
var statearr_25688_25773 = state_25675__$1;
(statearr_25688_25773[(2)] = inst_25628);

(statearr_25688_25773[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (46))){
var inst_25670 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25689_25774 = state_25675__$1;
(statearr_25689_25774[(2)] = inst_25670);

(statearr_25689_25774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (4))){
var inst_25572 = (state_25675[(2)]);
var inst_25573 = cljs.core.List.EMPTY;
var inst_25574 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25573);
var inst_25575 = (function (){return ((function (inst_25572,inst_25573,inst_25574,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25269_SHARP_){
var and__19426__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25269_SHARP_);
if(cljs.core.truth_(and__19426__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25269_SHARP_));
} else {
return and__19426__auto__;
}
});
;})(inst_25572,inst_25573,inst_25574,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25576 = cljs.core.filter.call(null,inst_25575,files);
var inst_25577 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25578 = cljs.core.concat.call(null,inst_25576,inst_25577);
var state_25675__$1 = (function (){var statearr_25690 = state_25675;
(statearr_25690[(17)] = inst_25574);

(statearr_25690[(12)] = inst_25578);

(statearr_25690[(18)] = inst_25572);

return statearr_25690;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25691_25775 = state_25675__$1;
(statearr_25691_25775[(1)] = (16));

} else {
var statearr_25692_25776 = state_25675__$1;
(statearr_25692_25776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (15))){
var inst_25562 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25693_25777 = state_25675__$1;
(statearr_25693_25777[(2)] = inst_25562);

(statearr_25693_25777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (21))){
var inst_25588 = (state_25675[(19)]);
var inst_25588__$1 = (state_25675[(2)]);
var inst_25589 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25588__$1);
var state_25675__$1 = (function (){var statearr_25694 = state_25675;
(statearr_25694[(19)] = inst_25588__$1);

return statearr_25694;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25675__$1,(22),inst_25589);
} else {
if((state_val_25676 === (31))){
var inst_25673 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25675__$1,inst_25673);
} else {
if((state_val_25676 === (32))){
var inst_25628 = (state_25675[(16)]);
var inst_25633 = inst_25628.cljs$lang$protocol_mask$partition0$;
var inst_25634 = (inst_25633 & (64));
var inst_25635 = inst_25628.cljs$core$ISeq$;
var inst_25636 = (cljs.core.PROTOCOL_SENTINEL === inst_25635);
var inst_25637 = (inst_25634) || (inst_25636);
var state_25675__$1 = state_25675;
if(cljs.core.truth_(inst_25637)){
var statearr_25695_25778 = state_25675__$1;
(statearr_25695_25778[(1)] = (35));

} else {
var statearr_25696_25779 = state_25675__$1;
(statearr_25696_25779[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (40))){
var inst_25650 = (state_25675[(20)]);
var inst_25649 = (state_25675[(2)]);
var inst_25650__$1 = cljs.core.get.call(null,inst_25649,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25651 = cljs.core.get.call(null,inst_25649,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25652 = cljs.core.not_empty.call(null,inst_25650__$1);
var state_25675__$1 = (function (){var statearr_25697 = state_25675;
(statearr_25697[(20)] = inst_25650__$1);

(statearr_25697[(21)] = inst_25651);

return statearr_25697;
})();
if(cljs.core.truth_(inst_25652)){
var statearr_25698_25780 = state_25675__$1;
(statearr_25698_25780[(1)] = (41));

} else {
var statearr_25699_25781 = state_25675__$1;
(statearr_25699_25781[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (33))){
var state_25675__$1 = state_25675;
var statearr_25700_25782 = state_25675__$1;
(statearr_25700_25782[(2)] = false);

(statearr_25700_25782[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (13))){
var inst_25548 = (state_25675[(22)]);
var inst_25552 = cljs.core.chunk_first.call(null,inst_25548);
var inst_25553 = cljs.core.chunk_rest.call(null,inst_25548);
var inst_25554 = cljs.core.count.call(null,inst_25552);
var inst_25535 = inst_25553;
var inst_25536 = inst_25552;
var inst_25537 = inst_25554;
var inst_25538 = (0);
var state_25675__$1 = (function (){var statearr_25701 = state_25675;
(statearr_25701[(7)] = inst_25537);

(statearr_25701[(8)] = inst_25538);

(statearr_25701[(9)] = inst_25535);

(statearr_25701[(10)] = inst_25536);

return statearr_25701;
})();
var statearr_25702_25783 = state_25675__$1;
(statearr_25702_25783[(2)] = null);

(statearr_25702_25783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (22))){
var inst_25591 = (state_25675[(23)]);
var inst_25592 = (state_25675[(24)]);
var inst_25588 = (state_25675[(19)]);
var inst_25596 = (state_25675[(25)]);
var inst_25591__$1 = (state_25675[(2)]);
var inst_25592__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25591__$1);
var inst_25593 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591__$1;
var res = inst_25592__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25591,inst_25592,inst_25588,inst_25596,inst_25591__$1,inst_25592__$1,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25270_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25270_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25591,inst_25592,inst_25588,inst_25596,inst_25591__$1,inst_25592__$1,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25594 = cljs.core.filter.call(null,inst_25593,inst_25591__$1);
var inst_25595 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25596__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25595);
var inst_25597 = cljs.core.not_empty.call(null,inst_25596__$1);
var state_25675__$1 = (function (){var statearr_25703 = state_25675;
(statearr_25703[(23)] = inst_25591__$1);

(statearr_25703[(26)] = inst_25594);

(statearr_25703[(24)] = inst_25592__$1);

(statearr_25703[(25)] = inst_25596__$1);

return statearr_25703;
})();
if(cljs.core.truth_(inst_25597)){
var statearr_25704_25784 = state_25675__$1;
(statearr_25704_25784[(1)] = (23));

} else {
var statearr_25705_25785 = state_25675__$1;
(statearr_25705_25785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (36))){
var state_25675__$1 = state_25675;
var statearr_25706_25786 = state_25675__$1;
(statearr_25706_25786[(2)] = false);

(statearr_25706_25786[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (41))){
var inst_25650 = (state_25675[(20)]);
var inst_25654 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25655 = cljs.core.map.call(null,inst_25654,inst_25650);
var inst_25656 = cljs.core.pr_str.call(null,inst_25655);
var inst_25657 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25656)].join('');
var inst_25658 = figwheel.client.utils.log.call(null,inst_25657);
var state_25675__$1 = state_25675;
var statearr_25707_25787 = state_25675__$1;
(statearr_25707_25787[(2)] = inst_25658);

(statearr_25707_25787[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (43))){
var inst_25651 = (state_25675[(21)]);
var inst_25661 = (state_25675[(2)]);
var inst_25662 = cljs.core.not_empty.call(null,inst_25651);
var state_25675__$1 = (function (){var statearr_25708 = state_25675;
(statearr_25708[(27)] = inst_25661);

return statearr_25708;
})();
if(cljs.core.truth_(inst_25662)){
var statearr_25709_25788 = state_25675__$1;
(statearr_25709_25788[(1)] = (44));

} else {
var statearr_25710_25789 = state_25675__$1;
(statearr_25710_25789[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (29))){
var inst_25591 = (state_25675[(23)]);
var inst_25628 = (state_25675[(16)]);
var inst_25594 = (state_25675[(26)]);
var inst_25592 = (state_25675[(24)]);
var inst_25588 = (state_25675[(19)]);
var inst_25596 = (state_25675[(25)]);
var inst_25624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25627 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25628,inst_25594,inst_25592,inst_25588,inst_25596,inst_25624,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25626){
var map__25711 = p__25626;
var map__25711__$1 = ((((!((map__25711 == null)))?((((map__25711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25711):map__25711);
var namespace = cljs.core.get.call(null,map__25711__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25628,inst_25594,inst_25592,inst_25588,inst_25596,inst_25624,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25628__$1 = cljs.core.group_by.call(null,inst_25627,inst_25594);
var inst_25630 = (inst_25628__$1 == null);
var inst_25631 = cljs.core.not.call(null,inst_25630);
var state_25675__$1 = (function (){var statearr_25713 = state_25675;
(statearr_25713[(16)] = inst_25628__$1);

(statearr_25713[(28)] = inst_25624);

return statearr_25713;
})();
if(inst_25631){
var statearr_25714_25790 = state_25675__$1;
(statearr_25714_25790[(1)] = (32));

} else {
var statearr_25715_25791 = state_25675__$1;
(statearr_25715_25791[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (44))){
var inst_25651 = (state_25675[(21)]);
var inst_25664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25651);
var inst_25665 = cljs.core.pr_str.call(null,inst_25664);
var inst_25666 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25665)].join('');
var inst_25667 = figwheel.client.utils.log.call(null,inst_25666);
var state_25675__$1 = state_25675;
var statearr_25716_25792 = state_25675__$1;
(statearr_25716_25792[(2)] = inst_25667);

(statearr_25716_25792[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (6))){
var inst_25569 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25717_25793 = state_25675__$1;
(statearr_25717_25793[(2)] = inst_25569);

(statearr_25717_25793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (28))){
var inst_25594 = (state_25675[(26)]);
var inst_25621 = (state_25675[(2)]);
var inst_25622 = cljs.core.not_empty.call(null,inst_25594);
var state_25675__$1 = (function (){var statearr_25718 = state_25675;
(statearr_25718[(29)] = inst_25621);

return statearr_25718;
})();
if(cljs.core.truth_(inst_25622)){
var statearr_25719_25794 = state_25675__$1;
(statearr_25719_25794[(1)] = (29));

} else {
var statearr_25720_25795 = state_25675__$1;
(statearr_25720_25795[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (25))){
var inst_25592 = (state_25675[(24)]);
var inst_25608 = (state_25675[(2)]);
var inst_25609 = cljs.core.not_empty.call(null,inst_25592);
var state_25675__$1 = (function (){var statearr_25721 = state_25675;
(statearr_25721[(30)] = inst_25608);

return statearr_25721;
})();
if(cljs.core.truth_(inst_25609)){
var statearr_25722_25796 = state_25675__$1;
(statearr_25722_25796[(1)] = (26));

} else {
var statearr_25723_25797 = state_25675__$1;
(statearr_25723_25797[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (34))){
var inst_25644 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
if(cljs.core.truth_(inst_25644)){
var statearr_25724_25798 = state_25675__$1;
(statearr_25724_25798[(1)] = (38));

} else {
var statearr_25725_25799 = state_25675__$1;
(statearr_25725_25799[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (17))){
var state_25675__$1 = state_25675;
var statearr_25726_25800 = state_25675__$1;
(statearr_25726_25800[(2)] = recompile_dependents);

(statearr_25726_25800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (3))){
var state_25675__$1 = state_25675;
var statearr_25727_25801 = state_25675__$1;
(statearr_25727_25801[(2)] = null);

(statearr_25727_25801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (12))){
var inst_25565 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25728_25802 = state_25675__$1;
(statearr_25728_25802[(2)] = inst_25565);

(statearr_25728_25802[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (2))){
var inst_25527 = (state_25675[(13)]);
var inst_25534 = cljs.core.seq.call(null,inst_25527);
var inst_25535 = inst_25534;
var inst_25536 = null;
var inst_25537 = (0);
var inst_25538 = (0);
var state_25675__$1 = (function (){var statearr_25729 = state_25675;
(statearr_25729[(7)] = inst_25537);

(statearr_25729[(8)] = inst_25538);

(statearr_25729[(9)] = inst_25535);

(statearr_25729[(10)] = inst_25536);

return statearr_25729;
})();
var statearr_25730_25803 = state_25675__$1;
(statearr_25730_25803[(2)] = null);

(statearr_25730_25803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (23))){
var inst_25591 = (state_25675[(23)]);
var inst_25594 = (state_25675[(26)]);
var inst_25592 = (state_25675[(24)]);
var inst_25588 = (state_25675[(19)]);
var inst_25596 = (state_25675[(25)]);
var inst_25599 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25601 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25599,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25600){
var map__25731 = p__25600;
var map__25731__$1 = ((((!((map__25731 == null)))?((((map__25731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25731):map__25731);
var request_url = cljs.core.get.call(null,map__25731__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25599,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25602 = cljs.core.reverse.call(null,inst_25596);
var inst_25603 = cljs.core.map.call(null,inst_25601,inst_25602);
var inst_25604 = cljs.core.pr_str.call(null,inst_25603);
var inst_25605 = figwheel.client.utils.log.call(null,inst_25604);
var state_25675__$1 = (function (){var statearr_25733 = state_25675;
(statearr_25733[(31)] = inst_25599);

return statearr_25733;
})();
var statearr_25734_25804 = state_25675__$1;
(statearr_25734_25804[(2)] = inst_25605);

(statearr_25734_25804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (35))){
var state_25675__$1 = state_25675;
var statearr_25735_25805 = state_25675__$1;
(statearr_25735_25805[(2)] = true);

(statearr_25735_25805[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (19))){
var inst_25578 = (state_25675[(12)]);
var inst_25584 = figwheel.client.file_reloading.expand_files.call(null,inst_25578);
var state_25675__$1 = state_25675;
var statearr_25736_25806 = state_25675__$1;
(statearr_25736_25806[(2)] = inst_25584);

(statearr_25736_25806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (11))){
var state_25675__$1 = state_25675;
var statearr_25737_25807 = state_25675__$1;
(statearr_25737_25807[(2)] = null);

(statearr_25737_25807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (9))){
var inst_25567 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25738_25808 = state_25675__$1;
(statearr_25738_25808[(2)] = inst_25567);

(statearr_25738_25808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (5))){
var inst_25537 = (state_25675[(7)]);
var inst_25538 = (state_25675[(8)]);
var inst_25540 = (inst_25538 < inst_25537);
var inst_25541 = inst_25540;
var state_25675__$1 = state_25675;
if(cljs.core.truth_(inst_25541)){
var statearr_25739_25809 = state_25675__$1;
(statearr_25739_25809[(1)] = (7));

} else {
var statearr_25740_25810 = state_25675__$1;
(statearr_25740_25810[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (14))){
var inst_25548 = (state_25675[(22)]);
var inst_25557 = cljs.core.first.call(null,inst_25548);
var inst_25558 = figwheel.client.file_reloading.eval_body.call(null,inst_25557,opts);
var inst_25559 = cljs.core.next.call(null,inst_25548);
var inst_25535 = inst_25559;
var inst_25536 = null;
var inst_25537 = (0);
var inst_25538 = (0);
var state_25675__$1 = (function (){var statearr_25741 = state_25675;
(statearr_25741[(7)] = inst_25537);

(statearr_25741[(8)] = inst_25538);

(statearr_25741[(9)] = inst_25535);

(statearr_25741[(32)] = inst_25558);

(statearr_25741[(10)] = inst_25536);

return statearr_25741;
})();
var statearr_25742_25811 = state_25675__$1;
(statearr_25742_25811[(2)] = null);

(statearr_25742_25811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (45))){
var state_25675__$1 = state_25675;
var statearr_25743_25812 = state_25675__$1;
(statearr_25743_25812[(2)] = null);

(statearr_25743_25812[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (26))){
var inst_25591 = (state_25675[(23)]);
var inst_25594 = (state_25675[(26)]);
var inst_25592 = (state_25675[(24)]);
var inst_25588 = (state_25675[(19)]);
var inst_25596 = (state_25675[(25)]);
var inst_25611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25613 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25612){
var map__25744 = p__25612;
var map__25744__$1 = ((((!((map__25744 == null)))?((((map__25744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25744):map__25744);
var namespace = cljs.core.get.call(null,map__25744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25744__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25614 = cljs.core.map.call(null,inst_25613,inst_25592);
var inst_25615 = cljs.core.pr_str.call(null,inst_25614);
var inst_25616 = figwheel.client.utils.log.call(null,inst_25615);
var inst_25617 = (function (){var all_files = inst_25588;
var res_SINGLEQUOTE_ = inst_25591;
var res = inst_25592;
var files_not_loaded = inst_25594;
var dependencies_that_loaded = inst_25596;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,inst_25613,inst_25614,inst_25615,inst_25616,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25591,inst_25594,inst_25592,inst_25588,inst_25596,inst_25611,inst_25613,inst_25614,inst_25615,inst_25616,state_val_25676,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25618 = setTimeout(inst_25617,(10));
var state_25675__$1 = (function (){var statearr_25746 = state_25675;
(statearr_25746[(33)] = inst_25616);

(statearr_25746[(34)] = inst_25611);

return statearr_25746;
})();
var statearr_25747_25813 = state_25675__$1;
(statearr_25747_25813[(2)] = inst_25618);

(statearr_25747_25813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (16))){
var state_25675__$1 = state_25675;
var statearr_25748_25814 = state_25675__$1;
(statearr_25748_25814[(2)] = reload_dependents);

(statearr_25748_25814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (38))){
var inst_25628 = (state_25675[(16)]);
var inst_25646 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25628);
var state_25675__$1 = state_25675;
var statearr_25749_25815 = state_25675__$1;
(statearr_25749_25815[(2)] = inst_25646);

(statearr_25749_25815[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (30))){
var state_25675__$1 = state_25675;
var statearr_25750_25816 = state_25675__$1;
(statearr_25750_25816[(2)] = null);

(statearr_25750_25816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (10))){
var inst_25548 = (state_25675[(22)]);
var inst_25550 = cljs.core.chunked_seq_QMARK_.call(null,inst_25548);
var state_25675__$1 = state_25675;
if(inst_25550){
var statearr_25751_25817 = state_25675__$1;
(statearr_25751_25817[(1)] = (13));

} else {
var statearr_25752_25818 = state_25675__$1;
(statearr_25752_25818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (18))){
var inst_25582 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
if(cljs.core.truth_(inst_25582)){
var statearr_25753_25819 = state_25675__$1;
(statearr_25753_25819[(1)] = (19));

} else {
var statearr_25754_25820 = state_25675__$1;
(statearr_25754_25820[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (42))){
var state_25675__$1 = state_25675;
var statearr_25755_25821 = state_25675__$1;
(statearr_25755_25821[(2)] = null);

(statearr_25755_25821[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (37))){
var inst_25641 = (state_25675[(2)]);
var state_25675__$1 = state_25675;
var statearr_25756_25822 = state_25675__$1;
(statearr_25756_25822[(2)] = inst_25641);

(statearr_25756_25822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25676 === (8))){
var inst_25535 = (state_25675[(9)]);
var inst_25548 = (state_25675[(22)]);
var inst_25548__$1 = cljs.core.seq.call(null,inst_25535);
var state_25675__$1 = (function (){var statearr_25757 = state_25675;
(statearr_25757[(22)] = inst_25548__$1);

return statearr_25757;
})();
if(inst_25548__$1){
var statearr_25758_25823 = state_25675__$1;
(statearr_25758_25823[(1)] = (10));

} else {
var statearr_25759_25824 = state_25675__$1;
(statearr_25759_25824[(1)] = (11));

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
}
});})(c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21795__auto__,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto____0 = (function (){
var statearr_25763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25763[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto__);

(statearr_25763[(1)] = (1));

return statearr_25763;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto____1 = (function (state_25675){
while(true){
var ret_value__21797__auto__ = (function (){try{while(true){
var result__21798__auto__ = switch__21795__auto__.call(null,state_25675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21798__auto__;
}
break;
}
}catch (e25764){if((e25764 instanceof Object)){
var ex__21799__auto__ = e25764;
var statearr_25765_25825 = state_25675;
(statearr_25765_25825[(5)] = ex__21799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25826 = state_25675;
state_25675 = G__25826;
continue;
} else {
return ret_value__21797__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto__ = function(state_25675){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto____1.call(this,state_25675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21796__auto__;
})()
;})(switch__21795__auto__,c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21909__auto__ = (function (){var statearr_25766 = f__21908__auto__.call(null);
(statearr_25766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21907__auto__);

return statearr_25766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21909__auto__);
});})(c__21907__auto__,map__25520,map__25520__$1,opts,before_jsload,on_jsload,reload_dependents,map__25521,map__25521__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21907__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25829,link){
var map__25832 = p__25829;
var map__25832__$1 = ((((!((map__25832 == null)))?((((map__25832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25832.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25832):map__25832);
var file = cljs.core.get.call(null,map__25832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25832,map__25832__$1,file){
return (function (p1__25827_SHARP_,p2__25828_SHARP_){
if(cljs.core._EQ_.call(null,p1__25827_SHARP_,p2__25828_SHARP_)){
return p1__25827_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25832,map__25832__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25838){
var map__25839 = p__25838;
var map__25839__$1 = ((((!((map__25839 == null)))?((((map__25839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25839):map__25839);
var match_length = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25839__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25834_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25834_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25841 = [];
var len__20551__auto___25844 = arguments.length;
var i__20552__auto___25845 = (0);
while(true){
if((i__20552__auto___25845 < len__20551__auto___25844)){
args25841.push((arguments[i__20552__auto___25845]));

var G__25846 = (i__20552__auto___25845 + (1));
i__20552__auto___25845 = G__25846;
continue;
} else {
}
break;
}

var G__25843 = args25841.length;
switch (G__25843) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25841.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25848_SHARP_,p2__25849_SHARP_){
return cljs.core.assoc.call(null,p1__25848_SHARP_,cljs.core.get.call(null,p2__25849_SHARP_,key),p2__25849_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25850){
var map__25853 = p__25850;
var map__25853__$1 = ((((!((map__25853 == null)))?((((map__25853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25853):map__25853);
var f_data = map__25853__$1;
var file = cljs.core.get.call(null,map__25853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25855,files_msg){
var map__25862 = p__25855;
var map__25862__$1 = ((((!((map__25862 == null)))?((((map__25862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25862):map__25862);
var opts = map__25862__$1;
var on_cssload = cljs.core.get.call(null,map__25862__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25864_25868 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25865_25869 = null;
var count__25866_25870 = (0);
var i__25867_25871 = (0);
while(true){
if((i__25867_25871 < count__25866_25870)){
var f_25872 = cljs.core._nth.call(null,chunk__25865_25869,i__25867_25871);
figwheel.client.file_reloading.reload_css_file.call(null,f_25872);

var G__25873 = seq__25864_25868;
var G__25874 = chunk__25865_25869;
var G__25875 = count__25866_25870;
var G__25876 = (i__25867_25871 + (1));
seq__25864_25868 = G__25873;
chunk__25865_25869 = G__25874;
count__25866_25870 = G__25875;
i__25867_25871 = G__25876;
continue;
} else {
var temp__4657__auto___25877 = cljs.core.seq.call(null,seq__25864_25868);
if(temp__4657__auto___25877){
var seq__25864_25878__$1 = temp__4657__auto___25877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25864_25878__$1)){
var c__20257__auto___25879 = cljs.core.chunk_first.call(null,seq__25864_25878__$1);
var G__25880 = cljs.core.chunk_rest.call(null,seq__25864_25878__$1);
var G__25881 = c__20257__auto___25879;
var G__25882 = cljs.core.count.call(null,c__20257__auto___25879);
var G__25883 = (0);
seq__25864_25868 = G__25880;
chunk__25865_25869 = G__25881;
count__25866_25870 = G__25882;
i__25867_25871 = G__25883;
continue;
} else {
var f_25884 = cljs.core.first.call(null,seq__25864_25878__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25884);

var G__25885 = cljs.core.next.call(null,seq__25864_25878__$1);
var G__25886 = null;
var G__25887 = (0);
var G__25888 = (0);
seq__25864_25868 = G__25885;
chunk__25865_25869 = G__25886;
count__25866_25870 = G__25887;
i__25867_25871 = G__25888;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25862,map__25862__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25862,map__25862__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1488147688582