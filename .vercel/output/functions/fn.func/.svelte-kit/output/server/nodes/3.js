

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/icons/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.0aba1421.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js","_app/immutable/chunks/tw-merge.72da6274.js","_app/immutable/chunks/index.97201a03.js"];
export const stylesheets = [];
export const fonts = [];
