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
  ><rect
    x="64"
    y="64"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="216"
    y="64"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="368"
    y="64"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="64"
    y="216"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="216"
    y="216"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="368"
    y="216"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="64"
    y="368"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="216"
    y="368"
    width="80"
    height="80"
    rx="40"
    ry="40"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><rect
    x="368"
    y="368"
    width="80"
    height="80"
    rx="40"
    ry="40"
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
