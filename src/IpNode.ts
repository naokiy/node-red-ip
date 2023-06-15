import { NodeDef, NodeMessageInFlow } from 'node-red'
import * as IP from "ip"

import { BaseNode } from "./BaseNode";

export type IpNodeDef = NodeDef & {

};

export class IpNode extends BaseNode<IpNodeDef> {
    onInput(message: NodeMessageInFlow) {
        message.payload = IP.address();
        this.send(message);
    }
}