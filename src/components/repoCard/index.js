import React from "react";
import "./RepoCard.scss";
import { useHistory } from "react-router-dom";
import { ChevronRight, Visibility, CallSplit } from "@material-ui/icons";

function RepoCard({ setSelectedRepo, repoInfo }) {
  const { name, owner, id, watchers, forks, language } = repoInfo;
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
          <Visibility />
          <p className="watchers">{watchers}</p>
          <CallSplit />
          <p>{forks}</p>
        </div>
      </div>
      <div className="card-bot">
        <div className="repo-details">
          <h2 className="repo-info">{name}</h2>
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
