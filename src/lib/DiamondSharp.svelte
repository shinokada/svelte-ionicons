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
    ariaLabel = 'diamond sharp',
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
    <polygon points="396.31 32 264 32 348.19 144.26 396.31 32" /><polygon
      points="115.69 32 163.81 144.26 248 32 115.69 32"
    /><polygon points="256 74.67 192 160 320 160 256 74.67" /><polygon
      points="422.95 51.06 376.26 160 488 160 422.95 51.06"
    /><polygon points="89.05 51.06 23 160 135.74 160 89.05 51.06" /><polygon
      points="146.68 192 24 192 246.8 480 247.33 480 146.68 192"
    /><polygon points="365.32 192 264.67 480 265.2 480 488 192 365.32 192" /><polygon
      points="329.39 192 182.61 192 256 400 329.39 192"
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
    <polygon points="396.31 32 264 32 348.19 144.26 396.31 32" /><polygon
      points="115.69 32 163.81 144.26 248 32 115.69 32"
    /><polygon points="256 74.67 192 160 320 160 256 74.67" /><polygon
      points="422.95 51.06 376.26 160 488 160 422.95 51.06"
    /><polygon points="89.05 51.06 23 160 135.74 160 89.05 51.06" /><polygon
      points="146.68 192 24 192 246.8 480 247.33 480 146.68 192"
    /><polygon points="365.32 192 264.67 480 265.2 480 488 192 365.32 192" /><polygon
      points="329.39 192 182.61 192 256 400 329.39 192"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
