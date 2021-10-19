import React, { useEffect, useState } from "react";
import "./SearchResults.scss";
import { RepoCard } from "../../components";
import PuffLoader from "react-spinners/PuffLoader";

function SearchResults({ response, setData, setSelectedRepo, data }) {
  const { repos, error, loading } = response;
  const [repoData, setRepoData] = useState(null);

  const override = "display: block; margin: 0 auto;";

  useEffect(() => {
    if (!repos && data) {
      setRepoData(data);
    }

    if (repos) {
      setRepoData(repos);
      setData(repos);
    }
  }, [repos]);

  if (repoData) {
    return (
      <div className="repo-container">
        {repoData.map((repoInfo) => {
          return (
            <RepoCard repoInfo={repoInfo} setSelectedRepo={setSelectedRepo} />
          );
        })}
      </div>
    );
  }

  if (error) {
    return <h2 className="intro-text">{error.message}</h2>;
  }

  if (loading) {
    return (
      <div>
        <h2 className="intro-text">Working on it!</h2>
        <PuffLoader color="white" size={80} css={override} loading={loading} />
      </div>
    );
  }

  return <h1 className="intro-text">Search Repositories on GitHub!</h1>;
}

export { SearchResults };
