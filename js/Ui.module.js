export class Ui{
    constructor(){}


    displayGames(data){

        let gamesBox = ``
        for(let i = 0 ; i < data.length; i++){

            gamesBox += `


            <div class="col-md-3">
            <div data-id = ${data[i].id} class="card"  style="width: 18rem g-3;">
                <img class="card-img-top w-100" src="${data[i].thumbnail}" alt="Card image cap">
                <div class="card-body d-flex justify-content-between align-items-center"/>
                  <p>${data[i].title}</p>
                  <span type="button" class="badge text-bg-primary p-2">free</span>
            
                </div>
            
                <div>
                <p class="card-text small text-center opacity-50">${data[i].short_description}</p>
            
                </div>
                <footer class="card-footer small hstack justify-content-between">
            
                    <span class="badge badge-color">${data[i].genre}</span>
                    <span class="badge badge-color">${data[i].platform}</span>
            
                 </footer>
              </div>
            </div>
            
            
            
            `
        }


document.getElementById('gameData').innerHTML = gamesBox

        
    }





    displayDetails(data){
        const    detaildBox =`
            <div class="col-md-4">
            <img src="${data.thumbnail}" class="w-100" alt="image details">
          </div>
          <div class="col-md-8">
            <h3>Title:${data.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
            <p class="small">${data.description} </p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
          </div>`
    
    
    
        
     
    document.getElementById('detailsContent').innerHTML = detaildBox
    }
}


