<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'Scan';
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
  ><path
    d="M342,444h46a56,56,0,0,0,56-56V342"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
  /><path
    d="M444,170V124a56,56,0,0,0-56-56H342"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
  /><path
    d="M170,444H124a56,56,0,0,1-56-56V342"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
  /><path
    d="M68,170V124a56,56,0,0,1,56-56h46"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'Scan';
-->
