import type { ArgsDef } from "citty";
import { i18n } from "#i18n/i18n.js";

export const commonArgs = {
  language: {
    type: "enum",
    alias: "l",
    options: ["en", "ko"],
    get description() {
      return i18n.t("common.args.language.description");
    },
  },
} as const satisfies ArgsDef;
