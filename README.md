<h1 align="center">Svelte Ionicons</h1>

<p align="center">
<a href="https://svelte-ionicons.codewithshin.com/">Svelte-Ionicons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-ionicons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-ionicons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-ionicons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-ionicons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-ionicons.svg" alt="npm" height="25"></a>
</p>

Ionicon components for Svelte/SveltKit. Svelte-Ionicons support all CSS frameworks.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<p align="center">
<img width="650" src="/static/images/ionicons-650-1050-optimized.png" />
</p>

## Installation

```sh
npm i -D svelte-ionicons
```

## Icon list

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)


## Usages

```html
<script>
  import { AddSharp	} from 'svelte-ionicons';
</script>

<AddSharp size="40" />
```

## Faster compiling

If you only need to use a couple of icons from this library in your Svelte app, importing it directly. This can help optimize compilation speed. 
By importing only what you need, you can reduce the amount of code that needs to be processed, which can improve overall performance.

```html
<script>
  import AddSharp from 'svelte-ionicons/AddSharp.svelte';
</script>

<AddSharp />
```

If you are TypeScript user, install **typescript version 5.0.0 or above**.

As of March 2023, the `typescript@beta` version is now available:

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

## REPL

[REPL](https://svelte.dev/repl/7e3373ecc2ec47d2b2136e7e01bf2e5e)

## Props

| Name      | Default   |
| --------- | --------- |
| size      | 15        |
| class     |           |
| ariaLabel | file name |

## Size

Use the `size` prop to change the size of icons.

```html
<WalkSharp size="30" />
<WalkSharp size="40" />
<WalkSharp size="50" />
```

## class

Use the `class` prop to add additional CSS.
This supports all CSS frameworks.

```html
// Tailwind CSS
<AddSharp size="40" class="px-5" />

// Bootstrap
<AddSharp size="40" class="position-absolute top-0 px-1" />
```

## aria-label

All icons have aria-label. For example `Bandage` has `aria-label="bandage"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Bandage ariaLabel="bandage icon"></Bandage>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Bandage tabindex="-1" />
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<Bandage tabindex="0"></Bandage>
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

## Original source


- [Ionicons](https://ionic.io/ionicons)
- [Ionicons GitHub Repo](https://github.com/ionic-team/ionicons)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
