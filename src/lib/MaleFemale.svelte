<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'MaleFemale';
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
    d="M426,16H352a22,22,0,0,0,0,44h20.89l-37.1,37.09A157.68,157.68,0,0,0,216,42C128.88,42,58,112.88,58,200c0,79.66,59.26,145.72,136,156.46V394H166a22,22,0,0,0,0,44h28v36a22,22,0,0,0,44,0V438h28a22,22,0,0,0,0-44H238V356.46c76.74-10.74,136-76.8,136-156.46a157.15,157.15,0,0,0-14-64.92l44-44V112a22,22,0,0,0,44,0V38A22,22,0,0,0,426,16ZM216,314A114,114,0,1,1,330,200,114.13,114.13,0,0,1,216,314Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'MaleFemale';
-->
