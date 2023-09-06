const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

const hoje = new Date()
console.log(meses[hoje.getMonth()])

document.getElementById('mesVigente').innerHTML = meses[hoje.getMonth()];