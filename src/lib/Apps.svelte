<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'Apps';
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
  ><path d="M104,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,160Z" /><path
    d="M256,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,160Z"
  /><path d="M408,160a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,160Z" /><path
    d="M104,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,312Z"
  /><path d="M256,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,312Z" /><path
    d="M408,312a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,312Z"
  /><path d="M104,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,104,464Z" /><path
    d="M256,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,256,464Z"
  /><path d="M408,464a56,56,0,1,1,56-56A56.06,56.06,0,0,1,408,464Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'Apps';
-->
