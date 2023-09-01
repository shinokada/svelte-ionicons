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
  ><circle
    fill="none"
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="48"
    cx="256"
    cy="256"
    r="200"
  /><line
    stroke="currentColor"
    stroke-miterlimit="10"
    stroke-width="48"
    x1="114.58"
    y1="114.58"
    x2="397.42"
    y2="397.42"
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
