import React, { useEffect, useState } from "react";
import "./SearchResults.scss";
import { RepoCard, Loading } from "../../components";
import PuffLoader from "react-spinners/PuffLoader";

function SearchResults({ response, setData, setSelectedRepo, data }) {
  const { repos, error, loading } = response;
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    if (!repos && data) {
      setRepoData(data);
    }

    if (repos) {
      setRepoData(repos);
      setData(repos);
    }
  }, [repos, data, setData]);

  if (loading) return <Loading loading={loading} />;

  if (error) {
    return <h2 className="intro-text">{error.message}</h2>;
  }

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

  return <h1 className="intro-text">Search Repositories on GitHub!</h1>;
}

export { SearchResults };
