import React, { useEffect } from "react";

import { Star, CallSplit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { Loading } from "../../components";
import { useFetchRepoById } from "../../utilities";

import "./RepoDetails.scss";

function RepoDetails({ selectedRepo, setSelectedRepo }) {
  const history = useHistory();
  const { repo, error } = useFetchRepoById(!Boolean(selectedRepo));

  useEffect(() => {
    if (repo) {
      setSelectedRepo(repo);
    }
  }, [repo, setSelectedRepo]);

  const goBack = () => {
    history.push(`/`);
  };

  if (!selectedRepo) {
    return <Loading loading={true} />;
  }

  if (error) {
    goBack();
  }

  const {
    html_url,
    owner,
    name,
    stargazers_count,
    description,
    language,
    forks,
  } = selectedRepo;

  return (
    <div className="repo-details">
      <button onClick={goBack} className="go-back">
        Go Back
      </button>
      <div className="repository-card">
        <div className="details-top">
          <div className="owner-info">
            <img
              src={owner.avatar_url}
              alt="owner-avatar"
              className="owner-avatar"
            />
            <p>{owner.login}</p>
            <a
              href={owner.html_url}
              alt="repository-link"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Profile</button>
            </a>
          </div>
        </div>
        <div className="details-bot">
          <div className="repo-stats">
            <Star />
            <p>{stargazers_count}</p>
            <CallSplit />
            <p className="forks">{forks}</p>
          </div>
          <div className="repo-title">
            <h2 className="repo-info repo-name">{name}</h2>
            {language && (
              <div className="language">
                <h3 className="repo-info">-</h3>
                <p className="repo-info">{language}</p>
              </div>
            )}
          </div>
          <p className="description">{description}</p>
          <a
            href={html_url}
            alt="repository-link"
            target="_blank"
            rel="noreferrer"
          >
            <button className="repo-link">View on Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export { RepoDetails };
