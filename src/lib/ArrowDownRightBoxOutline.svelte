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
    ariaLabel = 'arrow down right box outline',
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
      d="M269.236 388.364L90.5454 388.364C79.2617 388.364 68.4401 383.881 60.4612 375.902C52.4824 367.924 48 357.102 48 345.818L48 90.5454C48 79.2617 52.4824 68.4401 60.4613 60.4613C68.4401 52.4824 79.2617 48 90.5454 48L345.818 48C357.102 48 367.924 52.4825 375.902 60.4613C383.881 68.4401 388.364 79.2617 388.364 90.5455L388.364 269.236"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M331.636 464L464 464L464 331.636"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M216 216L464 464"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
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
      d="M269.236 388.364L90.5454 388.364C79.2617 388.364 68.4401 383.881 60.4612 375.902C52.4824 367.924 48 357.102 48 345.818L48 90.5454C48 79.2617 52.4824 68.4401 60.4613 60.4613C68.4401 52.4824 79.2617 48 90.5454 48L345.818 48C357.102 48 367.924 52.4825 375.902 60.4613C383.881 68.4401 388.364 79.2617 388.364 90.5455L388.364 269.236"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M331.636 464L464 464L464 331.636"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M216 216L464 464"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
