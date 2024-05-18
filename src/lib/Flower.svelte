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
    ariaLabel = 'flower',
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
    <circle cx="256" cy="256" r="48" /><path
      d="M475.93,303.91a67.49,67.49,0,0,0-44.34-115.53,5.2,5.2,0,0,1-4.58-3.21h0a5.21,5.21,0,0,1,1-5.51A67.83,67.83,0,0,0,378,66.33h-.25A67.13,67.13,0,0,0,332.35,84a5.21,5.21,0,0,1-5.52,1h0a5.23,5.23,0,0,1-3.22-4.58,67.68,67.68,0,0,0-135.23,0A5.2,5.2,0,0,1,185.17,85h0a5.21,5.21,0,0,1-5.52-1,67.11,67.11,0,0,0-45.44-17.69H134A67.91,67.91,0,0,0,84,179.65a5.21,5.21,0,0,1,1,5.51h0a5.2,5.2,0,0,1-4.58,3.21,67.71,67.71,0,0,0,0,135.23A5.23,5.23,0,0,1,85,326.83h0a5.22,5.22,0,0,1-1,5.52,67.54,67.54,0,0,0,50.08,113h.25A67.38,67.38,0,0,0,179.65,428a5.21,5.21,0,0,1,5.51-1h0a5.2,5.2,0,0,1,3.21,4.58,67.71,67.71,0,0,0,135.23,0,5.23,5.23,0,0,1,3.22-4.58h0a5.21,5.21,0,0,1,5.51,1,67.38,67.38,0,0,0,45.29,17.42h.25a67.48,67.48,0,0,0,50.08-113,5.22,5.22,0,0,1-1-5.52h0a5.23,5.23,0,0,1,4.58-3.22A67.31,67.31,0,0,0,475.93,303.91ZM256,336a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,336Z"
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
    <circle cx="256" cy="256" r="48" /><path
      d="M475.93,303.91a67.49,67.49,0,0,0-44.34-115.53,5.2,5.2,0,0,1-4.58-3.21h0a5.21,5.21,0,0,1,1-5.51A67.83,67.83,0,0,0,378,66.33h-.25A67.13,67.13,0,0,0,332.35,84a5.21,5.21,0,0,1-5.52,1h0a5.23,5.23,0,0,1-3.22-4.58,67.68,67.68,0,0,0-135.23,0A5.2,5.2,0,0,1,185.17,85h0a5.21,5.21,0,0,1-5.52-1,67.11,67.11,0,0,0-45.44-17.69H134A67.91,67.91,0,0,0,84,179.65a5.21,5.21,0,0,1,1,5.51h0a5.2,5.2,0,0,1-4.58,3.21,67.71,67.71,0,0,0,0,135.23A5.23,5.23,0,0,1,85,326.83h0a5.22,5.22,0,0,1-1,5.52,67.54,67.54,0,0,0,50.08,113h.25A67.38,67.38,0,0,0,179.65,428a5.21,5.21,0,0,1,5.51-1h0a5.2,5.2,0,0,1,3.21,4.58,67.71,67.71,0,0,0,135.23,0,5.23,5.23,0,0,1,3.22-4.58h0a5.21,5.21,0,0,1,5.51,1,67.38,67.38,0,0,0,45.29,17.42h.25a67.48,67.48,0,0,0,50.08-113,5.22,5.22,0,0,1-1-5.52h0a5.23,5.23,0,0,1,4.58-3.22A67.31,67.31,0,0,0,475.93,303.91ZM256,336a80,80,0,1,1,80-80A80.09,80.09,0,0,1,256,336Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
