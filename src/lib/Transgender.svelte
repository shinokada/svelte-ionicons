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
    ariaLabel = 'transgender',
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
      d="M458,32H390a22,22,0,0,0,0,44h14.89l-59.57,59.57a149.69,149.69,0,0,0-178.64,0L159.11,128l26.45-26.44a22,22,0,0,0-31.12-31.12L128,96.89,107.11,76H122a22,22,0,0,0,0-44H54A22,22,0,0,0,32,54v68a22,22,0,0,0,44,0V107.11L96.89,128,70.47,154.42a22,22,0,1,0,31.11,31.11L128,159.11l7.57,7.57A149.19,149.19,0,0,0,106,256c0,82.71,67.29,150,150,150a149.2,149.2,0,0,0,89.46-29.67L369,399.9l-26.54,26.54a22,22,0,0,0,31.12,31.12l26.49-26.5,42.37,42.48a22,22,0,0,0,31.16-31.08L431.17,400l26.39-26.39a22,22,0,0,0-31.12-31.12l-26.35,26.35-23.55-23.62a149.68,149.68,0,0,0-.11-178.49L436,107.11V122a22,22,0,0,0,44,0V54A22,22,0,0,0,458,32ZM150,256A106,106,0,1,1,256,362,106.12,106.12,0,0,1,150,256Z"
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
      d="M458,32H390a22,22,0,0,0,0,44h14.89l-59.57,59.57a149.69,149.69,0,0,0-178.64,0L159.11,128l26.45-26.44a22,22,0,0,0-31.12-31.12L128,96.89,107.11,76H122a22,22,0,0,0,0-44H54A22,22,0,0,0,32,54v68a22,22,0,0,0,44,0V107.11L96.89,128,70.47,154.42a22,22,0,1,0,31.11,31.11L128,159.11l7.57,7.57A149.19,149.19,0,0,0,106,256c0,82.71,67.29,150,150,150a149.2,149.2,0,0,0,89.46-29.67L369,399.9l-26.54,26.54a22,22,0,0,0,31.12,31.12l26.49-26.5,42.37,42.48a22,22,0,0,0,31.16-31.08L431.17,400l26.39-26.39a22,22,0,0,0-31.12-31.12l-26.35,26.35-23.55-23.62a149.68,149.68,0,0,0-.11-178.49L436,107.11V122a22,22,0,0,0,44,0V54A22,22,0,0,0,458,32ZM150,256A106,106,0,1,1,256,362,106.12,106.12,0,0,1,150,256Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
