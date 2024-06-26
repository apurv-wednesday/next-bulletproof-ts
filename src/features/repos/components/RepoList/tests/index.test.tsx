/**
 *
 * Tests for RepoList
 *
 */

import React from "react";
import { render } from "@utils/testUtils";
import RepoList, { RepoListProps } from "../index";

describe("<RepoList />", () => {
  const repoListProps: RepoListProps = {
    loading: true,
    repoName: "Nextjs Bulletproof Template",
    reposData: {
      totalCount: 1,
      incompleteResults: false,
      items: [
        {
          name: "Nextjs Bulletproof",
          fullName: "Nextjs Bulletproof Template",
          stargazersCount: 100,
          owner: { login: "Wednesday Solutions" },
          id: 1,
        },
      ],
    },
  };

  it("should render and match the snapshot", () => {
    const { baseElement } = render(<RepoList {...repoListProps} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("should contain 1 RepoList component", () => {
    const { getAllByTestId } = render(<RepoList {...repoListProps} />);
    expect(getAllByTestId("repo-list").length).toBe(1);
  });
});
