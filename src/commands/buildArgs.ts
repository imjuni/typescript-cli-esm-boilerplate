import type { ArgsDef } from "citty";
import { commonArgs } from "#commands/commonArgs.js";
import { i18n } from "#i18n/i18n.js";

export const buildArgs = {
  ...commonArgs,
  format: {
    type: "enum",
    alias: "f",
    options: ["html", "pdf", "md"],
    get description() {
      return i18n.t("build.args.format.description");
    },
  },
  out: {
    type: "string",
    alias: "o",
    get description() {
      return i18n.t("build.args.out.description");
    },
  },
} as const satisfies ArgsDef;
