const FormFieldsInfo = {
  instructionInfo: {
    heading: "Instructions",
    description: "Read the below instructions carefully:",
    instructions: [
      "Fill out all fields accurately.",
      "Students from outside JIIT must carry a valid ID card for entry.",
    ],
    checkboxStatus: {
      show: true,
      label: "I have read the instructions carefully.",
      errorMsg: "Please check the box.",
    },
  },
  headerInfo: {
    heading: "TALK:  BY PROF. H.C. VERMA",
  },
  footerInfo: {
    contactus: {
      heading: "For any query please contact:",
      person1: {
        name: "Yash Mittal",
        Phno: "+91 8570940287",
      },
      person2: {
        name: "Shantanu Pandey",
        Phno: "+91 9026152678",
      },
    },
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
      required: true,
      type: "text",
      placeholder: "Enter your phone number",
      errorMsg: "Phone number is required.",
      regex: "^[0-9]{10}$",
    },
    {
      heading: "College",
      name: "entry.college",
      required: true,
      type: "radio",
      labels: ["JIIT-62", "JIIT-128", "Others"],
      otherKey: ".other_option_response",
      errorMsg: "Please select your college.",
    },
    {
      heading:
        "Enrollment No. (Only for Jaypee Institute of Information Technology Students)",
      name: "entry.enroll",
      required: false,
      type: "text",
      placeholder: "Enter your enrollment number",
      errorMsg: "Enrollment number is required.",
    },
    {
      heading:
        "Branch (Only for Jaypee Institute of Information Technology Students)",
      name: "entry.branch",
      required: false,
      type: "radio",
      labels: [
        "Computer Science",
        "Information Technology",
        "Electronics & Communication",
        "EE VLSI",
        "ECE Adv Com.",
        "Mathematics & Computing",
        "BCA",
        "BBA",
        "MBA",
        "BioTech",
        "Others",
      ],
      otherKey: ".other_option_response",
      errorMsg: "Please select your branch.",
    },
  ],
};

export default FormFieldsInfo;
