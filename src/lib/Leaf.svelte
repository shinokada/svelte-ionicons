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
    ariaLabel = 'leaf',
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
      d="M161.35,242a16,16,0,0,1,22.62-.68c73.63,69.36,147.51,111.56,234.45,133.07,11.73-32,12.77-67.22,2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.84-26.38-81.66-33.25-121.15-39.89-49.82-8.38-96.88-16.3-141.79-63.85-5-5.26-11.81-7.37-18.32-5.66-7.44,2-12.43,7.88-14.82,17.6-5.6,22.75-2,86.51,13.75,153.82,25.29,108.14,65.65,162.86,95.06,189.73,38,34.69,87.62,53.9,136.93,53.9A186,186,0,0,0,308,461.56c41.71-6.32,76.43-27.27,96-57.75-89.49-23.28-165.94-67.55-242-139.16A16,16,0,0,1,161.35,242Z"
    /><path
      d="M467.43,384.19c-16.83-2.59-33.13-5.84-49-9.77a157.71,157.71,0,0,1-12.13,25.68c-.73,1.25-1.5,2.49-2.29,3.71a584.21,584.21,0,0,0,58.56,12,16,16,0,1,0,4.87-31.62Z"
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
      d="M161.35,242a16,16,0,0,1,22.62-.68c73.63,69.36,147.51,111.56,234.45,133.07,11.73-32,12.77-67.22,2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.84-26.38-81.66-33.25-121.15-39.89-49.82-8.38-96.88-16.3-141.79-63.85-5-5.26-11.81-7.37-18.32-5.66-7.44,2-12.43,7.88-14.82,17.6-5.6,22.75-2,86.51,13.75,153.82,25.29,108.14,65.65,162.86,95.06,189.73,38,34.69,87.62,53.9,136.93,53.9A186,186,0,0,0,308,461.56c41.71-6.32,76.43-27.27,96-57.75-89.49-23.28-165.94-67.55-242-139.16A16,16,0,0,1,161.35,242Z"
    /><path
      d="M467.43,384.19c-16.83-2.59-33.13-5.84-49-9.77a157.71,157.71,0,0,1-12.13,25.68c-.73,1.25-1.5,2.49-2.29,3.71a584.21,584.21,0,0,0,58.56,12,16,16,0,1,0,4.87-31.62Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
