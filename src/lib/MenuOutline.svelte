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
    x1="80"
    y1="160"
    x2="432"
    y2="160"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><line
    x1="80"
    y1="256"
    x2="432"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><line
    x1="80"
    y1="352"
    x2="432"
    y2="352"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
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
