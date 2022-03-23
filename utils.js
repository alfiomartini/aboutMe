function stateHook(val) {
  let value = val;
  return [
    () => value,
    (stateVal) => {
      value = stateVal;
    },
  ];
}

const btnsCollection = document.querySelectorAll(".group__btn");

function activateBtn(btn) {
  btnsCollection.forEach((btn) => btn.classList.remove("active"));
  btn.classList.add("active");
}

// note the closure in activateBtn (btnsCollection)
export { stateHook, activateBtn };
