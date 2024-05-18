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
    ariaLabel =  "backspace" , 
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
      <path d="M403.13,96H156.87a44.9,44.9,0,0,0-33.68,15.27,15.88,15.88,0,0,0-1.91,2.7L32,247.75a16,16,0,0,0,0,16.5l89.15,133.57a16.24,16.24,0,0,0,2,2.88,44.89,44.89,0,0,0,33.7,15.3H403.13A44.92,44.92,0,0,0,448,371.13V140.87A44.92,44.92,0,0,0,403.13,96ZM348,311a16,16,0,1,1-22.63,22.62L271.67,280,218,333.65A16,16,0,0,1,195.35,311L249,257.33l-53.69-53.69A16,16,0,0,1,218,181l53.69,53.7L325.36,181A16,16,0,0,1,348,203.64l-53.7,53.69Z"/>
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
      <path d="M403.13,96H156.87a44.9,44.9,0,0,0-33.68,15.27,15.88,15.88,0,0,0-1.91,2.7L32,247.75a16,16,0,0,0,0,16.5l89.15,133.57a16.24,16.24,0,0,0,2,2.88,44.89,44.89,0,0,0,33.7,15.3H403.13A44.92,44.92,0,0,0,448,371.13V140.87A44.92,44.92,0,0,0,403.13,96ZM348,311a16,16,0,1,1-22.63,22.62L271.67,280,218,333.65A16,16,0,0,1,195.35,311L249,257.33l-53.69-53.69A16,16,0,0,1,218,181l53.69,53.7L325.36,181A16,16,0,0,1,348,203.64l-53.7,53.69Z"/>
  </svg>
{/if}
