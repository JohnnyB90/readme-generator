// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (License === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (License === "GPL 3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg";
  } else if (License === "BSD 3") {
    return "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (License === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (License === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else if (License === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    myName,
    myGitHub,
    projectName,
    description,
    installation,
    usage,
    Testing,
    Contributors,
    License,
    Support,
  } = data;
  
  const licenseBadge = renderLicenseBadge(License);
  const licenseLink = renderLicenseLink(License);
  return `
  <img alt="License: ${License}" src="${licenseBadge}"></br>
  ## Table of Contents
  * [Author](#myName)
  * [Project Name](#projectName)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Support](#support)
  * [Questions](#questions)

# Name of Author

${myName}

# Project Name

${projectName}

## Description

${description}


## Installation

${installation}

## Usage

${usage}

## Testing

${Testing}

## Contributors

Addtional contributors: ${Contributors}

## License
<img alt="License: ${License}" src="${licenseBadge}"></br>
This project is licensed under the terms of the ${License} license. Click <a href="${licenseLink}">here</a> to view the full license text.

## Support

${Support}

## Questions

For questions or feedback, please feel free to reach out to me <a href="https://github.com/${myGitHub}">here</a> on GitHub.
  `;
}

module.exports = generateMarkdown;
