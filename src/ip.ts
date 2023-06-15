import { IpNode, IpNodeDef } from "./IpNode"

import { NodeAPI } from 'node-red'

export = (RED: NodeAPI) => {
    class IpNodeToRegister extends IpNode {
        constructor(config: IpNodeDef) {
            super(config);
            this.appendTo(RED);
        }
    }
    RED.nodes.registerType("ip", <any>IpNodeToRegister);
};