const calculateArea = require('./calculateArea')

describe("Testes para a função calculareArea", () => {
    describe("Testes da área do círculo", () => {
        test("Deve retornar a área correta para um círculo de raio 2", () => {
            const result = calculateArea('circle', 2)
            expect(result).toBeCloseTo(12.5655, 4)
        })

        test("Deve lançar um erro se o raio não for fornecido", () => {
            expect(() => calculateArea('circle').toThrow("Forma geométrica desconhecida"))
        })
    })

    describe("Cálculo da área de um quadrado", () => {
        test("Deve retornar a área correta para um quadrado com 4 lados", () => {
            const result = calculateArea('square', 4)
            expect(result).toBe(16)
        })
    })

    describe("Cálculo da área de um retângulo", () => {
        test("Deve retornar a área correta para um retângulo com largura 4 e altura 5", () => {
            const result = calculateArea('rectangle', 4, 5)
            expect(result).toBe(20)
        })

        test("Deve lançar um erro para forma desconhecida", () => {
            expect(() => calculateArea('triangle', 4, 5)).toThrow("Forma geométrica desconhecida")
        })
    })
})