<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'BagHandle';
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
    d="M454.65,169.4A31.82,31.82,0,0,0,432,160H368V144a112,112,0,0,0-224,0v16H80a32,32,0,0,0-32,32V408c0,39,33,72,72,72H392a72.22,72.22,0,0,0,50.48-20.55A69.48,69.48,0,0,0,464,409.25V192A31.75,31.75,0,0,0,454.65,169.4ZM176,144a80,80,0,0,1,160,0v16H176Zm192,96a112,112,0,0,1-224,0V224a16,16,0,0,1,32,0v16a80,80,0,0,0,160,0V224a16,16,0,0,1,32,0Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'BagHandle';
-->
