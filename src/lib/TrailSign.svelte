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
    ariaLabel = 'trail sign',
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
      d="M491.31,324.69,432,265.37A31.8,31.8,0,0,0,409.37,256H272V224H416a32,32,0,0,0,32-32V96a32,32,0,0,0-32-32H272V48a16,16,0,0,0-32,0V64H102.63A31.8,31.8,0,0,0,80,73.37L20.69,132.69a16,16,0,0,0,0,22.62L80,214.63A31.8,31.8,0,0,0,102.63,224H240v32H96a32,32,0,0,0-32,32v96a32,32,0,0,0,32,32H240v48a16,16,0,0,0,32,0V416H409.37A31.8,31.8,0,0,0,432,406.63l59.31-59.32A16,16,0,0,0,491.31,324.69Z"
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
      d="M491.31,324.69,432,265.37A31.8,31.8,0,0,0,409.37,256H272V224H416a32,32,0,0,0,32-32V96a32,32,0,0,0-32-32H272V48a16,16,0,0,0-32,0V64H102.63A31.8,31.8,0,0,0,80,73.37L20.69,132.69a16,16,0,0,0,0,22.62L80,214.63A31.8,31.8,0,0,0,102.63,224H240v32H96a32,32,0,0,0-32,32v96a32,32,0,0,0,32,32H240v48a16,16,0,0,0,32,0V416H409.37A31.8,31.8,0,0,0,432,406.63l59.31-59.32A16,16,0,0,0,491.31,324.69Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
