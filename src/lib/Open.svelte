<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'Open';
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
    d="M224,304a16,16,0,0,1-11.31-27.31L370.63,118.75A55.7,55.7,0,0,0,344,112H104a56.06,56.06,0,0,0-56,56V408a56.06,56.06,0,0,0,56,56H344a56.06,56.06,0,0,0,56-56V168a55.7,55.7,0,0,0-6.75-26.63L235.31,299.31A15.92,15.92,0,0,1,224,304Z"
  /><path
    d="M448,48H336a16,16,0,0,0,0,32h73.37l-38.74,38.75a56.35,56.35,0,0,1,22.62,22.62L432,102.63V176a16,16,0,0,0,32,0V64A16,16,0,0,0,448,48Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'Open';
-->
