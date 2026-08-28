function calcularTotal(preco, quantity) {
    return preco * quantity; // Voltou para a multiplicação (*)
}

if (typeof module !== "undefined") {
    module.exports = { calcularTotal };
}
