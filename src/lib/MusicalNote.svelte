<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'MusicalNote';
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
    d="M183.83,480a55.2,55.2,0,0,1-32.36-10.55A56.64,56.64,0,0,1,128,423.58a50.26,50.26,0,0,1,34.14-47.73L213,358.73a16.25,16.25,0,0,0,11-15.49V92a32.1,32.1,0,0,1,24.09-31.15L356.48,32.71A22,22,0,0,1,384,54v57.75a32.09,32.09,0,0,1-24.2,31.19l-91.65,23.13A16.24,16.24,0,0,0,256,181.91V424a48.22,48.22,0,0,1-32.78,45.81l-21.47,7.23A56,56,0,0,1,183.83,480Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'MusicalNote';
-->
