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
    ariaLabel = 'balloon',
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
      d="M391,307.27c32.75-46.35,46.59-101.63,39-155.68A175.82,175.82,0,0,0,231.38,2c-96,13.49-163.14,102.58-149.65,198.58,7.57,53.89,36.12,103.16,80.37,138.74C186.68,359,214.41,372.82,240.72,379a8,8,0,0,1,6,9.22l-4.87,26.38a16.29,16.29,0,0,0,1.48,10.57,16,16,0,0,0,14.2,8.61,15.21,15.21,0,0,0,2.23-.16l17.81-2.5a2,2,0,0,1,2.09,1.14c16.72,36.31,45.46,63.85,82.15,78.36a16,16,0,0,0,21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57,118.57,0,0,1-59.3-51.88,2,2,0,0,1,1.45-3l7.4-1a16.54,16.54,0,0,0,10.08-5.23,16,16,0,0,0,2.39-17.8l-12.06-24.23A8,8,0,0,1,326.35,367C349.94,353.83,372.8,333,391,307.27Zm-154.9,16.78a16,16,0,0,1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16,16,0,1,1,30.12-10.8c14.5,40.44,47.27,65.77,73.1,76a16,16,0,0,1-5.89,30.88Z"
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
      d="M391,307.27c32.75-46.35,46.59-101.63,39-155.68A175.82,175.82,0,0,0,231.38,2c-96,13.49-163.14,102.58-149.65,198.58,7.57,53.89,36.12,103.16,80.37,138.74C186.68,359,214.41,372.82,240.72,379a8,8,0,0,1,6,9.22l-4.87,26.38a16.29,16.29,0,0,0,1.48,10.57,16,16,0,0,0,14.2,8.61,15.21,15.21,0,0,0,2.23-.16l17.81-2.5a2,2,0,0,1,2.09,1.14c16.72,36.31,45.46,63.85,82.15,78.36a16,16,0,0,0,21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57,118.57,0,0,1-59.3-51.88,2,2,0,0,1,1.45-3l7.4-1a16.54,16.54,0,0,0,10.08-5.23,16,16,0,0,0,2.39-17.8l-12.06-24.23A8,8,0,0,1,326.35,367C349.94,353.83,372.8,333,391,307.27Zm-154.9,16.78a16,16,0,0,1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16,16,0,1,1,30.12-10.8c14.5,40.44,47.27,65.77,73.1,76a16,16,0,0,1-5.89,30.88Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
