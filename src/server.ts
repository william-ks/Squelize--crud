import { App } from "./app";

const app = new App().express;

app.listen(process.env.PORT, () => {
  console.log("\x1b[31m%s\x1b[0m", "[server]: is running! (☞ﾟヮﾟ)☞");
});
