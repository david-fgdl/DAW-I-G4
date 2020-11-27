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
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('img');
            const myPara3 = document.createElement('img');
            const myPara4 = document.createElement('p');
            
        
            myH2.textContent = eventos[i].nombreEvento;
            myPara1.textContent = eventos[i].descripcion;
            myPara2.textContent = eventos[i].foto1;
            myPara3.textContent = eventos[i].foto2;
            myPara4.textContent = 'Precio: ' + eventos[i].precio + '€';
                
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
        
            section.appendChild(myArticle);
          }
      }
}