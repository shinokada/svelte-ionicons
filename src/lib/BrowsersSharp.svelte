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
    d="M32,64V448a16,16,0,0,0,16,16H464a16,16,0,0,0,16-16V64a16,16,0,0,0-16-16H48A16,16,0,0,0,32,64ZM440,428H72a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4H440a4,4,0,0,1,4,4V424A4,4,0,0,1,440,428Z"
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
