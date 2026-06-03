import rosetta from "rosetta";

export const i18n = rosetta({
  en: {
    common: {
      args: {
        language: {
          description: "choose your language",
        },
      },
    },
    build: {
      args: {
        format: {
          description: "format decision: eg. html, pdf, md(markdown)",
        },
        out: {
          description: "Directory for builded output",
        },
      },
      error: {
        out: {
          required: "You must enter output directory",
          min: "Cannot handle empty output directory",
        },
      },
    },
  },
  ko: {
    common: {
      args: {
        language: {
          description: "언어를 선택하세요",
        },
      },
    },
    build: {
      args: {
        format: {
          description: "포맷을 입력하세요: eg. html, pdf, md(markdown)",
        },
        out: {
          description: "출력을 위한 디렉토리를 입력하세요",
        },
      },
      error: {
        out: {
          required: "Output directory는 반드시 입력해야 합니다",
          min: "Output directory는 빈 문자열일 수 없습니다",
        },
      },
    },
  },
});
