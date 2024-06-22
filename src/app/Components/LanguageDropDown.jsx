"use client";
import React, { useState } from "react";

const languages = [
  { value: "en", label: "English" },
  { value: "ar", label: "العربية" },
  { value: "fr", label: "Français" },
];

const LanguageDropDownMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const language = languages.find((lang) => lang.value === selectedValue);
    setSelectedLanguage(language);
  };

  return (
    <div className="dropdown">
      <select
        value={selectedLanguage.value}
        onChange={handleChange}
        className="dropdown-toggle"
      >
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropDownMenu;
