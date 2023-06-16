import { BaseNodeOperator } from "./BaseNodeOperator";

import * as IP from "ip";
import type { Node, NodeMessageInFlow } from "node-red";

export type IpNodeDef = object;

export class IpNodeOperator extends BaseNodeOperator<IpNodeDef, object> {
  public postCreate(node: Node<object>): void {
    node.on("input", (message) => this.onInput(message));
  }

  public onInput(message: NodeMessageInFlow) {
    message.payload = IP.address();
    this.node.send(message);
  }
}
