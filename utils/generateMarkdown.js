// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License Info](https://choosealicense.com/licenses/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `#### License Badge
  
  ${renderLicenseBadge(license)}
  
  #### License Information
  ${renderLicenseLink(license)}`


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table Of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)
- [GitHub](#github)


### Description
${data.description}

### Installation
${data.installation}

### Usage
${data.usage}

### Credits
${data.condributing}

### License
${renderLicenseSection(data.license)}


### Tests
${data.tests}

### Contact
Feel free to reach me at ${data.questions} for any questions regarding this project.

### GitHub
[Github Profile](https://github.com/${data.github} 
`
;
}

module.exports = generateMarkdown;
