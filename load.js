"use strict";

var patched_urls = ["<all_urls>"]

function rewriteUserAgentHeader(e) {
	for (var header of e.requestHeaders) {
		if (header.name.toLowerCase() === "user-agent") {
			header.value = navigator.userAgent.replace(/ ?OPR.[0-9.]*/, '');
		}
	}
	return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(
	rewriteUserAgentHeader,
	{urls: patched_urls},
	["blocking", "requestHeaders"]
);
