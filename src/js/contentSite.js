import { Modal } from "./modal";
import {
    getMonthsArray,
    filterMonth,
    getfilterData,
    selectCurrentMonth,
} from "./pureFunctions";

export function start(options) {
    selectCurrentMonth();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            getMonthsArray().addEventListener("click", (event) => {
                getMonthsArray(true).forEach((item) => {
                    item.classList.remove("choose");
                });
                let idSelectMonth = event.target.dataset.id || "";
                Object.assign(options.data, getfilterData(data, idSelectMonth));
                window.modal = Modal(options);
                idSelectMonth ? modal.open() : "";
                filterMonth(idSelectMonth).classList.add("choose");
            });
        })
        .catch((err) => console.log(`Ошибка ${err}`));
}