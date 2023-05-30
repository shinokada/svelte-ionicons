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
  ><path
    d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z"
    style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
  /><polygon points="256 48 256 364 118 464 172 304 32 208 204 208 256 48" /></svg
>
<!--
@component
[Go to Document](https://svelte-ionicons.codewithshin.com/)
## Props
@prop size = "24";
@prop color = "currentColor";
-->
