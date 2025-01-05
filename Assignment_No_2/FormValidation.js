import React, { useState, useEffect } from "react";

const emailPattern = /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i;

const FormValidator = () => {
  const [inputValues, setInputValues] = useState({
    fullName: "",
    userEmail: "",
    userGender: "",
    selectedCountry: "",
    selectedSubjects: [],
    userDescription: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    fullName: "",
    userEmail: "",
    userGender: "",
    selectedCountry: "",
    selectedSubjects: "",
    userDescription: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  function checkFullName(fullName) {
    if (fullName.trim() !== "") {
      return "";
    } else {
      return "Please provide your name.";
    }
  }

  function checkEmail(userEmail) {
    if (emailPattern.test(userEmail)) {
      return "";
    } else {
      return "Enter a valid email address.";
    }
  }

  function checkGender(userGender) {
    if (userGender !== "") {
      return "";
    } else {
      return "Please select a gender option.";
    }
  }

  function checkCountry(selectedCountry) {
    if (selectedCountry !== "") {
      return "";
    } else {
      return "Please choose a country.";
    }
  }

  function checkSubjects(selectedSubjects) {
    if (selectedSubjects.length >= 2) {
      return "";
    } else {
      return "Pick at least two subjects.";
    }
  }

  function checkDescription(userDescription) {
    if (userDescription.trim() !== "") {
      return "";
    } else {
      return "Provide a description.";
    }
  }

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setInputValues(function (prev) {
        return {
          ...prev,

          selectedSubjects: checked
            ? [...prev.selectedSubjects, value]
            : prev.selectedSubjects.filter(function (subject) {
                return subject !== value;
              }),
        };
      });
    } else if (type === "radio") {
      setInputValues(function (prev) {
        return { ...prev, [name]: value };
      });
    } else {
      setInputValues(function (prev) {
        return { ...prev, [name]: value };
      });
    }
  }

  useEffect(
    function () {
      setErrorMessages({
        fullName: checkFullName(inputValues.fullName),
        userEmail: checkEmail(inputValues.userEmail),
        userGender: checkGender(inputValues.userGender),
        selectedCountry: checkCountry(inputValues.selectedCountry),
        selectedSubjects: checkSubjects(inputValues.selectedSubjects),
        userDescription: checkDescription(inputValues.userDescription),
      });
    },
    [inputValues]
  );

  useEffect(
    function () {
      const hasAnyErrors = Object.values(errorMessages).some(function (
        message
      ) {
        return message !== "";
      });
      setIsFormValid(!hasAnyErrors);
    },
    [errorMessages]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (isFormValid) {
      alert("Form successfully submitted:", inputValues);
    } else {
      alert("Form contains errors. Please fix them.");
    }
  }

  return (
    // Simple HTML

    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputGroupStyle}>
        <label htmlFor="fullName" style={labelStyle}>
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          style={inputStyle}
          placeholder="Enter your full name"
          value={inputValues.fullName}
          onChange={handleInputChange}
          required
        />
        {errorMessages.fullName && (
          <small style={errorStyle}>{errorMessages.fullName}</small>
        )}
      </div>

      <div style={inputGroupStyle}>
        <label htmlFor="userEmail" style={labelStyle}>
          Email Address
        </label>
        <input
          type="email"
          id="userEmail"
          name="userEmail"
          style={inputStyle}
          placeholder="Enter your email address"
          value={inputValues.userEmail}
          onChange={handleInputChange}
          required
        />
        {errorMessages.userEmail && (
          <small style={errorStyle}>{errorMessages.userEmail}</small>
        )}
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Gender</label>

        <div style={radioStyle}>
          <input
            type="radio"
            name="userGender"
            value="male"
            checked={inputValues.userGender === "male"}
            onChange={handleInputChange}
            style={radioInputStyle}
            required
          />
          <label style={radioLabelStyle}>Male</label>
        </div>

        <div style={radioStyle}>
          <input
            type="radio"
            name="userGender"
            value="female"
            checked={inputValues.userGender === "female"}
            onChange={handleInputChange}
            style={radioInputStyle}
            required
          />
          <label style={radioLabelStyle}>Female</label>
        </div>

        {errorMessages.userGender && (
          <small style={errorStyle}>{errorMessages.userGender}</small>
        )}
      </div>

      <div style={inputGroupStyle}>
        <label htmlFor="selectedCountry" style={labelStyle}>
          Choose Your Country
        </label>
        <select
          id="selectedCountry"
          name="selectedCountry"
          style={selectStyle}
          value={inputValues.selectedCountry}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a country...</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="in">India</option>
          <option value="au">Australia</option>
        </select>

        {errorMessages.selectedCountry && (
          <small style={errorStyle}>{errorMessages.selectedCountry}</small>
        )}
      </div>

      <div style={inputGroupStyle}>
        <label style={labelStyle}>Subjects</label>

        <div style={checkboxStyle}>
          <input
            type="checkbox"
            name="selectedSubjects"
            value="physics"
            checked={inputValues.selectedSubjects.includes("physics")}
            onChange={handleInputChange}
            style={checkboxInputStyle}
          />

          <label style={checkboxLabelStyle}>Physics</label>
        </div>

        <div style={checkboxStyle}>
          <input
            type="checkbox"
            name="selectedSubjects"
            value="chemistry"
            checked={inputValues.selectedSubjects.includes("chemistry")}
            onChange={handleInputChange}
            style={checkboxInputStyle}
          />

          <label style={checkboxLabelStyle}>Chemistry</label>
        </div>

        <div style={checkboxStyle}>
          <input
            type="checkbox"
            name="selectedSubjects"
            value="biology"
            checked={inputValues.selectedSubjects.includes("biology")}
            onChange={handleInputChange}
            style={checkboxInputStyle}
          />

          <label style={checkboxLabelStyle}>Biology</label>
        </div>
        {errorMessages.selectedSubjects && (
          <small style={errorStyle}>{errorMessages.selectedSubjects}</small>
        )}
      </div>

      <div style={inputGroupStyle}>
        <label htmlFor="userDescription" style={labelStyle}>
          Description
        </label>

        <textarea
          id="userDescription"
          name="userDescription"
          style={inputStyle}
          placeholder="Enter a brief description"
          value={inputValues.userDescription}
          onChange={handleInputChange}
          required
        />

        {errorMessages.userDescription && (
          <small style={errorStyle}>{errorMessages.userDescription}</small>
        )}
      </div>

      <button type="submit" style={buttonStyle} disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

// CSS

const formStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
};

const inputGroupStyle = {
  marginBottom: "15px",
};

const labelStyle = {
  fontSize: "16px",
  fontWeight: "bold",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const selectStyle = {
  width: "100%",
  padding: "8px",
  fontSize: "14px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const radioStyle = {
  display: "inline-block",
  marginRight: "15px",
};

const radioInputStyle = {
  marginRight: "5px",
};

const radioLabelStyle = {
  fontSize: "14px",
};

const checkboxStyle = {
  display: "inline-block",

  marginRight: "15px",
};

const checkboxInputStyle = {
  marginRight: "5px",
};

const checkboxLabelStyle = {
  fontSize: "14px",
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const errorStyle = {
  color: "red",
  fontSize: "12px",
};

export default FormValidator;
