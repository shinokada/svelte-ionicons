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
  ><line
    x1="256"
    y1="96"
    x2="256"
    y2="56"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="256"
    y1="456"
    x2="256"
    y2="416"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><path
    d="M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="416"
    y1="256"
    x2="456"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
  /><line
    x1="56"
    y1="256"
    x2="96"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:48px"
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
