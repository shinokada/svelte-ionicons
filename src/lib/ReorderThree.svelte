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
    x1="102"
    y1="256"
    x2="410"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="176"
    x2="410"
    y2="176"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
  /><line
    x1="102"
    y1="336"
    x2="410"
    y2="336"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:44px"
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
