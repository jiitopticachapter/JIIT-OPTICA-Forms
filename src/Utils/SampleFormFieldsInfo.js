//This is sample formfieldsInfo for reference

const FormFieldsInfo = {
  instructionInfo: {
    heading: "Instructions",
    description: "Read the below instructions carefully:",
    instructions: [
      "Fill out all fields accurately.",
      "Upload necessary documents.",
      "Ensure contact information is up-to-date.",
      "Click Submit to finalize your registration.",
    ],
  },
  formInfo: [
    {
      heading: "Name",
      name: "entry.name",
      required: true,
      type: "text",
      placeholder: "Enter your name",
      errorMsg: "Name is required.",
    },
    {
      heading: "Email",
      name: "entry.email",
      required: true,
      type: "email",
      placeholder: "Enter your email",
      errorMsg: "Email is required.",
      regex: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    },
    {
      heading: "Phone",
      name: "entry.phone",
      // required: true,
      type: "text",
      placeholder: "Enter your phone number",
      errorMsg: "Phone number is required.",
      regex: "^[0-9]{10}$",
    },
    {
      heading: "Branch",
      name: "entry.branch",
      // required: true,
      type: "radio",
      labels: [
        "Computer Science",
        "Information Technology",
        "Electronics & Communication",
        "Mechanical Engineering",
        "Others",
      ],
      otherKey: ".other_option_response",
      errorMsg: "Please select your branch.",
    },
    {
      heading: "Department Preferences",
      // required: true,
      type: "dropdown",
      dropdownNames: ["entry.pref1", "entry.pref2"],
      dropdownConfig: [
        {
          key: "Preference 1",
          options: [
            "Select preference 1",
            "Management",
            "Technical",
            "PR",
            "Digital/Cinematography",
            "Marketing/Outreach",
            "Creative",
          ],
        },
        {
          key: "Preference 2",
          options: [
            "Select preference 2",
            "Management",
            "Technical",
            "PR",
            "Digital",
            "Marketing/Outreach",
            "Creative",
          ],
        },
      ],
      errorMsg: "Please select your department preferences.",
    },
    {
      heading: "Interests",
      name: "entry.interests",
      // required: false,
      type: "checkbox",
      labels: ["Coding", "Design", "Marketing", "Public Speaking"],
    },
    {
      heading: "Batch",
      name: "entry.batch",
      // required: true,
      type: "text",
      placeholder: "Enter your batch year",
      errorMsg: "Batch year is required.",
    },
    {
      heading: "Comments",
      name: "entry.comments",
      // required: false, // or true, depending on your requirement
      type: "textarea",
      placeholder: "Enter your comments or feedback here...",
    },
    {
      heading: "Upload File",
      name: "entry.file",
      //   required: true,
      type: "file",
      errorMsg: "Please upload the file.",
      allowedFileTypes: ["image/png", "image/jpeg", "application/pdf"],
    },
  ],
};

export default FormFieldsInfo;