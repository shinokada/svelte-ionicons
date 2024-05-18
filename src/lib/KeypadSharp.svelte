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
    ariaLabel = 'keypad sharp',
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
    <rect x="80" y="16" width="96" height="96" rx="8" ry="8" /><rect
      x="208"
      y="16"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="336" y="16" width="96" height="96" rx="8" ry="8" /><rect
      x="80"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="208" y="144" width="96" height="96" rx="8" ry="8" /><rect
      x="336"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="80" y="272" width="96" height="96" rx="8" ry="8" /><rect
      x="208"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="208" y="400" width="96" height="96" rx="8" ry="8" /><rect
      x="336"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
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
    <rect x="80" y="16" width="96" height="96" rx="8" ry="8" /><rect
      x="208"
      y="16"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="336" y="16" width="96" height="96" rx="8" ry="8" /><rect
      x="80"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="208" y="144" width="96" height="96" rx="8" ry="8" /><rect
      x="336"
      y="144"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="80" y="272" width="96" height="96" rx="8" ry="8" /><rect
      x="208"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
    /><rect x="208" y="400" width="96" height="96" rx="8" ry="8" /><rect
      x="336"
      y="272"
      width="96"
      height="96"
      rx="8"
      ry="8"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
