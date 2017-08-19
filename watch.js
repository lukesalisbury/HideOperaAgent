function HideOperaAgent() {
	var _newUA = navigator.userAgent.replace(/ ?OPR.[0-9.]*/, '');
	Object.defineProperty(window.navigator, 'userAgent', {get: function() { return _newUA;  }});
}

var script = document.createElement('script');
script.textContent = "var _newUA = navigator.userAgent.replace(/ ?OPR.[0-9.]*/, ''); Object.defineProperty(window.navigator, 'userAgent', {get: function() { return _newUA;  }});"
var a = document.querySelector('html')
if (a)
{
	a.appendChild(script)
}
