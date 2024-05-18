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
    ariaLabel = 'pulse',
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
      d="M432,272a48.09,48.09,0,0,0-45.25,32H347.53l-28.35-85.06a16,16,0,0,0-30.56.66L244.11,375.36l-52.33-314a16,16,0,0,0-31.3-1.25L99.51,304H48a16,16,0,0,0,0,32h64a16,16,0,0,0,15.52-12.12l45.34-181.37,51.36,308.12A16,16,0,0,0,239.1,464c.3,0,.6,0,.91,0a16,16,0,0,0,15.37-11.6l49.8-174.28,15.64,46.94A16,16,0,0,0,336,336h50.75A48,48,0,1,0,432,272Z"
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
      d="M432,272a48.09,48.09,0,0,0-45.25,32H347.53l-28.35-85.06a16,16,0,0,0-30.56.66L244.11,375.36l-52.33-314a16,16,0,0,0-31.3-1.25L99.51,304H48a16,16,0,0,0,0,32h64a16,16,0,0,0,15.52-12.12l45.34-181.37,51.36,308.12A16,16,0,0,0,239.1,464c.3,0,.6,0,.91,0a16,16,0,0,0,15.37-11.6l49.8-174.28,15.64,46.94A16,16,0,0,0,336,336h50.75A48,48,0,1,0,432,272Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
