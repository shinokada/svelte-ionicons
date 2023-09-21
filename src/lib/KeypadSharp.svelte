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
  ><rect x="80" y="16" width="96" height="96" rx="8" ry="8" /><rect
    x="208"
    y="16"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="336" y="16" width="96" height="96" rx="8" ry="8" /><rect
    x="80"
    y="144"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="208" y="144" width="96" height="96" rx="8" ry="8" /><rect
    x="336"
    y="144"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="80" y="272" width="96" height="96" rx="8" ry="8" /><rect
    x="208"
    y="272"
    width="96"
    height="96"
    rx="8"
    ry="8"
  /><rect x="208" y="400" width="96" height="96" rx="8" ry="8" /><rect
    x="336"
    y="272"
    width="96"
    height="96"
    rx="8"
    ry="8"
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
