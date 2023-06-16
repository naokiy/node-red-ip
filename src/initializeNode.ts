import type { BaseNodeOperator } from "./BaseNodeOperator";

import type { Node, NodeDef, NodeAPI } from "node-red";

export function initializeNode<
  TOperator extends BaseNodeOperator<TConfig, TCred>,
  TConfig extends object,
  TCred extends object
>(
  name: string,
  RED: NodeAPI,
  operatorConstructor: new (node: Node<TCred>, config: TConfig) => TOperator
) {
  const node = function (this: Node<TCred>, nodeDef: NodeDef & TConfig) {
    const op = new operatorConstructor(this, nodeDef);
    RED.nodes.createNode(this, nodeDef);
    op.postCreate(this);
  };

  RED.nodes.registerType(name, node);
}
