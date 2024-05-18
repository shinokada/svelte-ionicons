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
    ariaLabel =  "podium" , 
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
      <path d="M320,32H192a32,32,0,0,0-32,32V476a4,4,0,0,0,4,4H348a4,4,0,0,0,4-4V64A32,32,0,0,0,320,32Z"/><path d="M464,192H392a8,8,0,0,0-8,8V472a8,8,0,0,0,8,8h80a24,24,0,0,0,24-24V224A32,32,0,0,0,464,192Z"/><path d="M48,128a32,32,0,0,0-32,32V456a24,24,0,0,0,24,24h80a8,8,0,0,0,8-8V136a8,8,0,0,0-8-8Z"/>
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
      <path d="M320,32H192a32,32,0,0,0-32,32V476a4,4,0,0,0,4,4H348a4,4,0,0,0,4-4V64A32,32,0,0,0,320,32Z"/><path d="M464,192H392a8,8,0,0,0-8,8V472a8,8,0,0,0,8,8h80a24,24,0,0,0,24-24V224A32,32,0,0,0,464,192Z"/><path d="M48,128a32,32,0,0,0-32,32V456a24,24,0,0,0,24,24h80a8,8,0,0,0,8-8V136a8,8,0,0,0-8-8Z"/>
  </svg>
{/if}
