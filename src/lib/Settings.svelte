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
    ariaLabel = 'settings',
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
    <circle cx="256" cy="256" r="48" /><path
      d="M470.39,300l-.47-.38-31.56-24.75a16.11,16.11,0,0,1-6.1-13.33l0-11.56a16,16,0,0,1,6.11-13.22L469.92,212l.47-.38a26.68,26.68,0,0,0,5.9-34.06l-42.71-73.9a1.59,1.59,0,0,1-.13-.22A26.86,26.86,0,0,0,401,92.14l-.35.13L363.55,107.2a15.94,15.94,0,0,1-14.47-1.29q-4.92-3.1-10-5.86a15.94,15.94,0,0,1-8.19-11.82L325.3,48.64l-.12-.72A27.22,27.22,0,0,0,298.76,26H213.24a26.92,26.92,0,0,0-26.45,22.39l-.09.56-5.57,39.67A16,16,0,0,1,173,100.44c-3.42,1.84-6.76,3.79-10,5.82a15.92,15.92,0,0,1-14.43,1.27l-37.13-15-.35-.14a26.87,26.87,0,0,0-32.48,11.34l-.13.22L35.71,177.9A26.71,26.71,0,0,0,41.61,212l.47.38,31.56,24.75a16.11,16.11,0,0,1,6.1,13.33l0,11.56a16,16,0,0,1-6.11,13.22L42.08,300l-.47.38a26.68,26.68,0,0,0-5.9,34.06l42.71,73.9a1.59,1.59,0,0,1,.13.22A26.86,26.86,0,0,0,111,419.86l.35-.13,37.07-14.93a15.94,15.94,0,0,1,14.47,1.29q4.92,3.11,10,5.86a15.94,15.94,0,0,1,8.19,11.82l5.56,39.59.12.72A27.22,27.22,0,0,0,213.24,486h85.52a26.92,26.92,0,0,0,26.45-22.39l.09-.56,5.57-39.67a16,16,0,0,1,8.18-11.82c3.42-1.84,6.76-3.79,10-5.82a15.92,15.92,0,0,1,14.43-1.27l37.13,14.95.35.14a26.85,26.85,0,0,0,32.48-11.34,2.53,2.53,0,0,1,.13-.22l42.71-73.89A26.7,26.7,0,0,0,470.39,300ZM335.91,259.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,259.76Z"
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
    <circle cx="256" cy="256" r="48" /><path
      d="M470.39,300l-.47-.38-31.56-24.75a16.11,16.11,0,0,1-6.1-13.33l0-11.56a16,16,0,0,1,6.11-13.22L469.92,212l.47-.38a26.68,26.68,0,0,0,5.9-34.06l-42.71-73.9a1.59,1.59,0,0,1-.13-.22A26.86,26.86,0,0,0,401,92.14l-.35.13L363.55,107.2a15.94,15.94,0,0,1-14.47-1.29q-4.92-3.1-10-5.86a15.94,15.94,0,0,1-8.19-11.82L325.3,48.64l-.12-.72A27.22,27.22,0,0,0,298.76,26H213.24a26.92,26.92,0,0,0-26.45,22.39l-.09.56-5.57,39.67A16,16,0,0,1,173,100.44c-3.42,1.84-6.76,3.79-10,5.82a15.92,15.92,0,0,1-14.43,1.27l-37.13-15-.35-.14a26.87,26.87,0,0,0-32.48,11.34l-.13.22L35.71,177.9A26.71,26.71,0,0,0,41.61,212l.47.38,31.56,24.75a16.11,16.11,0,0,1,6.1,13.33l0,11.56a16,16,0,0,1-6.11,13.22L42.08,300l-.47.38a26.68,26.68,0,0,0-5.9,34.06l42.71,73.9a1.59,1.59,0,0,1,.13.22A26.86,26.86,0,0,0,111,419.86l.35-.13,37.07-14.93a15.94,15.94,0,0,1,14.47,1.29q4.92,3.11,10,5.86a15.94,15.94,0,0,1,8.19,11.82l5.56,39.59.12.72A27.22,27.22,0,0,0,213.24,486h85.52a26.92,26.92,0,0,0,26.45-22.39l.09-.56,5.57-39.67a16,16,0,0,1,8.18-11.82c3.42-1.84,6.76-3.79,10-5.82a15.92,15.92,0,0,1,14.43-1.27l37.13,14.95.35.14a26.85,26.85,0,0,0,32.48-11.34,2.53,2.53,0,0,1,.13-.22l42.71-73.89A26.7,26.7,0,0,0,470.39,300ZM335.91,259.76a80,80,0,1,1-83.66-83.67A80.21,80.21,0,0,1,335.91,259.76Z"
    />
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-ionicons.codewithshin.com/)
## Props
@props: 
-->
