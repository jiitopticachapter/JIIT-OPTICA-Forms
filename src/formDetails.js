const formDetails = {
  backgroundImage: "",
  formHeading: {
    heading: "Optica Volunteer Recruitment",
    font: "Saira Stencil One", // make sure to import this font if not default font
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
      label: "Select one",
      type: "multiple choice",
      choices: ["Day Scholar", "Hosteller"],
      required: true,
      other: false,
    },
    {
      label: "Select your department preference",
      type: "multiple choice grid",
      rows: ["Preference 1", "Preference 2"],
      coloumns: [["Technical, Management"], ["Technical, Management"]],
    },
  ],
};

export default formDetails;
