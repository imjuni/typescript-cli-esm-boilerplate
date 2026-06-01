import { loadConfig } from "c12";
import type { CommandContext } from "citty";
import { consola } from "consola";
import { urlna } from "url-naong";
import z from "zod";
import { buildZod } from "#commands/build.zod.js";
import { Container } from "#modules/container.js";
import type { buildArgs } from "./buildArgs.js";
import "my-easy-fp";
import defu from "defu";

export const buildRun = async ({ args }: CommandContext<typeof buildArgs>) => {
  const { config: configFromFile } = await loadConfig({ name: "tceb" });
  const rawConfig = defu(args, configFromFile);
  const config = buildZod.safeParse(rawConfig);

  if (!config.success) {
    // 💡 Zod 포맷 에러 출력
    console.error("❌ Invalid Configuration:");
    console.error(z.treeifyError(config.error));
    process.exit(1);
  }

  const url = urlna("https://pokeapi.co", "/api/v2/pokemon/:name", {
    name: "ditto",
  });

  consola.info("evaluate url: ", url);
  consola.info(`Your format: ${config.data.format}`);
  consola.info(`Your output directory: ${config.data.out}`);

  const c = new Container("typescript cli boilerplate");

  consola.info(url);
  consola.info(`start typescript cli boilerplate: ${c.name}`);
};
