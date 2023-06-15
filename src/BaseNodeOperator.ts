import type { Node, NodeMessageInFlow } from "node-red";

export abstract class BaseNodeOperator<
  TConfig extends object,
  TCred extends object
> {
  constructor(
    protected readonly node: Node<TCred>,
    protected readonly config: TConfig
  ) {}

  public onInput(message: NodeMessageInFlow) {}
}
