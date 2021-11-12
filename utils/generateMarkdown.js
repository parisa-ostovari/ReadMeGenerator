// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge()}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
    Copyright © ${data.license}. All rights reserved. 
    Licensed under the ${data.license} license.


  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions

    If you have any questions please contact me at:
      Email: ${data.email}
      GitHub: https://github.com/${data.GitHub}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
    if (license !== "None") {
      return `![GitHub License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
}

module.exports = generateMarkdown;
