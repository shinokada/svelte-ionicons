<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'RibbonSharp';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
  class={$$props.class}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  ><path
    d="M256,336c-5.22,0-10.4-.24-15.51-.69A176.12,176.12,0,0,1,109.2,256.94L20,416H135l58,96,82.53-177.09A177.53,177.53,0,0,1,256,336Z"
  /><path d="M403,256.74a176.9,176.9,0,0,1-88.18,69.14L273.7,415.5,319,512l58-96H492Z" /><circle
    cx="256.02"
    cy="160"
    r="48"
  /><path
    d="M256,16c-79.4,0-144,64.6-144,144s64.6,144,144,144,144-64.6,144-144S335.4,16,256,16Zm0,224a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,240Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'RibbonSharp';
-->
