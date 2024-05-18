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
    ariaLabel = 'hand right',
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
    <path
      d="M79.2,211.44h0c15.52-8.82,34.91-2.28,43.31,13.68l41.38,84.41a7,7,0,0,0,8.93,3.43h0a7,7,0,0,0,4.41-6.52V72c0-13.91,12.85-24,26.77-24s26,10.09,26,24V228.64A11.24,11.24,0,0,0,240.79,240,11,11,0,0,0,252,229V24c0-13.91,10.94-24,24.86-24S302,10.09,302,24V228.64A11.24,11.24,0,0,0,312.79,240,11,11,0,0,0,324,229V56c0-13.91,12.08-24,26-24s26,11.09,26,25V244.64A11.24,11.24,0,0,0,386.79,256,11,11,0,0,0,398,245V120c0-13.91,11.08-24,25-24s25.12,10.22,25,24V336c0,117.41-72,176-160,176H272c-88,0-115.71-39.6-136-88L67.33,255C60.67,237,63.69,220.25,79.2,211.44Z"
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
    <path
      d="M79.2,211.44h0c15.52-8.82,34.91-2.28,43.31,13.68l41.38,84.41a7,7,0,0,0,8.93,3.43h0a7,7,0,0,0,4.41-6.52V72c0-13.91,12.85-24,26.77-24s26,10.09,26,24V228.64A11.24,11.24,0,0,0,240.79,240,11,11,0,0,0,252,229V24c0-13.91,10.94-24,24.86-24S302,10.09,302,24V228.64A11.24,11.24,0,0,0,312.79,240,11,11,0,0,0,324,229V56c0-13.91,12.08-24,26-24s26,11.09,26,25V244.64A11.24,11.24,0,0,0,386.79,256,11,11,0,0,0,398,245V120c0-13.91,11.08-24,25-24s25.12,10.22,25,24V336c0,117.41-72,176-160,176H272c-88,0-115.71-39.6-136-88L67.33,255C60.67,237,63.69,220.25,79.2,211.44Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
