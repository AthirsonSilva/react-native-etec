const getIMC = (imc) => {
    if (imc < 18.5) return 'Underweight'
    else if (imc >= 18.5 && imc < 25)  return 'Normal'
    else if (imc >= 25 && imc < 30)  return 'Overweight'
    else if (imc >= 30 && imc < 35)  return 'Obese Class I'
    else if (imc >= 35 && imc < 40)  return 'Obese Class II'
    else if (imc > 40) return  'Obese Class III'
    else 'bah'
}

  export default getIMC