<script lang="ts">
  import type { InlineElement } from "../lib/Types";
  export let block: InlineElement;
</script>

{#if block.type === "text"}
  <span
    style:font-style={block.italic ? "italic" : "normal"}
    style:font-weight={block.bold ? "bold" : "normal"}
    style:color={block.color}
    style:background-color={block.backgroundColor}
  >
    {block.content}
  </span>
{/if}
