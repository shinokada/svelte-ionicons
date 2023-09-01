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
    d="M448.08,256.08c0-106-86-192-192-192s-192,86-192,192,86,192,192,192S448.08,362.11,448.08,256.08Z"
    style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
  /><path
    d="M300.81,358.29c-20.83,7.42-34.05,9.59-54.19,9.59-61.17,0-106.39-50.07-101-111.84S205,144.21,266.14,144.21c68.92,0,106.79,45.55,101.47,106.55-4,45.54-32.8,58.66-47.89,56-14.2-2.55-25.92-15.52-23.75-40.35l5.62-44.66c-7.58-9.17-28.11-18-49.93-14.54C231.77,210.3,209,228,206.56,256s14.49,50.84,39.93,50.84,47.86-18.39,50.69-50.84"
    style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px"
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
