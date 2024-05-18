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
    ariaLabel = 'tennisball sharp',
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
      d="M246.4,480a181,181,0,0,0,3.22-22.86c.35-4.61.53-9.31.53-14,0-100-81.34-181.32-181.32-181.32A181.72,181.72,0,0,0,32,265.61,224.2,224.2,0,0,0,246.4,480Z"
    /><path
      d="M284.63,227.37A222.73,222.73,0,0,1,219,68.83a227.09,227.09,0,0,1,2.62-34.42A224.41,224.41,0,0,0,34.41,221.58,227.09,227.09,0,0,1,68.83,219a222.73,222.73,0,0,1,158.54,65.67A222.73,222.73,0,0,1,293,443.17c0,5.74-.22,11.54-.65,17.23s-1.11,11.51-2,17.2A224.42,224.42,0,0,0,477.59,290.42,227.09,227.09,0,0,1,443.17,293,222.73,222.73,0,0,1,284.63,227.37Z"
    /><path
      d="M443.17,250.15A181.72,181.72,0,0,0,480,246.39,224.2,224.2,0,0,0,265.61,32a181.72,181.72,0,0,0-3.76,36.83C261.85,168.81,343.19,250.15,443.17,250.15Z"
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
      d="M246.4,480a181,181,0,0,0,3.22-22.86c.35-4.61.53-9.31.53-14,0-100-81.34-181.32-181.32-181.32A181.72,181.72,0,0,0,32,265.61,224.2,224.2,0,0,0,246.4,480Z"
    /><path
      d="M284.63,227.37A222.73,222.73,0,0,1,219,68.83a227.09,227.09,0,0,1,2.62-34.42A224.41,224.41,0,0,0,34.41,221.58,227.09,227.09,0,0,1,68.83,219a222.73,222.73,0,0,1,158.54,65.67A222.73,222.73,0,0,1,293,443.17c0,5.74-.22,11.54-.65,17.23s-1.11,11.51-2,17.2A224.42,224.42,0,0,0,477.59,290.42,227.09,227.09,0,0,1,443.17,293,222.73,222.73,0,0,1,284.63,227.37Z"
    /><path
      d="M443.17,250.15A181.72,181.72,0,0,0,480,246.39,224.2,224.2,0,0,0,265.61,32a181.72,181.72,0,0,0-3.76,36.83C261.85,168.81,343.19,250.15,443.17,250.15Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
