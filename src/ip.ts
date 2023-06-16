import { IpNodeOperator } from "./IpNodeOperator";
import { initializeNode } from "./initializeNode";

import type { NodeAPI } from "node-red";

export = (RED: NodeAPI) => initializeNode("ip", RED, IpNodeOperator);
