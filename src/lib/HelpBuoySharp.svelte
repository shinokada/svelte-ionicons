<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'HelpBuoySharp';
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
    d="M256,32C132.29,32,32,132.29,32,256S132.29,480,256,480,480,379.71,480,256,379.71,32,256,32ZM192,256a64,64,0,1,1,64,64A64,64,0,0,1,192,256Zm237.24-62.29L342.91,199a104.86,104.86,0,0,0-29.86-29.86l5.24-86.33a185,185,0,0,1,111,111ZM125.89,125.89a183.44,183.44,0,0,1,67.82-43.13L199,169.09A104.86,104.86,0,0,0,169.09,199l-86.33-5.24A183.44,183.44,0,0,1,125.89,125.89ZM82.76,318.29l86.33-5.24A104.86,104.86,0,0,0,199,342.91l-5.24,86.33A185,185,0,0,1,82.76,318.29Zm303.35,67.82a183.44,183.44,0,0,1-67.82,43.13l-5.24-86.33a104.86,104.86,0,0,0,29.86-29.86l86.33,5.24A183.44,183.44,0,0,1,386.11,386.11Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'HelpBuoySharp';
-->
