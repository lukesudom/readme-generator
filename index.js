import inquirer from 'inquirer'

import fs from 'fs'

import MarkDown from './lib/ReadmeGen.js'


// app questions 
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Tests?',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution info?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'For questions (github)?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices: ['MIT','ISC','GNUPlv3','WTFPL'],
        filter(val) {
            return val.toLowerCase();
        }
    },
]


// run query function

async function runQuery() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const mark = MarkDown.generateReadme(answers)
        fs.writeFile('README.md', mark, function(err) {
            if(err){
                console.log('File could not be saved')
            } else {
                console.log('SUCCESS new README file created')
            }

        })
       
        
    })
    .catch ((error) => {
        console.log(error)
    })
}

runQuery()