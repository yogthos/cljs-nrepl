// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.js');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('goog.crypt.base64');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require("cljs.core$macros");
cljs.js.debug_prn = (function cljs$js$debug_prn(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9969 = arguments.length;
var i__5202__auto___9970 = (0);
while(true){
if((i__5202__auto___9970 < len__5201__auto___9969)){
args__5208__auto__.push((arguments[i__5202__auto___9970]));

var G__9971 = (i__5202__auto___9970 + (1));
i__5202__auto___9970 = G__9971;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR_9968 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_err_fn_STAR_;

try{return cljs.core.apply.call(null,cljs.core.println,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9968;
}});

cljs.js.debug_prn.cljs$lang$maxFixedArity = (0);

cljs.js.debug_prn.cljs$lang$applyTo = (function (seq9967){
return cljs.js.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9967));
});
/**
 * Given a namespace as a symbol return the relative path sans extension
 */
cljs.js.ns__GT_relpath = (function cljs$js$ns__GT_relpath(ns_sym){
return clojure.string.replace.call(null,cljs.analyzer.munge_path.call(null,ns_sym),".","/");
});
cljs.js.file__GT_ns = (function cljs$js$file__GT_ns(file){
var lib_name = cljs.core.subs.call(null,clojure.string.replace.call(null,file,"/","."),(0),(cljs.core.count.call(null,file) - (5)));
return cljs.core.symbol.call(null,cljs.core.demunge.call(null,lib_name));
});
cljs.js.atom_QMARK_ = (function cljs$js$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
cljs.js.valid_name_QMARK_ = (function cljs$js$valid_name_QMARK_(x){
return ((x == null)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
cljs.js.valid_opts_QMARK_ = (function cljs$js$valid_opts_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
if(typeof cljs.js._STAR_load_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides a different way to load a library.
 *   Whatever function *load-fn* is bound to will be passed two arguments - a
 *   map and a callback function: The map will have the following keys:
 * 
 *   :name   - the name of the library (a symbol)
 *   :macros - modifier signaling a macros namespace load
 *   :path   - munged relative library path (a string)
 * 
 *   It is up to the implementor to correctly resolve the corresponding .cljs,
 *   .cljc, or .js resource (the order must be respected). If :macros is true
 *   resolution should only consider .clj or .cljc resources (the order must be
 *   respected). Upon resolution the callback should be invoked with a map
 *   containing the following keys:
 * 
 *   :lang       - the language, :clj or :js
 *   :source     - the source of the library (a string)
 *   :cache      - optional, if a :clj namespace has been precompiled to :js, can
 *              give an analysis cache for faster loads.
 *   :source-map - optional, if a :clj namespace has been precompiled to :js, can
 *              give a V3 source map JSON
 * 
 *   If the resource could not be resolved, the callback should be invoked with
 *   nil.
 */
cljs.js._STAR_load_fn_STAR_ = (function cljs$js$_STAR_load_fn_STAR_(name,cb){
throw (new Error("No *load-fn* set"));
});
}
if(typeof cljs.js._STAR_eval_fn_STAR_ !== 'undefined'){
} else {
/**
 * Each runtime environment provides various ways to eval JavaScript
 *   source. Whatever function *eval-fn* is bound to will be passed a map
 *   containing the following keys:
 * 
 *   :source - the source of the library (string)
 *   :name   - used to unique identify the script (symbol)
 *   :cache  - if the source was originally ClojureScript, will be given the
 *          analysis cache.
 * 
 *   The result of evaluation should be the return value.
 */
cljs.js._STAR_eval_fn_STAR_ = (function cljs$js$_STAR_eval_fn_STAR_(js_source){
throw (new Error("No *eval-fn* set"));
});
}
/**
 * A default JavaScript evaluation function.
 */
cljs.js.js_eval = (function cljs$js$js_eval(p__9972){
var map__9975 = p__9972;
var map__9975__$1 = ((((!((map__9975 == null)))?((((map__9975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9975):map__9975);
var resource = map__9975__$1;
var source = cljs.core.get.call(null,map__9975__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});
cljs.js.wrap_error = (function cljs$js$wrap_error(ex){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),ex], null);
});
/**
 * Construct an empty compiler state. Required to invoke analyze, compile,
 * eval and eval-str.
 */
cljs.js.empty_state = (function cljs$js$empty_state(var_args){
var args9977 = [];
var len__5201__auto___9982 = arguments.length;
var i__5202__auto___9983 = (0);
while(true){
if((i__5202__auto___9983 < len__5201__auto___9982)){
args9977.push((arguments[i__5202__auto___9983]));

var G__9984 = (i__5202__auto___9983 + (1));
i__5202__auto___9983 = G__9984;
continue;
} else {
}
break;
}

var G__9979 = args9977.length;
switch (G__9979) {
case 0:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9977.length)].join('')));

}
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__9980 = cljs.env.default_compiler_env.call(null);
cljs.core.swap_BANG_.call(null,G__9980,((function (G__9980){
return (function (state){
});})(G__9980))
);

return G__9980;
});

cljs.js.empty_state.cljs$core$IFn$_invoke$arity$1 = (function (init){
var G__9981 = cljs.js.empty_state.call(null);
cljs.core.swap_BANG_.call(null,G__9981,init);

return G__9981;
});

cljs.js.empty_state.cljs$lang$maxFixedArity = 1;
cljs.js.load_analysis_cache_BANG_ = (function cljs$js$load_analysis_cache_BANG_(state,ns,cache){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null),cache);
});
cljs.js.load_source_map_BANG_ = (function cljs$js$load_source_map_BANG_(state,ns,sm_json){
var sm = cljs.source_map.decode.call(null,JSON.parse(sm_json));
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),ns], null),sm);
});
cljs.js.sm_data = (function cljs$js$sm_data(){
return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),cljs.core.sorted_map.call(null),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0),new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(0)], null));
});
cljs.js.prefix = (function cljs$js$prefix(s,pre){
return [cljs.core.str(pre),cljs.core.str(s)].join('');
});
cljs.js.append_source_map = (function cljs$js$append_source_map(state,name,source,sb,sm_data,p__9986){
var map__9991 = p__9986;
var map__9991__$1 = ((((!((map__9991 == null)))?((((map__9991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9991):map__9991);
var opts = map__9991__$1;
var output_dir = cljs.core.get.call(null,map__9991__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var asset_path = cljs.core.get.call(null,map__9991__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var t = (new Date()).valueOf();
var smn = (cljs.core.truth_(name)?clojure.string.replace.call(null,cljs.core.munge.call(null,[cljs.core.str(name)].join('')),".","/"):[cljs.core.str("cljs-"),cljs.core.str(t)].join(''));
var ts = (new Date()).valueOf();
var out = (function (){var or__4143__auto__ = output_dir;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return asset_path;
}
})();
var src = (function (){var G__9993 = [cljs.core.str(smn),cljs.core.str(".cljs?rel="),cljs.core.str(ts)].join('');
var G__9993__$1 = (cljs.core.truth_(out)?cljs.js.prefix.call(null,G__9993,[cljs.core.str(out),cljs.core.str("/")].join('')):G__9993);
return G__9993__$1;
})();
var file = (function (){var G__9994 = [cljs.core.str(smn),cljs.core.str(".js?rel="),cljs.core.str(ts)].join('');
var G__9994__$1 = (cljs.core.truth_(out)?cljs.js.prefix.call(null,G__9994,[cljs.core.str(out),cljs.core.str("/")].join('')):G__9994);
return G__9994__$1;
})();
var json = cljs.source_map.encode.call(null,cljs.core.PersistentArrayMap.fromArray([src,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)], true, false),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lines","lines",-700165781),(new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(sm_data) + (3)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,json);
} else {
}

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-maps","source-maps",-552851697),name], null),cljs.source_map.invert_reverse_map.call(null,new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(sm_data)));

return sb.append([cljs.core.str("\n//# sourceURL="),cljs.core.str(file),cljs.core.str("\n//# sourceMappingURL=data:application/json;base64,"),cljs.core.str(goog.crypt.base64.encodeString(json))].join(''));
});
cljs.js.eval_str_STAR_;
cljs.js._STAR_loaded_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
/**
 * Like cljs.core/run!, but for an async procedure, and with the
 *   ability to break prior to processing the entire collection.
 * 
 *   Chains successive calls to the supplied procedure for items in
 *   the collection. The procedure should accept an item from the
 *   collection and a callback of one argument. If the break? predicate,
 *   when applied to the procedure callback value, yields a truthy
 *   result, terminates early calling the supplied cb with the callback
 *   value. Otherwise, when complete, calls cb with nil.
 */
cljs.js.run_async_BANG_ = (function cljs$js$run_async_BANG_(proc,coll,break_QMARK_,cb){
if(cljs.core.seq.call(null,coll)){
return proc.call(null,cljs.core.first.call(null,coll),(function (res){
if(cljs.core.truth_(break_QMARK_.call(null,res))){
return cb.call(null,res);
} else {
return cljs$js$run_async_BANG_.call(null,proc,cljs.core.rest.call(null,coll),break_QMARK_,cb);
}
}));
} else {
return cb.call(null,null);
}
});
cljs.js.require;
cljs.js.process_deps = (function cljs$js$process_deps(bound_vars,names,opts,cb){
return cljs.js.run_async_BANG_.call(null,(function (name,cb__$1){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb__$1);
}),names,new cljs.core.Keyword(null,"error","error",-978969032),cb);
});
cljs.js.process_macros_deps = (function cljs$js$process_macros_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(cache))),cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),cb);
});
cljs.js.process_libs_deps = (function cljs$js$process_libs_deps(bound_vars,cache,opts,cb){
return cljs.js.process_deps.call(null,bound_vars,cljs.core.distinct.call(null,cljs.core.concat.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(cache)),cljs.core.vals.call(null,new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(cache)))),cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),cb);
});
cljs.js.require = (function cljs$js$require(var_args){
var args9995 = [];
var len__5201__auto___10006 = arguments.length;
var i__5202__auto___10007 = (0);
while(true){
if((i__5202__auto___10007 < len__5201__auto___10006)){
args9995.push((arguments[i__5202__auto___10007]));

var G__10008 = (i__5202__auto___10007 + (1));
i__5202__auto___10007 = G__10008;
continue;
} else {
}
break;
}

var G__9997 = args9995.length;
switch (G__9997) {
case 2:
return cljs.js.require.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.js.require.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.require.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.require.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9995.length)].join('')));

}
});

cljs.js.require.cljs$core$IFn$_invoke$arity$2 = (function (name,cb){
return cljs.js.require.call(null,name,null,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$3 = (function (name,opts,cb){
return cljs.js.require.call(null,null,name,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$4 = (function (bound_vars,name,opts,cb){
return cljs.js.require.call(null,bound_vars,name,null,opts,cb);
});

cljs.js.require.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,name,reload,opts,cb){
var bound_vars__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),cljs.env.default_compiler_env.call(null),new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),bound_vars);
var name__$1 = (function (){var G__9998 = name;
var G__9998__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"macro-ns","macro-ns",-507154934).cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name.call(null,G__9998):G__9998);
return G__9998__$1;
})();
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload","reload",863702807),reload)){
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.disj,name__$1);
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),reload)){
cljs.core.reset_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.PersistentHashSet.EMPTY);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,[cljs.core.str("Loading "),cljs.core.str(name__$1),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?" macros":null)),cljs.core.str(" namespace")].join(''));
} else {
}

if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.js._STAR_loaded_STAR_),name__$1))){
var env = new cljs.core.Keyword(null,"*env*","*env*",1860548436).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"macros","macros",811339431),new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name__$1)], null),((function (env,bound_vars__$1,name__$1){
return (function (resource){
if((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)))))].join('')));
}

if(cljs.core.truth_(resource)){
var map__10000 = resource;
var map__10000__$1 = ((((!((map__10000 == null)))?((((map__10000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10000):map__10000);
var lang = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var cache = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var source_map = cljs.core.get.call(null,map__10000__$1,new cljs.core.Keyword(null,"source-map","source-map",1706252311));
var pred__10002 = cljs.core._EQ_;
var expr__10003 = lang;
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__10003))){
return cljs.js.eval_str_STAR_.call(null,bound_vars__$1,source,name__$1,opts,((function (pred__10002,expr__10003,map__10000,map__10000__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,name__$1);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});})(pred__10002,expr__10003,map__10000,map__10000__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1))
);
} else {
if(cljs.core.truth_(pred__10002.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__10003))){
return cljs.js.process_macros_deps.call(null,bound_vars__$1,cache,opts,((function (pred__10002,expr__10003,map__10000,map__10000__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1){
return (function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
return cljs.js.process_libs_deps.call(null,bound_vars__$1,cache,opts,((function (pred__10002,expr__10003,map__10000,map__10000__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var res__$2 = (function (){try{new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1).call(null,resource);

if(cljs.core.truth_(cache)){
cljs.js.load_analysis_cache_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name__$1,cache);
} else {
}

if(cljs.core.truth_(source_map)){
return cljs.js.load_source_map_BANG_.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1),name__$1,source_map);
} else {
return null;
}
}catch (e10005){var cause = e10005;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,[cljs.core.str("Could not require "),cljs.core.str(name__$1)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
cljs.core.swap_BANG_.call(null,cljs.js._STAR_loaded_STAR_,cljs.core.conj,name__$1);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
}
});})(pred__10002,expr__10003,map__10000,map__10000__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1))
);
}
});})(pred__10002,expr__10003,map__10000,map__10000__$1,lang,source,cache,source_map,env,bound_vars__$1,name__$1))
);
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join(''))));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,cljs.analyzer.error_message.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"undeclared-macros-ns","undeclared-macros-ns",-438029430):new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),name__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,name__$1)], null)))));
}
});})(env,bound_vars__$1,name__$1))
);
}catch (e9999){var cause = e9999;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,env,[cljs.core.str("Could not require "),cljs.core.str(name__$1)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null));
}
});

cljs.js.require.cljs$lang$maxFixedArity = 5;
cljs.js.ns_side_effects;

cljs.js.analyze_deps;
cljs.js.load_deps = (function cljs$js$load_deps(var_args){
var args10011 = [];
var len__5201__auto___10015 = arguments.length;
var i__5202__auto___10016 = (0);
while(true){
if((i__5202__auto___10016 < len__5201__auto___10015)){
args10011.push((arguments[i__5202__auto___10016]));

var G__10017 = (i__5202__auto___10016 + (1));
i__5202__auto___10016 = G__10017;
continue;
} else {
}
break;
}

var G__10013 = args10011.length;
switch (G__10013) {
case 5:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10011.length)].join('')));

}
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.load_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Loading dependencies for",lib);
} else {
}

var _STAR_cljs_dep_set_STAR_10014 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_10014){
return (function (p1__10010_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),p1__10010_SHARP_));
});})(_STAR_cljs_dep_set_STAR_10014))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__10010#","p1__10010#",1821415775,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),new cljs.core.Symbol(null,"bound-vars","bound-vars",1684649184,null)),new cljs.core.Symbol(null,"p1__10010#","p1__10010#",1821415775,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))))].join('')));
}

if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
return cljs.js.require.call(null,bound_vars,dep,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"ns","ns",441598760)),((function (dep,_STAR_cljs_dep_set_STAR_10014){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.load_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(dep,_STAR_cljs_dep_set_STAR_10014))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_10014;
}});

cljs.js.load_deps.cljs$lang$maxFixedArity = 6;
cljs.js.analyze_str_STAR_;
cljs.js.analyze_deps = (function cljs$js$analyze_deps(var_args){
var args10020 = [];
var len__5201__auto___10030 = arguments.length;
var i__5202__auto___10031 = (0);
while(true){
if((i__5202__auto___10031 < len__5201__auto___10030)){
args10020.push((arguments[i__5202__auto___10031]));

var G__10032 = (i__5202__auto___10031 + (1));
i__5202__auto___10031 = G__10032;
continue;
} else {
}
break;
}

var G__10022 = args10020.length;
switch (G__10022) {
case 5:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10020.length)].join('')));

}
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,lib,deps,cb){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,deps,null,cb);
});

cljs.js.analyze_deps.cljs$core$IFn$_invoke$arity$6 = (function (bound_vars,ana_env,lib,deps,opts,cb){
var compiler = cljs.core.deref.call(null,new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars));
var _STAR_cljs_dep_set_STAR_10023 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_.call(null,((function (_STAR_cljs_dep_set_STAR_10023,compiler){
return (function (p1__10019_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars),p1__10019_SHARP_));
});})(_STAR_cljs_dep_set_STAR_10023,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612).cljs$core$IFn$_invoke$arity$1(bound_vars))))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__10019#","p1__10019#",1034625469,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),cljs.core.list(new cljs.core.Keyword(null,"*cljs-dep-set*","*cljs-dep-set*",-73964612),new cljs.core.Symbol(null,"bound-vars","bound-vars",1684649184,null)),new cljs.core.Symbol(null,"p1__10019#","p1__10019#",1034625469,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))))].join('')));
}

if(cljs.core.seq.call(null,deps)){
var dep = cljs.core.first.call(null,deps);
try{return new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106).cljs$core$IFn$_invoke$arity$1(bound_vars).call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),dep,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,dep)], null),((function (dep,_STAR_cljs_dep_set_STAR_10023,compiler){
return (function (resource){
if((cljs.core.map_QMARK_.call(null,resource)) || ((resource == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("*load-fn* may only return a map or nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"resource","resource",1892430363,null)))))].join('')));
}

if(cljs.core.truth_(resource)){
var map__10025 = resource;
var map__10025__$1 = ((((!((map__10025 == null)))?((((map__10025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10025):map__10025);
var name = cljs.core.get.call(null,map__10025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var lang = cljs.core.get.call(null,map__10025__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
var source = cljs.core.get.call(null,map__10025__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var pred__10027 = cljs.core._EQ_;
var expr__10028 = lang;
if(cljs.core.truth_(pred__10027.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),expr__10028))){
return cljs.js.analyze_str_STAR_.call(null,bound_vars,source,name,opts,((function (pred__10027,expr__10028,map__10025,map__10025__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_10023,compiler){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cb.call(null,res);
}
});})(pred__10027,expr__10028,map__10025,map__10025__$1,name,lang,source,dep,_STAR_cljs_dep_set_STAR_10023,compiler))
);
} else {
if(cljs.core.truth_(pred__10027.call(null,new cljs.core.Keyword(null,"js","js",1768080579),expr__10028))){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,lib,cljs.core.next.call(null,deps),opts,cb);
} else {
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Invalid :lang specified "),cljs.core.str(lang),cljs.core.str(", only :clj or :js allowed")].join('')));
}
}
} else {
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,cljs.analyzer.error_message.call(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name.call(null,dep)], null)))));
}
});})(dep,_STAR_cljs_dep_set_STAR_10023,compiler))
);
}catch (e10024){var cause = e10024;
return cb.call(null,cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not analyze dep "),cljs.core.str(dep)].join(''),cause)));
}} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_10023;
}});

cljs.js.analyze_deps.cljs$lang$maxFixedArity = 6;
cljs.js.load_macros = (function cljs$js$load_macros(bound_vars,k,macros,reload,reloads,opts,cb){
if(cljs.core.seq.call(null,macros)){
var nsym = cljs.core.first.call(null,cljs.core.vals.call(null,macros));
var k__$1 = (function (){var or__4143__auto__ = reload.call(null,k);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var or__4143__auto____$1 = cljs.core.get_in.call(null,reloads,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,nsym], null));
if(cljs.core.truth_(or__4143__auto____$1)){
return or__4143__auto____$1;
} else {
var or__4143__auto____$2 = (function (){var and__4131__auto__ = cljs.core._EQ_.call(null,nsym,cljs.core.name);
if(and__4131__auto__){
var and__4131__auto____$1 = new cljs.core.Keyword(null,"*reload-macros*","*reload-macros*",-820635806).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4131__auto____$1)){
return new cljs.core.Keyword(null,"reload","reload",863702807);
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})();
if(cljs.core.truth_(or__4143__auto____$2)){
return or__4143__auto____$2;
} else {
return null;
}
}
}
})();
return cljs.js.require.call(null,bound_vars,nsym,k__$1,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933),true),new cljs.core.Keyword(null,"context","context",-830191113)),new cljs.core.Keyword(null,"ns","ns",441598760)),((function (nsym,k__$1){
return (function (res){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cljs$js$load_macros.call(null,bound_vars,k__$1,cljs.core.next.call(null,macros),reload,reloads,opts,cb);
} else {
return cb.call(null,res);
}
});})(nsym,k__$1))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
});
cljs.js.ns_side_effects = (function cljs$js$ns_side_effects(var_args){
var args10034 = [];
var len__5201__auto___10050 = arguments.length;
var i__5202__auto___10051 = (0);
while(true){
if((i__5202__auto___10051 < len__5201__auto___10050)){
args10034.push((arguments[i__5202__auto___10051]));

var G__10052 = (i__5202__auto___10051 + (1));
i__5202__auto___10051 = G__10052;
continue;
} else {
}
break;
}

var G__10036 = args10034.length;
switch (G__10036) {
case 5:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10034.length)].join('')));

}
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$5 = (function (bound_vars,ana_env,ast,opts,cb){
return cljs.js.ns_side_effects.call(null,false,bound_vars,ana_env,ast,opts,cb);
});

cljs.js.ns_side_effects.cljs$core$IFn$_invoke$arity$6 = (function (load,bound_vars,ana_env,p__10037,opts,cb){
var map__10038 = p__10037;
var map__10038__$1 = ((((!((map__10038 == null)))?((((map__10038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10038):map__10038);
var ast = map__10038__$1;
var op = cljs.core.get.call(null,map__10038__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Namespace side effects for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),op)){
var map__10040 = ast;
var map__10040__$1 = ((((!((map__10040 == null)))?((((map__10040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10040):map__10040);
var deps = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var uses = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var requires = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var require_macros = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var use_macros = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var reload = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var reloads = cljs.core.get.call(null,map__10040__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars);
var check_uses_and_load_macros = ((function (map__10040,map__10040__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__10038,map__10038__$1,ast,op){
return (function cljs$js$check_uses_and_load_macros(res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var res__$1 = (function (){try{if(cljs.core.truth_((function (){var and__4131__auto__ = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.seq.call(null,uses);
} else {
return and__4131__auto__;
}
})())){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking uses");
} else {
}

cljs.analyzer.check_uses.call(null,uses,env);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
} else {
return null;
}
}catch (e10048){var cause = e10048;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006).cljs$core$IFn$_invoke$arity$1(bound_vars))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,reload,reloads,opts,((function (res__$1,map__10040,map__10040__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__10038,map__10038__$1,ast,op){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Processing :require-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

return cljs.js.load_macros.call(null,bound_vars,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,reloads,reloads,opts,((function (res__$1,map__10040,map__10040__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__10038,map__10038__$1,ast,op){
return (function (res__$3){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$3))){
return cb.call(null,res__$3);
} else {
var res__$4 = (function (){try{if(cljs.core.seq.call(null,use_macros)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Checking :use-macros for",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
} else {
}

cljs.analyzer.check_use_macros.call(null,use_macros,env);
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}catch (e10049){var cause = e10049;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,ana_env,[cljs.core.str("Could not parse ns form "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$4))){
return cb.call(null,res__$4);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
}
});})(res__$1,map__10040,map__10040__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__10038,map__10038__$1,ast,op))
);
}
});})(res__$1,map__10040,map__10040__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__10038,map__10038__$1,ast,op))
);
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
}
}
});})(map__10040,map__10040__$1,deps,uses,requires,require_macros,use_macros,reload,reloads,env,map__10038,map__10038__$1,ast,op))
;
if(cljs.core.truth_((function (){var and__4131__auto__ = load;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.seq.call(null,deps);
} else {
return and__4131__auto__;
}
})())){
return cljs.js.load_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),check_uses_and_load_macros);
} else {
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.core.not.call(null,load);
if(and__4131__auto__){
var and__4131__auto____$1 = new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427).cljs$core$IFn$_invoke$arity$1(bound_vars);
if(cljs.core.truth_(and__4131__auto____$1)){
return cljs.core.seq.call(null,deps);
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})())){
return cljs.js.analyze_deps.call(null,bound_vars,ana_env,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast),deps,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933)),check_uses_and_load_macros);
} else {
return check_uses_and_load_macros.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));

}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),ast], null));
}
});

cljs.js.ns_side_effects.cljs$lang$maxFixedArity = 6;
cljs.js.analyze_str_STAR_ = (function cljs$js$analyze_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var the_ns = (function (){var or__4143__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__10081 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
var G__10081__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10081,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null)):G__10081);
return G__10081__$1;
})();
return ((function (rdr,eof,aenv,the_ns,bound_vars__$1){
return (function cljs$js$analyze_str_STAR__$_analyze_loop(last_ast,ns){
while(true){
var _STAR_compiler_STAR_10093 = cljs.env._STAR_compiler_STAR_;
var _STAR_cljs_ns_STAR_10094 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_10095 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_10096 = cljs.core._STAR_ns_STAR_;
var _STAR_passes_STAR_10097 = cljs.analyzer._STAR_passes_STAR_;
var _STAR_data_readers_STAR_10098 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol10099 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_10100 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns);

cljs.analyzer._STAR_passes_STAR_ = new cljs.core.Keyword(null,"*passes*","*passes*",1335562782).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)], null);
}catch (e10101){var cause = e10101;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__10102 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__10102__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10102,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__10102);
var G__10102__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10102__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true):G__10102__$1);
return G__10102__$2;
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e10103){var cause = e10103;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not analyze "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.call(null,bound_vars__$1,aenv__$1,ast,opts,((function (last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10093,_STAR_cljs_ns_STAR_10094,_STAR_cljs_static_fns_STAR_10095,_STAR_ns_STAR_10096,_STAR_passes_STAR_10097,_STAR_data_readers_STAR_10098,resolve_symbol10099,_STAR_source_map_data_STAR_10100,rdr,eof,aenv,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cljs$js$analyze_str_STAR__$_analyze_loop.call(null,ast,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(last_ast,ns,ast,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10093,_STAR_cljs_ns_STAR_10094,_STAR_cljs_static_fns_STAR_10095,_STAR_ns_STAR_10096,_STAR_passes_STAR_10097,_STAR_data_readers_STAR_10098,resolve_symbol10099,_STAR_source_map_data_STAR_10100,rdr,eof,aenv,the_ns,bound_vars__$1))
);
} else {
var G__10104 = ast;
var G__10105 = ns;
last_ast = G__10104;
ns = G__10105;
continue;
}
}
} else {
return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),last_ast], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_10100;

cljs.tools.reader.resolve_symbol = resolve_symbol10099;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_10098;

cljs.analyzer._STAR_passes_STAR_ = _STAR_passes_STAR_10097;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_10096;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_10095;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_10094;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10093;
}break;
}
});})(rdr,eof,aenv,the_ns,bound_vars__$1))
.call(null,null,the_ns);
});
/**
 * Analyze ClojureScript source. The compiler state will be populated with
 * the results of analyzes. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 * :eval - the eval function to invoke, see *eval-fn*
 * :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value, the actual value is not meaningful. If unsuccessful the
 *   map will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.analyze_str = (function cljs$js$analyze_str(var_args){
var args10106 = [];
var len__5201__auto___10109 = arguments.length;
var i__5202__auto___10110 = (0);
while(true){
if((i__5202__auto___10110 < len__5201__auto___10109)){
args10106.push((arguments[i__5202__auto___10110]));

var G__10111 = (i__5202__auto___10110 + (1));
i__5202__auto___10110 = G__10111;
continue;
} else {
}
break;
}

var G__10108 = args10106.length;
switch (G__10108) {
case 3:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10106.length)].join('')));

}
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.analyze_str.call(null,state,source,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.analyze_str.call(null,state,source,name,null,cb);
});

cljs.js.analyze_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_.call(null,state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"source","source",1206599988,null))))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_.call(null,name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_.call(null,opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))))].join('')));
}

return cljs.js.analyze_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*passes*","*passes*",1335562782),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"passes","passes",-2141861841).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.analyzer._STAR_passes_STAR_;
}
})(),new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.analyze_str.cljs$lang$maxFixedArity = 5;
cljs.js.eval_STAR_ = (function cljs$js$eval_STAR_(bound_vars,form,opts,cb){
var the_ns = (function (){var or__4143__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__10126 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
var G__10126__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10126,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null)):G__10126);
return G__10126__$1;
})();
var _STAR_compiler_STAR_10127 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_10128 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_10129 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_10130 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_10131 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_10132 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol10133 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_10134 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var aenv = cljs.analyzer.empty_env.call(null);
var aenv__$1 = (function (){var G__10135 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__10135__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10135,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__10135);
var G__10135__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10135__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true):G__10135__$1);
return G__10135__$2;
})();
var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e10136){var cause = e10136;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(form)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast,opts,((function (ast,aenv,aenv__$1,res,_STAR_compiler_STAR_10127,_STAR_eval_fn_STAR_10128,_STAR_cljs_ns_STAR_10129,_STAR_cljs_static_fns_STAR_10130,_STAR_ns_STAR_10131,_STAR_data_readers_STAR_10132,resolve_symbol10133,_STAR_source_map_data_STAR_10134,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var src = [cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\")")].join('');
return cb.call(null,cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)));
}
});})(ast,aenv,aenv__$1,res,_STAR_compiler_STAR_10127,_STAR_eval_fn_STAR_10128,_STAR_cljs_ns_STAR_10129,_STAR_cljs_static_fns_STAR_10130,_STAR_ns_STAR_10131,_STAR_data_readers_STAR_10132,resolve_symbol10133,_STAR_source_map_data_STAR_10134,the_ns,bound_vars__$1))
);
} else {
var src = (function (){var sb__5117__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10137_10139 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10138_10140 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_10137_10139,_STAR_print_fn_STAR_10138_10140,sb__5117__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_10127,_STAR_eval_fn_STAR_10128,_STAR_cljs_ns_STAR_10129,_STAR_cljs_static_fns_STAR_10130,_STAR_ns_STAR_10131,_STAR_data_readers_STAR_10132,resolve_symbol10133,_STAR_source_map_data_STAR_10134,the_ns,bound_vars__$1){
return (function (x__5118__auto__){
return sb__5117__auto__.append(x__5118__auto__);
});})(_STAR_print_newline_STAR_10137_10139,_STAR_print_fn_STAR_10138_10140,sb__5117__auto__,ast,aenv,aenv__$1,res,_STAR_compiler_STAR_10127,_STAR_eval_fn_STAR_10128,_STAR_cljs_ns_STAR_10129,_STAR_cljs_static_fns_STAR_10130,_STAR_ns_STAR_10131,_STAR_data_readers_STAR_10132,resolve_symbol10133,_STAR_source_map_data_STAR_10134,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit.call(null,ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10138_10140;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10137_10139;
}
return [cljs.core.str(sb__5117__auto__)].join('');
})();
return cb.call(null,cljs.js._STAR_eval_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),src], null)));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_10134;

cljs.tools.reader.resolve_symbol = resolve_symbol10133;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_10132;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_10131;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_10130;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_10129;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_10128;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10127;
}});
/**
 * Evaluate a single ClojureScript form. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * form (s-expr)
 *   the ClojureScript source
 * 
 * opts (map)
 *   compilation options.
 * 
 *   :eval - the eval function to invoke, see *eval-fn*
 *   :load - library resolution function, see *load-fn*
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the result of evalution. If unsuccessful the map will
 *   contain a key :error with an ex-info instance describing the cause of
 *   failure.
 */
cljs.js.eval = (function cljs$js$eval(var_args){
var args10141 = [];
var len__5201__auto___10144 = arguments.length;
var i__5202__auto___10145 = (0);
while(true){
if((i__5202__auto___10145 < len__5201__auto___10144)){
args10141.push((arguments[i__5202__auto___10145]));

var G__10146 = (i__5202__auto___10145 + (1));
i__5202__auto___10145 = G__10146;
continue;
} else {
}
break;
}

var G__10143 = args10141.length;
switch (G__10143) {
case 3:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10141.length)].join('')));

}
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$3 = (function (state,form,cb){
return cljs.js.eval.call(null,state,form,null,cb);
});

cljs.js.eval.cljs$core$IFn$_invoke$arity$4 = (function (state,form,opts,cb){
return cljs.js.eval_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),form,opts,cb);
});

cljs.js.eval.cljs$lang$maxFixedArity = 4;
cljs.js.compile_str_STAR_ = (function cljs$js$compile_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4143__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__10179 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
var G__10179__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10179,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null)):G__10179);
return G__10179__$1;
})();
return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$compile_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_10193 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_10194 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_10195 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_10196 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_10197 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_10198 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol10199 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_10200 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)], null);
}catch (e10201){var cause = e10201;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__10202 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,cljs.analyzer._STAR_cljs_ns_STAR_));
var G__10202__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10202,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__10202);
var G__10202__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10202__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true):G__10202__$1);
return G__10202__$2;
})();
var ast = (function (){try{return cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts);
}catch (e10203){var cause = e10203;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not compile "),cljs.core.str(name)].join(''),cause));
}})();
sb.append((function (){var sb__5117__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10204_10206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10205_10207 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_10204_10206,_STAR_print_fn_STAR_10205_10207,sb__5117__auto__,aenv__$1,ast,form,res,_STAR_compiler_STAR_10193,_STAR_eval_fn_STAR_10194,_STAR_cljs_ns_STAR_10195,_STAR_cljs_static_fns_STAR_10196,_STAR_ns_STAR_10197,_STAR_data_readers_STAR_10198,resolve_symbol10199,_STAR_source_map_data_STAR_10200,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__5118__auto__){
return sb__5117__auto__.append(x__5118__auto__);
});})(ns,_STAR_print_newline_STAR_10204_10206,_STAR_print_fn_STAR_10205_10207,sb__5117__auto__,aenv__$1,ast,form,res,_STAR_compiler_STAR_10193,_STAR_eval_fn_STAR_10194,_STAR_cljs_ns_STAR_10195,_STAR_cljs_static_fns_STAR_10196,_STAR_ns_STAR_10197,_STAR_data_readers_STAR_10198,resolve_symbol10199,_STAR_source_map_data_STAR_10200,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit.call(null,ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10205_10207;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10204_10206;
}
return [cljs.core.str(sb__5117__auto__)].join('');
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.js.ns_side_effects.call(null,bound_vars__$1,aenv__$1,ast,opts,((function (ns,aenv__$1,ast,form,res,_STAR_compiler_STAR_10193,_STAR_eval_fn_STAR_10194,_STAR_cljs_ns_STAR_10195,_STAR_cljs_static_fns_STAR_10196,_STAR_ns_STAR_10197,_STAR_data_readers_STAR_10198,resolve_symbol10199,_STAR_source_map_data_STAR_10200,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
return cljs$js$compile_str_STAR__$_compile_loop.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast));
}
});})(ns,aenv__$1,ast,form,res,_STAR_compiler_STAR_10193,_STAR_eval_fn_STAR_10194,_STAR_cljs_ns_STAR_10195,_STAR_cljs_static_fns_STAR_10196,_STAR_ns_STAR_10197,_STAR_data_readers_STAR_10198,resolve_symbol10199,_STAR_source_map_data_STAR_10200,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
var G__10208 = ns;
ns = G__10208;
continue;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

return cb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),sb.toString()], null));
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_10200;

cljs.tools.reader.resolve_symbol = resolve_symbol10199;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_10198;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_10197;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_10196;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_10195;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_10194;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10193;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,the_ns);
});
/**
 * Compile ClojureScript source into JavaScript. The parameters:
 * 
 * state (atom)
 *   the compiler state
 * 
 * source (string)
 *   the ClojureScript source
 * 
 * name (symbol)
 *   optional, the name of the source
 * 
 * opts (map)
 *   compilation options.
 * 
 *   :load       - library resolution function, see *load-fn*
 *   :source-map - set to true to generate inline source map information
 * 
 * cb (function)
 *   callback, will be invoked with a map. If successful the map will contain
 *   a key :value with the compilation result (string). If unsuccessful the map
 *   will contain a key :error with an ex-info instance describing the cause
 *   of failure.
 */
cljs.js.compile_str = (function cljs$js$compile_str(var_args){
var args10209 = [];
var len__5201__auto___10212 = arguments.length;
var i__5202__auto___10213 = (0);
while(true){
if((i__5202__auto___10213 < len__5201__auto___10212)){
args10209.push((arguments[i__5202__auto___10213]));

var G__10214 = (i__5202__auto___10213 + (1));
i__5202__auto___10213 = G__10214;
continue;
} else {
}
break;
}

var G__10211 = args10209.length;
switch (G__10211) {
case 3:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10209.length)].join('')));

}
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.compile_str.call(null,state,source,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.compile_str.call(null,state,source,name,null,cb);
});

cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_.call(null,state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"source","source",1206599988,null))))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_.call(null,name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_.call(null,opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))))].join('')));
}

return cljs.js.compile_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.js.sm_data.call(null):null)], null),source,name,opts,cb);
});

cljs.js.compile_str.cljs$lang$maxFixedArity = 5;
cljs.js.eval_str_STAR_ = (function cljs$js$eval_str_STAR_(bound_vars,source,name,opts,cb){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,source,(1),name);
var eof = {};
var aenv = cljs.analyzer.empty_env.call(null);
var sb = (new goog.string.StringBuffer());
var the_ns = (function (){var or__4143__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
}
})();
var bound_vars__$1 = (function (){var G__10249 = cljs.core.merge.call(null,bound_vars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432),the_ns], null));
var G__10249__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10249,new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219),cljs.js.sm_data.call(null)):G__10249);
return G__10249__$1;
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,"Evaluating",name);
} else {
}

return ((function (rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function cljs$js$eval_str_STAR__$_compile_loop(ns){
while(true){
var _STAR_compiler_STAR_10264 = cljs.env._STAR_compiler_STAR_;
var _STAR_eval_fn_STAR_10265 = cljs.js._STAR_eval_fn_STAR_;
var _STAR_cljs_ns_STAR_10266 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_cljs_static_fns_STAR_10267 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
var _STAR_ns_STAR_10268 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_10269 = cljs.tools.reader._STAR_data_readers_STAR_;
var resolve_symbol10270 = cljs.tools.reader.resolve_symbol;
var _STAR_source_map_data_STAR_10271 = cljs.compiler._STAR_source_map_data_STAR_;
cljs.env._STAR_compiler_STAR_ = new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.js._STAR_eval_fn_STAR_ = new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.analyzer._STAR_cljs_ns_STAR_ = ns;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = new cljs.core.Keyword(null,"static-fns","static-fns",-501950748).cljs$core$IFn$_invoke$arity$1(opts);

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.call(null,ns);

cljs.tools.reader._STAR_data_readers_STAR_ = new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

cljs.tools.reader.resolve_symbol = cljs.analyzer.resolve_symbol;

cljs.compiler._STAR_source_map_data_STAR_ = new cljs.core.Keyword(null,"*sm-data*","*sm-data*",1341435219).cljs$core$IFn$_invoke$arity$1(bound_vars__$1);

try{var res = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eof","eof",-489063237),eof,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),rdr)], null);
}catch (e10272){var cause = e10272;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return cb.call(null,res);
} else {
var form = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(!((eof === form))){
var aenv__$1 = (function (){var G__10273 = cljs.core.assoc.call(null,aenv,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace.call(null,ns));
var G__10273__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10273,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(opts)):G__10273);
var G__10273__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.assoc.call(null,G__10273__$1,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true):G__10273__$1);
return G__10273__$2;
})();
var res__$1 = (function (){try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.analyzer.analyze.call(null,aenv__$1,form,null,opts)], null);
}catch (e10274){var cause = e10274;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv__$1,[cljs.core.str("Could not eval "),cljs.core.str(name)].join(''),cause));
}})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
var ast = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res__$1);
var ns_SINGLEQUOTE_ = cljs.analyzer._STAR_cljs_ns_STAR_;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast))){
sb.append([cljs.core.str("goog.provide(\""),cljs.core.str(cljs.core.munge.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ast))),cljs.core.str("\");\n")].join(''));

return cljs.js.ns_side_effects.call(null,true,bound_vars__$1,aenv__$1,ast,opts,((function (ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10264,_STAR_eval_fn_STAR_10265,_STAR_cljs_ns_STAR_10266,_STAR_cljs_static_fns_STAR_10267,_STAR_ns_STAR_10268,_STAR_data_readers_STAR_10269,resolve_symbol10270,_STAR_source_map_data_STAR_10271,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$2))){
return cb.call(null,res__$2);
} else {
return cljs$js$eval_str_STAR__$_compile_loop.call(null,ns_SINGLEQUOTE_);
}
});})(ns,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10264,_STAR_eval_fn_STAR_10265,_STAR_cljs_ns_STAR_10266,_STAR_cljs_static_fns_STAR_10267,_STAR_ns_STAR_10268,_STAR_data_readers_STAR_10269,resolve_symbol10270,_STAR_source_map_data_STAR_10271,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
);
} else {
sb.append((function (){var sb__5117__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_10275_10278 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_10276_10279 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (ns,_STAR_print_newline_STAR_10275_10278,_STAR_print_fn_STAR_10276_10279,sb__5117__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10264,_STAR_eval_fn_STAR_10265,_STAR_cljs_ns_STAR_10266,_STAR_cljs_static_fns_STAR_10267,_STAR_ns_STAR_10268,_STAR_data_readers_STAR_10269,resolve_symbol10270,_STAR_source_map_data_STAR_10271,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (x__5118__auto__){
return sb__5117__auto__.append(x__5118__auto__);
});})(ns,_STAR_print_newline_STAR_10275_10278,_STAR_print_fn_STAR_10276_10279,sb__5117__auto__,ast,ns_SINGLEQUOTE_,aenv__$1,res__$1,form,res,_STAR_compiler_STAR_10264,_STAR_eval_fn_STAR_10265,_STAR_cljs_ns_STAR_10266,_STAR_cljs_static_fns_STAR_10267,_STAR_ns_STAR_10268,_STAR_data_readers_STAR_10269,resolve_symbol10270,_STAR_source_map_data_STAR_10271,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;

try{cljs.compiler.emit.call(null,ast);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_10276_10279;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_10275_10278;
}
return [cljs.core.str(sb__5117__auto__)].join('');
})());

var G__10280 = ns_SINGLEQUOTE_;
ns = G__10280;
continue;
}
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-map","source-map",1706252311).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.append_source_map.call(null,cljs.env._STAR_compiler_STAR_,name,source,sb,cljs.core.deref.call(null,cljs.compiler._STAR_source_map_data_STAR_),opts);
} else {
}

var js_source = sb.toString();
var evalm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"path","path",-188191168),cljs.js.ns__GT_relpath.call(null,name),new cljs.core.Keyword(null,"source","source",-433931539),js_source,new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name], null))], null);
var complete = ((function (ns,js_source,evalm,form,res,_STAR_compiler_STAR_10264,_STAR_eval_fn_STAR_10265,_STAR_cljs_ns_STAR_10266,_STAR_cljs_static_fns_STAR_10267,_STAR_ns_STAR_10268,_STAR_data_readers_STAR_10269,resolve_symbol10270,_STAR_source_map_data_STAR_10271,rdr,eof,aenv,sb,the_ns,bound_vars__$1){
return (function (res__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res__$1))){
return cb.call(null,res__$1);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose","verbose",1694226060).cljs$core$IFn$_invoke$arity$1(opts))){
cljs.js.debug_prn.call(null,js_source);
} else {
}

var res__$2 = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"value","value",305978217),cljs.js._STAR_eval_fn_STAR_.call(null,evalm)], null);
}catch (e10277){var cause = e10277;
return cljs.js.wrap_error.call(null,cljs.analyzer.error.call(null,aenv,"ERROR",cause));
}})();
return cb.call(null,res__$2);
}
});})(ns,js_source,evalm,form,res,_STAR_compiler_STAR_10264,_STAR_eval_fn_STAR_10265,_STAR_cljs_ns_STAR_10266,_STAR_cljs_static_fns_STAR_10267,_STAR_ns_STAR_10268,_STAR_data_readers_STAR_10269,resolve_symbol10270,_STAR_source_map_data_STAR_10271,rdr,eof,aenv,sb,the_ns,bound_vars__$1))
;
var temp__4423__auto__ = new cljs.core.Keyword(null,"cache-source","cache-source",-190922003).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,evalm,complete);
} else {
return complete.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null));
}
}
}
}finally {cljs.compiler._STAR_source_map_data_STAR_ = _STAR_source_map_data_STAR_10271;

cljs.tools.reader.resolve_symbol = resolve_symbol10270;

cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_10269;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_10268;

cljs.analyzer._STAR_cljs_static_fns_STAR_ = _STAR_cljs_static_fns_STAR_10267;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_10266;

cljs.js._STAR_eval_fn_STAR_ = _STAR_eval_fn_STAR_10265;

cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_10264;
}break;
}
});})(rdr,eof,aenv,sb,the_ns,bound_vars__$1))
.call(null,new cljs.core.Keyword(null,"*cljs-ns*","*cljs-ns*",565777432).cljs$core$IFn$_invoke$arity$1(bound_vars__$1));
});
/**
 * Evalute ClojureScript source given as a string. The parameters:
 * 
 *   state (atom)
 *  the compiler state
 * 
 *   source (string)
 *  the ClojureScript source
 * 
 *   name (symbol)
 *  optional, the name of the source
 * 
 *   opts (map)
 *  compilation options.
 * 
 *  :eval         - eval function to invoke, see *eval-fn*
 *  :load         - library resolution function, see *load-fn*
 *  :source-map   - set to true to generate inline source map information
 *  :cache-source - optional, a function to run side-effects with the
 *                  compilation result prior to actual evalution. This function
 *                  takes two arguments, the first is the eval map, the source
 *                  will be under :source. The second argument is a callback of
 *                  one argument. If an error occurs an :error key should be
 *                  supplied.
 * 
 *   cb (function)
 *  callback, will be invoked with a map. If succesful the map will contain
 *  a :value key with the result of evaluation and :ns the current namespace.
 *  If unsuccessful will contain a :error key with an ex-info instance describing
 *  the cause of failure.
 */
cljs.js.eval_str = (function cljs$js$eval_str(var_args){
var args10281 = [];
var len__5201__auto___10284 = arguments.length;
var i__5202__auto___10285 = (0);
while(true){
if((i__5202__auto___10285 < len__5201__auto___10284)){
args10281.push((arguments[i__5202__auto___10285]));

var G__10286 = (i__5202__auto___10285 + (1));
i__5202__auto___10285 = G__10286;
continue;
} else {
}
break;
}

var G__10283 = args10281.length;
switch (G__10283) {
case 3:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10281.length)].join('')));

}
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$3 = (function (state,source,cb){
return cljs.js.eval_str.call(null,state,source,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$4 = (function (state,source,name,cb){
return cljs.js.eval_str.call(null,state,source,name,null,cb);
});

cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5 = (function (state,source,name,opts,cb){
if(cljs.core.truth_(cljs.js.atom_QMARK_.call(null,state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null),new cljs.core.Symbol(null,"state","state",-348086572,null))))].join('')));
}

if(typeof source === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"source","source",1206599988,null))))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_name_QMARK_.call(null,name))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

if(cljs.core.truth_(cljs.js.valid_opts_QMARK_.call(null,opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null))))].join('')));
}

if(cljs.core.fn_QMARK_.call(null,cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null))))].join('')));
}

return cljs.js.eval_str_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"*compiler*","*compiler*",-168190089),state,new cljs.core.Keyword(null,"*data-readers*","*data-readers*",-371480469),cljs.tagged_literals._STAR_cljs_data_readers_STAR_,new cljs.core.Keyword(null,"*analyze-deps*","*analyze-deps*",-29540427),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"analyze-deps","analyze-deps",1000677285).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-macros*","*load-macros*",640729006),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load-macros","load-macros",459797395).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return true;
}
})(),new cljs.core.Keyword(null,"*load-fn*","*load-fn*",2055642106),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"load","load",-1318641184).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_load_fn_STAR_;
}
})(),new cljs.core.Keyword(null,"*eval-fn*","*eval-fn*",-217221128),(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.js._STAR_eval_fn_STAR_;
}
})()], null),source,name,opts,cb);
});

cljs.js.eval_str.cljs$lang$maxFixedArity = 5;

//# sourceMappingURL=js.js.map