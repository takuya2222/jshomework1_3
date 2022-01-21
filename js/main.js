"use strict"

const tasks = ['掃除','買い物','散歩'];
const template = `
=========================
現在持っているタスク一覧
=========================
`;

let showTasks = () => {
  console.log(template);
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
  }
};

let addTodo = () => {
  console.log(template);
  const add = prompt('タスクを入力してください。');
  tasks.push(add);
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
  }
};  

showTasks();
addTodo();
