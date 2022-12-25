<h1 align="center">Svelte-Ionicons</h1>

<p align="center">
<a href="https://svelte-ionicons.codewithshin.com/">Svelte-Ionicons</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/svelte-ionicons" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-ionicons" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-ionicons" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-ionicons" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-ionicons.svg" alt="npm"></a>
</p>

Ionicon components for Svelte/SveltKit. Svelte-Ionicons support all CSS frameworks.

<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion2.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion3.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion4.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion5.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion6.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion7.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion8.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-ionicons/main/static/images/ion9.webp" />
</p>

## Installation

```sh
npm i -D svelte-ionicons
```

## Icon list

[Icon list](https://github.com/shinokada/svelte-ionicons/blob/main/icon-list.md)


## Usages

```html
<script>
	import {
		AddSharp,
		Analytics,
		Apps,
		Bandage,
		BonfireOutline,
		Book,
		Walk,
		WalkOutline,
		WalkSharp,
		Barcode,
		BarcodeSharp,
		BarcodeOutline
	} from 'svelte-ionicons';
</script>

<AddSharp size="40" />
<Analytics size="40" />
<Apps size="40" />
<Bandage size="40" />
<BonfireOutline size="40" />
<Book size="40" />
<Walk size="40" />
<WalkOutline size="40" />
<WalkSharp size="40" />
<Barcode size="40" />
<BarcodeSharp size="40" />
<BarcodeOutline size="40" />
```

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
