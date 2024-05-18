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
    ariaLabel = 'server',
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
      d="M125.295 40.7282C159.804 25.1587 206.27 16 256.5 16C306.73 16 352.966 25.1588 387.248 40.7476C420.143 55.7056 448 80 448 112V112.03C447.989 117.563 444.902 125.92 435.705 136.25C426.71 146.352 413.088 156.908 395.432 166.514C360.162 185.702 310.794 200 256 200C201.206 200 151.838 185.702 116.568 166.514C98.9116 156.908 85.2901 146.352 76.2953 136.25C67.0809 125.901 64 117.532 64 112C64 79.5721 92.2455 55.6392 125.295 40.7282Z"
    />
    <path
      d="M410.724 194.623C420.31 189.409 429.172 182.868 437.13 175.719C441.184 172.077 448 174.829 448 180.279V258C448 263.532 444.919 269.901 435.705 280.25C426.71 290.352 413.088 300.908 395.432 310.514C360.162 329.702 310.794 344 256 344C201.206 344 151.838 329.702 116.568 310.514C98.9116 300.908 85.2901 290.352 76.2953 280.25C67.0809 269.901 64 263.532 64 258V180.279C64 174.829 70.8158 172.077 74.8702 175.719C82.8279 182.867 91.69 189.409 101.276 194.623C141.286 216.39 195.918 232 256 232C316.082 232 370.714 216.39 410.724 194.623Z"
    />
    <path
      d="M74.8702 319.719C70.8158 316.077 64 318.829 64 324.279V400C64 432.224 92.0043 456.169 124.928 471.134C159.297 486.756 205.653 496 256 496C306.347 496 352.703 486.756 387.072 471.134C419.996 456.169 448 432.224 448 400V324.279C448 318.829 441.184 316.077 437.13 319.719C429.172 326.867 420.31 333.409 410.724 338.623C370.714 360.39 316.082 376 256 376C195.918 376 141.286 360.39 101.276 338.623C91.69 333.409 82.8279 326.867 74.8702 319.719Z"
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
      d="M125.295 40.7282C159.804 25.1587 206.27 16 256.5 16C306.73 16 352.966 25.1588 387.248 40.7476C420.143 55.7056 448 80 448 112V112.03C447.989 117.563 444.902 125.92 435.705 136.25C426.71 146.352 413.088 156.908 395.432 166.514C360.162 185.702 310.794 200 256 200C201.206 200 151.838 185.702 116.568 166.514C98.9116 156.908 85.2901 146.352 76.2953 136.25C67.0809 125.901 64 117.532 64 112C64 79.5721 92.2455 55.6392 125.295 40.7282Z"
    />
    <path
      d="M410.724 194.623C420.31 189.409 429.172 182.868 437.13 175.719C441.184 172.077 448 174.829 448 180.279V258C448 263.532 444.919 269.901 435.705 280.25C426.71 290.352 413.088 300.908 395.432 310.514C360.162 329.702 310.794 344 256 344C201.206 344 151.838 329.702 116.568 310.514C98.9116 300.908 85.2901 290.352 76.2953 280.25C67.0809 269.901 64 263.532 64 258V180.279C64 174.829 70.8158 172.077 74.8702 175.719C82.8279 182.867 91.69 189.409 101.276 194.623C141.286 216.39 195.918 232 256 232C316.082 232 370.714 216.39 410.724 194.623Z"
    />
    <path
      d="M74.8702 319.719C70.8158 316.077 64 318.829 64 324.279V400C64 432.224 92.0043 456.169 124.928 471.134C159.297 486.756 205.653 496 256 496C306.347 496 352.703 486.756 387.072 471.134C419.996 456.169 448 432.224 448 400V324.279C448 318.829 441.184 316.077 437.13 319.719C429.172 326.867 420.31 333.409 410.724 338.623C370.714 360.39 316.082 376 256 376C195.918 376 141.286 360.39 101.276 338.623C91.69 333.409 82.8279 326.867 74.8702 319.719Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
