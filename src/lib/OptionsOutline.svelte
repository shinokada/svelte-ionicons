<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'OptionsOutline';
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
  ><line
    x1="368"
    y1="128"
    x2="448"
    y2="128"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="64"
    y1="128"
    x2="304"
    y2="128"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="368"
    y1="384"
    x2="448"
    y2="384"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="64"
    y1="384"
    x2="304"
    y2="384"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="208"
    y1="256"
    x2="448"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="64"
    y1="256"
    x2="144"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><circle
    cx="336"
    cy="128"
    r="32"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><circle
    cx="176"
    cy="256"
    r="32"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><circle
    cx="336"
    cy="384"
    r="32"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'OptionsOutline';
-->
