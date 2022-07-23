import { useState } from "react"

const Algoritma = () => {
const [dataPembina, setDataPembina] = useState()
const [dataPembinaDua, setDataPembinaDua] = useState()
const [dataPembinaTiga, setDataPembinaTiga] = useState()
const [dataPembinaEmpat, setDataPembinaEmpat] = useState()
const [dataPembinaLima, setDataPembinaLima] = useState()
const [dataPembinaEnam, setDataPembinaEnam] = useState()
const [dataPembinaTujuh, setDataPembinaTujuh] = useState()
const [dataPembinaDelapan, setDataPembinaDelapan] = useState()
const [dataPembinaSembilan, setDataPembinaSembilan] = useState()
const [dataPembinaSepuluh, setDataPembinaSepuluh] = useState()
const [dataPembinaSebelas, setDataPembinaSebelas] = useState()
const [dataPembinaDuabelas, setDataPembinaDuabelas] = useState()
const [dataPembinaTigabelas, setDataPembinaTigabelas] = useState()
const [dataPembinaEmpatbelas, setDataPembinaEmpatbelas] = useState()
const [dataPembinaLimabelas, setDataPembinaLimabelas] = useState()
const [dataPembinaEnambelas, setDataPembinaEnambelas] = useState()



const pembina  = [{
    nama : "agus",
    kualitas: 0},{
    nama : "maya",
    kualitas: 1},{
    nama : "marleen",
    kualitas: 1},{
    nama : "sarti",
    kualitas: 1},{
    nama : "parlent",
    kualitas: 1},{
    nama : "painem",
    kualitas: 0},{
    nama : "markus",
    kualitas: 0},{
    nama : "joese",
    kualitas: 1},{
    nama : "rio",
    kualitas: 0},{
    nama : "telysana",
    kualitas: 0},{
    nama : "tunajaya",
    kualitas: 1},{
    nama : "siapa",
    kualitas: 0}]

const handleGenerate = () =>{
    
// Kromosom 1 Sabtu 
const render = pembina.map((data)=>(data))
const shuffleArray = render.sort(() => Math.random()  - 0.5)
shuffleArray.length = 3
const data = shuffleArray.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

// Kromosom 1 Minggu
const renderDua = pembina.map((data)=>(data))
const shuffleArrayDua = renderDua.sort(() => Math.random()  - 0.5)
shuffleArrayDua.length = 3
const dataDua = shuffleArrayDua.map((data, index)=>(<td key={index+1}>{data.nama}: {data.kualitas}</td>))

//Kromosom 1 Sabtu
const renderTiga = pembina.map((data)=>(data))
const shuffleArrayTiga = renderTiga.sort(() => Math.random()  - 0.5)
shuffleArrayTiga.length = 3
const dataTiga = shuffleArrayTiga.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 1 Minggu
const renderEmpat = pembina.map((data)=>(data))
const shuffleArrayEmpat = renderEmpat.sort(() => Math.random()  - 0.5)
shuffleArrayEmpat.length = 3
const dataEmpat = shuffleArrayEmpat.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Sabtu
const renderLima = pembina.map((data, index)=>(data))
const shuffleArrayLima = renderLima.sort(() => Math.random()  - 0.5)
shuffleArrayLima.length = 3
const dataLima = shuffleArrayLima.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Minggu
const renderEnam = pembina.map((data, index)=>(data))
const shuffleArrayEnam = renderEnam.sort(() => Math.random()  - 0.5)
shuffleArrayEnam.length = 3
const dataEnam = shuffleArrayEnam.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Sabtu
const renderTujuh = pembina.map((data, index)=>(data))
const shuffleArrayTujuh = renderTujuh.sort(() => Math.random()  - 0.5)
shuffleArrayTujuh.length = 3
const dataTujuh = shuffleArrayTujuh.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 2 Minggu
const renderDelapan = pembina.map((data, index)=>(data))
const shuffleArrayDelapan = renderDelapan.sort(() => Math.random()  - 0.5)
shuffleArrayDelapan.length = 3
const dataDelapan = shuffleArrayDelapan.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Sabtu
const renderSembilan = pembina.map((data, index)=>(data))
const shuffleArraySembilan = renderSembilan.sort(() => Math.random()  - 0.5)
shuffleArraySembilan.length = 3
const dataSembilan = shuffleArraySembilan.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Minggu
const renderSepuluh = pembina.map((data, index)=>(data))
const shuffleArraySepuluh = renderSepuluh.sort(() => Math.random()  - 0.5)
shuffleArraySepuluh.length = 3
const dataSepuluh = shuffleArraySepuluh.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Sabtu
const renderSebelas = pembina.map((data, index)=>(data))
const shuffleArraySebelas = renderSebelas.sort(() => Math.random()  - 0.5)
shuffleArraySebelas.length = 3
const dataSebelas = shuffleArraySebelas.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 3 Minggu
const renderDuabelas = pembina.map((data, index)=>(data))
const shuffleArrayDuabelas = renderDuabelas.sort(() => Math.random()  - 0.5)
shuffleArrayDuabelas.length = 3
const dataDuabelas = shuffleArrayDuabelas.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Sabtu
const renderTigabelas = pembina.map((data, index)=>(data))
const shuffleArrayTigabelas = renderTigabelas.sort(() => Math.random()  - 0.5)
shuffleArrayTigabelas.length = 3
const dataTigabelas = shuffleArrayTigabelas.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Minggu
const renderEmpatbelas = pembina.map((data, index)=>(data))
const shuffleArrayEmpatbelas = renderEmpatbelas.sort(() => Math.random()  - 0.5)
shuffleArrayEmpatbelas.length = 3
const dataEmpatbelas = shuffleArrayEmpatbelas.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Sabtu
const renderLimabelas = pembina.map((data, index)=>(data))
const shuffleArrayLimabelas = renderLimabelas.sort(() => Math.random()  - 0.5)
shuffleArrayLimabelas.length = 3
const dataLimabelas = shuffleArrayLimabelas.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))

//Kromosom 4 Minggu
const renderEnambelas = pembina.map((data, index)=>(data))
const shuffleArrayEnambelas = renderEnambelas.sort(() => Math.random()  - 0.5)
shuffleArrayEnambelas.length = 3
const dataEnambelas = shuffleArrayEnambelas.map((data, index)=>(<td key={index+1}>{data.nama} : {data.kualitas}</td>))


let fitnesShift ;
let fitnesHari ;
let fitnesKualitas ;

//Kromosom 1 Seleksi Fitness sabtu
if(shuffleArray[2].nama === shuffleArrayDua[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 1)")
    fitnesShift = 1;
}
if(shuffleArray[0].nama === shuffleArray[1].nama === shuffleArray[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 1)")
    fitnesHari = 1;
}
if(shuffleArray[0].kualitas === 0 && shuffleArray[1].kualitas === 0 && shuffleArray[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
    fitnesKualitas = 1;
}


//Kromosom 1 seleksi Fitness Minggu
if(shuffleArrayDua[2].nama === shuffleArrayTiga[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 1)")
    fitnesShift = 1;
}
if(shuffleArrayDua[0].nama === shuffleArrayDua[1].nama === shuffleArrayDua[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 1)")
    fitnesHari = 1;
}
if(shuffleArrayDua[0].kualitas === 0 && shuffleArrayDua[1].kualitas === 0 && shuffleArrayDua[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
    fitnesKualitas = 1;
}

//Kromosom 1 Seleksi Fitness Sabtu 2
if(shuffleArrayTiga[2].nama === shuffleArrayEmpat[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 1)")
    fitnesShift = 1;
}
if(shuffleArrayTiga[0].nama === shuffleArrayTiga[1].nama === shuffleArrayTiga[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 1)")
    fitnesHari = 1;
}
if(shuffleArrayTiga[0].kualitas === 0 && shuffleArrayTiga[1].kualitas === 0 && shuffleArrayTiga[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
    fitnesKualitas = 1;
}

//Kromosom 1 Seleksi Fitness Minggu 2
if(shuffleArrayEmpat[0].nama === shuffleArrayEmpat[1].nama === shuffleArrayEmpat[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 1)")
    fitnesHari = 1;
}
if(shuffleArrayEmpat[0].kualitas === 0 && shuffleArrayEmpat[1].kualitas === 0 && shuffleArrayEmpat[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 1)")
    fitnesKualitas = 1;
}

console.log(fitnesKualitas)
console.log(fitnesHari)
console.log(fitnesShift)

//Kromosom 2 Seleksi Fitness sabtu
if(shuffleArrayLima[2].nama === shuffleArrayEnam[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 2)")
}
if(shuffleArrayLima[0].nama === shuffleArrayLima[1].nama === shuffleArrayLima[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 2)")
}
if(shuffleArrayLima[0].kualitas === 0 && shuffleArrayLima[1].kualitas === 0 && shuffleArrayLima[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
}

//Kromosom 2 seleksi Fitness Minggu
if(shuffleArrayLima[2].nama === shuffleArrayEnam[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 2)")
}
if(shuffleArrayEnam[0].nama === shuffleArrayEnam[1].nama === shuffleArrayEnam[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 2)")
}
if(shuffleArrayEnam[0].kualitas === 0 && shuffleArrayEnam[1].kualitas === 0 && shuffleArrayEnam[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
}

//Kromosom 2 Seleksi Fitness Sabtu 2
if(shuffleArrayEnam[2].nama === shuffleArrayTujuh[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 2)")
}
if(shuffleArrayTujuh[0].nama === shuffleArrayTujuh[1].nama === shuffleArrayTujuh[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 2)")
}
if(shuffleArrayTujuh[0].kualitas === 0 && shuffleArrayTujuh[1].kualitas === 0 && shuffleArrayTujuh[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
}

//Kromosom 2 Seleksi Fitness Minggu 2
if(shuffleArrayDelapan[0].nama === shuffleArrayDelapan[1].nama === shuffleArrayDelapan[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 2)")
}
if(shuffleArrayDelapan[0].kualitas === 0 && shuffleArrayDelapan[1].kualitas === 0 && shuffleArrayDelapan[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 2)")
}



//Kromosom 3 Seleksi Fitness sabtu
if(shuffleArraySembilan[2].nama === shuffleArraySepuluh[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 3)")
}
if(shuffleArraySembilan[0].nama === shuffleArraySembilan[1].nama === shuffleArraySembilan[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
}
if(shuffleArraySembilan[0].kualitas === 0 && shuffleArraySembilan[1].kualitas === 0 && shuffleArraySembilan[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
}

//Kromosom 3 seleksi Fitness Minggu
if(shuffleArraySepuluh[2].nama === shuffleArraySebelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 3)")
}
if(shuffleArraySepuluh[0].nama === shuffleArraySepuluh[1].nama === shuffleArraySepuluh[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
}
if(shuffleArraySepuluh[0].kualitas === 0 && shuffleArraySepuluh[1].kualitas === 0 && shuffleArraySepuluh[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
}

//Kromosom 3 Seleksi Fitness Sabtu 2
if(shuffleArraySebelas[2].nama === shuffleArrayDuabelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 3)")
}
if(shuffleArraySebelas[0].nama === shuffleArraySebelas[1].nama === shuffleArraySebelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
}
if(shuffleArraySebelas[0].kualitas === 0 && shuffleArraySebelas[1].kualitas === 0 && shuffleArraySebelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
}

//Kromosom 3 Seleksi Fitness Minggu 2
if(shuffleArrayDuabelas[0].nama === shuffleArrayDuabelas[1].nama === shuffleArrayDuabelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
}
if(shuffleArrayDuabelas[0].kualitas === 0 && shuffleArrayDuabelas[1].kualitas === 0 && shuffleArrayDuabelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
}




//Kromosom 4 Seleksi Fitness sabtu
if(shuffleArrayTigabelas[2].nama === shuffleArrayEmpatbelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 4)")
}
if(shuffleArrayTigabelas[0].nama === shuffleArrayTigabelas[1].nama === shuffleArrayTigabelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 4)")
}
if(shuffleArrayTigabelas[0].kualitas === 0 && shuffleArrayTigabelas[1].kualitas === 0 && shuffleArrayTigabelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
}

//Kromosom 4 seleksi Fitness Minggu
if(shuffleArrayEmpatbelas[2].nama === shuffleArrayLimabelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 4)")
}
if(shuffleArrayEmpatbelas[0].nama === shuffleArrayEmpatbelas[1].nama === shuffleArrayEmpatbelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 4)")
}
if(shuffleArrayEmpatbelas[0].kualitas === 0 && shuffleArrayEmpatbelas[1].kualitas === 0 && shuffleArrayEmpatbelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
}

//Kromosom 4 Seleksi Fitness Sabtu 2
if(shuffleArrayLimabelas[2].nama === shuffleArrayEnambelas[0].nama){
    console.log("point + 1, tidak boleh shit malam lanjut shit pagi (kromosom 4)")
}
if(shuffleArrayLimabelas[0].nama === shuffleArrayLimabelas[1].nama === shuffleArrayLimabelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 4)")
}
if(shuffleArrayLimabelas[0].kualitas === 0 && shuffleArrayLimabelas[1].kualitas === 0 && shuffleArrayLimabelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 4)")
}

//Kromosom 3 Seleksi Fitness Minggu 2
if(shuffleArrayEnambelas[0].nama === shuffleArrayEnambelas[1].nama === shuffleArrayEnambelas[2].nama){
    console.log("point + 2, tidak boleh dalam satu hari nama sama (kromosom 3)")
}
if(shuffleArrayEnambelas[0].kualitas === 0 && shuffleArrayEnambelas[1].kualitas === 0 && shuffleArrayEnambelas[2].kualitas === 0 ){
    console.log("point + 3, tidak boleh masih trainning di shift yang sama (kromosom 3)")
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
            </tr>
            <tr>
                <th>Kromosom 1</th>
                {dataPembina}
                {dataPembinaDua}
                {dataPembinaTiga}
                {dataPembinaEmpat}
            </tr>
            <tr>
                <th>Kromosom 2</th>
                {dataPembinaLima}
                {dataPembinaEnam}
                {dataPembinaTujuh}
                {dataPembinaDelapan}
            </tr>
            <tr>
                <th>Kromosom 3</th>
                {dataPembinaSembilan}
                {dataPembinaSepuluh}
                {dataPembinaSebelas}
                {dataPembinaDuabelas}
            </tr>
            <tr>
                <th>Kromosom 4</th>
                {dataPembinaTigabelas}
                {dataPembinaEmpatbelas}
                {dataPembinaLimabelas}
                {dataPembinaEnambelas}
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

