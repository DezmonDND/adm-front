document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-event-btn');
    const fieldsetContainer = document.querySelector('.fieldset-container');
    let fieldCounter = 2;

    const updateFieldNames = () => {
        const fieldsets = fieldsetContainer.querySelectorAll('.fieldset');
        fieldCounter = fieldsets.length + 1;
        fieldsets.forEach((fieldset, index) => {
            const input = fieldset.querySelector('.input');
            input.name = `answer${index + 1}`;
        });
    };

    addButton.addEventListener('click', () => {
        const newFieldset = document.createElement('fieldset');
        newFieldset.classList.add('fieldset');
        newFieldset.innerHTML = `
                <div class="fieldset__title-remove">
                    <h3 class="fieldset__title">Название мероприятия и предполагаемая сумма денег</h3>
                    <ion-icon class="fieldset__title-remove-btn md hydrated" name="close-outline" role="img"></ion-icon>
                </div>
                <div class="fieldset__answers">
                    <input class="input input-interview-full" placeholder="Введите название мероприятия и сумму (руб, с двумя знаками после запятой)" name="answer${fieldCounter}" value="">
                </div>
        `;
        fieldCounter++;
        fieldsetContainer.appendChild(newFieldset);

        const removeButton = newFieldset.querySelector('.fieldset__title-remove-btn');
        removeButton.addEventListener('click', () => {
            newFieldset.remove();
            updateFieldNames(); 
        });
    });

    updateFieldNames();
});
