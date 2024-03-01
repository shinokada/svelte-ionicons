<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'CalendarClearOutline';
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
  ><rect
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    x="48"
    y="80"
    width="416"
    height="384"
    rx="48"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    stroke-linecap="round"
    x1="128"
    y1="48"
    x2="128"
    y2="80"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    stroke-linecap="round"
    x1="384"
    y1="48"
    x2="384"
    y2="80"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-linejoin="round"
    stroke-width="32"
    stroke-linecap="round"
    x1="464"
    y1="160"
    x2="48"
    y2="160"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'CalendarClearOutline';
-->
