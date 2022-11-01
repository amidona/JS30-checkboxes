const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if they had the shift key down
    //AND check that they are checking it not unchecking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            // "this" is the second box you checked, while holding down the shift key
            // lastChecked is the first box you checked
            // below code makes it so it works going both directions, if you check the second one above OR below the first check
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));