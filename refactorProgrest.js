// all *checked* checkbox elements within the "curriculum section"
var checkboxes = document
    .querySelector('[data-purpose=curriculum-section-container]')
    .querySelectorAll('input[type=checkbox]:checked');

// a functional loop
function loopCheckboxes(i = 0) {
    // no more checkboxes - our exit case
    if (i > checkboxes.length - 1) return;

    const checkbox = checkboxes[i];

    checkbox.click();
    setTimeout(() => waitForCheck(checkbox, i), 50);
}

// wait for the checkbox to be unchecked
// keep track of the attempts to retry clicking after a number of failures
function waitForCheck(checkbox, i, attempt = 1) {
    // retry clicking after 5 seconds (for network issues)
    if (checkbox.checked && attempt >= 20) {
        return loopCheckboxes(i);
    } else if (checkbox.checked) {
        // if the checkbox is still checked keep waiting, pausing the loop
        return setTimeout(() => waitForCheck(checkbox, i, attempt + 1), 250);
    } else {
        // continue loop on next checkbox (if we didnt exit in the above if-statement)
        return loopCheckboxes(i + 1);
    }
}

// start the loop
loopCheckboxes();

// ERROR PRONE WAY
// checkboxes.forEach((checkbox, i) => {
//     setTimeout(() => checkbox.click(), i * 50);
// });
