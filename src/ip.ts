import type { IpNodeDef } from "./IpNode";
import { IpNode } from "./IpNode";

import type { NodeAPI } from "node-red";

export = (RED: NodeAPI) => {
  class IpNodeToRegister extends IpNode {
    constructor(config: IpNodeDef) {
      super(config);
      this.appendTo(RED);
    }
  }
  /* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any */
  RED.nodes.registerType("ip", <any>IpNodeToRegister);
  /* eslint-enable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any */
};
