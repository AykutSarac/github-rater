import { Rating, ResultObject } from '../types';

interface Suggestions {
  repository: string[];
  backlinks: string[];
  licensing: string[];
  archive: string[];
}

const finalizeResult = (rating: Rating, suggestions: Suggestions): ResultObject[] => {
  const result = [
    {
      Name: 'User Popularity',
      Message:
        "Your profile page tells people the story of your work through the repositories you're interested in, the contributions you've made, and the conversations you've had. <a href=\"https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile\">See More.</a>\n\nTypically, GitHub isn’t primary place decision-makers look to fill roles in programming. Rather, it’s a handy tool for fine-matching skills and verifying that a candidate possesses them. If you’re using GitHub for advancement, you will want to present your projects and account activity in a way that’s clear and accessible.",
      Score: rating.userPopularity,
    },
    {
      Name: 'Repository Description',
      Message:
        'You should provide brief description about your repository.\n\nNobody should spend their time going straight into the code and trying to understand what is the purpose from there. Instead, make sure that every repository you work on has the description field filled in. At the description part and the README file you want to talk about the features you wrote into the project. Demonstrate business acumen by articulating your role in the Git in one or two sentences that capture how you helped along the project. Think of Description as the headline, on which you’ll elaborate further in the ReadMe.',
      Score: rating.repoDescriptionRating,
      Suggestions: suggestions.repository,
    },
    {
      Name: 'Biography',
      Message:
        'Add a bio to your profile to share information about yourself with other GitHub users. <a href="https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#adding-a-bio-to-your-profile">See More.</a>\n\nIt is suggested to have a proper biography with at least 5 words - past and present employers, projects you have worked on, or languages and frameworks you enjoy using, or are currently learning. Include the type of company or kind of projects you would be interested in the future.',
      Score: rating.bioRating,
    },
    {
      Name: 'Repository Popularity',
      Message:
        "It's worth taking the time to sort your pinned repositories so that they make the best possible impression on the viewer.\n\nYou can change the position in which they appear by dragging and dropping. When you click on each repository you can add a brief description that will be visible on your profile. So you want to add something that tells them a little bit about the project and piques their interest.",
      Score: rating.repoPopularity,
    },
    {
      Name: 'Backlinks & Information',
      Message:
        'Provide general information about yourself such as what is your current company, email address and links to your portfolio, GitLab, CodePen, or blog.',
      Score: rating.backlinkRating,
      Suggestions: suggestions.backlinks,
    },
    {
      Name: 'Providing Web Pages',
      Message:
        'You can use GitHub Pages to host a website about yourself, your organization, or your project directly from a GitHub repository. <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages">See More.</a>\n\nIt\'s important to provide a webpage if your repository is especially a library. You can use gitbook or similar tools to documante your project or provide a demo of how it works.',
      Score: rating.webpageRating,
    },
  ];

  const partials = [
    {
      Name: 'License repositories',
      Message:
        'You can include an open source license in your repository to make it easier for other people to contribute. <a href="https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository">See More.</a>',
      Score: suggestions.licensing?.length > 0 ? -1 : 100,
      Suggestions: suggestions.licensing,
      Partial: true,
    },
    {
      Name: 'Archive repositories that are no longer maintained',
      Message:
        'You can archive a repository to make it read-only for all users and indicate that it\'s no longer actively maintained. <a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories">See More.</a>',
      Score: suggestions.archive?.length > 0 ? -1 : 100,
      Suggestions: suggestions.archive,
      Partial: true,
    },
  ];

  return [...result, ...partials];
};

export default finalizeResult;
