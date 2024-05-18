import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 4 Props - Svelte Ionicons',
    description: 'Svelte Ionicons Props for Svelte 4',
    og: {
      title: 'Svelte 4 Props - Svelte Ionicons',
      description: 'Svelte Ionicons Props for Svelte 4',
    },
    twitter: {
      title: 'Svelte 4 Props - Svelte Ionicons',
      description: 'Svelte Ionicons Props for Svelte 4',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
