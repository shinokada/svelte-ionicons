<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'MicCircle';
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
    d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM208,176a48.14,48.14,0,0,1,48-48h0a48.14,48.14,0,0,1,48,48v64a48.14,48.14,0,0,1-48,48h0a48.14,48.14,0,0,1-48-48Zm144,72.22c0,23.36-10.94,45.61-30.79,62.66A103.71,103.71,0,0,1,272,334.26V352h16a16,16,0,0,1,0,32H224a16,16,0,0,1,0-32h16V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V224.3a16,16,0,0,1,32,0v23.92c0,25.66,28,55.48,64,55.48,29.6,0,64-24.23,64-55.48V224.3a16,16,0,1,1,32,0Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'MicCircle';
-->
