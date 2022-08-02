export function colocarVirgula(numero) {
    let newNumero = numero.toString().replace('.', ',');
    if (newNumero.split(',').length === 1) {
      newNumero += ',00';
      // console.log(newNumero);
    } else if (
      newNumero.split(',').length === 2 &&
      newNumero.split(',')[1].length === 1
    ) {
      newNumero += '0';
    }
    return newNumero;
  }
  