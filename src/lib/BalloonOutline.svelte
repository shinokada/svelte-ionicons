<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'BalloonOutline';
</script>

<svg
  id="icons"
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
    d="M414.11,153.82C429.66,264.4,345.85,357.09,282.54,366s-169.48-57.5-185-167.68a159.82,159.82,0,1,1,316.53-44.49Z"
    fill="none"
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="32"
  /><path
    d="M236.06,308.05c-32.83-13-67.08-43.1-82.27-85.46"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><path
    d="M367.7,495.78c-32.83-13-63.31-40.06-78.5-82.41"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-miterlimit="10"
    stroke-width="32"
  /><polygon
    points="266.71 368.21 257.54 417.82 320.85 408.92 298.36 363.76 266.71 368.21"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'BalloonOutline';
-->
