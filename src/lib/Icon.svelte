<script lang="ts">
  import type { Component } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGElement> {
    icon: Component;
    size?: string;
    role?: string;
    ariaLabel?: string;
  }
  let { icon, size = '24', role = 'img', ariaLabel = 'Icon', ...restProps }: Props = $props();
</script>

<svelte:component this={icon} {...restProps} {role} {size} aria-label={ariaLabel} />

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
