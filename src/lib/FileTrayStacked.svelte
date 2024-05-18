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
    ariaLabel =  "file tray stacked" , 
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
      <path d="M464,352H320a16,16,0,0,0-16,16,48,48,0,0,1-96,0,16,16,0,0,0-16-16H48a16,16,0,0,0-16,16v64a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V368A16,16,0,0,0,464,352Z"/><path d="M479.46,187.88,447.61,68.45C441.27,35.59,417.54,16,384,16H128c-16.8,0-31,4.69-42.1,13.94S67.66,52,64.4,68.4L32.54,187.88A15.9,15.9,0,0,0,32,192v48c0,35.29,28.71,80,64,80H416c35.29,0,64-44.71,64-80V192A15.9,15.9,0,0,0,479.46,187.88ZM440.57,176H320a15.92,15.92,0,0,0-16,15.82,48,48,0,1,1-96,0A15.92,15.92,0,0,0,192,176H71.43a2,2,0,0,1-1.93-2.52L95.71,75C99.26,56.59,109.52,48,128,48H384c18.59,0,28.84,8.53,32.25,26.85l26.25,98.63A2,2,0,0,1,440.57,176Z"/>
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
      <path d="M464,352H320a16,16,0,0,0-16,16,48,48,0,0,1-96,0,16,16,0,0,0-16-16H48a16,16,0,0,0-16,16v64a64.07,64.07,0,0,0,64,64H416a64.07,64.07,0,0,0,64-64V368A16,16,0,0,0,464,352Z"/><path d="M479.46,187.88,447.61,68.45C441.27,35.59,417.54,16,384,16H128c-16.8,0-31,4.69-42.1,13.94S67.66,52,64.4,68.4L32.54,187.88A15.9,15.9,0,0,0,32,192v48c0,35.29,28.71,80,64,80H416c35.29,0,64-44.71,64-80V192A15.9,15.9,0,0,0,479.46,187.88ZM440.57,176H320a15.92,15.92,0,0,0-16,15.82,48,48,0,1,1-96,0A15.92,15.92,0,0,0,192,176H71.43a2,2,0,0,1-1.93-2.52L95.71,75C99.26,56.59,109.52,48,128,48H384c18.59,0,28.84,8.53,32.25,26.85l26.25,98.63A2,2,0,0,1,440.57,176Z"/>
  </svg>
{/if}
