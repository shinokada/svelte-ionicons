<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'LibraryOutline';
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
    x="32"
    y="96"
    width="64"
    height="368"
    rx="16"
    ry="16"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="112"
    y1="224"
    x2="240"
    y2="224"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><line
    x1="112"
    y1="400"
    x2="240"
    y2="400"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="112"
    y="160"
    width="128"
    height="304"
    rx="16"
    ry="16"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><rect
    x="256"
    y="48"
    width="96"
    height="416"
    rx="16"
    ry="16"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><path
    d="M422.46,96.11l-40.4,4.25c-11.12,1.17-19.18,11.57-17.93,23.1l34.92,321.59c1.26,11.53,11.37,20,22.49,18.84l40.4-4.25c11.12-1.17,19.18-11.57,17.93-23.1L445,115C443.69,103.42,433.58,94.94,422.46,96.11Z"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'LibraryOutline';
-->
