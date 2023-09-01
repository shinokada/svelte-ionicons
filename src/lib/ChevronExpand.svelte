<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
</script>

<svg
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
  xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M136 208L256 104L376 208"
    fill="none"
    stroke="currentColor"
    stroke-width="48"
    stroke-linecap="round"
    stroke-linejoin="round"
  /><path
    d="M136 304L256 408L376 304"
    fill="none"
    stroke="currentColor"
    stroke-width="48"
    stroke-linecap="round"
    stroke-linejoin="round"
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
