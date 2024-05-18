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
    ariaLabel = 'contract sharp',
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
      points="304 416 304 304 416 304"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="314.2"
      y1="314.23"
      x2="432"
      y2="432"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><polyline
      points="208 96 208 208 96 208"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="197.8"
      y1="197.77"
      x2="80"
      y2="80"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><polyline
      points="416 208 304 208 304 96"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="314.23"
      y1="197.8"
      x2="432"
      y2="80"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><polyline
      points="96 304 208 304 208 416"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="197.77"
      y1="314.2"
      x2="80"
      y2="432"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
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
      points="304 416 304 304 416 304"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="314.2"
      y1="314.23"
      x2="432"
      y2="432"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><polyline
      points="208 96 208 208 96 208"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="197.8"
      y1="197.77"
      x2="80"
      y2="80"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><polyline
      points="416 208 304 208 304 96"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="314.23"
      y1="197.8"
      x2="432"
      y2="80"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><polyline
      points="96 304 208 304 208 416"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="197.77"
      y1="314.2"
      x2="80"
      y2="432"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
