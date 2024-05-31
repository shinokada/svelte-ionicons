import type { MetaProps } from 'runes-meta-tags';
const title = 'Setting Global Icon - Svelte Ionicons'
const description = 'How to create a global icon using setContext with Svelte Ionicons'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ionicons'
export const load = () => {
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