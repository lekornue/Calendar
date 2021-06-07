function renderModal({ title, visible, data }) {
    let $modal = document.createElement("div");
    document.body.prepend($modal);
    $modal.classList.add("modal");
    $modal.insertAdjacentHTML(
        "afterbegin",
        `
  <div class="modal-background" data-type="close">
   <div class="modal-window">
    <div class="modal-header">
      <span class="modal-title">${title}</span>
      <span class="modal-close" data-type="close">&times;</span>
    </div>
    <div class="modal-body">
      <div class="events">
          <ul>
            <li>${data.id}.01.2021 -- 12:00 -- Drink coffee with ${data.name}</li>
            <li>Tel. numder ${data.phone}</li>
          </ul>
      </div>
      <div class="message">
        <div class="message__select_moth">Please select month</div>
        <div class="message__no_events">There are no events for this month</div>
      </div>
    </div>
    <div class="modal-footer" ${visible}>
    <button>OK</button>
    <button>Cancel</button>
    </div>
   </div>
  </div>
  `
    );
    return $modal;
}

function baseFuncModal(node) {
    return {
        open() {
            node.classList.add("open");
        },
        close() {
            node.classList.remove("open");
        },
        dectroy() {},
    };
}

export function Modal(state) {
    let $modal = renderModal(state);
    let interfaceModal = {
        ...baseFuncModal($modal),
    };
    $modal.addEventListener("click", (event) =>
        event.target.dataset.type === "close" ? interfaceModal.close() : ""
    );
    return interfaceModal;
}