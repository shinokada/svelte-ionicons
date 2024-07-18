<script lang="ts">
  import { DocPage } from 'runes-webkit';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<DocPage classDiv3="pb-0">
  {@render children()}
</DocPage>
