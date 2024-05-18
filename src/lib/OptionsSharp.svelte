<script lang='ts'>
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
  interface Props extends BaseProps{
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
    ariaLabel =  "options sharp" , 
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
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M381.25,112a48,48,0,0,0-90.5,0H48v32H290.75a48,48,0,0,0,90.5,0H464V112Z"/><path d="M176,208a48.09,48.09,0,0,0-45.25,32H48v32h82.75a48,48,0,0,0,90.5,0H464V240H221.25A48.09,48.09,0,0,0,176,208Z"/><path d="M336,336a48.09,48.09,0,0,0-45.25,32H48v32H290.75a48,48,0,0,0,90.5,0H464V368H381.25A48.09,48.09,0,0,0,336,336Z"/>
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
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path d="M381.25,112a48,48,0,0,0-90.5,0H48v32H290.75a48,48,0,0,0,90.5,0H464V112Z"/><path d="M176,208a48.09,48.09,0,0,0-45.25,32H48v32h82.75a48,48,0,0,0,90.5,0H464V240H221.25A48.09,48.09,0,0,0,176,208Z"/><path d="M336,336a48.09,48.09,0,0,0-45.25,32H48v32H290.75a48,48,0,0,0,90.5,0H464V368H381.25A48.09,48.09,0,0,0,336,336Z"/>
  </svg>
{/if}
