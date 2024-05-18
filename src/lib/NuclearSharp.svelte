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
    ariaLabel =  "nuclear sharp" , 
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
      <circle cx="256" cy="256" r="48"/><path d="M223.47,335.59l-51.71,68a169.73,169.73,0,0,0,168.48,0l-51.71-68" style="fill:none"/><path d="M403.08,108.92A208,208,0,0,0,108.92,403.08,208,208,0,0,0,403.08,108.92ZM342,256a86.13,86.13,0,0,1-53.47,79.59l51.71,68a169.73,169.73,0,0,1-168.48,0l51.71-68a86,86,0,0,1-50.56-101.77l-85.48.09a170.21,170.21,0,0,1,73.83-119L199.2,191.5a85.78,85.78,0,0,1,113.6,0l37.94-76.59a170.21,170.21,0,0,1,73.83,119l-85.48-.09A85.87,85.87,0,0,1,342,256Z"/>
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
      <circle cx="256" cy="256" r="48"/><path d="M223.47,335.59l-51.71,68a169.73,169.73,0,0,0,168.48,0l-51.71-68" style="fill:none"/><path d="M403.08,108.92A208,208,0,0,0,108.92,403.08,208,208,0,0,0,403.08,108.92ZM342,256a86.13,86.13,0,0,1-53.47,79.59l51.71,68a169.73,169.73,0,0,1-168.48,0l51.71-68a86,86,0,0,1-50.56-101.77l-85.48.09a170.21,170.21,0,0,1,73.83-119L199.2,191.5a85.78,85.78,0,0,1,113.6,0l37.94-76.59a170.21,170.21,0,0,1,73.83,119l-85.48-.09A85.87,85.87,0,0,1,342,256Z"/>
  </svg>
{/if}
