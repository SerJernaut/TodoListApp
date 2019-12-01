'use strict';

const input = document.getElementById("taskInput");
const tasksListElem = document.getElementById("tasksList");

loadEvents();

function loadEvents(){
  document.getElementById("addButton").addEventListener('click',addTaskOnButton);
  document.getElementById("resetButton").addEventListener('click', resetTaskOnButton);
  document.getElementById('clearButton').addEventListener('click', clearList);
}

function addTaskOnButton(e){
  e.preventDefault();
  if(input.value != '')
    addTaskItem(input.value);
  	input.value = '';
}



	function addTaskItem(task) {
	    const taskItemElem = document.createElement('li');
	    taskItemElem.classList.add("taskItem");
	   	const checkboxItemElem = document.createElement('input');
	    checkboxItemElem.setAttribute("type", "checkbox");
	    taskItemElem.append(checkboxItemElem);
	    const namedTaskElem = document.createElement('span');
	    namedTaskElem.innerText = `${task}`;
	    taskItemElem.append(namedTaskElem);
	    tasksListElem.append(taskItemElem);
	    return taskItemElem;
	}


function resetTaskOnButton(e) {
    input.value = "";
}

function clearList(e){
  tasksListElem.innerHTML = '';
}




