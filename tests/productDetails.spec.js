const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails([])).not.toEqual('array');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let param1 ;
    let param2 ;
    if (param1 !== param2) {
    expect(productDetails(param1)!== productDetails(param2)).toBe('true');
    }     
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toBe('Alcool gel123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toBe('Máscara123');
  });
});
