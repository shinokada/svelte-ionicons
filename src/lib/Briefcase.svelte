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
    ariaLabel =  "briefcase" , 
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
      <path d="M336,80H176a16,16,0,0,0-16,16v16H352V96A16,16,0,0,0,336,80Z" style="fill:none"/><path d="M496,176a64.07,64.07,0,0,0-64-64H384V96a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48v16H80a64.07,64.07,0,0,0-64,64v48H496ZM352,112H160V96a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z"/><path d="M336,264a24,24,0,0,1-24,24H200a24,24,0,0,1-24-24v-4a4,4,0,0,0-4-4H16V400a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V256H340a4,4,0,0,0-4,4Z"/>
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
      <path d="M336,80H176a16,16,0,0,0-16,16v16H352V96A16,16,0,0,0,336,80Z" style="fill:none"/><path d="M496,176a64.07,64.07,0,0,0-64-64H384V96a48.05,48.05,0,0,0-48-48H176a48.05,48.05,0,0,0-48,48v16H80a64.07,64.07,0,0,0-64,64v48H496ZM352,112H160V96a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16Z"/><path d="M336,264a24,24,0,0,1-24,24H200a24,24,0,0,1-24-24v-4a4,4,0,0,0-4-4H16V400a64,64,0,0,0,64,64H432a64,64,0,0,0,64-64V256H340a4,4,0,0,0-4,4Z"/>
  </svg>
{/if}
