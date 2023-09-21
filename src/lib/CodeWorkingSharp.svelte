<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'CodeWorkingSharp';
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
  ><circle
    cx="256"
    cy="256"
    r="26"
    style="stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px"
  /><circle
    cx="346"
    cy="256"
    r="26"
    style="stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px"
  /><circle
    cx="166"
    cy="256"
    r="26"
    style="stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px"
  /><polyline
    points="160 368 32 256 160 144"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"
  /><polyline
    points="352 368 480 256 352 144"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'CodeWorkingSharp';
-->
