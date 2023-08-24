<script lang="ts">
  import type { ParagraphBlock } from "../lib/Types";
  import InlineBlock from "./InlineBlock.svelte";
  export let block: ParagraphBlock;
</script>

<p>
  {#each block.content as inlineBlock}
    <InlineBlock block={inlineBlock} />
  {/each}
</p>
