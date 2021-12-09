import App from "./App.svelte";

import { setup } from "twind/shim";
import twindConfig from "./twind.config";

setup(twindConfig);

const app = new App({
  target: document.body,
});

export default app;
