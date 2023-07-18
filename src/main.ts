import "./style.css";
import { store } from "./store";
import * as actions from "./actionTypes";

store.subscribe(() => {
  console.log(store.getState());
  render();
});

const render = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
      <h1>Redux App</h1>
      <div class="card">
        <button id="newButton" type="button">report</button>
      </div>
      <p class="read-the-docs">
        Click report to add a new bug
      </p>

      <ul>
        ${store.getState().map((bug) => "<li>" + bug.description + "</li>")}
      </ul>
    </div>
  `;

  document
    .querySelector<HTMLDivElement>("#newButton")
    ?.addEventListener("click", () =>
      store.dispatch({
        type: actions.BUG_ADDED,
        payload: {
          description: "this is a bug",
        },
      })
    );
};

render();

// unsubscribe(); // This shuts off the state changes log
