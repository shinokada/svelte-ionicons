<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'Water';
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
    d="M265.12,60.12a12,12,0,0,0-18.23,0C215.23,97.15,112,225.17,112,320c0,88.37,55.64,144,144,144s144-55.63,144-144C400,225.17,296.77,97.15,265.12,60.12ZM272,412a12,12,0,0,1-11.34-16,11.89,11.89,0,0,1,11.41-8A60.06,60.06,0,0,0,332,328.07a11.89,11.89,0,0,1,8-11.41A12,12,0,0,1,356,328,84.09,84.09,0,0,1,272,412Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'Water';
-->
