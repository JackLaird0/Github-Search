import React, { useEffect } from "react";
import "./RepoDetails.scss";
import { Visibility, CallSplit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useFetchRepoById } from "../../utilities";

function RepoDetails({ selectedRepo, setSelectedRepo }) {
  const history = useHistory();
  const { repo, error } = useFetchRepoById(!Boolean(selectedRepo));

  useEffect(() => {
    if (repo) {
      setSelectedRepo(repo);
    }
  }, [repo]);

  const goBack = () => {
    history.push(`/`);
  };

  if (!selectedRepo) {
    return <div>Loading</div>;
  }

  if (error) {
    goBack();
  }

  const {
    html_url,
    owner,
    name,
    watchers,
    description,
    language,
    forks,
  } = selectedRepo;

  return (
    <div className="repo-details">
      <button onClick={goBack} className="go-back">
        Go Back
      </button>
      <div className="repository-details">
        <div className="details-top">
          <div className="owner-info">
            <img
              src={owner.avatar_url}
              alt="owner-avatar"
              className="owner-avatar"
            />
            <p>{owner.login}</p>
            <a href={owner.html_url} alt="repository-link" target="_blank">
              <button>View Profile</button>
            </a>
          </div>
        </div>
        <div className="details-bot">
          <div className="repo-stats">
            <Visibility />
            <p>{watchers}</p>
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
          <a href={html_url} alt="repository-link" target="_blank">
            <button className="repo-link">View on Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export { RepoDetails };
