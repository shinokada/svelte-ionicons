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
  ><path
    fill="none"
    stroke="currentColor"
    stroke-width="32"
    stroke-miterlimit="10"
    d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
    x1="144"
    y1="208"
    x2="368"
    y2="208"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
    x1="176"
    y1="272"
    x2="336"
    y2="272"
  /><line
    fill="none"
    stroke="currentColor"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
    x1="224"
    y1="336"
    x2="288"
    y2="336"
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
