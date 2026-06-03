import { defineCommand, runMain } from "citty";
import { install as sourceMapSupportInstall } from "source-map-support";
import { buildArgs } from "#commands/buildArgs.js";
import { buildRun } from "#commands/buildRun.js";

sourceMapSupportInstall();

const buildSubCommand = defineCommand({
  meta: { name: "build", description: "build sub command" },
  args: buildArgs,
  run: buildRun,
});

const main = defineCommand({
  meta: { name: "hello", version: "1.0.0", description: "My Awesome CLI App" },
  args: {
    language: {
      type: "enum",
      alias: "l",
      options: ["en", "ko"],
    },
  },
  subCommands: { build: buildSubCommand },
});

runMain(main);
