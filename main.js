document.addEventListener("DOMContentLoaded", function () {
    const bill = document.getElementById("bill");
    const tipAmountPerPerson = document.getElementById("tipAmount");
    const totalTip = document.getElementById("totalTip");
    const buttons = document.querySelectorAll(".btn-list");
    const error = document.querySelector('.error');
    const customInput = document.getElementById('custom');
    const resetBtn = document.getElementById("resetBtn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            let targetBtnInput = parseInt(e.target.innerText);
            let inputBill = perseInputValue("bill");
            if (inputBill > 0 && typeof inputBill === 'number') {
                // check bill amount
                // check is custom
                if (e.target.hasAttribute('id')) {
                    targetBtnInput = parseInt(customInput.value);
                }
                if (targetBtnInput > 0) {
                    let perPersonTip = Math.ceil((inputBill * (targetBtnInput / 100)));
                    tipAmountPerPerson.innerText = perPersonTip;
                    totalTip.innerText = perPersonTip;
                    error.classList.remove('showError')
                }

            } else {
                error.classList.add('showError')
            }

        })
    }

    people.addEventListener('keypress', function (e) {
        if (e.key === "Enter" ) {
            let tipAmount = getTextValue("tipAmount")
            let person = perseInputValue('people');
            totalTip.innerText = person * tipAmount;
        }
    })
    resetBtn.addEventListener('click', function () {
        tipAmount.innerText = 0;
        totalTip.innerText = 0;
    })
    function perseInputValue(id) {
        return parseInt(document.getElementById(id).value);
    }
    function getTextValue(id) {
        return parseInt(document.getElementById(id).innerText);
    }
})