// This function returns a license badge based on which license is chosen in
// If there is no license it will return an empty string
const badticks = "```"
function getLicenseBadge(license) {

  if(license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }

 else if(license === "APACHE 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
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

//  This function returns the license link
// If no license was chosen, return an empty string
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

// This function returns the license section of README
// Return an empty string if no license was chosen
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

// This function generates the markdown for the README.md file
function writeChoices(data) {

  const badge = getLicenseBadge(data.license);
  const link = getLicenseLink(data.license)
  const section = getLicenseSection(data.license);

  return `# ${data.title}

  ${badge}${link}

  ## Description
  
  
  ${data.description}


  ## Table of Content
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
  ${badticks}
  ${data.test}
  ${badticks}

  ## Contributing
  ${data.contributing}

  ## Contact

  If you have any questions about this repository, open an issue or contact me directly at ${data.email}. 
  
  You can find more of my work at https://github.com/${data.github}

${section}

`;
}

module.exports = writeChoices;
