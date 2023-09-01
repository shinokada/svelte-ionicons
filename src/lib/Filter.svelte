<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
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
  ><path d="M472,168H40a24,24,0,0,1,0-48H472a24,24,0,0,1,0,48Z" /><path
    d="M392,280H120a24,24,0,0,1,0-48H392a24,24,0,0,1,0,48Z"
  /><path d="M296,392H216a24,24,0,0,1,0-48h80a24,24,0,0,1,0,48Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
-->
