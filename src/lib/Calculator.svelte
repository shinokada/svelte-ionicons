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
    ariaLabel = 'calculator',
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
    d="M416,80a48.05,48.05,0,0,0-48-48H144A48.05,48.05,0,0,0,96,80V432a48.05,48.05,0,0,0,48,48H368a48.05,48.05,0,0,0,48-48ZM168,432a24,24,0,1,1,24-24A24,24,0,0,1,168,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,168,272Zm88,160a24,24,0,1,1,24-24A24,24,0,0,1,256,432Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,352Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,256,272ZM368,408a24,24,0,0,1-48,0V328a24,24,0,0,1,48,0ZM344,272a24,24,0,1,1,24-24A24,24,0,0,1,344,272Zm19.31-100.69A16,16,0,0,1,352,176H160a16,16,0,0,1-16-16V96a16,16,0,0,1,16-16H352a16,16,0,0,1,16,16v64A16,16,0,0,1,363.31,171.31Z"
  />
</svg>
