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
    ariaLabel = 'headset sharp',
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
      d="M411.16,97.45C368.43,55.85,311.88,32,256,32S143.57,55.85,100.84,97.45C56.45,140.67,32,196,32,256S58.84,374.49,77.42,408.25,121,480,144,480c32,0,96-32,96-32L128,240,73.58,271.73a176.07,176.07,0,0,1-1-18.84c0-48.57,19.32-94.1,56.15-130C164.24,88.34,210,70,256,70s91.73,18.34,127.27,52.93c36.83,35.86,56.14,81.39,56.14,130a175.56,175.56,0,0,1-1,18.82L384,240,272,448s64,32,96,32c23,0,48-38,66.58-71.75S480,316,480,256,455.55,140.67,411.16,97.45Z"
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
      d="M411.16,97.45C368.43,55.85,311.88,32,256,32S143.57,55.85,100.84,97.45C56.45,140.67,32,196,32,256S58.84,374.49,77.42,408.25,121,480,144,480c32,0,96-32,96-32L128,240,73.58,271.73a176.07,176.07,0,0,1-1-18.84c0-48.57,19.32-94.1,56.15-130C164.24,88.34,210,70,256,70s91.73,18.34,127.27,52.93c36.83,35.86,56.14,81.39,56.14,130a175.56,175.56,0,0,1-1,18.82L384,240,272,448s64,32,96,32c23,0,48-38,66.58-71.75S480,316,480,256,455.55,140.67,411.16,97.45Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
