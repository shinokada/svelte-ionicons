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
  ><path d="M256,400a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M256,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M256,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M256,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M384,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M384,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M384,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M128,272a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /><path d="M128,144a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z" /><path
    d="M128,16a48,48,0,1,0,48,48,48,48,0,0,0-48-48Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-ionicons.codewithshin.com/)
## Props
@prop size = "24";
@prop color = "currentColor";
-->
