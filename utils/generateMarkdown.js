// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
let badge = "";
  if(license === "MIT"){
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }

 else if(license === "APACHE 2.0"){
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  }
  else if(license === "GPL 3.0"){
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
  }
 else if(license === "BSD 3"){
    badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(license) {
  let licenseLink ="";

  if(license === "MIT"){
    licenseLink = "(https://opensource.org/licenses/MIT)"
  }

 else if(license === "APACHE 2.0"){
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license === "GPL 3.0"){
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)"
  }
 else if(license === "BSD 3"){
    licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)"
  }

  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(license, badge, link) {


  let section ="";
  const tot = badge + link;

  if(license === "MIT"){
    return `## License

${badge}${link}
    `
  }

 else if(license === "APACHE 2.0"){
  section = `## License

  ${badge}${link}
  `
  }
  else if(license === "GPL 3.0"){
    section = `## License

    ${badge}${link}
    `
  }
 else if(license === "BSD 3"){
  section = `## License

  ${badge}${link}
  `
  }

  


}

// TODO: Create a function to generate markdown for README
function writeChoices(data) {

  const badge = getLicenseBadge(data.license);
  const licenseLink = getLicenseLink(data.license)
  const section = getLicenseSection(data.license, badge, licenseLink);


  return `# ${data.title}

  ## Description
  ${badge}${licenseLink}
  

  ${data.description}

  ### Table of Content

  1. [Installation]
  2. [Tests]
  3. [Usage]
  4. [License]
  5. [Contributing]
  6. [Questions]
  

  ## Installation
  
  ${data.installation}



  ## Usage

  ${data.usage}


  ## Test
  ${data.test}

  ## Contributing
  ${data.contributing}

  ## Contact
  ${data.email}
  ${data.github}

  ${section}

`;
}

module.exports = writeChoices;
