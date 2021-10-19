const generateApiQuery = (queryInfo) => {
  const { text, language = "", filter = "" } = queryInfo;

  return `https://api.github.com/search/repositories?q=${encodeURIComponent(
    text
  )}+language:${encodeURIComponent(language)}&sort=${encodeURIComponent(
    filter
  )}`;
};

export { generateApiQuery };
