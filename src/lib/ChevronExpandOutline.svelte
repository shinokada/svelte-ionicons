<script>
  export let size = '24';
  export let color = 'currentColor';
</script>

<svg
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
  xmlns="http://www.w3.org/2000/svg"
  ><path
    d="M136 208L256 104L376 208"
    stroke="currentColor"
    fill="none"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  /><path
    d="M136 304L256 408L376 304"
    stroke="currentColor"
    fill="none"
    stroke-width="32"
    stroke-linecap="round"
    stroke-linejoin="round"
  /></svg
>

<!--
@component
[Go to Document](https://svelte-ionicons.codewithshin.com/)
## Props
@prop size = "24";
@prop color = "currentColor";
-->
