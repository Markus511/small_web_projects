const items = Array.from(document.querySelectorAll(".grid-item"));
const btnInc = document.getElementById("inc");
const btnSub = document.getElementById("sub");
const valueField = document.getElementById("value");
const gridContainer = document.getElementById("grid-container");
const btnNums = document.getElementById("ready");
const textHidden = document.querySelector(".hidden");
const btnStart = document.getElementById("start");
const btnAgain = document.getElementById("again");
const text = document.getElementById("selectNums");

let sum = 30;
let counter = 0;
let div;
// all items
const itemArray = [];
// random numbers
const randomNumsArray = [];



//increase items
btnInc.addEventListener('click', () => {
    if (sum < 45) {
        sum += 1;
        valueField.textContent = sum;

        //create element
        div = document.createElement("div");
        div.innerHTML = `${sum}`;
        div.classList.add("grid-item");
        div.id = "item" + sum;
        items.push(div);
        gridContainer.appendChild(div);
    }

});

//subtract items
btnSub.addEventListener('click', () => {
    if (sum > 30) {
        sum -= 1;
        valueField.textContent = sum;

        //remove element
        gridContainer.removeChild(gridContainer.lastChild);
    }

});

//set items ready
btnNums.addEventListener('click', () => {
    btnInc.disabled = true;
    btnSub.disabled = true;
    textHidden.classList.remove("hidden");
    btnNums.disabled = true;

    // remove or add selected item
    items.forEach(item => {
        item.classList.add("active");

        item.addEventListener('click', () => {
            if (item.classList.contains("checkedNum")) {
                item.classList.remove("checkedNum");

                // remove item
                const index = itemArray.indexOf(item.id);
                if (index > -1) {
                    itemArray.splice(index, 1);
                }
                counter--;
            }

            // add item
            else if (itemArray.length < 7) {
                item.classList.add("checkedNum");
                itemArray.push(item.id);
                counter++;
            }

            // Activate start button
            if (counter === 7) {
                btnStart.disabled = false;
                text.textContent = "7 numbers selected."
            }
            else {
                btnStart.disabled = true;
                text.textContent = "Select 7 numbers!";
            }
        })
    });


    // start draw
    btnStart.addEventListener('click', () => {
        btnStart.disabled = true;
        while (randomNumsArray.length < 7) {
            var randomNum = Math.floor(Math.random() * sum) + 1;

            // same number check
            if (randomNumsArray.indexOf(randomNum) === -1) {
                randomNumsArray.push(randomNum);
            }
        }
        text.textContent = "The lottery is running...";

        // show complete message
        setTimeout(() => {
            text.textContent = "Draw complete!";
            btnAgain.disabled = false;
            btnStart.disabled = true;
        }, 7000)

        //show random numbers
        let i = 0;
        for (const item of items) {
            item.classList.remove("active");
            item.classList.add("deactivate");
            const itemValue = Number(item.innerHTML);

            if (randomNumsArray.includes(itemValue)) {
                setTimeout(() => {
                    item.classList.add('visibleRandomNum');
                }, 1000 * i);
                i++;

            }
        }
    })

    // play again
    btnAgain.addEventListener('click', () => window.location.reload());

});

