

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.339d5e7e.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.1558d124.js","_app/immutable/chunks/singletons.d95380a7.js","_app/immutable/chunks/index.52347cb7.js"];
export const stylesheets = [];
export const fonts = [];
