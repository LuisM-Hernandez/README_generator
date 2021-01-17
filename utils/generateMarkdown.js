// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const badticks = "```"
function getLicenseBadge(license) {

  //Need to fix after first try it still comes up the same bade with different choice
  if(license === "MIT"){
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }

 else if(license === "APACHE 2.0"){
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  }
  else if(license === "GPL 3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }
 else if(license === "BSD 3"){
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
  }
  else if(license === "NONE"){
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(license) {

  if(license === "MIT"){
     return "(https://opensource.org/licenses/MIT)";
  }

 else if(license === "APACHE 2.0"){
    return "(https://opensource.org/licenses/Apache-2.0)";
  }
  else if(license === "GPL 3.0"){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  }
 else if(license === "BSD 3"){
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  else if(license === "NONE"){
    return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(license) {

  if(license === "MIT"){
    return `## License

    This project is licensed under the MIT license.

    `
  }

 else if(license === "APACHE 2.0"){
  return `## License

  This project is licensed under the Apache license.

  `
  }
  else if(license === "GPL 3.0"){
    return `## License

    This project is licensed under the GPL license.


    `
  }
 else if(license === "BSD 3"){
  return `## License

  This project is licensed under the BSD license.

  `
  }

  else if (license === "NONE"){
    return `## License
    
    `
  }
}

// TODO: Create a function to generate markdown for README
function writeChoices(data) {

  const badge = getLicenseBadge(data.license);
  const link = getLicenseLink(data.license)
  const section = getLicenseSection(data.license);

  return `# ${data.title}

  ${badge}${link}

  ## Description
  
  
  ${data.description}


  ### Table of Content
  ${badticks}
  1. [Installation]
  2. [Tests]
  3. [Usage]
  4. [License]
  5. [Contributing]
  6. [Questions]
  ${badticks}

  ## Installation
  ${badticks}
  ${data.installation}
  ${badticks}


  ## Usage
  ${badticks}
  ${data.usage}
  ${badticks}

  ## Test
  ${data.test}

  ## Contributing
  ${data.contributing}

  ## Contact
  ${badticks}
  Email:${data.email}
  GitHub: https://github.com/${data.github}
  ${badticks}

${section}

`;
}

module.exports = writeChoices;
