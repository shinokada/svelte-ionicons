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
    ariaLabel =  "megaphone" , 
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
      <path d="M48,176v.66a17.38,17.38,0,0,1-4.2,11.23l0,.05C38.4,194.32,32,205.74,32,224c0,16.55,5.3,28.23,11.68,35.91A19,19,0,0,1,48,272h0a32,32,0,0,0,32,32h8a8,8,0,0,0,8-8V152a8,8,0,0,0-8-8H80A32,32,0,0,0,48,176Z"/><path d="M452.18,186.55l-.93-.17a4,4,0,0,1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32-11.92-4.11-24.34-.76-31.68,8.53A431.18,431.18,0,0,1,344.12,93.9c-23.63,20-46.24,34.25-67,42.31a8,8,0,0,0-5.15,7.47V299a16,16,0,0,0,9.69,14.69c19.34,8.29,40.24,21.83,62,40.28a433.74,433.74,0,0,1,51.68,52.16A26.22,26.22,0,0,0,416.44,416a33.07,33.07,0,0,0,10.44-1.74C439.71,410,448,399.05,448,386.4V265.53a4,4,0,0,1,3.33-3.94l.85-.14C461.8,258.84,480,247.67,480,224S461.8,189.16,452.18,186.55Z"/><path d="M240,320V152a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V456a24,24,0,0,0,24,24h52.45a32.66,32.66,0,0,0,25.93-12.45,31.65,31.65,0,0,0,5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19-7.91-22.9-18.34-37.07-21.12-69.32A32,32,0,0,0,240,320Z"/>
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
      <path d="M48,176v.66a17.38,17.38,0,0,1-4.2,11.23l0,.05C38.4,194.32,32,205.74,32,224c0,16.55,5.3,28.23,11.68,35.91A19,19,0,0,1,48,272h0a32,32,0,0,0,32,32h8a8,8,0,0,0,8-8V152a8,8,0,0,0-8-8H80A32,32,0,0,0,48,176Z"/><path d="M452.18,186.55l-.93-.17a4,4,0,0,1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32-11.92-4.11-24.34-.76-31.68,8.53A431.18,431.18,0,0,1,344.12,93.9c-23.63,20-46.24,34.25-67,42.31a8,8,0,0,0-5.15,7.47V299a16,16,0,0,0,9.69,14.69c19.34,8.29,40.24,21.83,62,40.28a433.74,433.74,0,0,1,51.68,52.16A26.22,26.22,0,0,0,416.44,416a33.07,33.07,0,0,0,10.44-1.74C439.71,410,448,399.05,448,386.4V265.53a4,4,0,0,1,3.33-3.94l.85-.14C461.8,258.84,480,247.67,480,224S461.8,189.16,452.18,186.55Z"/><path d="M240,320V152a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8V456a24,24,0,0,0,24,24h52.45a32.66,32.66,0,0,0,25.93-12.45,31.65,31.65,0,0,0,5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19-7.91-22.9-18.34-37.07-21.12-69.32A32,32,0,0,0,240,320Z"/>
  </svg>
{/if}
