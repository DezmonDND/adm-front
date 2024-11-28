document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-event-btn');
    const fieldsetContainer = document.querySelector('.fieldset-container');
    let fieldCounter = 1;

    if (addButton) {
        addButton.addEventListener('click', () => {
            const newFieldset = document.createElement('div');
            newFieldset.classList.add('fieldset');
            newFieldset.innerHTML = `
                <fieldset class="fieldset ">
                    <div class="fieldset__title-remove">
                        <h3 class="fieldset__title ">Название мероприятия и предполагаемая сумма денег </h3>
                        <ion-icon class="fieldset__title-remove-btn md hydrated" name="close-outline" role="img"></ion-icon>
                    </div><div class="fieldset__answers">
                    <input class="input  input-interview-full" placeholder="Введите название мероприятия и сумму (руб, с двумя знаками после запятой)" name="answer${fieldCounter}" value=""></div></fieldset>
            `;
            fieldCounter++;
            fieldsetContainer.appendChild(newFieldset);

            const removeButton = newFieldset.querySelector('.fieldset__title-remove-btn');
            removeButton.addEventListener('click', () => {
                newFieldset.remove();
                fieldCounter--;
            });
        });
    }
});
