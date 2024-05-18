<script lang="ts">
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
  interface Props extends BaseProps {
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
    ariaLabel = 'pizza outline',
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
    {onclick}
    {onkeydown}
    {onkeyup}
  >
    {#if title?.id && title.title}
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M404.76,123.08C358.37,104.18,309.69,96,256,96S149.9,105,107.1,122.68c-8.08,3.3-15.26,9-10.07,19.5C101.24,150.71,203,375,241.66,455a15.94,15.94,0,0,0,28.72,0L414.43,142.78C417.62,135.88,415.33,127.38,404.76,123.08Z"
      style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
    /><path
      d="M436.38,82.68C384.31,62.08,320.17,48,256,48S128.65,60.78,75.48,82.08C70.79,84,62,88.43,64.41,95.88L74.09,120c4,8.2,8.67,8.2,15.06,8.2,1.79,0,4.29-1,7.28-2.18A442.46,442.46,0,0,1,256,96c56.76,0,114.91,12,159.6,30,3.59,1.4,5.59,2.18,7.28,2.18,6.58,0,10.38,2.19,15-8.1L447.65,96C449.66,90,442.66,85.18,436.38,82.68Z"
      style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
    /><circle cx="192" cy="192" r="32" /><circle cx="320" cy="208" r="32" /><circle
      cx="256"
      cy="320"
      r="32"
    />
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
      <title id={title.id}>{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id={desc.id}>{desc.desc}</desc>
    {/if}
    <path
      d="M404.76,123.08C358.37,104.18,309.69,96,256,96S149.9,105,107.1,122.68c-8.08,3.3-15.26,9-10.07,19.5C101.24,150.71,203,375,241.66,455a15.94,15.94,0,0,0,28.72,0L414.43,142.78C417.62,135.88,415.33,127.38,404.76,123.08Z"
      style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
    /><path
      d="M436.38,82.68C384.31,62.08,320.17,48,256,48S128.65,60.78,75.48,82.08C70.79,84,62,88.43,64.41,95.88L74.09,120c4,8.2,8.67,8.2,15.06,8.2,1.79,0,4.29-1,7.28-2.18A442.46,442.46,0,0,1,256,96c56.76,0,114.91,12,159.6,30,3.59,1.4,5.59,2.18,7.28,2.18,6.58,0,10.38,2.19,15-8.1L447.65,96C449.66,90,442.66,85.18,436.38,82.68Z"
      style="fill:none;stroke:{color};stroke-miterlimit:10;stroke-width:32px"
    /><circle cx="192" cy="192" r="32" /><circle cx="320" cy="208" r="32" /><circle
      cx="256"
      cy="320"
      r="32"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
