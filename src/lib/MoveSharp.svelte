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
    ariaLabel =  "move sharp" , 
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
      <polyline points="176 112 256 32 336 112" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><line x1="255.98" y1="32" x2="256" y2="480" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><polyline points="176 400 256 480 336 400" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><polyline points="400 176 480 256 400 336" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><polyline points="112 176 32 256 112 336" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><line x1="32" y1="256" x2="480" y2="256" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/>
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
      <polyline points="176 112 256 32 336 112" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><line x1="255.98" y1="32" x2="256" y2="480" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><polyline points="176 400 256 480 336 400" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><polyline points="400 176 480 256 400 336" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><polyline points="112 176 32 256 112 336" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/><line x1="32" y1="256" x2="480" y2="256" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/>
  </svg>
{/if}
