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
    ariaLabel =  "wifi outline" , 
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
       <path d="M318.586 363.5L256 424L193.414 363.5C193.414 363.5 212 336 256 336C300 336 318.586 363.5 318.586 363.5Z" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/> <path d="M407.31 278L372 312C372 312 331 266 256 266C181 266 140 312 140 312L104.69 278C104.69 278 142.5 214 256 214C369.5 214 407.31 278 407.31 278Z" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/> <path d="M496 192L459.31 227.5C459.31 227.5 386.5 141 256 141C125.5 141 52.6897 227.5 52.6897 227.5L16 192C16 192 88 88 256 88C424 88 496 192 496 192Z" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>  
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
       <path d="M318.586 363.5L256 424L193.414 363.5C193.414 363.5 212 336 256 336C300 336 318.586 363.5 318.586 363.5Z" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/> <path d="M407.31 278L372 312C372 312 331 266 256 266C181 266 140 312 140 312L104.69 278C104.69 278 142.5 214 256 214C369.5 214 407.31 278 407.31 278Z" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/> <path d="M496 192L459.31 227.5C459.31 227.5 386.5 141 256 141C125.5 141 52.6897 227.5 52.6897 227.5L16 192C16 192 88 88 256 88C424 88 496 192 496 192Z" stroke="black" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>  
  </svg>
{/if}
