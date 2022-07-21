// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
    switch (license) {
        case "Apache License 2.0":
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
        case "GNU General Public License v3.0":
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        case "MIT License":
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        case "BSD 2-Clause 'Simplified' License":
            return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
        case "BSD 3-Clause 'New' or 'Revised' License":
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
        case "Boost Software License 1.0":
            return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
        case "Creative Commons Zero v1.0 Universal":
            return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
        case "Eclipse Public License 2.0":
            return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
        case "GNU Affero General Public License v3.0":
            return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
        case "GNU General Public License v2.0":
            return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
        case "GNU Lesser General Public License v3.0":
            return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
        case "Mozilla Public License 2.0":
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
        case "The Unlicense":
            return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
        default:
            return "";

    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {
    let licenseLink = "";
    switch (license) {
        case "Apache License 2.0":
            licenseLink = "https://opensource.org/licenses/Apache-2.0";
            break;
        case "GNU General Public License v3.0":
            licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "MIT License":
            licenseLink = "https://opensource.org/licenses/MIT";
            break;
        case "BSD 2-Clause 'Simplified' License":
            licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
            break;
        case "BSD 3-Clause 'New' or 'Revised' License":
            licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
            break;
        case "Boost Software License 1.0":
            licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
            break;
        case "Creative Commons Zero v1.0 Universal":
            licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
            break;
        case "Eclipse Public License 2.0":
            licenseLink = "https://opensource.org/licenses/EPL-1.0";
            break;
        case "GNU Affero General Public License v3.0":
            licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
            break;
        case "GNU General Public License v2.0":
            licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
            break;
        case "GNU Lesser General Public License v3.0":
            licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
            break;
        case "Mozilla Public License 2.0":
            licenseLink = "https://opensource.org/licenses/MPL-2.0";
            break;
        case "The Unlicense":
            licenseLink = "http://unlicense.org/";
            break;
        default:
            licenseLink = "";
            break;

    }

    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {
    if (!license) {
        return "";
    } else {
        return `
        ##License

        ${license} was used to License this project

        ${renderLicenseLink(license)}
        `;

    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
    return `# ${data.projectName}
    ${renderLicenseBadge(data.license)}

    ## Project Description

    ${data.projectDescription}

    ##Table of Contents

    - [Technology](#technology)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributions](#contributions)
    - [Tests](#tests)
    - [Additional Questions](#questions)
    
    ## Technology

    ${data.projectLanguages}

    ## Installation

    ${data.projectInstall}

    ## Usage

    ${data.projectUse}

    ${renderLicenseSection(data.license)}

    ## Contributions 

    ${data.projectContribution}

    ## Tests

    ${data.projectTest}

    ## Additional Questions

    ### For any issues, please feel free to contact me on either GitHub or using my personal Email!
    https://github.com/${data.githubName}
    
    ${data.userEmail}


    ## Thank you for checking out my work! I hope you enjoy!

                               _
                            __(.)< (MEOW)
                            \\___)   
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`;
}

module.exports = generateMarkdown;