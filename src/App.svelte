<script lang="ts">
  import Paragraph from "./components/Paragraph.svelte";
  import type { Element } from "./lib/Types";
  let blocks: Element[] = [
    {
      type: "paragraph",
      display: "block",
      content: [
        { display: "inline", type: "text", content: "Hello, world!" },
        {
          type: "text",
          display: "inline",
          content: "Text",
          italic: true,
          bold: true,
        },
        {
          type: "text",
          display: "inline",
          content: " can be",
        },
        {
          type: "text",
          display: "inline",
          content: " bold",
        },
        {
          type: "text",
          display: "inline",
          content: " or ",
        },
        {
          type: "text",
          display: "inline",
          content: "italic",
          italic: true,
        },
        {
          type: "text",
          content: " or ",
          display: "inline",
        },
        {
          type: "text",
          content: "both",
          display: "inline",
          italic: true,
          bold: true,
        },
      ],
    },
  ];
</script>

<main style:caret="black underscore">
  {#each blocks as block}
    <Paragraph {block} />
  {/each}
</main>
