<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'WatchOutline';
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
  ><rect
    x="112"
    y="112"
    width="288"
    height="288"
    rx="64"
    ry="64"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'WatchOutline';
-->
