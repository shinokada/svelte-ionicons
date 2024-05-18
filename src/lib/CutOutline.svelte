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
    ariaLabel =  "cut outline" , 
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
      <circle cx="104" cy="152" r="56" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="104" cy="360" r="56" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M157,175,146,190,183,205s3.46-6.42,7-10Z" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><path d="M154.17,334.43,460,162c-2.5-6.7-28-12-64-4-29.12,6.47-121.16,29.05-159.16,56.05C205.85,236.06,227,272,192,298c-25.61,19-44.43,22.82-44.43,22.82Z" style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M344.47,278.24,295,306.67c14.23,6.74,65.54,33.27,117,36.33,14.92.89,30,.39,39-6Z" style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><circle cx="256" cy="240" r="32" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/>
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
      <circle cx="104" cy="152" r="56" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><circle cx="104" cy="360" r="56" style="fill:none;stroke:{color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M157,175,146,190,183,205s3.46-6.42,7-10Z" style="fill:none;stroke:{color};stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px"/><path d="M154.17,334.43,460,162c-2.5-6.7-28-12-64-4-29.12,6.47-121.16,29.05-159.16,56.05C205.85,236.06,227,272,192,298c-25.61,19-44.43,22.82-44.43,22.82Z" style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><path d="M344.47,278.24,295,306.67c14.23,6.74,65.54,33.27,117,36.33,14.92.89,30,.39,39-6Z" style="fill:none;stroke:{color};stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"/><circle cx="256" cy="240" r="32" style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"/>
  </svg>
{/if}
