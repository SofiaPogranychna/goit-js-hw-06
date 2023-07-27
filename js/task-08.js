const form = document.querySelector(".login-form")

form.addEventListener("submit", onSubmit)

function onSubmit(event) {
    event.preventDefault();
    const formData = {};
    formData.email = form.elements.email.value;
    formData.password = form.elements.password.value;
    if (form.elements.email.value === '' || form.elements.password.value === '') {
        alert(`Всі поля повинні бути заповнені`);
    }
    else {console.log(formData)}
    
    form.reset()
}