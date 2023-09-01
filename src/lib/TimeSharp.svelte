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
  ><path
    d="M256,48C141.13,48,48,141.13,48,256c0,114.69,93.32,208,208,208,114.86,0,208-93.14,208-208C464,141.31,370.69,48,256,48ZM364,288H244a4,4,0,0,1-4-4V116a4,4,0,0,1,4-4h24a4,4,0,0,1,4,4V256h92a4,4,0,0,1,4,4v24A4,4,0,0,1,364,288Z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
-->
