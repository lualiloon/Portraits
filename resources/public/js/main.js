if(typeof goog == "undefined") document.write('<script src="js/out/goog/base.js"></script>');
document.write('<script src="js/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("shapes.dev"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');