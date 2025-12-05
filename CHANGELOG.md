# svelte-ionicons

## 3.0.1

### Patch Changes

- fix: change let to const

## 3.0.0

### Major Changes

- BREAKING: Removed default aria-label from all icons. Icons are now decorative by default. Add ariaLabel prop explicitly for standalone icons that need accessible labels.
  - Added focusable prop (defaults to "false", accepts "true" | "false" | "auto")
  - Added automatic aria-labelledby support when title prop is provided
  - Fixed ariaDescribedby whitespace trimming
  - Fixed accessibility precedence: title now correctly takes precedence over ariaLabel

## 2.0.2

### Patch Changes

- fix: change svelte-5-ui-lib with flowbite-svelte

## 2.0.1

### Patch Changes

- docs: README update

## 2.0.0

### Patch Changes

- feat: use runes-webkit for next version ([`77ccf6d`](https://github.com/shinokada/svelte-ionicons/commit/77ccf6d97634a9a4e6a5f760ebdde3f118e8dea0))

- fix: peerDependencies ([`6d51c0d`](https://github.com/shinokada/svelte-ionicons/commit/6d51c0d3954bd63227f4d8cf05d350e68f789ddf))

- fix: type update ([`9af636e`](https://github.com/shinokada/svelte-ionicons/commit/9af636eb0c5c90b56dc1dd8316df76dd9d671d68))

- feat: extends SVGAttributes<SVGElement> ([`8b7c35f`](https://github.com/shinokada/svelte-ionicons/commit/8b7c35f47d1b376dfd9782f488ae592dccaea043))

- fix: remove svelte:component from Icon.svelte ([`8322a51`](https://github.com/shinokada/svelte-ionicons/commit/8322a5185208dafd5508689aed13bf268495662b))

## 2.0.0-next.5

### Patch Changes

- fix: type update ([`9af636eb0c5c90b56dc1dd8316df76dd9d671d68`](https://github.com/shinokada/svelte-ionicons/commit/9af636eb0c5c90b56dc1dd8316df76dd9d671d68))

## 2.0.0-next.4

### Patch Changes

- fix: remove svelte:component from Icon.svelte ([`8322a5185208dafd5508689aed13bf268495662b`](https://github.com/shinokada/svelte-ionicons/commit/8322a5185208dafd5508689aed13bf268495662b))

## 2.0.0-next.3

### Patch Changes

- fix: peerDependencies ([`6d51c0d3954bd63227f4d8cf05d350e68f789ddf`](https://github.com/shinokada/svelte-ionicons/commit/6d51c0d3954bd63227f4d8cf05d350e68f789ddf))

## 2.0.0-next.2

### Patch Changes

- feat: extends SVGAttributes<SVGElement> ([`8b7c35f47d1b376dfd9782f488ae592dccaea043`](https://github.com/shinokada/svelte-ionicons/commit/8b7c35f47d1b376dfd9782f488ae592dccaea043))
