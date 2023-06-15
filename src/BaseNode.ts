import type { Node, NodeAPI, NodeDef, NodeMessageInFlow } from "node-red";

export abstract class BaseNode<T extends NodeDef> {
  constructor(config: T) {
    this.config = config;
  }

  protected appendTo(RED: NodeAPI) {
    RED.nodes.createNode(this, this.config);
    this.on("input", message => this.onInput(message));
  }

  protected onInput(message: NodeMessageInFlow) {}
}

export interface BaseNode<T extends NodeDef> extends Node {
  config: T;
}
