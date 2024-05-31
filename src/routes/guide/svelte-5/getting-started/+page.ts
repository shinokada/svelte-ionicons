import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Ionicons v2'
const description = 'How to get started with Svelte Ionicons v2'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ionicons'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
