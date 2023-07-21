import * as universal from '../entries/pages/user/_uid_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/[uid]/+page.ts";
export const imports = ["_app/immutable/nodes/6.46a0b03e.js","_app/immutable/chunks/firebase.420b8590.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/CardUser.a5638e0b.js","_app/immutable/chunks/handleExplore.26eb26b8.js"];
export const stylesheets = [];
export const fonts = [];
