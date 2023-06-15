import { BaseNodeOperator } from "./BaseNodeOperator";

import * as IP from "ip";
import type { NodeMessageInFlow } from "node-red";

export type IpNodeDef = object;

export class IpNodeOperator extends BaseNodeOperator<IpNodeDef, object> {
  public onInput(message: NodeMessageInFlow) {
    message.payload = IP.address();
    this.node.send(message);
  }
}
