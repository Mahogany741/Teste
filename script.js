console.log("teste");

const hoje = new Date()
var mes = String(hoje.getMonth() + 1).padStart(2, '0')

switch (mes){
    case '01':
        mes = 'Janeiro'
        break;

    case '02':
        mes = 'Fevereiro'
        break;
      
    case '03':
        mes = 'Março'
        break;
        
    case '04':
        mes = 'Abril'
        break;

    case '05':
        mes = 'Maio'
        break;
      
    case '06':
        mes = 'Junho'
        break;

    case '07':
        mes = 'Julho'
        break;

    case '08':
        mes = 'Agosto'
        break;
      
    case '09':
        mes = 'Setembro'
        break;
        
    case '10':
        mes = 'Outubro'
        break;

    case '11':
        mes = 'Novembro'
        break;
      
    case '12':
        mes = 'Dezembro'
        break;

    default:
        mes = 'Mês Vigente'
}

document.getElementById('mesVigente').innerHTML = mes;
// console.log(h2.value)
console.log(mes)