

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f92a550e.js","_app/immutable/chunks/scheduler.50dc1d72.js","_app/immutable/chunks/index.df132f49.js","_app/immutable/chunks/singletons.e86ddc20.js","_app/immutable/chunks/index.52347cb7.js"];
export const stylesheets = [];
export const fonts = [];
