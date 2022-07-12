

class MarkDown {

    static renderLicenseBade(license){
        const badges = {
            MIT: '(https://img.shields.io/badge/License-MIT-yellow.svg)',
            ISC: '(https://img.shields.io/badge/License-ISC-blue.svg)',
            GNUPlv3:'(https://img.shields.io/badge/License-GPLv3-blue.svg)]',
            WTFPL: '(https://img.shields.io/badge/License-WTFPL-brightgreen.svg)',
        }

        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            MIT: '(https://opensource.org/licenses/MIT)',
            ISC: '(https://opensource.org/licenses/ISC)',
            GNUPlv3:'(https://www.gnu.org/licenses/gpl-3.0)',
            WTFPL: '(http://www.wtfpl.net/about/)',
        }

        return licenseLinks[license]

    }

    static renderLicenseSection(license){
        if (license) {

            return `This is licensed under the ${this.renderLicenseLink(license)}`
        } else {
            return ``
        }
    }


    static generateReadme(answers){
return `
# ${answers.title}

${this.renderLicenseBade(answers.license)}


## Table of Content
- [Project description] (#Description)
- [Usage] (#Usage)
- [Contributing] (#Contributiing)
- [Installation] (#Installation)
- [Questions] (#Questions)
- [License] (#License)

## Description
${answers.description}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

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
