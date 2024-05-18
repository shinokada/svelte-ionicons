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
    ariaLabel =  "shuffle sharp" , 
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
      <polyline points="400 304 448 352 400 400" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="400 112 448 160 400 208" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="64 352 192 352 252 260" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="64 160 192 160 320 352 416 352" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="416 160 320 160 288 208" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/>
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
      <polyline points="400 304 448 352 400 400" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="400 112 448 160 400 208" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="64 352 192 352 252 260" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="64 160 192 160 320 352 416 352" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><polyline points="416 160 320 160 288 208" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/>
  </svg>
{/if}
