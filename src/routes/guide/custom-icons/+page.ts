import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Ionicons',
    description: 'Custom icons example',
    og: {
      title: 'Custom icons example - Svelte Ionicons',
      description: 'Custom icons example'
    },
    twitter: {
      title: 'Custom icons example - Svelte Ionicons',
      description: 'Custom icons example'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
