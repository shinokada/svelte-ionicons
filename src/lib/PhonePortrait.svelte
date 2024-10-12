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
    ariaLabel = 'phone portrait',
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
    d="M336,0H176a64,64,0,0,0-64,64V448a64,64,0,0,0,64,64H336a64,64,0,0,0,64-64V64A64,64,0,0,0,336,0Zm32,448a32,32,0,0,1-32,32H176a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h11.35a7.94,7.94,0,0,1,7.3,4.75A32,32,0,0,0,224,56h64a32,32,0,0,0,29.35-19.25,7.94,7.94,0,0,1,7.3-4.75H336a32,32,0,0,1,32,32Z"
  /><path
    d="M336,48h0a11.88,11.88,0,0,0-9.53,4.69A48,48,0,0,1,288,72H224a48,48,0,0,1-38.47-19.31A11.88,11.88,0,0,0,176,48h0a16,16,0,0,0-16,16V448a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V64A16,16,0,0,0,336,48Z"
  /><path
    d="M336,0H176a64,64,0,0,0-64,64V448a64,64,0,0,0,64,64H336a64,64,0,0,0,64-64V64A64,64,0,0,0,336,0Zm32,448a32,32,0,0,1-32,32H176a32,32,0,0,1-32-32V64a32,32,0,0,1,32-32h11.35a7.94,7.94,0,0,1,7.3,4.75A32,32,0,0,0,224,56h64a32,32,0,0,0,29.35-19.25,7.94,7.94,0,0,1,7.3-4.75H336a32,32,0,0,1,32,32Z"
  />
</svg>
