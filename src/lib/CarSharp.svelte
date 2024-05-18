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
    ariaLabel = 'car sharp',
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
      d="M447.68,220.78a16.44,16.44,0,0,0-1-3.1l-48-112A16,16,0,0,0,384,96H128a16,16,0,0,0-14.71,9.7l-48,112a16.44,16.44,0,0,0-1,3.1A16.15,16.15,0,0,0,64,224V408a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V384H400v24a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V224A16.15,16.15,0,0,0,447.68,220.78ZM144,320a32,32,0,1,1,32-32A32,32,0,0,1,144,320Zm224,0a32,32,0,1,1,32-32A32,32,0,0,1,368,320ZM104.26,208l34.29-80h234.9l34.29,80Z"
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
      d="M447.68,220.78a16.44,16.44,0,0,0-1-3.1l-48-112A16,16,0,0,0,384,96H128a16,16,0,0,0-14.71,9.7l-48,112a16.44,16.44,0,0,0-1,3.1A16.15,16.15,0,0,0,64,224V408a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V384H400v24a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V224A16.15,16.15,0,0,0,447.68,220.78ZM144,320a32,32,0,1,1,32-32A32,32,0,0,1,144,320Zm224,0a32,32,0,1,1,32-32A32,32,0,0,1,368,320ZM104.26,208l34.29-80h234.9l34.29,80Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
