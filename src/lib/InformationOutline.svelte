<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'InformationOutline';
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
    points="196 220 260 220 260 392"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:40px"
  /><line
    x1="187"
    y1="396"
    x2="325"
    y2="396"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px"
  /><path d="M256,160a32,32,0,1,1,32-32A32,32,0,0,1,256,160Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'InformationOutline';
-->
