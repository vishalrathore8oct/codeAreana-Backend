import axios from "axios";

export const getJudge0LanguageId = (language) => {
  const languageDataForJudge0 = {
    JAVASCRIPT: 63,
    PYTHON: 71,
    JAVA: 62,
  };

  return languageDataForJudge0[language.toUpperCase()] || null;
};

export const createBatchSubmission = async (submissions) => {
  const { data } = await axios.post(
    `${process.env.JUDGE0_BASE_URL}/submissions/batch?base64_encoded=false`,
    { submissions },
  );

  return data;
};

export const getBatchSubmissionPolling = async (tokens) => {
  while (true) {
    const { data } = await axios.get(
      `${process.env.JUDGE0_BASE_URL}/submissions/batch?tokens=${tokens.join(",")}&base64_encoded=false`,
    );

    const allSubmissions = data.submissions;

    const isAllCompleted = allSubmissions.every((submission) => {
      const statusId = submission.status.id;

      return statusId !== 1 && statusId !== 2;
    });

    if (isAllCompleted) {
      return allSubmissions;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

export const getJudge0LanguageName = (languageId) => {
  const languageDataForJudge0 = {
    63: "JAVASCRIPT",
    71: "PYTHON",
    62: "JAVA",
  };

  return languageDataForJudge0[languageId] || null;
};
