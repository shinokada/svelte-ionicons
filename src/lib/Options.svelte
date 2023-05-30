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
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  ><path
    d="M64,144H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32Z"
  /><path
    d="M448,368H381.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32H290.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z"
  /><path
    d="M448,240H221.25a48,48,0,0,0-90.5,0H64a16,16,0,0,0,0,32h66.75a48,48,0,0,0,90.5,0H448a16,16,0,0,0,0-32Z"
  /></svg
>
<!--
@component
[Go to Document](https://svelte-flag-icons.codewithshin.com/)
## Props
@prop size = '24';
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
