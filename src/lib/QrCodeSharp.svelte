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
  ><rect x="336" y="336" width="80" height="80" /><rect
    x="272"
    y="272"
    width="64"
    height="64"
  /><rect x="416" y="416" width="64" height="64" /><rect
    x="432"
    y="272"
    width="48"
    height="48"
  /><rect x="272" y="432" width="48" height="48" /><rect
    x="336"
    y="96"
    width="80"
    height="80"
  /><path d="M480,240H272V32H480ZM316,196H436V76H316Z" /><rect
    x="96"
    y="96"
    width="80"
    height="80"
  /><path d="M240,240H32V32H240ZM76,196H196V76H76Z" /><rect
    x="96"
    y="336"
    width="80"
    height="80"
  /><path d="M240,480H32V272H240ZM76,436H196V316H76Z" /></svg
>

<!--
@component
[Go to docs](https://svelte-ionicons.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
-->
