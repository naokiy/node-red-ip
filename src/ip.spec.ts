import ipNode from "./ip";

import helper from "node-red-node-test-helper";

describe("IP Node", () => {
  afterEach(async () => {
    await helper.unload();
  });

  test("Should be loaded", async () => {
    const flow = [{ id: "n1", type: "ip", name: "test name" }];
    await helper.load(ipNode, flow, () => {
      const n1 = helper.getNode("n1");
      expect(n1.name).toBe("test name");
    });
  });
});
