export type Element = ParagraphBlock | Heading1Block;
export type BlockElementInterface = {
  display: "block";
  content: InlineElement[];
};

export type InlineElement = MentionBlock | TextBlock;
export type InlineElementMetadata = {
  display: "inline";
};

export type ParagraphBlock = BlockElementInterface & {
  type: "paragraph";
};

export type Heading1Block = BlockElementInterface & {
  type: "heading1";
};

export type MentionBlock = InlineElementMetadata & {
  type: "mention";
  content: string;
};
export type TextBlock = InlineElementMetadata & {
  type: "text";
  content: string;
} & TextProperties;

export type TextProperties = {
  bold?: boolean;
  italic?: boolean;
  color?: string;
  backgroundColor?: string;
};
