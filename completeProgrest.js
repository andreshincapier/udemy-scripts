// using the quick and simple error-prone method
function checkAll() {
    var checkboxes = document
        .querySelector('[data-purpose=curriculum-section-container]')
        .querySelectorAll('input[type=checkbox]');

    checkboxes.forEach((checkbox, i) => {
        if (!checkbox.checked) {
            setTimeout(() => checkbox.click(), i * 50);
        }
    });
}

checkAll()
