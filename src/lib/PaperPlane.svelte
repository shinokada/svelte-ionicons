<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'PaperPlane';
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
    d="M473,39.05a24,24,0,0,0-25.5-5.46L47.47,185l-.08,0a24,24,0,0,0,1,45.16l.41.13,137.3,58.63a16,16,0,0,0,15.54-3.59L422,80a7.07,7.07,0,0,1,10,10L226.66,310.26a16,16,0,0,0-3.59,15.54l58.65,137.38c.06.2.12.38.19.57,3.2,9.27,11.3,15.81,21.09,16.25.43,0,.58,0,1,0a24.63,24.63,0,0,0,23-15.46L478.39,64.62A24,24,0,0,0,473,39.05Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'PaperPlane';
-->
