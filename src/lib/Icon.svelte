<script lang="ts">
  import type { Component } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  interface Props extends SVGAttributes<SVGElement> {
    Icon: Component;
    size?: string;
    role?: string;
    ariaLabel?: string;
  }
  let {
    Icon,
    size = '24',
    color = 'currentColor',
    role = 'img',
    ariaLabel = 'Icon',
    ...restProps
  }: Props = $props();
</script>

<Icon {...restProps} {role} {size} {color} {ariaLabel} />

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: Icon: any;
@props:size: any = '24';
@props:color: any = 'currentColor';
@props:role: any = 'img';
@props:ariaLabel: any = 'Icon';
-->
