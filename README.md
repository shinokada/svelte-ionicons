# Svelte-Ionicons

Svelte-Ionicons support all CSS frameworks.

Ionicon components for Svelte

- [Ionicons](https://ionic.io/ionicons)
- [Ionicons GitHub Repo](https://github.com/ionic-team/ionicons)

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

## Icon list

[Icon list](https://github.com/shinokada/svelte-ionicons/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-ionicons
```

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

[REPL](https://svelte.dev/repl/7e3373ecc2ec47d2b2136e7e01bf2e5e?version=3.48.0)

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

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
