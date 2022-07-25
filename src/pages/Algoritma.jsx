import { useState } from "react"

const Algoritma = () => {
const [dataPembina, setDataPembina] = useState()
const [dataPembinaDua, setDataPembinaDua] = useState()
const [dataPembinaTiga, setDataPembinaTiga] = useState()
const [dataPembinaEmpat, setDataPembinaEmpat] = useState()
const [fitnesKromosomSatu,setfitnesKromosomSatu] = useState(0)


const [dataPembinaLima, setDataPembinaLima] = useState()
const [dataPembinaEnam, setDataPembinaEnam] = useState()
const [dataPembinaTujuh, setDataPembinaTujuh] = useState()
const [dataPembinaDelapan, setDataPembinaDelapan] = useState()
const [fitnesKromosomDua, setfitnesKromosomDua] = useState(0)

const [dataPembinaSembilan, setDataPembinaSembilan] = useState()
const [dataPembinaSepuluh, setDataPembinaSepuluh] = useState()
const [dataPembinaSebelas, setDataPembinaSebelas] = useState()
const [dataPembinaDuabelas, setDataPembinaDuabelas] = useState()
const [fitnesKromosomTiga, setfitnesKromosomTiga] = useState(0)

const [dataPembinaTigabelas, setDataPembinaTigabelas] = useState()
const [dataPembinaEmpatbelas, setDataPembinaEmpatbelas] = useState()
const [dataPembinaLimabelas, setDataPembinaLimabelas] = useState()
const [dataPembinaEnambelas, setDataPembinaEnambelas] = useState()
const [fitnessKromosomEmpat, setfitnesKromosomEmpat] = useState(0)

const[tableIndukSatu, setTableIndukSatu] = useState()
const[tableIndukDua, setTableIndukDua] = useState()

const pembina  = [{
    id: 1,
    nama : "agus",
    kualitas: 0},{
        id: 2,
    nama : "maya",
    kualitas: 1},{
        id: 3,
    nama : "marleen",
    kualitas: 1},{
        id: 4,
    nama : "sarti",
    kualitas: 1},{
        id: 5,
    nama : "parlent",
    kualitas: 1},{
        id: 6,
    nama : "painem",
    kualitas: 0},{
        id: 7,
    nama : "markus",
    kualitas: 0},{
        id: 8,
    nama : "joese",
    kualitas: 1},{
        id: 9,
    nama : "rio",
    kualitas: 0},{
        id: 10,
    nama : "telysana",
    kualitas: 0},{
        id: 11,
    nama : "tunajaya",
    kualitas: 1},{
        id: 12,
    nama : "siapa",
    kualitas: 0}]

const handleGenerate = () =>{
    
// Kromosom 1 Sabtu 
    const render = pembina.map((data)=>(data))
    const shuffleArray = render.sort(() => Math.random()  - 0.5)
    shuffleArray.length = 3
    const data = shuffleArray.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))
    

// Kromosom 1 Minggu
const renderDua = pembina.map((data)=>(data))
const shuffleArrayDua = renderDua.sort(() => Math.random()  - 0.5)
shuffleArrayDua.length = 3
const dataDua = shuffleArrayDua.map((data, index)=>(<td key={data.id}>{data.nama}: {data.kualitas}</td>))

//Kromosom 1 Sabtu
const renderTiga = pembina.map((data)=>(data))
const shuffleArrayTiga = renderTiga.sort(() => Math.random()  - 0.5)
shuffleArrayTiga.length = 3
const dataTiga = shuffleArrayTiga.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 1 Minggu
const renderEmpat = pembina.map((data)=>(data))
const shuffleArrayEmpat = renderEmpat.sort(() => Math.random()  - 0.5)
shuffleArrayEmpat.length = 3
const dataEmpat = shuffleArrayEmpat.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Sabtu
const renderLima = pembina.map((data, index)=>(data))
const shuffleArrayLima = renderLima.sort(() => Math.random()  - 0.5)
shuffleArrayLima.length = 3
const dataLima = shuffleArrayLima.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Minggu
const renderEnam = pembina.map((data, index)=>(data))
const shuffleArrayEnam = renderEnam.sort(() => Math.random()  - 0.5)
shuffleArrayEnam.length = 3
const dataEnam = shuffleArrayEnam.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Sabtu
const renderTujuh = pembina.map((data, index)=>(data))
const shuffleArrayTujuh = renderTujuh.sort(() => Math.random()  - 0.5)
shuffleArrayTujuh.length = 3
const dataTujuh = shuffleArrayTujuh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Minggu
const renderDelapan = pembina.map((data, index)=>(data))
const shuffleArrayDelapan = renderDelapan.sort(() => Math.random()  - 0.5)
shuffleArrayDelapan.length = 3
const dataDelapan = shuffleArrayDelapan.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Sabtu
const renderSembilan = pembina.map((data, index)=>(data))
const shuffleArraySembilan = renderSembilan.sort(() => Math.random()  - 0.5)
shuffleArraySembilan.length = 3
const dataSembilan = shuffleArraySembilan.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Minggu
const renderSepuluh = pembina.map((data, index)=>(data))
const shuffleArraySepuluh = renderSepuluh.sort(() => Math.random()  - 0.5)
shuffleArraySepuluh.length = 3
const dataSepuluh = shuffleArraySepuluh.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Sabtu
const renderSebelas = pembina.map((data, index)=>(data))
const shuffleArraySebelas = renderSebelas.sort(() => Math.random()  - 0.5)
shuffleArraySebelas.length = 3
const dataSebelas = shuffleArraySebelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Minggu
const renderDuabelas = pembina.map((data, index)=>(data))
const shuffleArrayDuabelas = renderDuabelas.sort(() => Math.random()  - 0.5)
shuffleArrayDuabelas.length = 3
const dataDuabelas = shuffleArrayDuabelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Sabtu
const renderTigabelas = pembina.map((data, index)=>(data))
const shuffleArrayTigabelas = renderTigabelas.sort(() => Math.random()  - 0.5)
shuffleArrayTigabelas.length = 3
const dataTigabelas = shuffleArrayTigabelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Minggu
const renderEmpatbelas = pembina.map((data, index)=>(data))
const shuffleArrayEmpatbelas = renderEmpatbelas.sort(() => Math.random()  - 0.5)
shuffleArrayEmpatbelas.length = 3
const dataEmpatbelas = shuffleArrayEmpatbelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Sabtu
const renderLimabelas = pembina.map((data, index)=>(data))
const shuffleArrayLimabelas = renderLimabelas.sort(() => Math.random()  - 0.5)
shuffleArrayLimabelas.length = 3
const dataLimabelas = shuffleArrayLimabelas.map((data, index)=>(<td key={index.id}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Minggu
const renderEnambelas = pembina.map((data, index)=>(data))
const shuffleArrayEnambelas = renderEnambelas.sort(() => Math.random()  - 0.5)
shuffleArrayEnambelas.length = 3
const dataEnambelas = shuffleArrayEnambelas.map((data, index)=>(<td key={data.id}>{data.nama} : {data.kualitas}</td>))


let fitnesShiftKromosomSatu ;
let fitnesHariKromosomSatu ;
let fitnesKualitasKromosomSatu ;

//Kromosom 1 Seleksi Fitness sabtu

    if(shuffleArray[2].nama === shuffleArrayDua[0].nama || shuffleArrayDua[2].nama === shuffleArrayTiga[0].nama || shuffleArrayTiga[2].nama === shuffleArrayEmpat[0].nama){
        console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 1)")
        fitnesShiftKromosomSatu = 1;
    }
    if(shuffleArray[0].nama === shuffleArray[1].nama === shuffleArray[2].nama || shuffleArrayDua[0].nama === shuffleArrayDua[1].nama === shuffleArrayDua[2].nama || shuffleArrayTiga[0].nama === shuffleArrayTiga[1].nama === shuffleArrayTiga[2].nama || shuffleArrayEmpat[0].nama === shuffleArrayEmpat[1].nama === shuffleArrayEmpat[2].nama){
        console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 1)")
        fitnesHariKromosomSatu = 1;
    }
    if(shuffleArray[0].kualitas === 0 && shuffleArray[1].kualitas === 0 && shuffleArray[2].kualitas === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
    }
    //Kromosom 1 seleksi Fitness Minggu
    if(shuffleArrayDua[0].kualitas === 0 && shuffleArrayDua[1].kualitas === 0 && shuffleArrayDua[2].kualitas === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
    }
    //Kromosom 1 Seleksi Fitness Sabtu 2
    if(shuffleArrayTiga[0].kualitas === 0 && shuffleArrayTiga[1].kualitas === 0 && shuffleArrayTiga[2].kualitas === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
    }
    //Kromosom 1 Seleksi Fitness Minggu 2
    if(shuffleArrayEmpat[0].kualitas === 0 && shuffleArrayEmpat[1].kualitas === 0 && shuffleArrayEmpat[2].kualitas === 0 ){
        console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
        fitnesKualitasKromosomSatu = 1;
    }
    
    if(fitnesShiftKromosomSatu === undefined){
        console.log()
        setfitnesKromosomSatu(0)
    } else{
        console.log(fitnesShiftKromosomSatu)
        setfitnesKromosomSatu(fitnesShiftKromosomSatu)
    }
    
    if(fitnesKualitasKromosomSatu === undefined){
        console.log()
    } else{
        console.log(fitnesKualitasKromosomSatu)
        setfitnesKromosomSatu(fitnesKualitasKromosomSatu)
    }
    
    let totalFitnesKromosomSatu = fitnesShiftKromosomSatu + fitnesKualitasKromosomSatu
    if(isNaN(totalFitnesKromosomSatu)){
        console.log()
    } else{
        console.log(totalFitnesKromosomSatu)
        setfitnesKromosomSatu(totalFitnesKromosomSatu)
    }
    
    if(fitnesShiftKromosomSatu !== "" && fitnesKualitasKromosomSatu !== "" ){
        console.log("ulangi")
    }else{
        console.log("ok")
    }



//kromosom 2 START
let fitnessShiftKromosomDua;
let fitnessHariKromosomDua;
let fitnessKualitasKromosomDua;
//Kromosom 2 Seleksi Fitness sabtu
if(shuffleArrayLima[2].nama === shuffleArrayEnam[0].nama || shuffleArrayLima[2].nama === shuffleArrayEnam[0].nama || shuffleArrayEnam[2].nama === shuffleArrayTujuh[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 2)")
    fitnessShiftKromosomDua = 1;
}
if(shuffleArrayLima[0].nama === shuffleArrayLima[1].nama === shuffleArrayLima[2].nama || shuffleArrayEnam[0].nama === shuffleArrayEnam[1].nama === shuffleArrayEnam[2].nama || shuffleArrayTujuh[0].nama === shuffleArrayTujuh[1].nama === shuffleArrayTujuh[2].nama || shuffleArrayDelapan[0].nama === shuffleArrayDelapan[1].nama === shuffleArrayDelapan[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 2)")
    fitnessHariKromosomDua = 1;
}
if(shuffleArrayLima[0].kualitas === 0 && shuffleArrayLima[1].kualitas === 0 && shuffleArrayLima[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
    fitnessKualitasKromosomDua = 1;
}
//Kromosom 2 seleksi Fitness Minggu
if(shuffleArrayEnam[0].kualitas === 0 && shuffleArrayEnam[1].kualitas === 0 && shuffleArrayEnam[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
    fitnessKualitasKromosomDua = 1;
}
//Kromosom 2 Seleksi Fitness Sabtu 2
if(shuffleArrayTujuh[0].kualitas === 0 && shuffleArrayTujuh[1].kualitas === 0 && shuffleArrayTujuh[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
    fitnessKualitasKromosomDua = 1;
}
//Kromosom 2 Seleksi Fitness Minggu 2
if(shuffleArrayDelapan[0].kualitas === 0 && shuffleArrayDelapan[1].kualitas === 0 && shuffleArrayDelapan[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
    fitnessKualitasKromosomDua = 1;
}
if(fitnessShiftKromosomDua === undefined){
    console.log()
    setfitnesKromosomDua(0)
} else{
    console.log(fitnessShiftKromosomDua)
    setfitnesKromosomDua(fitnessShiftKromosomDua)
}
if(fitnessKualitasKromosomDua === undefined){
    console.log()
} else{
    console.log(fitnessKualitasKromosomDua)
    setfitnesKromosomDua(fitnessKualitasKromosomDua)
}
let totalFitnesKromosomDua = fitnessShiftKromosomDua + fitnessKualitasKromosomDua
if(isNaN(totalFitnesKromosomDua)){
    console.log()
} else{
    console.log(totalFitnesKromosomDua)
    setfitnesKromosomDua(totalFitnesKromosomDua)
}


let fitnessShiftKromosomTiga;
let fitnessHariKromosomTiga;
let fitnessKualitasKromosomTiga;
//Kromosom 3 Seleksi Fitness sabtu
if(shuffleArraySembilan[2].nama === shuffleArraySepuluh[0].nama || shuffleArraySepuluh[2].nama === shuffleArraySebelas[0].nama || shuffleArraySebelas[2].nama === shuffleArrayDuabelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 3)")
    fitnessShiftKromosomTiga = 1;
}
if(shuffleArraySembilan[0].nama === shuffleArraySembilan[1].nama === shuffleArraySembilan[2].nama || shuffleArraySepuluh[0].nama === shuffleArraySepuluh[1].nama === shuffleArraySepuluh[2].nama || shuffleArraySebelas[0].nama === shuffleArraySebelas[1].nama === shuffleArraySebelas[2].nama || shuffleArrayDuabelas[0].nama === shuffleArrayDuabelas[1].nama === shuffleArrayDuabelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
    fitnessHariKromosomTiga = 1;
}
if(shuffleArraySembilan[0].kualitas === 0 && shuffleArraySembilan[1].kualitas === 0 && shuffleArraySembilan[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
    fitnessKualitasKromosomTiga = 1;
}
//Kromosom 3 seleksi Fitness Minggu
if(shuffleArraySepuluh[0].kualitas === 0 && shuffleArraySepuluh[1].kualitas === 0 && shuffleArraySepuluh[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
    fitnessKualitasKromosomTiga = 1;
}
//Kromosom 3 Seleksi Fitness Sabtu 2
if(shuffleArraySebelas[0].kualitas === 0 && shuffleArraySebelas[1].kualitas === 0 && shuffleArraySebelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
    fitnessKualitasKromosomTiga = 1;
}
//Kromosom 3 Seleksi Fitness Minggu 2
if(shuffleArrayDuabelas[0].kualitas === 0 && shuffleArrayDuabelas[1].kualitas === 0 && shuffleArrayDuabelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
    fitnessKualitasKromosomTiga = 1;
}
if(fitnessShiftKromosomTiga === undefined){
    console.log()
    setfitnesKromosomTiga(0)
} else{
    console.log(fitnessShiftKromosomTiga)
    setfitnesKromosomTiga(fitnessShiftKromosomTiga)
}
if(fitnessKualitasKromosomTiga === undefined){
    console.log()
} else{
    console.log(fitnessKualitasKromosomTiga)
    setfitnesKromosomTiga(fitnessKualitasKromosomTiga)
}
let totalFitnesKromosomTiga = fitnessShiftKromosomTiga + fitnessKualitasKromosomTiga
if(isNaN(totalFitnesKromosomTiga)){
    console.log()
} else{
    console.log(totalFitnesKromosomTiga)
    setfitnesKromosomTiga(totalFitnesKromosomTiga)
}




let fitnessShiftKromosomEmpat;
let fitnessHariKromosomEmpat;
let fitnessKualitasKromosomEmpat;
//Kromosom 4 Seleksi Fitness sabtu
if(shuffleArrayTigabelas[2].nama === shuffleArrayEmpatbelas[0].nama || shuffleArrayEmpatbelas[2].nama === shuffleArrayLimabelas[0].nama || shuffleArrayLimabelas[2].nama === shuffleArrayEnambelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 4)")
    fitnessShiftKromosomEmpat = 1;
}
if(shuffleArrayTigabelas[0].nama === shuffleArrayTigabelas[1].nama === shuffleArrayTigabelas[2].nama || shuffleArrayEmpatbelas[0].nama === shuffleArrayEmpatbelas[1].nama === shuffleArrayEmpatbelas[2].nama || shuffleArrayLimabelas[0].nama === shuffleArrayLimabelas[1].nama === shuffleArrayLimabelas[2].nama || shuffleArrayEnambelas[0].nama === shuffleArrayEnambelas[1].nama === shuffleArrayEnambelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 4)")
    fitnessHariKromosomEmpat = 1;
}
if(shuffleArrayTigabelas[0].kualitas === 0 && shuffleArrayTigabelas[1].kualitas === 0 && shuffleArrayTigabelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
    fitnessKualitasKromosomEmpat = 1;
}
//Kromosom 4 seleksi Fitness Minggu
if(shuffleArrayEmpatbelas[0].kualitas === 0 && shuffleArrayEmpatbelas[1].kualitas === 0 && shuffleArrayEmpatbelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
    fitnessKualitasKromosomEmpat = 1;
}
//Kromosom 4 Seleksi Fitness Sabtu 2
if(shuffleArrayLimabelas[0].kualitas === 0 && shuffleArrayLimabelas[1].kualitas === 0 && shuffleArrayLimabelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
    fitnessKualitasKromosomEmpat = 1;
}
//Kromosom 3 Seleksi Fitness Minggu 2
if(shuffleArrayEnambelas[0].kualitas === 0 && shuffleArrayEnambelas[1].kualitas === 0 && shuffleArrayEnambelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
    fitnessKualitasKromosomEmpat = 1;
}

if(fitnessShiftKromosomEmpat === undefined){
    console.log()
    setfitnesKromosomEmpat(0)
} else{
    console.log(fitnessShiftKromosomEmpat)
    setfitnesKromosomEmpat(fitnessShiftKromosomEmpat)
}
if(fitnessKualitasKromosomEmpat === undefined){
    console.log()
} else{
    console.log(fitnessKualitasKromosomEmpat)
    setfitnesKromosomEmpat(fitnessKualitasKromosomEmpat)
}
let totalFitnesKromosomEmpat = fitnessShiftKromosomEmpat + fitnessKualitasKromosomEmpat
if(isNaN(totalFitnesKromosomEmpat)){
    console.log()
} else{
    console.log(totalFitnesKromosomEmpat)
    setfitnesKromosomEmpat(totalFitnesKromosomEmpat)
}

console.log(totalFitnesKromosomSatu)

if(isNaN(totalFitnesKromosomSatu) && fitnesKualitasKromosomSatu !== 1 && fitnesShiftKromosomSatu !== 1){
    const tableSatu = data.concat(dataDua, dataTiga, dataEmpat)
    setTableIndukSatu(tableSatu)
} else if(isNaN(totalFitnesKromosomDua) && fitnessKualitasKromosomDua !== 1 && fitnessShiftKromosomDua !== 1){
    const tableDua = dataLima.concat(dataEnam, dataTujuh, dataDelapan)
    setTableIndukSatu(tableDua)
} else {
    setTableIndukSatu()
}


if(isNaN(totalFitnesKromosomTiga) && fitnessKualitasKromosomTiga !== 1 && fitnessShiftKromosomTiga !== 1){
    const tableTiga = dataSembilan.concat(dataSepuluh, dataSebelas, dataDuabelas)
    setTableIndukDua(tableTiga)
} else if(isNaN(totalFitnesKromosomEmpat) && fitnessKualitasKromosomEmpat !== 1 && fitnessShiftKromosomEmpat !== 1){
    const tableEmpat = dataTigabelas.concat(dataEmpatbelas, dataLimabelas, dataEnambelas)
    setTableIndukDua(tableEmpat)
} else {
    setTableIndukDua()
}

    setDataPembina(data)
    setDataPembinaDua(dataDua)
    setDataPembinaTiga(dataTiga)
    setDataPembinaEmpat(dataEmpat)
    setDataPembinaLima(dataLima)
    setDataPembinaEnam(dataEnam)
    setDataPembinaTujuh(dataTujuh)
    setDataPembinaDelapan(dataDelapan)
    setDataPembinaSembilan(dataSembilan)
    setDataPembinaSepuluh(dataSepuluh)
    setDataPembinaSebelas(dataSebelas)
    setDataPembinaDuabelas(dataDuabelas)
    setDataPembinaTigabelas(dataTigabelas)
    setDataPembinaEmpatbelas(dataEmpatbelas)
    setDataPembinaLimabelas(dataLimabelas)
    setDataPembinaEnambelas(dataEnambelas)
}

 return(<>
    <button onClick={handleGenerate}>Klik generate</button>
    <p></p>
    <table border={1}>
        <thead>
        <tr>
                <th></th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th>Total Fitness</th>
            </tr>
            <tr>
                <th>Kromosom 1</th>
                {dataPembina}
                {dataPembinaDua}
                {dataPembinaTiga}
                {dataPembinaEmpat}
                <td>{fitnesKromosomSatu}</td>
            </tr>
            <tr>
                <th>Kromosom 2</th>
                {dataPembinaLima}
                {dataPembinaEnam}
                {dataPembinaTujuh}
                {dataPembinaDelapan}
                <td>{fitnesKromosomDua}</td>
            </tr>
            <tr>
                <th>Kromosom 3</th>
                {dataPembinaSembilan}
                {dataPembinaSepuluh}
                {dataPembinaSebelas}
                {dataPembinaDuabelas}
                <td>{fitnesKromosomTiga}</td>
            </tr>
            <tr>
                <th>Kromosom 4</th>
                {dataPembinaTigabelas}
                {dataPembinaEmpatbelas}
                {dataPembinaLimabelas}
                {dataPembinaEnambelas}
                <td>{fitnessKromosomEmpat}</td>
            </tr>
            <tr>
                <th>Shift</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
            
        </thead>
    </table>
    <p />
    <h3>Table Induk</h3>
    <table border={1}>
        <thead>
        <tr>
                <th></th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th>Total Fitness</th>
            </tr>
            <tr>
                <th>Kromosom 1</th>
              {tableIndukSatu}
            </tr>
            <tr>
                <th>Kromosom 2</th>
              {tableIndukDua}
            </tr>
            <tr>
                <th>Shift</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </thead>
    </table>
    <p />
    <h3>Table Jadwal Fix</h3>
    <table border={1}>
        <thead>
        <tr>
                <th></th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th colSpan={3}>sabtu</th>
                <th colSpan={3}>minggu</th>
                <th>Total Fitness</th>
            </tr>
            <tr>
                <th>Wafe 1</th>
              {tableIndukSatu}
            </tr>
            <tr>
                <th>Kromosom 2</th>
              {tableIndukDua}
            </tr>
            <tr>
                <th>Shift</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
            </tr>
        </thead>
    </table>
 </>)   
}

export default Algoritma;

