<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'VolumeLow';
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
    d="M296,416.19a23.92,23.92,0,0,1-14.21-4.69l-.66-.51-91.46-75H120a24,24,0,0,1-24-24V200a24,24,0,0,1,24-24h69.65l91.46-75,.66-.51A24,24,0,0,1,320,119.83V392.17a24,24,0,0,1-24,24Z"
  /><path
    d="M384,336a16,16,0,0,1-14.29-23.18c9.49-18.9,14.3-38,14.3-56.82,0-19.36-4.66-37.92-14.25-56.73a16,16,0,0,1,28.5-14.54C410.2,208.16,416,231.47,416,256c0,23.83-6,47.78-17.7,71.18A16,16,0,0,1,384,336Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'VolumeLow';
-->
