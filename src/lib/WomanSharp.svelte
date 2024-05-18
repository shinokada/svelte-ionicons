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
    ariaLabel = 'woman sharp',
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
    <circle cx="255.75" cy="56" r="56" /><path
      d="M310.28,191.4h.05l7.66-2.3,36.79,122.6,46-13.8-16.21-54.16c0-.12,0-.24-.07-.36l-16.84-56.12-4.71-15.74h0l-.9-3H362l-2.51-8.45a44.84,44.84,0,0,0-43-32.08H195.24a44.84,44.84,0,0,0-43,32.08l-2.51,8.45h-.06l-.9,3h0l-4.71,15.74-16.84,56.12c0,.12,0,.24-.07.36L110.94,297.9l46,13.8L193.7,189.1l7.54,2.26L148.25,368h51.5V512h52V368h8V512h52V368h51.51Z"
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
    <circle cx="255.75" cy="56" r="56" /><path
      d="M310.28,191.4h.05l7.66-2.3,36.79,122.6,46-13.8-16.21-54.16c0-.12,0-.24-.07-.36l-16.84-56.12-4.71-15.74h0l-.9-3H362l-2.51-8.45a44.84,44.84,0,0,0-43-32.08H195.24a44.84,44.84,0,0,0-43,32.08l-2.51,8.45h-.06l-.9,3h0l-4.71,15.74-16.84,56.12c0,.12,0,.24-.07.36L110.94,297.9l46,13.8L193.7,189.1l7.54,2.26L148.25,368h51.5V512h52V368h8V512h52V368h51.51Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
