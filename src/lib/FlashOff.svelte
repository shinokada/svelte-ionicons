<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'FlashOff';
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
    d="M432,448a15.92,15.92,0,0,1-11.31-4.69l-352-352A16,16,0,0,1,91.31,68.69l352,352A16,16,0,0,1,432,448Z"
  /><path
    d="M431.5,204A16,16,0,0,0,416,192H307.19L335.4,37.63c.05-.3.1-.59.13-.89A18.45,18.45,0,0,0,302.73,23L210.15,137.46a4,4,0,0,0,.29,5.35l151,151a4,4,0,0,0,5.94-.31l60.8-75.16A16.37,16.37,0,0,0,431.5,204Z"
  /><path
    d="M301.57,369.19l-151-151a4,4,0,0,0-5.93.31L83.8,293.64A16.37,16.37,0,0,0,80.5,308,16,16,0,0,0,96,320H204.83L176.74,474.36l0,.11A18.37,18.37,0,0,0,209.24,489l92.61-114.46A4,4,0,0,0,301.57,369.19Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'FlashOff';
-->
