import { BaseNode } from "./base_node"

import { Node, NodeAPI, NodeDef, NodeMessage } from 'node-red'

function init(RED: NodeAPI) {
    class LowerCaseNode extends BaseNode {
        constructor(config: NodeDef) {
            super(config, RED);

            this.on("input", message => {
                if (isString(message?.payload)) {
                    message.payload = message.payload.toLowerCase();    
                }
                this.send(message);
            })
        }
    }
}

function isString(value: any): value is string {
    return value !== null && value !== undefined && typeof value === "string";
}

export = init;