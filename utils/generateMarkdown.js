// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)

  ## Installation 
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;


const licenseArray = [
  {
    name: "MIT License",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Apache License 2.0",
    link: "https://www.apache.org/licenses/LICENSE-2.0.txt",
  },
  {
    name: "BSD 2-Clause 'Simplified' License",
    link: "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    name: "BSD 3-Clause 'New' or 'Revised' License",
    link: "https://spdx.org/licenses/BSD-3-Clause.html",
  },
  {
    name: "GNU General Public License v2.0",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
];

