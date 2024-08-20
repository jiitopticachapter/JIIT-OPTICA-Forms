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
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
    {
      label: "Email",
      type: "text",
      placeholder: "Your Email",
      required: true,
    },
    {
      label: "Enrollment Number",
      type: "text",
      placeholder: "Your Enrollment Number",
      required: true,
    },
    {
      label: "Mobile Number",
      type: "text",
      placeholder: "Your Mobile Number",
      required: true,
    },
    {
      label: "Branch",
      type: "text",
      labels: ["CSE", "ECE", "ME", "CE", "EE", "CHE", "MME", "EP", "BT"],
      placeholder: "Your Branch",
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
