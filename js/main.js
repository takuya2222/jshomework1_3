"use strict"

const array = ['掃除','買い物','散歩'];

function todo() {
  console.log(array);
} 

todo();

const task = prompt('タスクを入力してください。');
array.push(task);
todo(array);




// ①「現在持っているタスク一覧」とその一覧が元から表記されている
// ②「タスクを入力してください。」がポップアップとして出ている
// ③「ああ」を入力する
// ④「ああ」が追加されたタスク一覧が新たに下に表記される