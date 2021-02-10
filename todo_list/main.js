let itemNum = 0;
let itemRemain = 0;
let items = {};
let filter = "all";

function check(e) {
  $(`#item-${e.target.id}`).toggleClass("item-done");
  items[Number(e.target.id)].isCompleted = !items[Number(e.target.id)]
    .isCompleted;
  itemRemain += e.target.checked ? -1 : 1;
  if (filter === "active" || filter === "completed")
    $(`#item-div-${e.target.id}`).detach();
  $("#total").text(`${itemRemain} left`);
}

const deleteItem = (id) => () => {
  if (!$(`#${id}`).prop("checked")) itemRemain--;
  delete items[Number(id)];
  $(`#item-div-${id}`).remove();
  $("#total").text(`${itemRemain} left`);
};

function createItem(id, text) {
  if (items.hasOwnProperty(Number(id))) return $(`#item-div-${id}`);
  const checkbox = $("<div/>", { class: "todo-app__checkbox" });
  checkbox
    .append($("<input>", { id, type: "checkbox", click: check }))
    .append($("<label>", { for: id }));

  const item = $("<div/>", {
    id: `item-div-${id}`,
    class: "todo-app__item",
  });
  item
    .append(checkbox)
    .append(
      $("<h1/>", {
        id: `item-${id}`,
        class: "todo-app__item-detail",
        text,
      })
    )
    .append(
      $("<img>", {
        class: "todo-app__item-x",
        src: "./img/x.png",
        click: deleteItem(id),
      })
    );
  items[id] = { jqueryItem: item, isCompleted: false };
  itemNum++;
  itemRemain++;
  return item;
}

function addItem(e) {
  if (e.key === "Enter" && e.target.value !== "") {
    const item = createItem(itemNum, e.target.value);
    if (filter !== "completed") item.appendTo($("#todo-list"));

    $("#todo-input").val("");
    $("#total").text(`${itemRemain} left`);
  }
}

function filterAll() {
  filter = "all";
  $("#view-all").addClass("view-buttons-active");
  $("#view-active").removeClass("view-buttons-active");
  $("#view-completed").removeClass("view-buttons-active");
  $(".todo-app__item").detach();
  $("#todo-list").append(
    ...Object.values(items).map(({ jqueryItem }) => jqueryItem)
  );
}

function filterActive() {
  filter = "active";
  $("#view-all").removeClass("view-buttons-active");
  $("#view-active").addClass("view-buttons-active");
  $("#view-completed").removeClass("view-buttons-active");
  $(".todo-app__item").detach();
  $("#todo-list").append(
    ...Object.values(items)
      .filter(({ isCompleted }) => !isCompleted)
      .map(({ jqueryItem }) => jqueryItem)
  );
}

function filterCompleted() {
  filter = "completed";
  $(".todo-app__item").detach();
  $("#view-all").removeClass("view-buttons-active");
  $("#view-active").removeClass("view-buttons-active");
  $("#view-completed").addClass("view-buttons-active");
  $("#todo-list").append(
    ...Object.values(items)
      .filter(({ isCompleted }) => isCompleted)
      .map(({ jqueryItem }) => jqueryItem)
  );
}

function clearCompleted() {
  Object.entries(items).forEach(([id, item]) => {
    if (item.isCompleted) {
      delete items[Number(id)];
      $(`#item-div-${id}`).remove();
    }
  });
}

$("#todo-input").keyup(addItem);
$("#view-all").click(filterAll);
$("#view-active").click(filterActive);
$("#view-completed").click(filterCompleted);
$("#clear-completed").click(clearCompleted);
