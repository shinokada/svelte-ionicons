<script>
  import { setContext } from 'svelte';
  import { Accessibility } from 'svelte-ionicons';
  const iconCtx = {
    size: '30',
    withEvents
  };
  setContext('iconCtx', iconCtx);
</script>

<Accessibility color="#ff4488" />
