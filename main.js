#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright("\n<<<<<<<<<<<<<<<<<  QUIZ APP <<<<<<<<<<<<<<<<<<<<"));
console.log(chalk.bold.cyanBright("\n<<<<<<<<<<<<<<<<< Registration <<<<<<<<<<<<<<<<<<<<"));
let loop = true;
let storeData = []; //Student all data stored
let score = 0;
let selectRollNo = 4001;
let storeResult;
let pushScore = []; //Number of result store in this array
while (loop) {
    score = 0; //Yaha score 0 is liya likha ha q ka jub doobara loop start hoga to score ma jitne value store hoge wo reset hojaige
    let choices = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: "Select one",
            choices: [
                "Registration",
                "Admit Card",
                "Search Result",
                "List Of Result",
                "Exit",
            ],
        },
    ]);
    class Result {
        name;
        email;
        password;
        course;
        timing;
        totalScore;
        rollNo;
        constructor(name, email, password, course, timing, totalScore) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.course = course;
            this.timing = timing;
            this.totalScore = score;
            this.rollNo = selectRollNo++;
        }
    }
    //=============================================== Registration =====================================================
    if (choices.select === "Registration") {
        const enter = await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Name",
                validate: function (value) {
                    if (!value.trim()) {
                        return chalk.bold.redBright("Please enter your name.");
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "email",
                message: "Email",
                validate: function (value) {
                    if (!value.trim()) {
                        return chalk.bold.redBright("Please enter your email.");
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "passsword",
                message: "Password",
                validate: function (value) {
                    if (!value.trim()) {
                        return chalk.bold.redBright("Please enter your password.");
                    }
                    return true;
                },
            },
            {
                type: "list",
                name: "course",
                message: "Choose Your Course",
                choices: [
                    "WordPress",
                    "Web Developnment",
                    "Artifical Intelligence",
                    "Machine Learning",
                ],
            },
            {
                type: "list",
                name: "timing",
                message: "Select Time",
                choices: [
                    "Monday 9:00am to 12:00pm",
                    "Monday 2:00pm to 5:00pm",
                    "Thursday 9:00am to 12:00pm",
                    "Thursday 2:00pm to 5:00pm",
                    "Saturday 9:00am to 12:00pm",
                    "Saturday 2:00pm to 5:00pm",
                ],
            },
        ]);
        let p1 = new Result(enter.name, enter.email, enter.password, enter.course, enter.timing, enter.totalscore);
        storeData.push(p1);
        console.log(chalk.bold.bgRedBright("\n <<<<<<<< Registration Complete>>>>>>"));
        // =====================Quiz ======================
        console.log(chalk.bold.bgCyanBright("\n <<<<<<<<<Quiz Start>>>>>>>>>\n"));
        console.log(chalk.bold.bgCyanBright("\n <<<<<<<<<You have 2 Categories>>>>>>>>\n"));
        console.log(chalk.bold.bgBlueBright("\n <<<<<<<<First Categorie English>>>>>>>>\n"));
        const choises = await inquirer.prompt([
            {
                name: "question1",
                type: "list",
                message: "What is the plural of child?",
                choices: ["a)Childs", "b)Childen", "c)Children", "d)Childers"], //Children
            },
            {
                name: "question2",
                type: "list",
                message: "'Which of the following is a synonym for Happy?",
                choices: ["a)Sad", "b)Joyful", "c)Angry", "d)Gloomy"], //Joyful
            },
            {
                name: "question3",
                type: "list",
                message: "What is the past tense of Go?",
                choices: ["a)Went", "b)Gone", "c)Goed", "d)Going"], //went
            },
            {
                type: "list",
                name: "question4",
                message: "Which of the following is an example of conjuction?",
                choices: ["a)And", "b)Run", "c)Quickly", "d)Happy"], //and
            },
            {
                type: "list",
                name: "question5",
                message: 'What is the comparative form of the adjective "good"?',
                choices: ["a)Well", "b)Best", "c)Better", "d)Gooder"], //better
            },
        ]);
        console.log(chalk.bold.bgCyanBright("Second Categorie Typescript"));
        const Typescript = await inquirer.prompt([
            {
                name: "question6",
                type: "list",
                message: "What is TypeScript primarily used for in web development?",
                choices: [
                    "a) Styling web pages",
                    "b) Creating animations",
                    "c) Adding interactivity",
                    "d) Enhancing JavaScript with",
                ], //Correct Answer: d)
            },
            {
                name: "question7",
                type: "list",
                message: "Which keyword is used to define a variable in TypeScript that cannot be reassigned?",
                choices: ["a) const", "b) let", "c) var", "d) static"], //correct Answer: A
            },
            {
                name: "question8",
                type: "list",
                message: "What does the (interface) keyword allow you to do in TypeScript?",
                choices: [
                    "a) Define a new class",
                    "b) Create a new function ",
                    "c) Define a contract for an object",
                    "d) Import",
                ], //correct: C
            },
            {
                name: "question9",
                type: "list",
                message: "Which of the following is an example of a TypeScript data type?",
                choices: ["a) And", "b) Run", "c) Quickly", "d) Happy Correct", "None"], //None
            },
            {
                name: "question10",
                type: "list",
                message: "What is the comparative form of the adjective (good) in TypeScript?",
                choices: ["a) Well", "b) Best", "c) Better", "d) Gooder"], //Better
            },
        ]);
        // Quiz Answers:
        if (choises.question1 === "c)Children") {
            score++;
        }
        if (choises.question2 === "b)Joyful") {
            score++;
        }
        if (choises.question3 === "a)Went") {
            score++;
        }
        if (choises.question4 === "a)And") {
            score++;
        }
        if (choises.question5 === "c)Better") {
            score++;
        }
        if (choises.question6 === "d) Enhancing JavaScript with") {
            score++;
        }
        if (choises.question7 === "a) const") {
            score++;
        }
        if (choises.question8 === "c) Define a contract for an object") {
            score++;
        }
        if (choises.question9 === "None") {
            score++;
        }
        if (choises.question10 === "c) Better") {
            score++;
        }
        console.log(chalk.bold.yellowBright("\n==================================Quiz Complete================================\n"));
        storeResult = score; //score ko baki jaga access karnay ka liya (storeResult) ka variable banaya ha jisay pehlay bahar declare kiya ha or ander reassign kiya ha.
        pushScore.push(storeResult); //phir is (storeResult) ma jo score hoga usay bahar walay array jis ka name (pushScore) ha us ma push kardangay or phir (pushScore) ko hum kahe bhe use kar saktay han
        //=========================================== Admit Card =====================================
    }
    else if (choices.select === "Admit Card") {
        for (let admitCard of storeData) {
            console.log(chalk.bold.cyanBright("\n=======================================================================\n"));
            console.log(chalk.bold.greenBright("                             Admit Card                               \n"));
            console.log(chalk.bold.cyanBright("======================================================================="));
            console.log(chalk.bold.greenBright("Name: ") +
                chalk.bold.yellowBright(admitCard.name));
            console.log(chalk.bold.greenBright("Roll No: ") +
                chalk.bold.yellowBright(admitCard.rollNo));
            console.log(chalk.bold.greenBright("Course: ") +
                chalk.bold.yellowBright(admitCard.course));
            console.log(chalk.bold.greenBright("Timing: ") +
                chalk.bold.yellowBright(admitCard.timing));
        }
        //======================================List Of Result ====================================================
    }
    else if (choices.select === "List Of Result") {
        console.log(chalk.bold.cyanBright("\n>>>>>>>>>>>>>>>>> Candidates Result >>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
        for (let i = 0; i < storeData.length; i++) {
            console.log(chalk.bold.greenBright("\nName: ") +
                chalk.bold.yellowBright(storeData[i].name) +
                chalk.bold.greenBright(" Scores: ") +
                chalk.bold.yellowBright(pushScore[i]));
        }
        console.log(chalk.bold.cyanBright("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
        //====================================== Search Result =======================================================
    }
    else if (choices.select === "Search Result") {
        const searchResult = await inquirer.prompt([
            {
                type: "input",
                name: "student",
                message: "Enter your Roll NO",
            },
        ]);
        let found = false;
        for (let student of storeData) {
            if (searchResult.student == student.rollNo) {
                found = true;
                console.log(chalk.bold.magentaBright("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Student Result >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
                console.log(chalk.bold.greenBright("Name: ") +
                    chalk.bold.yellowBright(student.name));
                console.log(chalk.bold.greenBright("Roll No: ") +
                    chalk.bold.yellowBright(student.rollNo));
                console.log(chalk.bold.greenBright("Course: ") +
                    chalk.bold.yellowBright(student.course));
                console.log(chalk.bold.greenBright("Timing: ") +
                    chalk.bold.yellowBright(student.timing));
                // Print the result for this student
                if (pushScore[storeData.indexOf(student)] < 5) {
                    console.log(chalk.bold.redBright("\n>>>>>>>>>>>>>>>>>>>> 😞 Sorry, You are Fail.Better Luck Next Time ⏳. >>>>>>>>>>>>>>>>>>>>>>>>>"));
                    console.log(chalk.bold.redBright(`                            Your Total Score is ${pushScore[storeData.indexOf(student)]}/10`));
                }
                else {
                    console.log(chalk.bold.greenBright("\n>>>>>>>>>>>>>>>>>>>>  🎉🎊 Congratulations You are Passed 💫✨ >>>>>>>>>>>>>>>>>>>>>>>>>"));
                    console.log(chalk.bold.greenBright(`                            Your Total Score is ${pushScore[storeData.indexOf(student)]}/10`));
                }
                break; // Exit loop once student is found
            }
        }
        if (!found) {
            console.log(chalk.bold.redBright("Not Found"));
        }
        //========================================== Exit ==============================================================
    }
    else {
        break;
    }
}
