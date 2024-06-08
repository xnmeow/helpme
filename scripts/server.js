fetch('https://558bf9d2-8c15-400c-81af-0d7d93356735-00-1skip0tdjrou7.sisko.replit.dev/get',{
    method:"GET",
    headers:{
        "Content-type":"application/json"
    }
}).then(r=>r.json())
.then(data=>{
    data.items.forEach(item => {
        document.querySelector(".portfolio").innerHTML +=`
        <div class="portfolio__item">
            <img src="img/portfolio/${item.id}.jpeg" alt="">
            <div class="fog"></div>
            <div class="portfolio__item__info">
                <h3>${item.name} ${item.cost}₽</h3>
            </div>
        </div>
        `
    });
})
