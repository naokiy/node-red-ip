import type { BaseNodeOperator } from "./BaseNodeOperator";

import type { Node, NodeDef, NodeAPI } from "node-red";

export function initializeNode<
  TOperator extends BaseNodeOperator<TConfig, TCred>,
  TConfig extends object,
  TCred extends object
>(
  name: string,
  RED: NodeAPI,
  cls: new (node: Node<TCred>, config: TConfig) => TOperator
) {
  const node = function (this: Node<TCred>, nodeDef: NodeDef & TConfig) {
    RED.nodes.createNode(this, nodeDef);
    const op = new cls(this, nodeDef);
    this.on("input", (message) => op.onInput(message));
  };

  RED.nodes.registerType(name, node);
}
