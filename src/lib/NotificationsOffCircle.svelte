<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    ariaLabel = 'notifications off circle',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM146.83,313c16.33-19.34,27.86-27.47,27.86-80.8q0-3.75.2-7.26a4,4,0,0,1,7-2.52l98,106.87a4,4,0,0,1-2.94,6.7H158C146.18,336,140.06,321,146.83,313Zm148.93,43.41C293.53,375.14,276.92,384,256,384s-37.51-8.86-39.75-27.58a4,4,0,0,1,4-4.42h71.53A4,4,0,0,1,295.76,356.42Zm67,17.42a16,16,0,0,1-22.6-1.08l-192-212a16,16,0,0,1,23.68-21.52l192,212A16,16,0,0,1,362.76,373.84ZM361,323.21,216.49,165.53a4,4,0,0,1,1.3-6.36c1.31-.58,2.61-1.12,3.89-1.63a11.33,11.33,0,0,0,6.32-6.68C231.72,138.6,242.15,128,256,128s24.29,10.6,28,22.86a11.34,11.34,0,0,0,6.34,6.68c21.21,8.44,47,25.81,47,74.67,0,53.33,11.54,61.46,27.87,80.8a12.09,12.09,0,0,1,2.76,7.25A4,4,0,0,1,361,323.21Z"
  />
</svg>
