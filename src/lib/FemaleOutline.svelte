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
    cx="256"
    cy="184"
    r="152"
    fill="none"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="256"
    y1="336"
    x2="256"
    y2="480"
    fill="none"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
  /><line
    x1="314"
    y1="416"
    x2="198"
    y2="416"
    fill="none"
    stroke="#000"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="32"
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
