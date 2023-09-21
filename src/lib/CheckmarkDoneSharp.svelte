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
  ><polyline
    points="465 127 241 384 149 292"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
  /><line
    x1="140"
    y1="385"
    x2="47"
    y2="292"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
  /><line
    x1="363"
    y1="127"
    x2="236"
    y2="273"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px"
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
