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
    ariaLabel =  "brush" , 
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
      <path d="M233.15,360.11a15.7,15.7,0,0,1-4.92-.77,16,16,0,0,1-10.92-13c-2.15-15-19.95-32.46-36.62-35.85A16,16,0,0,1,172,284.16L383.09,49.06c.19-.22.39-.43.59-.63a56.57,56.57,0,0,1,79.89,0h0a56.51,56.51,0,0,1,.11,79.78l-219,227A16,16,0,0,1,233.15,360.11Z"/><path d="M119.89,480.11c-32.14,0-65.45-16.89-84.85-43a16,16,0,0,1,12.85-25.54c5.34,0,20-4.87,20-20.57,0-39.07,31.4-70.86,70-70.86s70,31.79,70,70.86C207.89,440.12,168.41,480.11,119.89,480.11Z"/>
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
      <path d="M233.15,360.11a15.7,15.7,0,0,1-4.92-.77,16,16,0,0,1-10.92-13c-2.15-15-19.95-32.46-36.62-35.85A16,16,0,0,1,172,284.16L383.09,49.06c.19-.22.39-.43.59-.63a56.57,56.57,0,0,1,79.89,0h0a56.51,56.51,0,0,1,.11,79.78l-219,227A16,16,0,0,1,233.15,360.11Z"/><path d="M119.89,480.11c-32.14,0-65.45-16.89-84.85-43a16,16,0,0,1,12.85-25.54c5.34,0,20-4.87,20-20.57,0-39.07,31.4-70.86,70-70.86s70,31.79,70,70.86C207.89,440.12,168.41,480.11,119.89,480.11Z"/>
  </svg>
{/if}
