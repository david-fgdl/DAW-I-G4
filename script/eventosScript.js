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
            myArticle = document.createElement('article');
            myCarrousel = document.createElement('div');
            myCarrousel.setAttribute("id", "carouselControls");
            myCarrousel.setAttribute("class", "col-sm-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 carouselImg carousel slide");
            myCarrousel.setAttribute("data-ride", "carousel");

            myH2 = document.createElement('h2');
            myH2.setAttribute("class", "evnt");
            myH2.textContent = eventos[i].nombreEvento;
            
            myPara = document.createElement('p');
            myPara.setAttribute("class", "text-justify col-sm-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8")
            myPara.textContent = eventos[i].descripcion;
            
            myCarro = document.createElement('div');
            myCarro.setAttribute("class", "carousel-inner");
            
            itemCarro1 = document.createElement('div');
            itemCarro1.setAttribute("class", "carousel-item active");
            img1 = new Image();
            img1.src = eventos[i].foto1;
            img1.setAttribute("class", "d-block w-100");
            itemCarro1.appendChild(img1);
            myCarro.appendChild(itemCarro1);

            itemCarro2 = document.createElement('div');
            itemCarro2.setAttribute("class", "carousel-item");
            img2 = new Image();
            img2.src = eventos[i].foto2;
            img2.setAttribute("class", "d-block w-100");
            itemCarro2.appendChild(img2);
            myCarro.appendChild(itemCarro2);
            
            itemCarro3 = document.createElement('div');
            itemCarro3.setAttribute("class", "carousel-item");
            img3 = new Image();
            img3.src = eventos[i].foto3;
            img3.setAttribute("class", "d-block w-100");
            itemCarro3.appendChild(img3);
            myCarro.appendChild(itemCarro3);

            controlAnt = document.createElement('a');
            controlAnt.setAttribute("class", "carousel-control-prev");
            controlAnt.setAttribute("href", "#carouselControls");
            controlAnt.setAttribute("role", "button");
            controlAnt.setAttribute("data-slide", "prev");
            myCarrousel.appendChild(controlAnt);

            controlSig = document.createElement('a');
            controlSig.setAttribute("class", "carousel-control-next");
            controlSig.setAttribute("href", "#carouselControls");
            controlSig.setAttribute("role", "button");
            controlSig.setAttribute("data-slide", "next");
            myCarrousel.appendChild(controlSig);
            
            /* botonAnt = document.createElement('span');
            controlAnt.setAttribute("class", "carousel-control-prev-icon");
            controlAnt.setAttribute("aria-hidden", "true");
            controlAnt.appendChild(botonAnt);

            botonSig = document.createElement('span');
            botonSig.setAttribute("class", "carousel-control-next-icon");
            botonSig.setAttribute("aria-hidden", "true");
            controlAnt.appendChild(controlSig); */

            
            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara);
            
            myCarrousel.appendChild(myCarro);

            section.appendChild(myArticle);
            section.appendChild(myCarrousel);
          }
      }
}