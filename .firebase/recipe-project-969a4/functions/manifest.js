export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","icons/email.png","icons/github.png","icons/restaurant.png","icons/user.png","images/food.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.5f2725b5.js","app":"_app/immutable/entry/app.69084220.js","imports":["_app/immutable/entry/start.5f2725b5.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/singletons.e86ddc20.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/entry/app.69084220.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.df132f49.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/menu/create",
				pattern: /^\/menu\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/menu/edit/[menuId]",
				pattern: /^\/menu\/edit\/([^/]+?)\/?$/,
				params: [{"name":"menuId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/menu/[menuId]",
				pattern: /^\/menu\/([^/]+?)\/?$/,
				params: [{"name":"menuId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/user/your-favorite",
				pattern: /^\/user\/your-favorite\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/user/[uid]",
				pattern: /^\/user\/([^/]+?)\/?$/,
				params: [{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
