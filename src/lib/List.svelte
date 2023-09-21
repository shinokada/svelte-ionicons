<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
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
    x1="160"
    y1="144"
    x2="448"
    y2="144"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="160"
    y1="256"
    x2="448"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="160"
    y1="368"
    x2="448"
    y2="368"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"
  /><circle
    cx="80"
    cy="144"
    r="16"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><circle
    cx="80"
    cy="256"
    r="16"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><circle
    cx="80"
    cy="368"
    r="16"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
-->
