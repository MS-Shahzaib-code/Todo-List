import inquirer from "inquirer";
let todo = [];
let reapesct_Q = true;
while (reapesct_Q) {
    let todo_List = await inquirer.prompt([
        {
            name: "frist_Add",
            type: "input",
            message: "what would you like to add in your todo?"
        },
        {
            name: "second_Add",
            type: "confirm",
            message: "would you like to add more in your todo?",
            default: "ture"
        }
    ]);
    todo.push(todo_List.frist_Add);
    reapesct_Q = todo_List.second_Add;
    // console.log(todo_List)
    console.log(todo);
}
