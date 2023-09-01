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
  ><rect x="48" y="48" width="112" height="112" rx="8" ry="8" /><rect
    x="200"
    y="48"
    width="112"
    height="112"
    rx="8"
    ry="8"
  /><rect x="352" y="48" width="112" height="112" rx="8" ry="8" /><rect
    x="48"
    y="200"
    width="112"
    height="112"
    rx="8"
    ry="8"
  /><rect x="200" y="200" width="112" height="112" rx="8" ry="8" /><rect
    x="352"
    y="200"
    width="112"
    height="112"
    rx="8"
    ry="8"
  /><rect x="48" y="352" width="112" height="112" rx="8" ry="8" /><rect
    x="200"
    y="352"
    width="112"
    height="112"
    rx="8"
    ry="8"
  /><rect x="352" y="352" width="112" height="112" rx="8" ry="8" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
-->
