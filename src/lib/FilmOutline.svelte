<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'FilmOutline';
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
    x="48"
    y="96"
    width="416"
    height="320"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="384"
    y="336"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="384"
    y="256"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="384"
    y="176"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="384"
    y="96"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="48"
    y="336"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="48"
    y="256"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="48"
    y="176"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="48"
    y="96"
    width="80"
    height="80"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="128"
    y="96"
    width="256"
    height="160"
    rx="28"
    ry="28"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="128"
    y="256"
    width="256"
    height="160"
    rx="28"
    ry="28"
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
@prop export let ariaLabel = 'FilmOutline';
-->
