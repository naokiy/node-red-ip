import { BaseNode } from "./BaseNode";

import * as IP from "ip";
import type { NodeDef, NodeMessageInFlow } from "node-red";

export type IpNodeDef = NodeDef;

export class IpNode extends BaseNode<IpNodeDef> {
  onInput(message: NodeMessageInFlow) {
    message.payload = IP.address();
    this.send(message);
  }
}
