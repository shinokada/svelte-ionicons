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
    d="M332.69,320a115,115,0,0,0-152.8,0"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:42px"
  /><path
    d="M393.74,259a201.26,201.26,0,0,0-274.92,0"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:42px"
  /><path
    d="M448,191.52a288,288,0,0,0-383.44,0"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:42px"
  /><path d="M300.67,384,256,433l-44.34-49a56.73,56.73,0,0,1,88.92,0Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
-->
