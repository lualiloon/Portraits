// Compiled by ClojureScript 0.0-2816 {}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = cljs.core.atom.call(null,null);
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){

return !((cljs.core.deref.call(null,weasel.repl.ws_connection) == null));
});
weasel.repl.process_message = (function (){var method_table__15341__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15342__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15343__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15344__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15345__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"weasel.repl","process-message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15345__auto__,method_table__15341__auto__,prefer_table__15342__auto__,method_cache__15343__auto__,cached_hierarchy__15344__auto__));
})();
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"error","error",-978969032),(function (message){
return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (message){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null);
}catch (e34980){if((e34980 instanceof Error)){
var e = e34980;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e34980;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}})()], null);
}));
/**
* @param {...*} var_args
*/
weasel.repl.repl_print = (function() { 
var repl_print__delegate = function (args){
var temp__4404__auto__ = cljs.core.deref.call(null,weasel.repl.ws_connection);
if(cljs.core.truth_(temp__4404__auto__)){
var conn = temp__4404__auto__;
return clojure.browser.net.transmit.call(null,cljs.core.deref.call(null,weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.apply.call(null,cljs.core.pr_str,args)], null));
} else {
return null;
}
};
var repl_print = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34981__i = 0, G__34981__a = new Array(arguments.length -  0);
while (G__34981__i < G__34981__a.length) {G__34981__a[G__34981__i] = arguments[G__34981__i + 0]; ++G__34981__i;}
  args = new cljs.core.IndexedSeq(G__34981__a,0);
} 
return repl_print__delegate.call(this,args);};
repl_print.cljs$lang$maxFixedArity = 0;
repl_print.cljs$lang$applyTo = (function (arglist__34982){
var args = cljs.core.seq(arglist__34982);
return repl_print__delegate(args);
});
repl_print.cljs$core$IFn$_invoke$arity$variadic = repl_print__delegate;
return repl_print;
})()
;
/**
* @param {...*} var_args
*/
weasel.repl.console_print = (function() { 
var console_print__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var console_print = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34983__i = 0, G__34983__a = new Array(arguments.length -  0);
while (G__34983__i < G__34983__a.length) {G__34983__a[G__34983__i] = arguments[G__34983__i + 0]; ++G__34983__i;}
  args = new cljs.core.IndexedSeq(G__34983__a,0);
} 
return console_print__delegate.call(this,args);};
console_print.cljs$lang$maxFixedArity = 0;
console_print.cljs$lang$applyTo = (function (arglist__34984){
var args = cljs.core.seq(arglist__34984);
return console_print__delegate(args);
});
console_print.cljs$core$IFn$_invoke$arity$variadic = console_print__delegate;
return console_print;
})()
;
weasel.repl.print_fns = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"repl","repl",-35398667),weasel.repl.repl_print,new cljs.core.Keyword(null,"console","console",1228072057),weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null),(function() { 
var G__34985__delegate = function (args){
cljs.core.apply.call(null,weasel.repl.console_print,args);

return cljs.core.apply.call(null,weasel.repl.repl_print,args);
};
var G__34985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34986__i = 0, G__34986__a = new Array(arguments.length -  0);
while (G__34986__i < G__34986__a.length) {G__34986__a[G__34986__i] = arguments[G__34986__i + 0]; ++G__34986__i;}
  args = new cljs.core.IndexedSeq(G__34986__a,0);
} 
return G__34985__delegate.call(this,args);};
G__34985.cljs$lang$maxFixedArity = 0;
G__34985.cljs$lang$applyTo = (function (arglist__34987){
var args = cljs.core.seq(arglist__34987);
return G__34985__delegate(args);
});
G__34985.cljs$core$IFn$_invoke$arity$variadic = G__34985__delegate;
return G__34985;
})()
], true, false);
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__34988){
var map__34991 = p__34988;
var map__34991__$1 = ((cljs.core.seq_QMARK_.call(null,map__34991))?cljs.core.apply.call(null,cljs.core.hash_map,map__34991):map__34991);
var print = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"repl","repl",-35398667));
var on_close = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_error = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_open = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var verbose = cljs.core.get.call(null,map__34991__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
var repl_connection = weasel.impls.websocket.websocket_connection.call(null);
cljs.core.swap_BANG_.call(null,weasel.repl.ws_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
cljs.core.set_print_fn_BANG_.call(null,((cljs.core.fn_QMARK_.call(null,print))?print:cljs.core.get.call(null,weasel.repl.print_fns,print)));

clojure.browser.net.transmit.call(null,repl_connection,cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ready","ready",1086465795)], null)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_open)){
return on_open.call(null);
} else {
return null;
}
});})(repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"message","message",-406056002),((function (repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
var map__34992 = cljs.reader.read_string.call(null,evt.message);
var map__34992__$1 = ((cljs.core.seq_QMARK_.call(null,map__34992))?cljs.core.apply.call(null,cljs.core.hash_map,map__34992):map__34992);
var message = map__34992__$1;
var op = cljs.core.get.call(null,map__34992__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var response = cljs.core.pr_str.call(null,weasel.repl.process_message.call(null,message));
return clojure.browser.net.transmit.call(null,repl_connection,response);
});})(repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
cljs.core.reset_BANG_.call(null,weasel.repl.ws_connection,null);

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_close)){
return on_close.call(null);
} else {
return null;
}
});})(repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"error","error",-978969032),((function (repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_error)){
return on_error.call(null,evt);
} else {
return null;
}
});})(repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
);

if(cljs.core.truth_(COMPILED)){
} else {
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp,repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp,repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
,cljs.core.js_keys.call(null,gntp)));
})();

goog.isProvided_ = ((function (repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (_){
return false;
});})(repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
;

goog.require = ((function (repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose){
return (function (name,reload){
if(cljs.core.truth_((function (){var or__14444__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__14444__auto__){
return or__14444__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__14444__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__14444__auto__)){
return or__14444__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return document.body.appendChild((function (){var script = document.createElement("script");
script.type = "text/javascript";

script.src = [cljs.core.str(goog.basePath),cljs.core.str((goog.dependencies_.nameToPath[name]))].join('');

return script;
})());
} else {
return null;
}
});})(repl_connection,map__34991,map__34991__$1,print,on_close,on_error,on_open,verbose))
;
}

return clojure.browser.net.connect.call(null,repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__34988 = null;
if (arguments.length > 1) {
var G__34993__i = 0, G__34993__a = new Array(arguments.length -  1);
while (G__34993__i < G__34993__a.length) {G__34993__a[G__34993__i] = arguments[G__34993__i + 1]; ++G__34993__i;}
  p__34988 = new cljs.core.IndexedSeq(G__34993__a,0);
} 
return connect__delegate.call(this,repl_server_url,p__34988);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__34994){
var repl_server_url = cljs.core.first(arglist__34994);
var p__34988 = cljs.core.rest(arglist__34994);
return connect__delegate(repl_server_url,p__34988);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;

//# sourceMappingURL=repl.js.map