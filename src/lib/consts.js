export const SITE = {
  TITLE: "tasker",
  DESCRIPTION: "my tasks for the day",
  URL: "https://pr4j3sh.github.io/tasker/",
  REPO: "tasker",
};

export const AUTHOR = {
  NAME: "Prajesh Pratap Singh",
  USERNAME: "pr4j3sh",
  EMAIL: "prajesh.eleven118@gmail.com",
  URL: "https://pr4j3sh.github.io/pr4j3sh/",
  CHAT: "https://pr4j3sh.github.io/chat/",
  GITHUB: "https://github.com/pr4j3sh",
};

export const API = {
  QUOTES: {
    URL: "https://api.api-ninjas.com/v1/quotes",
    CONFIG: {
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
    },
  },
};
