"use strict"

const todos = ['掃除','買い物','散歩'];
const template =  `
=========================
現在持っているタスク一覧
=========================
`;

function Todo() {
  console.log(template);
  const todos = ['掃除','買い物','散歩'];
  console.log(todos);
};

function addTodo() {
  console.log(template);
  const add = prompt('タスクを入力してください。');
  todos.push(add);
  console.log(todos);
};  

Todo();
addTodo();




// ①「現在持っているタスク一覧」とその一覧が元から表記されている
// ②「タスクを入力してください。」がポップアップとして出ている
// ③「ああ」を入力する
// ④「ああ」が追加されたタスク一覧が新たに下に表記される