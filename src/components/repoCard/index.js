import React from "react";

import { useHistory } from "react-router-dom";
import { ChevronRight, Star, CallSplit } from "@material-ui/icons";

import "./RepoCard.scss";

function RepoCard({ setSelectedRepo, repoInfo }) {
  const { name, owner, id, forks, language, stargazers_count } = repoInfo;
  const { login, avatar_url } = owner;
  const history = useHistory();

  const onClick = () => {
    setSelectedRepo(repoInfo);
    history.push(`/repository/${id}`);
  };

  return (
    <div className="card-container" onClick={onClick}>
      <div className="card-top">
        <div className="owner-info">
          <img src={avatar_url} alt="owner-avatar" className="owner-avatar" />
          <p>{login}</p>
        </div>
        <div className="repo-stats">
          <Star />
          <p className="watchers">{stargazers_count}</p>
          <CallSplit />
          <p>{forks}</p>
        </div>
      </div>
      <div className="card-bot">
        <div className="repo-details">
          <h2 className="repo-info repo-name">{name}</h2>
          {language && (
            <div className="language">
              <h3 className="repo-info">-</h3>
              <p className="repo-info">{language}</p>
            </div>
          )}
        </div>
        <ChevronRight className="arrow-icon" />
      </div>
    </div>
  );
}

export { RepoCard };
