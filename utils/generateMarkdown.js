const licenseArray = [
  {
    name: "MIT",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Apache 2.0",
    link: "https://www.apache.org/licenses/LICENSE-2.0",
  },
  {
    name: "BSD 2-clause Simplified",
    link: "https://opensource.org/licenses/BSD-2-Clause",
  },
  {
    name: "BSD 3-clause New/Revised",
    link: "https://spdx.org/licenses/BSD-3-Clause.html",
  },
  {
    name: "GNU General Public License v2.0",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
];

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let spaceTitle = data.license.replace(/ /g, "%20");
  let licenseLink = "";

  for (var i = 0; i < licenseArray.length; i++) {
    if (data.license === licenseArray[i].name) {
      licenseLink = licenseArray[i].link;
    }
  }

  return `# ${data.title} ![GitHub license](https://img.shields.io/badge/license-${spaceTitle}-blue.svg)

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
  Read more about it at ${licenseLink}.

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

module.exports = generateMarkdown;