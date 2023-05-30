<script>
  export let size = '24';
  export let color = 'currentColor';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
  {...$$restProps}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  on:click
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  on:blur
  on:focus
  ><line
    x1="102"
    y1="304"
    x2="410"
    y2="304"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="208"
    x2="410"
    y2="208"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="112"
    x2="410"
    y2="112"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="400"
    x2="410"
    y2="400"
    style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:44px"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-ionicons.codewithshin.com/)
## Props
@prop size = "24";
@prop color = "currentColor";
-->
