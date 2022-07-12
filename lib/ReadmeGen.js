

class MarkDown {
    static generateReadme(answers){
        return `
        # ${answers.title}

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
        ${answers.license}
        `
    }
}

export default MarkDown
