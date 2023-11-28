import { Ui } from "./Ui.module.js";
import { Details } from "./details.module.js";

export class Home{
constructor(){

     document.querySelectorAll('.nav-link').forEach((link)=>{
        link.addEventListener('click', ()=>{
       this.changeLinkActive(link)
       const category =link.getAttribute('data-category')
       this.getGames(category)
        });
     });

     this.loading = document.querySelector('.loading')
     this.details = document.getElementById('details')
     this.games = document.getElementById('games')
     this.ui = new Ui()
     this.getGames('mmorpg')

}

 changeLinkActive(link){
    document.querySelector('.navbar-nav .active').classList.remove('active')
    link.classList.add('active')
}


async getGames(category){
    this.loading.classList.remove('d-none')


    const options = {
        method: 'get',
        headers: {
            'X-RapidAPI-Key': 'be9d375945mshdc15d39edeb5471p1a4491jsnddd36dbd7c27',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
const response = await api.json()
this.loading.classList.add('d-none')

console.log(response);

this.ui.displayGames(response)
document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('click', ()=>{
        this.details.classList.remove('d-none')
        this.games.classList.add('d-none')
        new Details(card.dataset.id)
    })
})
}




}



