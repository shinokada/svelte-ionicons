<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'StatsChart';
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
    d="M104,496H72a24,24,0,0,1-24-24V328a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,104,496Z"
  /><path
    d="M328,496H296a24,24,0,0,1-24-24V232a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,328,496Z"
  /><path
    d="M440,496H408a24,24,0,0,1-24-24V120a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,440,496Z"
  /><path
    d="M216,496H184a24,24,0,0,1-24-24V40a24,24,0,0,1,24-24h32a24,24,0,0,1,24,24V472A24,24,0,0,1,216,496Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'StatsChart';
-->
