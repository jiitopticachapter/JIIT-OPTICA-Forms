const FormStylesInfo = {
  WhatsAppApp: {
    labels: {
      color: "",
      display: "none",
    },
    icon: {
      color: "#8696a0",
      bgColor: "#ffffff",
    },
    inputbox: {
      bgColor: "transparent",
      borderRadius: "0",
      border: "none",
      placeholderColor: "#8696a0",
      color: "#e1e9ee",
      onFocus: {
        color: "#e1e9ee",
        bgColor: "transparent",
        border: "none",
        // placeholderColor: "",
      },
    },
    inputWrapper: {
      border: "none",
      borderRadius: "30px",
      bgColor: "#202c33",
      borderOnFocus: "2px solid #ffffff",
    },
  },
  MacOSForm: {
    labels: {
      color: "#e0e0e0",
      display: "",
    },
    icon: {
      color: "#666",
      bgColor: "#aaaaaa",
    },
    inputbox: {
      bgColor: "transparent",
      borderRadius: "0",
      border: "none",
      placeholderColor: "#aaaaaa",
      color: "#ffffff",
      onFocus: {
        color: "#000",
        bgColor: "#ffffff",
        border: "1px solid #666",
        // placeholderColor: "",
      },
    },
    inputWrapper: {
      border: "1px solid #666",
      borderRadius: "10px",
      bgColor: "#2c2c2c",
      borderOnFocus: "1px solid #ffffff",
    },
  },
};

export { FormStylesInfo };
