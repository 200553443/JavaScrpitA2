class Smoothie {
    constructor(name, fruits, base) {
        this.name = name;
        this.fruits = fruits;
        this.base = base;
    }

    getDescription() {
        return `
            Name: ${this.name}<br>
            Fruits: ${this.fruits.join(', ')}<br>
            Base: ${this.base}
        `;
    }
}

document.getElementById('order-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const fruitsInputs = document.querySelectorAll('input[name="ingredients"]');
    const baseInputs = document.querySelectorAll('input[name="base"]');
    const smoothieDescription = document.getElementById('smoothie-description');

    let selectedFruits = [];
    fruitsInputs.forEach(input => {
        if (input.checked) {
            selectedFruits.push(input.value);
        }
    });

    let selectedBase = '';
    baseInputs.forEach(input => {
        if (input.checked) {
            selectedBase = input.value;
        }
    });

    const smoothie = new Smoothie(
        nameInput.value,
        selectedFruits,
        selectedBase
    );

    smoothieDescription.innerHTML = smoothie.getDescription();
});
