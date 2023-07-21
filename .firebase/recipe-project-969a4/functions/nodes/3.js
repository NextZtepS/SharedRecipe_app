import * as universal from '../entries/pages/menu/_menuId_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/menu/_menuId_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/menu/[menuId]/+page.ts";
export const imports = ["_app/immutable/nodes/3.b62967be.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/globals.7f7f1b26.js"];
export const stylesheets = [];
export const fonts = [];
