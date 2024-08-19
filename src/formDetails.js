const formDetails = {
  formHeading: {
    heading: "Optica Volunteer Recruitment",
    font: "Saira Stencil One",
  },
  formDescription: {
    description:
      "Eligibility Criteria:\n\t1. 2nd year students only\n\t2. No extensive experience is required!!\nTo know more about Optica check out our website and Instagram handle",
    font: "Arial",
  },
  formInputs: [
    {
      label: "Full Name",
      type: "short text",
      required: true,
    },
    {
      label: "Email",
      type: "short text",
      required: true,
    },
    {
      label: "Mobile Number",
      type: "short text",
      required: true,
    },
    {
      label: "Branch",
      type: "multiple choice",
      choices: ["CSE", "ECE", "ME", "CE", "EE", "CHE", "MME", "EP", "BT"],
      required: true,
      other: true,
    },
    {
      label: "Department",
      type: "short text",
      required: true,
    },
    {
      label: "Why do you want to join Optica?",
      type: "long text",
    },
  ],
};
