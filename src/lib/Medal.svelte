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
    ariaLabel = 'medal',
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
    <circle cx="256" cy="352" r="32" /><path
      d="M99.78,32A48,48,0,0,0,56.84,58.53l-31,62A48.26,48.26,0,0,0,24.28,160h278.2a4,4,0,0,0,3.39-1.87l75.5-120A4,4,0,0,0,378,32Z"
    /><path
      d="M486.17,120.56l-31-62a47.7,47.7,0,0,0-32.79-25.46L342.5,160h0L298,231.08a128,128,0,0,0-84,0l-23.32-37.2a4,4,0,0,0-3.39-1.88H51.14a4,4,0,0,0-3.36,6.16l82.7,128.73a128,128,0,1,0,251,0L483.62,168A48.22,48.22,0,0,0,486.17,120.56Zm-226,295.31a64,64,0,1,1,59.69-59.69A64.08,64.08,0,0,1,260.18,415.87Z"
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
    <circle cx="256" cy="352" r="32" /><path
      d="M99.78,32A48,48,0,0,0,56.84,58.53l-31,62A48.26,48.26,0,0,0,24.28,160h278.2a4,4,0,0,0,3.39-1.87l75.5-120A4,4,0,0,0,378,32Z"
    /><path
      d="M486.17,120.56l-31-62a47.7,47.7,0,0,0-32.79-25.46L342.5,160h0L298,231.08a128,128,0,0,0-84,0l-23.32-37.2a4,4,0,0,0-3.39-1.88H51.14a4,4,0,0,0-3.36,6.16l82.7,128.73a128,128,0,1,0,251,0L483.62,168A48.22,48.22,0,0,0,486.17,120.56Zm-226,295.31a64,64,0,1,1,59.69-59.69A64.08,64.08,0,0,1,260.18,415.87Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
