function eventosLoad(){
    const section = document.querySelector('section');

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','json/eventos.json');

    ourRequest.responseType = 'json';
    ourRequest.send();
    
    ourRequest.onload = function(){
        const evento = ourRequest.response;
        showEvent(evento);
    }

    function showEvent(jsonObj) {
        const eventos = jsonObj['Eventos'];

        for (var i = 0; i < eventos.length; i++) {
            const myArticle = document.createElement('article');
            
            const myH2 = document.createElement('h2');
            myH2.setAttribute("class", "evnt");
            myH2.textContent = eventos[i].nombreEvento;
            
            const myPara = document.createElement('p');
            myPara.setAttribute("class", "col-sm-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8")
            myPara.textContent = eventos[i].descripcion;
            
            const img1 = new Image();
            img1.src = eventos[i].foto1;
            const img2 = new Image();
            img2.src = eventos[i].foto2;
            const img3 = new Image();
            img3.src = eventos[i].foto3;
            
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara);
            myArticle.appendChild(img1);
            myArticle.appendChild(img2);
            myArticle.appendChild(img3);
        
            section.appendChild(myArticle);
          }
      }
}