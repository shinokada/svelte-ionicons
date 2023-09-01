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
    x="240.44"
    y="0.03"
    width="31.11"
    height="511.95"
    transform="translate(-106.04 256) rotate(-45)"
  /><polygon points="80 304 224 304 192 496 300.18 366.18 151.82 217.82 80 304" /><polygon
    points="432 208 288 208 320 16 211.82 145.82 360.18 294.18 432 208"
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
