export function getMonthsArray(type) {
    let $months = document.querySelector(".months");
    let arrMonthsElements = Array.from($months.children);
    let result = type ? arrMonthsElements : $months;
    return result;
}

export function filterMonth(date) {
    let arrMonthsElements = getMonthsArray(true);
    let arrFilterMonth = arrMonthsElements.find(
        (item) => Number(item.dataset.id) === Number(date)
    );
    return arrFilterMonth
}

export function getfilterData(data, idElement) {
    let elemFilterData = data.find((item) =>
        idElement ? item.id === Number(idElement) + 1 : ""
    );
    return elemFilterData
}

export function selectCurrentMonth() {
    let currentDate = new Date().getUTCMonth();
    filterMonth(currentDate).classList.add("choose");
}