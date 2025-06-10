import { visit } from "unist-util-visit";

const remarkCodeMeta = () => {
  return (tree) => {
    visit(tree, "code", (node) => {
      if (node.meta) {
        node.data = node.data || {};
        node.data.meta = node.meta;
      }
    });
  };
};
export default remarkCodeMeta;