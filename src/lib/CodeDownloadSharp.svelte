<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'CodeDownloadSharp';
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
  ><polyline
    points="160 368 32 256 160 144"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"
  /><polyline
    points="352 368 480 256 352 144"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"
  /><polyline
    points="192 288.1 256 352 320 288.1"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"
  /><line
    x1="256"
    y1="160"
    x2="256"
    y2="336.03"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'CodeDownloadSharp';
-->
