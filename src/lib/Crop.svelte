<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'Crop';
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
    d="M458,346H192a26,26,0,0,1-26-26V54a22,22,0,0,0-44,0v68H54a22,22,0,0,0,0,44h68V320a70.08,70.08,0,0,0,70,70H346v68a22,22,0,0,0,44,0V390h68a22,22,0,0,0,0-44Z"
  /><path
    d="M214,166H320a26,26,0,0,1,26,26V298a22,22,0,0,0,44,0V192a70.08,70.08,0,0,0-70-70H214a22,22,0,0,0,0,44Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'Crop';
-->
