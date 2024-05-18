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
    ariaLabel = 'subway outline',
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
    <rect
      x="112"
      y="32"
      width="288"
      height="352"
      rx="48"
      ry="48"
      style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="208"
      y1="80"
      x2="304"
      y2="80"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><rect
      x="112"
      y="128"
      width="288"
      height="96"
      rx="32"
      ry="32"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><circle
      cx="176"
      cy="320"
      r="16"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
    /><circle
      cx="336"
      cy="320"
      r="16"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="144"
      y1="464"
      x2="368"
      y2="464"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="336"
      y1="432"
      x2="384"
      y2="480"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="176"
      y1="432"
      x2="128"
      y2="480"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
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
    <rect
      x="112"
      y="32"
      width="288"
      height="352"
      rx="48"
      ry="48"
      style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
    /><line
      x1="208"
      y1="80"
      x2="304"
      y2="80"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><rect
      x="112"
      y="128"
      width="288"
      height="96"
      rx="32"
      ry="32"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><circle
      cx="176"
      cy="320"
      r="16"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
    /><circle
      cx="336"
      cy="320"
      r="16"
      style="fill:none;stroke:{color};stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="144"
      y1="464"
      x2="368"
      y2="464"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="336"
      y1="432"
      x2="384"
      y2="480"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    /><line
      x1="176"
      y1="432"
      x2="128"
      y2="480"
      style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
