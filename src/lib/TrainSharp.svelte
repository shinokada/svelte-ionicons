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
    ariaLabel = 'train sharp',
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
      d="M384,32H320a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16H128c-16,0-32,16-32,32V352c0,23.92,160,80,160,80s160-56.74,160-80V64C416,48,400,32,384,32ZM256,352a48,48,0,1,1,48-48A48,48,0,0,1,256,352ZM368,200a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H360a8,8,0,0,1,8,8Z"
    /><polygon
      points="314 432 329.32 448 182.58 448 198 432 166 419 89.38 496 134.58 496 150.58 480 361.32 480 377.32 496 422.62 496 346.26 418.25 314 432"
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
      d="M384,32H320a16,16,0,0,0-16-16H208a16,16,0,0,0-16,16H128c-16,0-32,16-32,32V352c0,23.92,160,80,160,80s160-56.74,160-80V64C416,48,400,32,384,32ZM256,352a48,48,0,1,1,48-48A48,48,0,0,1,256,352ZM368,200a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H360a8,8,0,0,1,8,8Z"
    /><polygon
      points="314 432 329.32 448 182.58 448 198 432 166 419 89.38 496 134.58 496 150.58 480 361.32 480 377.32 496 422.62 496 346.26 418.25 314 432"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
