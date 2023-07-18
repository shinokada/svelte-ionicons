

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.acd00d29.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js","_app/immutable/chunks/stores.b4cae9a9.js","_app/immutable/chunks/singletons.d5e7247e.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/chunks/tw-merge.72da6274.js"];
export const stylesheets = ["_app/immutable/assets/0.354bfd36.css"];
export const fonts = [];
