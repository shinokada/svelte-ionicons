<script lang="ts">
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    withEvents = ctx.withEvents || false,
    title,
    desc,
    class: classname,
    ariaLabel = 'barcode sharp',
    onclick,
    onkeydown,
    onkeyup,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 512 512"
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <polyline
      points="400 400.33 448 400 448 112 400 112.33"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><polyline
      points="112 112 64 112.33 64 400.33 112 400"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="384"
      y1="192"
      x2="384"
      y2="320"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="320"
      y1="160"
      x2="320"
      y2="352"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="256"
      y1="176"
      x2="256"
      y2="336"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="192"
      y1="160"
      x2="192"
      y2="352"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="128"
      y1="192"
      x2="128"
      y2="320"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    />
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill={color}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 512 512"
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <polyline
      points="400 400.33 448 400 448 112 400 112.33"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><polyline
      points="112 112 64 112.33 64 400.33 112 400"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="384"
      y1="192"
      x2="384"
      y2="320"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="320"
      y1="160"
      x2="320"
      y2="352"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="256"
      y1="176"
      x2="256"
      y2="336"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="192"
      y1="160"
      x2="192"
      y2="352"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="128"
      y1="192"
      x2="128"
      y2="320"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
