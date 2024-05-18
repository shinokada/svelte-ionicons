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
    ariaLabel = 'list sharp',
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
    <line
      x1="144"
      y1="144"
      x2="464"
      y2="144"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:48px"
    /><line
      x1="144"
      y1="256"
      x2="464"
      y2="256"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:48px"
    /><line
      x1="144"
      y1="368"
      x2="464"
      y2="368"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:48px"
    /><rect
      x="64"
      y="128"
      width="32"
      height="32"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><rect
      x="64"
      y="240"
      width="32"
      height="32"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><rect
      x="64"
      y="352"
      width="32"
      height="32"
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
    <line
      x1="144"
      y1="144"
      x2="464"
      y2="144"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:48px"
    /><line
      x1="144"
      y1="256"
      x2="464"
      y2="256"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:48px"
    /><line
      x1="144"
      y1="368"
      x2="464"
      y2="368"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:48px"
    /><rect
      x="64"
      y="128"
      width="32"
      height="32"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><rect
      x="64"
      y="240"
      width="32"
      height="32"
      style="fill:none;stroke:{color};stroke-linecap:square;stroke-linejoin:round;stroke-width:32px"
    /><rect
      x="64"
      y="352"
      width="32"
      height="32"
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
