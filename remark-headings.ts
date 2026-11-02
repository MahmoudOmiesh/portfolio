import { parse } from "acorn";
import type { Program } from "estree";
import type { Root } from "mdast";
import type {} from "mdast-util-mdxjs-esm";
import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";

export function remarkHeadings() {
  return (tree: Root) => {
    const headings: { id: string; text: string }[] = [];

    visit(tree, "heading", (node) => {
      if (node.depth !== 2) return;

      const text = toString(node);

      const id = text
        .toLowerCase()
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      node.data = { ...node.data, hProperties: { id } };
      headings.push({ id, text });
    });

    const value = `export const headings = ${JSON.stringify(headings)};`;

    // SAFETY: acorn emits ESTree; only its typings diverge from @types/estree.
    tree.children.push({
      type: "mdxjsEsm",
      value,
      data: { estree: parse(value, { ecmaVersion: "latest", sourceType: "module" }) as Program },
    });
  };
}
