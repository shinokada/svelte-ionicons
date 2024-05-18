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
    ariaLabel =  "text sharp" , 
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
      <path d="M404.42,170c-41.23,0-78.07,24.06-93.85,61.3L304,246.52l40.33,17.18,6.56-15.22c8.9-21,29.91-34.55,53.53-34.55,34.55,0,57.76,23.27,57.76,57.91v2.3c-22.12.59-48.65,2.05-72.27,4.84-54.52,6.43-87.06,36.23-87.06,79.72,0,23.16,8.72,44,24.56,58.59C342.28,431,362.55,438,384.51,438c30.86,0,57.5-7.33,77.67-22.64V438H506V271.84C506,212.83,463.28,170,404.42,170ZM384.51,395.07c-17.46,0-37.85-9.84-37.85-36.37,0-10.65,3.82-18.11,12.38-24.19,8.34-5.92,21.12-10.15,36-11.9,21.78-2.57,46.31-3.95,67-4.52C459.88,369.58,434.47,395.07,384.51,395.07Z"/><path d="M93.25,325.87h125.5L260.94,438H308L155,48,4,438H51.06ZM156,160.71,202.25,282h-92.5Z"/>
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
      <path d="M404.42,170c-41.23,0-78.07,24.06-93.85,61.3L304,246.52l40.33,17.18,6.56-15.22c8.9-21,29.91-34.55,53.53-34.55,34.55,0,57.76,23.27,57.76,57.91v2.3c-22.12.59-48.65,2.05-72.27,4.84-54.52,6.43-87.06,36.23-87.06,79.72,0,23.16,8.72,44,24.56,58.59C342.28,431,362.55,438,384.51,438c30.86,0,57.5-7.33,77.67-22.64V438H506V271.84C506,212.83,463.28,170,404.42,170ZM384.51,395.07c-17.46,0-37.85-9.84-37.85-36.37,0-10.65,3.82-18.11,12.38-24.19,8.34-5.92,21.12-10.15,36-11.9,21.78-2.57,46.31-3.95,67-4.52C459.88,369.58,434.47,395.07,384.51,395.07Z"/><path d="M93.25,325.87h125.5L260.94,438H308L155,48,4,438H51.06ZM156,160.71,202.25,282h-92.5Z"/>
  </svg>
{/if}
