import { Ui } from "./Ui.module.js"

export class Details{
    constructor(id){
        document.getElementById('btnClose').addEventListener("click", ()=>{
            document.getElementById('details').classList.add('d-none')
            document.getElementById('games').classList.remove('d-none')
        })
        this.getDetails(id)
    }




  async  getDetails(id){


    const options = {
        method: 'get',
        headers: {
            'X-RapidAPI-Key': 'be9d375945mshdc15d39edeb5471p1a4491jsnddd36dbd7c27',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
const response = await api.json()

console.log(response);
new Ui().displayDetails(response);

    }
}