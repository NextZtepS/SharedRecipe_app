import * as universal from '../entries/pages/user/_uid_/_page.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_uid_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/[uid]/+page.ts";
export const imports = ["_app/immutable/nodes/6.84db3ff6.js","_app/immutable/chunks/firebase.3e9f43ea.js","_app/immutable/chunks/index.52347cb7.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.df132f49.js","_app/immutable/chunks/CardUser.5a40f22a.js","_app/immutable/chunks/handleExplore.fa2474a6.js"];
export const stylesheets = [];
export const fonts = [];
