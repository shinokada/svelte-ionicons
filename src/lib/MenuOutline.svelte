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
    x1="80"
    y1="160"
    x2="432"
    y2="160"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><line
    x1="80"
    y1="256"
    x2="432"
    y2="256"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
  /><line
    x1="80"
    y1="352"
    x2="432"
    y2="352"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"
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
