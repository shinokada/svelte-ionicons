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
  ><circle
    cx="256"
    cy="448"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="256"
    cy="320"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M288,192a32,32,0,1,1-32-32A32,32,0,0,1,288,192Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="256"
    cy="64"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="384"
    cy="320"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="384"
    cy="192"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="384"
    cy="64"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="128"
    cy="320"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="128"
    cy="192"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><circle
    cx="128"
    cy="64"
    r="32"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
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
