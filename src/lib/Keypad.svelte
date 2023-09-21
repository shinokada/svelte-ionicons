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
  ><path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
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
