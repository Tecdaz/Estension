function main() {
    const buttonComplete = document.createElement("button");
    buttonComplete.innerText = "Completar Encuesta";
    const encuesta = document.querySelector("#layout_dos_columnas");

    encuesta.insertBefore(buttonComplete, encuesta.firstElementChild.nextSibling);
    let solved = [];
    function completePoll() {
        let frame = document.querySelector("iframe");
        let content = document;
        if (frame) {
            content = frame.contentDocument || iframe.contentWindow.document;
            console.log({ content });
        }

        let selectSlots = content.querySelectorAll("select");
        console.log({ selectSlots });
        while (selectSlots.length > solved.length) {
            for (let i = 0; i < selectSlots.length; i++) {
                const select = selectSlots[i];
                if (select !== undefined) {
                    console.log({ select });
                    if (solved.includes(select.id)) {
                        continue;
                    } else {
                        select.value = select[Math.floor(Math.random() * select.length) + 1].value;
                        solved.push(select.id);
                    }

                }
            }
        }

        let text = content.querySelectorAll("textarea");
        console.log({ text });
        for (let i = 0; i < text.length; i++) {
            text[i].value = "Ns/nc";
        }

        const endButton = content.querySelector("#btn-terminar");
        console.log(endButton);
        endButton.click();
    }

    console.log("All polls completed");
    buttonComplete.addEventListener("click", completePoll);
}

window.addEventListener("onhaschange", main());


