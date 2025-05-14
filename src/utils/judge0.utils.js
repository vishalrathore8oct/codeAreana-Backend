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
      `${process.env.JUDGE0_BASE_URL}/submissions/batch?tokens=${tokens.join(",")}&base64_encoded=false&fields=token,stdout,stderr,status_id,language_id`,
    );

    const allSubmissions = data.submissions;

    const isAllCompleted = allSubmissions.every((submission) => {
      const statusId = submission.status_id;

      return statusId !== 1 && statusId !== 2;
    });

    if (isAllCompleted) {
      return allSubmissions;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};
