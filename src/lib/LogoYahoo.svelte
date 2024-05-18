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
    ariaLabel =  "logo yahoo" , 
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
       <path d="M0 139.009H97.6482L154.508 284.738L212.108 139.009H307.174L164.022 484H68.3374L107.526 392.583L0.00302391 139.009H0ZM417.5 256H311L405.907 28L512 28.0045L417.5 256ZM339.292 277.221C371.964 277.221 398.448 303.754 398.448 336.479C398.448 369.206 371.964 395.739 339.292 395.739C306.625 395.739 280.146 369.206 280.146 336.479C280.146 303.754 306.629 277.221 339.292 277.221Z" />  
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
       <path d="M0 139.009H97.6482L154.508 284.738L212.108 139.009H307.174L164.022 484H68.3374L107.526 392.583L0.00302391 139.009H0ZM417.5 256H311L405.907 28L512 28.0045L417.5 256ZM339.292 277.221C371.964 277.221 398.448 303.754 398.448 336.479C398.448 369.206 371.964 395.739 339.292 395.739C306.625 395.739 280.146 369.206 280.146 336.479C280.146 303.754 306.629 277.221 339.292 277.221Z" />  
  </svg>
{/if}
