<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'Easel';
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
  ><rect x="80" y="112" width="352" height="208" rx="12" ry="12" /><path
    d="M432,64H272V48a16,16,0,0,0-32,0V64H80a48.05,48.05,0,0,0-48,48V320a48.05,48.05,0,0,0,48,48h42.79L96.62,459.6a16,16,0,1,0,30.76,8.8L156.07,368H240v48a16,16,0,0,0,32,0V368h83.93l28.69,100.4a16,16,0,1,0,30.76-8.8L389.21,368H432a48.05,48.05,0,0,0,48-48V112A48.05,48.05,0,0,0,432,64Zm16,256a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V112A16,16,0,0,1,80,96H432a16,16,0,0,1,16,16Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'Easel';
-->
