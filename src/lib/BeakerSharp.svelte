<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'BeakerSharp';
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
    d="M453.55,54.7,464,32l-335.6,0c-27.74,0-49,6.57-63.31,19.51C54.39,61.27,48,74.89,48,88v24H64c31,0,32,16.79,32,35V460a20,20,0,0,0,20,20H428a20,20,0,0,0,20-20V96C448,78.84,450.28,61.86,453.55,54.7ZM416,96v64H128V138c0-36.15-21-51-41.77-53.46C89,70,105.7,64.05,128.4,64.05H418.32A221.83,221.83,0,0,0,416,96Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'BeakerSharp';
-->
