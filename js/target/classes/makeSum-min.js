var MAKE_SUM=MAKE_SUM||{};
MAKE_SUM.quickstart=function(){return{makeSum:function(a,d){for(var c=0;
c<a.length;
c++){for(var b=c+1;
b<a.length;
b++){if(a[c]+a[b]===d){var e=[a[c],a[b]];
return e
}}}return -1
},}
}();