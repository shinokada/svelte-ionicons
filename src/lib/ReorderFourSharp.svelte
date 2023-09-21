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
    x1="102"
    y1="304"
    x2="410"
    y2="304"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="208"
    x2="410"
    y2="208"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="112"
    x2="410"
    y2="112"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="400"
    x2="410"
    y2="400"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
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
