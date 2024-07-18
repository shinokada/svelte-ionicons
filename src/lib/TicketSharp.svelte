<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'
  
  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    title, 
    desc, 
    ariaLabel =  "ticket sharp" , 
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
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <path d="M426.24,127.72,415.3,138.66a29.67,29.67,0,0,1-42-42l10.94-10.94L314.52,16l-88,88-4,12.09-12.09,4L16,314.52l69.76,69.76L96.7,373.34a29.67,29.67,0,0,1,42,42l-10.94,10.94L197.48,496l194.4-194.4,4-12.09,12.09-4,88-88Zm-208.56,5.43,21.87-21.87,33,33-21.88,21.87Zm43,43,21.88-21.88,32.52,32.52-21.88,21.88Zm42.56,42.56,21.88-21.88,32.52,32.52L335.8,251.28Zm75.57,75.56-33-33,21.87-21.88,33,33Z"/>
</svg>
