<script lang="ts">
  import { HighlightCompo, Code, H2 } from 'runes-webkit';
  import { GitHubSponsor, type GitHubSponsorPropsType,  NpmVersion, type NpmVersionPropsType, License, type LicensePropsType, NpmDownload, type NpmDownloadPropsType } from 'svelte-shields';

  const sponsor: GitHubSponsorPropsType = {
    user: 'shinokada',
    logo:'github',
    color: 'red',
    link: ['https://github.com/sponsors/shinokada', 'https://github.com/sponsors/shinokada']
  };
  const npmversion: NpmVersionPropsType = {
    packageName: 'svelte-ionicons',
    color: 'red',
    logo:'svelte',
    link: [
      'https://www.npmjs.com/package/svelte-ionicons',
      'https://www.npmjs.com/package/svelte-ionicons?activeTab=versions'
    ]
  };
  const license: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-ionicons',
    link: [
      'https://github.com/shinokada/svelte-ionicons/blob/master/LICENSE',
      'https://github.com/shinokada/svelte-ionicons/blob/master/LICENSE'
    ]
  };
  const downloads: NpmDownloadPropsType = {
    packageName: 'svelte-ionicons',
    link: ['https://www.npmjs.com/package/svelte-ionicons']
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Getting Started - Svelte Ionicons v2</h1>

<div class="my-8 flex gap-2">
  <GitHubSponsor {...sponsor} />
  <NpmVersion {...npmversion} />
  <License {...license} />
  <NpmDownload {...downloads} />
</div>

<H2>Requirements</H2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Basic Usage</H2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />

<H2>IDE support</H2>

<p>
  If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering
  over a component name will display a documentation link, features, props, events, etc.
</p>

<H2>Faster compiling</H2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />

<H2>Asscessible SVGs</H2>

<p>
  A11y props, <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> are used for accessible
  SVG icons.
</p>

<H2>Passing down other attributes</H2>

<p>All icons have "...restProps" and you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<H2>Import all</H2>

<p>Use <Code>import * as Icon from 'svelte-ionicons'</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
