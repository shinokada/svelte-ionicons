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
    ariaLabel = 'arrow down left box outline',
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
      d="M123.636 269.236L123.636 90.5454C123.636 79.2617 128.119 68.4401 136.098 60.4613C144.076 52.4824 154.898 48 166.182 48L421.455 48C432.738 48 443.56 52.4824 451.539 60.4613C459.518 68.4401 464 79.2617 464 90.5454L464 345.818C464 357.102 459.518 367.924 451.539 375.902C443.56 383.881 432.738 388.364 421.455 388.364L242.764 388.364"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 331.636L48 464L180.364 464"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M296 216L48 464"
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
      d="M123.636 269.236L123.636 90.5454C123.636 79.2617 128.119 68.4401 136.098 60.4613C144.076 52.4824 154.898 48 166.182 48L421.455 48C432.738 48 443.56 52.4824 451.539 60.4613C459.518 68.4401 464 79.2617 464 90.5454L464 345.818C464 357.102 459.518 367.924 451.539 375.902C443.56 383.881 432.738 388.364 421.455 388.364L242.764 388.364"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M48 331.636L48 464L180.364 464"
      stroke="black"
      stroke-width="32"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M296 216L48 464"
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
