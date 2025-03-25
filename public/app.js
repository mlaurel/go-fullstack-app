import { API } from "./services/API.js";

window.app = {
    search: (event) => {
        event.preventDefault();
        const keywords = document.querySelector("input[type=search]").value;

    },
    api: API
}

window.addEventListener("DOMContentLoaded", () => {

})
