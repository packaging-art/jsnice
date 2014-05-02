/*--------------------------------------------------------------------
 * jQuery pixel/em conversion plugins: toEm() and toPx()
 * by Scott Jehl (scott@filamentgroup.com), http://www.filamentgroup.com
 * Copyright (c) Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) or GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 * Article: http://www.filamentgroup.com/lab/update_jquery_plugin_for_retaining_scalable_interfaces_with_pixel_to_em_con/
 * Options:
        scope: string or jQuery selector for font-size scoping
 * Usage Example: $(myPixelValue).toEm(); or $(myEmValue).toPx();
--------------------------------------------------------------------*/

$.fn.toEm = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseInt(this[0],10),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return (that / scopeVal).toFixed(8);
};


$.fn.toPx = function(settings){
    settings = jQuery.extend({
        scope: 'body'
    }, settings);
    var that = parseFloat(this[0]),
        scopeTest = jQuery('<div style="display: none; font-size: 1em; margin: 0; padding:0; height: auto; line-height: 1; border:0;">&nbsp;</div>').appendTo(settings.scope),
        scopeVal = scopeTest.height();
    scopeTest.remove();
    return Math.round(that * scopeVal);
};

//Set height of textareas

function viewport() {
    var height = (window.innerHeight ? window.innerHeight : $w.height());
    var full = height - $(15).toPx({});
    $(".CodeMirror").css('height',full);

}

$(document).ready(function() {
    viewport();

    $(window).resize(function() {
        viewport();
    });
});

//Remove intro_slide

$( "#submit" ).click(function() {
  $( "#intro_area_overlay" ).addClass( "hidden" );
});

//Social_Links
		//Load Twitter
	    window.twttr = (function (d,s,id) {
	        var t, js, fjs = d.getElementsByTagName(s)[0];
	        if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
	        js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
	        return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
	      }(document, "script", "twitter-wjs"));
		//Load Facebook
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=456516547700866";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		//Load G+
		(function() {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = 'https://apis.google.com/js/platform.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();

//Intialize CodeMirror for syntax highlighting and code editing

	var editor = CodeMirror.fromTextArea(document.getElementById("inputjs"), {
	    mode: "javascript",
	    lineNumbers: true,
	    lineWrapping: true
	});
	var editor = CodeMirror.fromTextArea(document.getElementById("outputjs"), {
	    mode: "javascript",
	    lineNumbers: true,
	    lineWrapping: true
	});
