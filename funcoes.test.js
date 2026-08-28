const { calcularTotal } = require("./funcoes");

test("Calcula o valor de dois produtos", () => {
    const resultado = calcularTotal(100, 2);
    expect(resultado).toBe(200);
});
