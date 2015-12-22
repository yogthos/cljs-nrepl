goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11328__i = 0, G__11328__a = new Array(arguments.length -  0);
while (G__11328__i < G__11328__a.length) {G__11328__a[G__11328__i] = arguments[G__11328__i + 0]; ++G__11328__i;}
  args = new cljs.core.IndexedSeq(G__11328__a,0);
} 
return G__11327__delegate.call(this,args);};
G__11327.cljs$lang$maxFixedArity = 0;
G__11327.cljs$lang$applyTo = (function (arglist__11329){
var args = cljs.core.seq(arglist__11329);
return G__11327__delegate(args);
});
G__11327.cljs$core$IFn$_invoke$arity$variadic = G__11327__delegate;
return G__11327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11331__i = 0, G__11331__a = new Array(arguments.length -  0);
while (G__11331__i < G__11331__a.length) {G__11331__a[G__11331__i] = arguments[G__11331__i + 0]; ++G__11331__i;}
  args = new cljs.core.IndexedSeq(G__11331__a,0);
} 
return G__11330__delegate.call(this,args);};
G__11330.cljs$lang$maxFixedArity = 0;
G__11330.cljs$lang$applyTo = (function (arglist__11332){
var args = cljs.core.seq(arglist__11332);
return G__11330__delegate(args);
});
G__11330.cljs$core$IFn$_invoke$arity$variadic = G__11330__delegate;
return G__11330;
})()
;

return null;
});
