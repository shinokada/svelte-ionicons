import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Icons - Svelte Ionicons',
    description: 'Icons',
    og: {
      title: 'Icons - Svelte Ionicons',
      description: 'Icons',
    },
    twitter: {
      title: 'Icons - Svelte Ionicons',
      description: 'Icons',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
