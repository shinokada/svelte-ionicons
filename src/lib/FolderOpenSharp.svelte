<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'FolderOpenSharp';
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
    d="M16.08,189.4,44.66,423.27A28,28,0,0,0,72.52,448h367a28,28,0,0,0,27.86-24.73L495.92,189.4A12,12,0,0,0,484,176H28A12,12,0,0,0,16.08,189.4Z"
  /><path d="M464,124a28,28,0,0,0-28-28H244.84l-48-32H76A28,28,0,0,0,48,92v52H464Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'FolderOpenSharp';
-->
