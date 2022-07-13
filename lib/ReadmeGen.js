

class MarkDown {

    static renderLicenseBadge(license){
        const badges = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            gnuplv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            wtfpl: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
        }

        return badges [license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            mit: '[MIT](https://opensource.org/licenses/MIT)',
            isc: '[ISC](https://opensource.org/licenses/ISC)',
            gnuplv3:'[GNUPlv3](https://www.gnu.org/licenses/gpl-3.0)',
            wtfpl: '[WTFPL](http://www.wtfpl.net/about/)',
        }

        return licenseLinks [license]

    }

    static renderLicenseSection(license){
        if (license) {

            return `This is licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ``
        }
    }


    static generateReadme(answers){
return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}


## Table of Content
* [Project description](#Description)
* [Usage](#Usage)
* [Contribution](#Contributiion)
* [Installation](#Installation)
* [Questions](#Questions)
* [License](#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Installation
${answers.installation}

## Questions
${answers.email}
${answers.github}

## License
${this.renderLicenseSection(answers.license)}
`
    }
}

export default MarkDown
