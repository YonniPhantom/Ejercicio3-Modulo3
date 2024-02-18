class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertUnique(data) {
        let isUnique = true;
        let current = this.head;
        while (current) {
            if (current.data === data) {
                isUnique = false;
                break;
            }
            current = current.next;
        }
        if (isUnique) {
            this.insertEnd(data);
            return true;
        }
        return false;
    }

    showValuesAbove(value) {
        let current = this.head;
        const valuesAbove = [];
        while (current) {
            if (current.data > value) {
                valuesAbove.push(current.data);
            }
            current = current.next;
        }
        return valuesAbove;
    }
}

function insertValue() {
    const value = parseInt(document.getElementById('value').value);
    if (!isNaN(value)) {
        if (list.insertUnique(value)) {
            displayList();
        } else {
            document.getElementById('output').innerText = 'El valor ya está en la lista.';
        }
    } else {
        document.getElementById('output').innerText = 'Ingrese un número válido.';
    }
}

function displayList() {
    let current = list.head;
    let output = 'Lista: ';
    while (current) {
        output += current.data + ' → ';
        current = current.next;
    }
    output += 'null';
    document.getElementById('output').innerText = output;
}

// Crear listas con valores aleatorios
const list = new LinkedList();
for (let i = 0; i < 10; i++) {
    const randomValue = Math.floor(Math.random() * 20) + 1; // Números aleatorios entre 1 y 20
    list.insertEnd(randomValue);
}
displayList();

// Mostrar nodos que superen un valor determinado
const valueToCheck = 10; // Valor determinado
const valuesAbove = list.showValuesAbove(valueToCheck);
console.log('Nodos que superan el valor ' + valueToCheck + ':', valuesAbove);
