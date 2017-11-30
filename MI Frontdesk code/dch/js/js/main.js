
require.config({
	shim:{
		cookie:["jquery"]
	},
	paths:{
		"jquery": "jquery-1.11.1",
		'cookie':"jquery.cookie",
		"nav":"nav",
		
		
	}
})
require(["jquery","nav"],
 function($, nav,video){
	nav.nav();

})

