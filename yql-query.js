/**
 * Utility functions for running javascript on YQL Execute
 *
 * YQL Execute is only available from a YQL request using a YQL Open Table XML file.
 * This script uses an appjet.com application (http://yot-xmlfromcode.appjet.net/) to generate
 * the wanted XML file from javascript code.
 * Examples:
 *    http://yot-xmlfromcode.appjet.net/?url=http://gist.github.com/106503.txt
 *    http://yot-xmlfromcode.appjet.net/?code=y.log(%22test%22)
 * Sources:
 *    http://appjet.com/app/324229066/source?plaintext=1
 *
 * We use a classic JSONP hack to get the results via a callback method.
 */
var YQL = {
	
	query_index: 0,
	query: function(yql, callback) {
		 var  ud = 'yqlexecuteconsole'+YQL.query_index++,
		      API = 'http://query.yahooapis.com/v1/public/yql?q=',
		      url = API + window.encodeURIComponent(yql) + '&format=json&callback=' + ud;
		 window[ud]= function(o){ callback && callback(o); };
	    document.body.appendChild((function(){
		    var s = document.createElement('script');
          s.type = 'text/javascript';
	       s.src = url;
	       return s;
	    })());	
	},
	
	queryCode: function(codeStr, callback) {
		var url = ("http://yot-xmlfromcode.appjet.net/?code="+window.encodeURIComponent(codeStr)).replace(/'/g,"\\'");
		var yql = "use '"+url+"' as yqlexconsole; select * from yqlexconsole;";
		YQL.query(yql,callback);
	},
	
	queryUrl: function(codeUrl, callback) {
	   var url = ("http://yot-xmlfromcode.appjet.net/?url="+window.encodeURIComponent(codeUrl)).replace(/'/g,"\\'");
		var yql = "use '"+url+"' as yqlexconsole; select * from yqlexconsole;";
		YQL.query(yql,callback);
	}
	
};