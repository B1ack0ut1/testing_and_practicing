let buttonCount = 0;

function addTask(text) {
  let buttonDiv = $("<div/>", { class: "todo-app__checkbox" });
  buttonDiv.append($("<input />", { id: `${buttonCount}`, type: "checkbox" }));
  buttonDiv.append($("<label />", { for: `${buttonCount}` }));
  let taskText = $("<h1 />", { class: "todo-app__item-detail", text });
  let xImage = $("<img />", { class: "todo-app__item-x", src: "./img/x.png" });
  let taskContainer = $("<div />", {
    id: `item-div-${buttonCount}`,
    class: "todo-app__item",
  });
  taskContainer.append(buttonDiv, taskText, xImage);
  $("#todo-list").append(taskContainer);
  buttonCount++;
}

const handleTask = (e) => {
  if (e.key === "Enter") {
    addTask(e.target.value);
    e.target.value = "";
  }
};

$("#todo-input").keyup(handleTask);
