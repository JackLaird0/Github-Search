import React from "react";
import { render, screen } from "@testing-library/react";

import { RepoCard } from "./";

describe("RepoCard", () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      setSelectedRepo: function () {},
      repoInfo: {
        name: "react",
        id: 1,
        forks: 32,
        language: "JavaScript",
        stargazers_count: 3,
        owner: {
          login: "Jack",
          avatar_url: "https://github.com",
        },
      },
    };
  });

  test("renders owner avatar", () => {
    render(<RepoCard {...mockProps} />);
    expect(screen.getByAltText("owner-avatar")).toBeInTheDocument();
  });

  test("renders owner login", () => {
    render(<RepoCard {...mockProps} />);
    expect(screen.getByText("Jack")).toBeInTheDocument();
  });

  test("renders star count", () => {
    render(<RepoCard {...mockProps} />);
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders fork count", () => {
    render(<RepoCard {...mockProps} />);
    expect(screen.getByText("32")).toBeInTheDocument();
  });

  test("renders repo name", () => {
    render(<RepoCard {...mockProps} />);
    expect(screen.getByText("react")).toBeInTheDocument();
  });

  test("renders dash and language if language exists", () => {
    render(<RepoCard {...mockProps} />);
    expect(screen.getByText("-")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
  });

  test("it doesnt render the dash if language doesn't exist", () => {
    mockProps = {
      setSelectedRepo: function () {},
      repoInfo: {
        name: "react",
        id: 1,
        forks: 32,
        language: "",
        stargazers_count: 3,
        owner: {
          login: "Jack",
          avatar_url: "https://github.com",
        },
      },
    };
    render(<RepoCard {...mockProps} />);
    const dash = screen.queryByText("-");

    expect(dash).toBeNull();
  });

  //These are pretty basic tests, I plan to continue adding more but I wanted to submit what I have.
});
