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
    ariaLabel = 'heart dislike circle',
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
      d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm23.3,299.19c-4.41,3.2-9.16,6.55-14.31,10a15.93,15.93,0,0,1-18,0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5,0-.21,0-.43,0-.64a4,4,0,0,1,6.82-2.72L279.76,341.12A4,4,0,0,1,279.3,347.19Zm68,16.12a16,16,0,0,1-22.62,0l-176-176a16,16,0,0,1,22.62-22.62l176,176A16,16,0,0,1,347.31,363.31ZM333.2,297.69a3.92,3.92,0,0,1-6,.37l-124-123.21A4,4,0,0,1,206,168l1.55,0c20.4,0,35,10.64,44.11,20.42a5.93,5.93,0,0,0,8.7,0c9.11-9.78,23.71-20.42,44.11-20.42,30.31,0,55.22,25.27,55.53,56.33C360.26,250.26,351.48,274.3,333.2,297.69Z"
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
      d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm23.3,299.19c-4.41,3.2-9.16,6.55-14.31,10a15.93,15.93,0,0,1-18,0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5,0-.21,0-.43,0-.64a4,4,0,0,1,6.82-2.72L279.76,341.12A4,4,0,0,1,279.3,347.19Zm68,16.12a16,16,0,0,1-22.62,0l-176-176a16,16,0,0,1,22.62-22.62l176,176A16,16,0,0,1,347.31,363.31ZM333.2,297.69a3.92,3.92,0,0,1-6,.37l-124-123.21A4,4,0,0,1,206,168l1.55,0c20.4,0,35,10.64,44.11,20.42a5.93,5.93,0,0,0,8.7,0c9.11-9.78,23.71-20.42,44.11-20.42,30.31,0,55.22,25.27,55.53,56.33C360.26,250.26,351.48,274.3,333.2,297.69Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
