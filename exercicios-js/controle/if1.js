/**
 * Usando o if
 */

function passeiNoSemestre(nota){
    if(nota >= 7){
        console.log("passou!")
    } else {
        console.log("Só lamento")
    }

}

passeiNoSemestre(8.0)
passeiNoSemestre(6.0)

function seForVerdadeiroEscreve(valor){
    if(valor){
        console.log("É verdadeiro")
    }
}
//Falso
seForVerdadeiroEscreve()
seForVerdadeiroEscreve(null)
seForVerdadeiroEscreve(0)
seForVerdadeiroEscreve(undefined)
seForVerdadeiroEscreve('')
seForVerdadeiroEscreve(NaN)

seForVerdadeiroEscreve(true)
seForVerdadeiroEscreve(1)
seForVerdadeiroEscreve(" ")


