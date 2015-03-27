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
weasel.repl.process_message = (function (){var method_table__11838__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11842__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"weasel.repl","process-message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11842__auto__,method_table__11838__auto__,prefer_table__11839__auto__,method_cache__11840__auto__,cached_hierarchy__11841__auto__));
})();
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"error","error",-978969032),(function (message){
return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (message){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null);
}catch (e12506){if((e12506 instanceof Error)){
var e = e12506;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e12506;
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
var G__12507__i = 0, G__12507__a = new Array(arguments.length -  0);
while (G__12507__i < G__12507__a.length) {G__12507__a[G__12507__i] = arguments[G__12507__i + 0]; ++G__12507__i;}
  args = new cljs.core.IndexedSeq(G__12507__a,0);
} 
return repl_print__delegate.call(this,args);};
repl_print.cljs$lang$maxFixedArity = 0;
repl_print.cljs$lang$applyTo = (function (arglist__12508){
var args = cljs.core.seq(arglist__12508);
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
var G__12509__i = 0, G__12509__a = new Array(arguments.length -  0);
while (G__12509__i < G__12509__a.length) {G__12509__a[G__12509__i] = arguments[G__12509__i + 0]; ++G__12509__i;}
  args = new cljs.core.IndexedSeq(G__12509__a,0);
} 
return console_print__delegate.call(this,args);};
console_print.cljs$lang$maxFixedArity = 0;
console_print.cljs$lang$applyTo = (function (arglist__12510){
var args = cljs.core.seq(arglist__12510);
return console_print__delegate(args);
});
console_print.cljs$core$IFn$_invoke$arity$variadic = console_print__delegate;
return console_print;
})()
;
weasel.repl.print_fns = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"repl","repl",-35398667),weasel.repl.repl_print,new cljs.core.Keyword(null,"console","console",1228072057),weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null),(function() { 
var G__12511__delegate = function (args){
cljs.core.apply.call(null,weasel.repl.console_print,args);

return cljs.core.apply.call(null,weasel.repl.repl_print,args);
};
var G__12511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12512__i = 0, G__12512__a = new Array(arguments.length -  0);
while (G__12512__i < G__12512__a.length) {G__12512__a[G__12512__i] = arguments[G__12512__i + 0]; ++G__12512__i;}
  args = new cljs.core.IndexedSeq(G__12512__a,0);
} 
return G__12511__delegate.call(this,args);};
G__12511.cljs$lang$maxFixedArity = 0;
G__12511.cljs$lang$applyTo = (function (arglist__12513){
var args = cljs.core.seq(arglist__12513);
return G__12511__delegate(args);
});
G__12511.cljs$core$IFn$_invoke$arity$variadic = G__12511__delegate;
return G__12511;
})()
], true, false);
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__12514){
var map__12517 = p__12514;
var map__12517__$1 = ((cljs.core.seq_QMARK_.call(null,map__12517))?cljs.core.apply.call(null,cljs.core.hash_map,map__12517):map__12517);
var print = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"repl","repl",-35398667));
var on_close = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_error = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_open = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var verbose = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
var repl_connection = weasel.impls.websocket.websocket_connection.call(null);
cljs.core.swap_BANG_.call(null,weasel.repl.ws_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
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
});})(repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"message","message",-406056002),((function (repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
return (function (evt){
var map__12518 = cljs.reader.read_string.call(null,evt.message);
var map__12518__$1 = ((cljs.core.seq_QMARK_.call(null,map__12518))?cljs.core.apply.call(null,cljs.core.hash_map,map__12518):map__12518);
var message = map__12518__$1;
var op = cljs.core.get.call(null,map__12518__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var response = cljs.core.pr_str.call(null,weasel.repl.process_message.call(null,message));
return clojure.browser.net.transmit.call(null,repl_connection,response);
});})(repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
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
});})(repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"error","error",-978969032),((function (repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
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
});})(repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
);

if(cljs.core.truth_(COMPILED)){
} else {
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp,repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp,repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
,cljs.core.js_keys.call(null,gntp)));
})();

goog.isProvided_ = ((function (repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
return (function (_){
return false;
});})(repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
;

goog.require = ((function (repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose){
return (function (name,reload){
if(cljs.core.truth_((function (){var or__10941__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__10941__auto__){
return or__10941__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__10941__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__10941__auto__)){
return or__10941__auto__;
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
});})(repl_connection,map__12517,map__12517__$1,print,on_close,on_error,on_open,verbose))
;
}

return clojure.browser.net.connect.call(null,repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__12514 = null;
if (arguments.length > 1) {
var G__12519__i = 0, G__12519__a = new Array(arguments.length -  1);
while (G__12519__i < G__12519__a.length) {G__12519__a[G__12519__i] = arguments[G__12519__i + 1]; ++G__12519__i;}
  p__12514 = new cljs.core.IndexedSeq(G__12519__a,0);
} 
return connect__delegate.call(this,repl_server_url,p__12514);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__12520){
var repl_server_url = cljs.core.first(arglist__12520);
var p__12514 = cljs.core.rest(arglist__12520);
return connect__delegate(repl_server_url,p__12514);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;