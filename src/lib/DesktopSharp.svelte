<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'DesktopSharp';
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
    d="M480,48H32A16,16,0,0,0,16,64V384a16,16,0,0,0,16,16H200v32H128v32H384V432H312V400H480a16,16,0,0,0,16-16V64A16,16,0,0,0,480,48ZM460,84V300H52V84ZM240.13,354.08a16,16,0,1,1,13.79,13.79A16,16,0,0,1,240.13,354.08Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'DesktopSharp';
-->
