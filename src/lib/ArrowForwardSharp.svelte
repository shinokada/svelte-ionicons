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
  ><polyline
    points="268 112 412 256 268 400"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
  /><line
    x1="392"
    y1="256"
    x2="100"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop color = 'currentColor';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
