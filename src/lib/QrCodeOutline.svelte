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
    ariaLabel =  "qr code outline" , 
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
      <rect x="336" y="336" width="80" height="80" rx="8" ry="8"/><rect x="272" y="272" width="64" height="64" rx="8" ry="8"/><rect x="416" y="416" width="64" height="64" rx="8" ry="8"/><rect x="432" y="272" width="48" height="48" rx="8" ry="8"/><rect x="272" y="432" width="48" height="48" rx="8" ry="8"/><rect x="336" y="96" width="80" height="80" rx="8" ry="8"/><rect x="288" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="96" y="96" width="80" height="80" rx="8" ry="8"/><rect x="48" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="96" y="336" width="80" height="80" rx="8" ry="8"/><rect x="48" y="288" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
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
      <rect x="336" y="336" width="80" height="80" rx="8" ry="8"/><rect x="272" y="272" width="64" height="64" rx="8" ry="8"/><rect x="416" y="416" width="64" height="64" rx="8" ry="8"/><rect x="432" y="272" width="48" height="48" rx="8" ry="8"/><rect x="272" y="432" width="48" height="48" rx="8" ry="8"/><rect x="336" y="96" width="80" height="80" rx="8" ry="8"/><rect x="288" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="96" y="96" width="80" height="80" rx="8" ry="8"/><rect x="48" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><rect x="96" y="336" width="80" height="80" rx="8" ry="8"/><rect x="48" y="288" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/>
  </svg>
{/if}
