# Svelte Ionicons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-ionicons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-ionicons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-ionicons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-ionicons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-ionicons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

1330+ Ionicon SVG icons for Svelte/SveltKit.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-ionicons)

## Original source

- [Ionicons](https://ionic.io/ionicons)
- [Ionicons GitHub Repo](https://github.com/ionic-team/ionicons)

## License

[Svelte-Ionicon License](https://github.com/shinokada/svelte-ionicons/blob/main/LICENSE)

[Ionicons LICENSE](https://github.com/ionic-team/ionicons/blob/main/LICENSE)

## Installation

```sh
pnpm i -D svelte-ionicons
```

## Usages

```html
<script>
  import { Icon } from 'svelte-ionicons';
</script>

<Icon name="accessibility-outline" />
```

## Props

- @prop name;
- @prop width = "24";
- @prop height = "24";
- @prop role = 'img';
- @prop color = 'currentColor'
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="accessibility-outline" width="100" height="100"/>
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Icon name="accessibility-outline" class="shrink-0 h-20 w-20" />
```

# CSS HEX Colors

Use the color prop to change colors with HEX color code.

```html
<Icon name="accessibility-outline" color="#c61515" />
```

## CSS frameworks suport


You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="accessibility-outline" class="inline m-1" />
```

Bootstrap examples:

```html
<Icon name="accessibility-outline" class="position-absolute top-0 px-1" />
```

## Dark mode with Tailwind CSS

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the class prop.

Let’s use dark for the dark mode class as an example.

```html
<Icon name="accessibility-outline" class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `accessibility-outline` has `aria-label="accessibility outline"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="accessibility-outline" ariaLabel="red accessibility outline" color="red" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="accessibility-outline" tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<Icon name="accessibility-outline" tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="accessibility-outline"/>
```

## Using onMount

```html
<script>
  import { Icon } from 'svelte-ionicons';
  import { onMount } from 'svelte';
  const props = {
    name: 'accessibility-outline',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```

## Import all

Use `import {Icon, icons} from 'svelte-iconicons'`.

```html
<script>
  import {Icon, icons} from 'svelte-supertiny';
</script>

{#each Object.keys(icons) as name}
<div class="flex gap-4 items-center text-lg">
  <Icon name={name} bind:width={size} bind:height={size} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

