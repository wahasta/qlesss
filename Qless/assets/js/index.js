const appointmentModal = document.querySelector("#appointmentModal");
const openAppointmentButton = document.querySelector("[data-modal-open]");
const closeAppointmentButton = appointmentModal?.querySelector("[data-modal-close]");

if (appointmentModal && openAppointmentButton && closeAppointmentButton) {
    const closeModal = () => appointmentModal.classList.remove("is-open");

    openAppointmentButton.addEventListener("click", () => {
        appointmentModal.classList.add("is-open");
    });

    closeAppointmentButton.addEventListener("click", closeModal);

    appointmentModal.addEventListener("click", (event) => {
        if (event.target === appointmentModal) {
            closeModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && appointmentModal.classList.contains("is-open")) {
            closeModal();
            openAppointmentButton.focus();
        }
    });
}
