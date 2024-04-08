import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const _initialOwner = "0xbc3f74cecf1fa8270a6fae935e974a5a9570d054";

const BundleModule = buildModule("Bundle", (m) => {
  const initialOwner = m.getParameter("initialOwner", _initialOwner);

  const bundle = m.contract("Bundle", [initialOwner]);

  return { bundle };
});

export default BundleModule;
