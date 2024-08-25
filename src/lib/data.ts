export const files: file[] = [
  {
    name: "Overview.pdf",
    haveContent: true,
    isInFolder: false,
    content: "This is the project overview document.",
    url: "https://example.com/overview.pdf",
  },
  {
    name: "quick.txt",
    haveContent: true,
    isInFolder: false,
    content: "Steps to get started with the project.",
  },
  {
    name: "License.md",
    haveContent: false,
    isInFolder: false,
    url: "https://example.com/license.md",
  },
];

export const folders: folder[] = [
  {
    name: "Project Documents",
    files: [
      {
        name: "Proposal.pdf",
        haveContent: true,
        isInFolder: true,
        content: "This is the project proposal document.",
        url: "https://example.com/proposal.pdf",
      },
      {
        name: "Budget.xlsx",
        haveContent: true,
        isInFolder: true,
        content: "This is the budget spreadsheet.",
        url: "https://example.com/budget.xlsx",
      },
      {
        name: "Overview.pdf",
        haveContent: true,
        isInFolder: true,
        content: "This is the project overview document.",
        url: "https://example.com/overview.pdf",
      },
    ],
  },
  {
    name: "Design Assets",
    files: [
      {
        name: "Logo.png",
        haveContent: true,
        isInFolder: true,
        content: "Image file of the project logo.",
        url: "https://example.com/logo.png",
      },
      {
        name: "Wireframe.pdf",
        haveContent: false,
        isInFolder: true,
      },
      {
        name: "Quick.txt",
        haveContent: true,
        isInFolder: true,
        content: "Steps to get started with the project.",
      },
    ],
  },
  {
    name: "Meeting Notes",
    files: [
      {
        name: "KickoffMeeting.txt",
        haveContent: true,
        isInFolder: true,
        content: "Notes from the project kickoff meeting.",
      },
      {
        name: "ClientMeeting.docx",
        haveContent: false,
        isInFolder: true,
      },
    ],
  },
  {
    name: "Miscellaneous",
    files: [
      {
        name: "Readme.md",
        haveContent: true,
        isInFolder: true,
        content: "This is the readme file for the project.",
      },
      {
        name: "License.md",
        haveContent: false,
        isInFolder: true,
      },
    ],
  },
];
