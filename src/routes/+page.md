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
npm i -D svelte-ionicons
```

## Usages

```html
<script>
  import { AddSharp } from 'svelte-ionicons';
</script>

<AddSharp size="40" />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AddSharp from 'svelte-ionicons/AddSharp.svelte';
</script>

<AddSharp />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '24';
- role = 'img';
- color = 'currentColor';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<WalkSharp size="30" />
<WalkSharp size="40" />
<WalkSharp size="50" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<WalkSharp class="shrink-0 h-20 w-20" />
```

# CSS HEX Colors

Use the color prop to change colors with HEX color code.

```html
<WalkSharp color="#c61515" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

```html
// Tailwind CSS
<AddSharp size="40" class="px-5" />

// Bootstrap
<AddSharp size="40" class="position-absolute top-0 px-1" />
```

## Dark mode with Tailwind CSS

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the class prop.

Let’s use dark for the dark mode class as an example.

```html
<WalkSharp class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `Bandage` has `aria-label="bandage"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Bandage ariaLabel="bandage icon" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Bandage tabindex="-1" />
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
<Bandage tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Bandage } from 'svelte-ionicons';
</script>

<svelte:component this="{Bandage}" />
```

## Using onMount

```html
<script>
  import { Bandage } from 'svelte-ionicons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Bandage({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-heros`.

```html
<script>
  import * as Icon from 'svelte-ionicons';
</script>

<Icon.Bandage size="30" />
<Icon.WalkSharp size="40" class="mx-4" />
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

