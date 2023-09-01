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
  ><rect x="336" y="336" width="80" height="80" rx="8" ry="8" /><rect
    x="272"
    y="272"
    width="64"
    height="64"
    rx="8"
    ry="8"
  /><rect x="416" y="416" width="64" height="64" rx="8" ry="8" /><rect
    x="432"
    y="272"
    width="48"
    height="48"
    rx="8"
    ry="8"
  /><rect x="272" y="432" width="48" height="48" rx="8" ry="8" /><rect
    x="336"
    y="96"
    width="80"
    height="80"
    rx="8"
    ry="8"
  /><rect
    x="288"
    y="48"
    width="176"
    height="176"
    rx="16"
    ry="16"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><rect x="96" y="96" width="80" height="80" rx="8" ry="8" /><rect
    x="48"
    y="48"
    width="176"
    height="176"
    rx="16"
    ry="16"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
  /><rect x="96" y="336" width="80" height="80" rx="8" ry="8" /><rect
    x="48"
    y="288"
    width="176"
    height="176"
    rx="16"
    ry="16"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
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
