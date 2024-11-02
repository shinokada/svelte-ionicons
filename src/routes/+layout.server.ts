import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_TWO } from '$env/static/private';

const title = 'Svelte Ionicons';
const description = '1330+ Ionicon SVG icons for Svelte 4, 5, and Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-ionicons';
const keywords = 'svelte, runes, Ionicons, svg icons, icons, sveltekit';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image: imgUrl,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image: imgUrl,
      imageAlt: title,
      siteName: title,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_TWO
  };
};
