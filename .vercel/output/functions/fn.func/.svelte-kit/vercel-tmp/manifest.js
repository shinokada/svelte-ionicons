export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","css/vue.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/ion1.webp","images/ion2.webp","images/ion3.webp","images/ion4.webp","images/ion5.webp","images/ion6.webp","images/ion7.webp","images/ion8.webp","images/ion9.webp","images/ionicons-650-1050-optimized.png","images/ionicons-650-1050.png","images/ionicons-optimized.png","images/ionicons.png","maskable_icon_x192.png","styles/docs.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".ico":"image/vnd.microsoft.icon",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.5fbc9bb5.js","app":"_app/immutable/entry/app.831a62b0.js","imports":["_app/immutable/entry/start.5fbc9bb5.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/singletons.d5e7247e.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/entry/app.831a62b0.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/icons",
				pattern: /^\/icons\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
