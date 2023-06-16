import type { Node } from "node-red";

export abstract class BaseNodeOperator<
  TConfig extends object,
  TCred extends object
> {
  constructor(
    protected readonly node: Node<TCred>,
    protected readonly config: TConfig
  ) {}

  abstract postCreate(node: Node<TCred>): void
}
