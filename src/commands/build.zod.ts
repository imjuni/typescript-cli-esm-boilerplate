import z from "zod";

export const buildZod = z.object({
  format: z.enum(["html", "pdf", "md"]).default("html"),
  out: z
    .string({
      error: "Output directory는 반드시 입력해야 합니다",
    })
    .min(1, "Output directory는 빈 문자열일 수 없습니다"),
});
