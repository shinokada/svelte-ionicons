<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'CellularOutline';
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
    x="416"
    y="96"
    width="64"
    height="320"
    rx="8"
    ry="8"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="288"
    y="176"
    width="64"
    height="240"
    rx="8"
    ry="8"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="160"
    y="240"
    width="64"
    height="176"
    rx="8"
    ry="8"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="32"
    y="304"
    width="64"
    height="112"
    rx="8"
    ry="8"
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
@prop export let ariaLabel = 'CellularOutline';
-->
