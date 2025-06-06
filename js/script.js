const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];




window.addEventListener("load", () => {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");

  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random(),
        delta: (Math.random() * 0.02) + 0.005
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
      star.alpha += star.delta;
      if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
});




const florHtml = `
        <div class="flowers">
          <div class="flower flower--1">
            <div class="flower__leafs flower__leafs--1">
              <div class="flower__leaf flower__leaf--1"></div>
              <div class="flower__leaf flower__leaf--2"></div>
              <div class="flower__leaf flower__leaf--3"></div>
              <div class="flower__leaf flower__leaf--4"></div>
             
 
              <div class="flower__white-circle"></div>
     
              <div class="flower__light flower__light--1"></div>
              <div class="flower__light flower__light--2"></div>
              <div class="flower__light flower__light--3"></div>
              <div class="flower__light flower__light--4"></div>
              <div class="flower__light flower__light--5"></div>
              <div class="flower__light flower__light--6"></div>
              <div class="flower__light flower__light--7"></div>
              <div class="flower__light flower__light--8"></div>
     
            </div>
            <div class="flower__line">
              <div class="flower__line__leaf flower__line__leaf--1"></div>
              <div class="flower__line__leaf flower__line__leaf--2"></div>
              <div class="flower__line__leaf flower__line__leaf--3"></div>
              <div class="flower__line__leaf flower__line__leaf--4"></div>
              <div class="flower__line__leaf flower__line__leaf--5"></div>
              <div class="flower__line__leaf flower__line__leaf--6"></div>
            </div>
          </div>
     
          <div class="flower flower--2">
            <div class="flower__leafs flower__leafs--2">
              <div class="flower__leaf flower__leaf--1"></div>
              <div class="flower__leaf flower__leaf--2"></div>
              <div class="flower__leaf flower__leaf--3"></div>
              <div class="flower__leaf flower__leaf--4"></div>
              <div class="flower__white-circle"></div>
     
              <div class="flower__light flower__light--1"></div>
              <div class="flower__light flower__light--2"></div>
              <div class="flower__light flower__light--3"></div>
              <div class="flower__light flower__light--4"></div>
              <div class="flower__light flower__light--5"></div>
              <div class="flower__light flower__light--6"></div>
              <div class="flower__light flower__light--7"></div>
              <div class="flower__light flower__light--8"></div>
     
            </div>
            <div class="flower__line">
              <div class="flower__line__leaf flower__line__leaf--1"></div>
              <div class="flower__line__leaf flower__line__leaf--2"></div>
              <div class="flower__line__leaf flower__line__leaf--3"></div>
              <div class="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
     
          <div class="flower flower--3">
            <div class="flower__leafs flower__leafs--3">
              <div class="flower__leaf flower__leaf--1"></div>
              <div class="flower__leaf flower__leaf--2"></div>
              <div class="flower__leaf flower__leaf--3"></div>
              <div class="flower__leaf flower__leaf--4"></div>
              <div class="flower__white-circle"></div>
     
              <div class="flower__light flower__light--1"></div>
              <div class="flower__light flower__light--2"></div>
              <div class="flower__light flower__light--3"></div>
              <div class="flower__light flower__light--4"></div>
              <div class="flower__light flower__light--5"></div>
              <div class="flower__light flower__light--6"></div>
              <div class="flower__light flower__light--7"></div>
              <div class="flower__light flower__light--8"></div>
     
            </div>
            <div class="flower__line">
              <div class="flower__line__leaf flower__line__leaf--1"></div>
              <div class="flower__line__leaf flower__line__leaf--2"></div>
              <div class="flower__line__leaf flower__line__leaf--3"></div>
              <div class="flower__line__leaf flower__line__leaf--4"></div>
            </div>
          </div>
     
          <div class="grow-ans" style="--d:1.2s">
            <div class="flower__g-long">
              <div class="flower__g-long__top"></div>
              <div class="flower__g-long__bottom"></div>
            </div>
          </div>
     
          <div class="growing-grass">
            <div class="flower__grass flower__grass--1">
              <div class="flower__grass--top"></div>
              <div class="flower__grass--bottom"></div>
              <div class="flower__grass__leaf flower__grass__leaf--1"></div>
              <div class="flower__grass__leaf flower__grass__leaf--2"></div>
              <div class="flower__grass__leaf flower__grass__leaf--3"></div>
              <div class="flower__grass__leaf flower__grass__leaf--4"></div>
              <div class="flower__grass__leaf flower__grass__leaf--5"></div>
              <div class="flower__grass__leaf flower__grass__leaf--6"></div>
              <div class="flower__grass__leaf flower__grass__leaf--7"></div>
              <div class="flower__grass__leaf flower__grass__leaf--8"></div>
              <div class="flower__grass__overlay"></div>
            </div>
          </div>
     
          <div class="growing-grass">
            <div class="flower__grass flower__grass--2">
              <div class="flower__grass--top"></div>
              <div class="flower__grass--bottom"></div>
              <div class="flower__grass__leaf flower__grass__leaf--1"></div>
              <div class="flower__grass__leaf flower__grass__leaf--2"></div>
              <div class="flower__grass__leaf flower__grass__leaf--3"></div>
              <div class="flower__grass__leaf flower__grass__leaf--4"></div>
              <div class="flower__grass__leaf flower__grass__leaf--5"></div>
              <div class="flower__grass__leaf flower__grass__leaf--6"></div>
              <div class="flower__grass__leaf flower__grass__leaf--7"></div>
              <div class="flower__grass__leaf flower__grass__leaf--8"></div>
              <div class="flower__grass__overlay"></div>
            </div>
          </div>
     
          <div class="grow-ans" style="--d:2.4s">
            <div class="flower__g-right flower__g-right--1">
              <div class="leaf"></div>
            </div>
          </div>
     
          <div class="grow-ans" style="--d:2.8s">
            <div class="flower__g-right flower__g-right--2">
              <div class="leaf"></div>
            </div>
          </div>
     
          <div class="grow-ans" style="--d:2.8s">
            <div class="flower__g-front">
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
                <div class="flower__g-front__leaf"></div>
              </div>
              <div class="flower__g-front__line"></div>
            </div>
          </div>
     
          <div class="grow-ans" style="--d:3.2s">
            <div class="flower__g-fr">
              <div class="leaf"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
              <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
            </div>
          </div>
     
          <div class="long-g long-g--0">
            <div class="grow-ans" style="--d:3s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:2.2s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:3.4s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:3.6s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--1">
            <div class="grow-ans" style="--d:3.6s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:3.8s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:4s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:4.2s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--2">
            <div class="grow-ans" style="--d:4s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:4.2s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:4.4s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:4.6s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--3">
            <div class="grow-ans" style="--d:4s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:4.2s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:3s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:3.6s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--4">
            <div class="grow-ans" style="--d:4s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:4.2s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:3s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:3.6s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--5">
            <div class="grow-ans" style="--d:4s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:4.2s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:3s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:3.6s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--6">
            <div class="grow-ans" style="--d:4.2s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:4.4s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:4.6s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:4.8s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
     
          <div class="long-g long-g--7">
            <div class="grow-ans" style="--d:3s">
              <div class="leaf leaf--0"></div>
            </div>
            <div class="grow-ans" style="--d:3.2s">
              <div class="leaf leaf--1"></div>
            </div>
            <div class="grow-ans" style="--d:3.5s">
              <div class="leaf leaf--2"></div>
            </div>
            <div class="grow-ans" style="--d:3.6s">
              <div class="leaf leaf--3"></div>
            </div>
          </div>
        </div>
        
`;

function spawnFlower() {
  // Cria um contêiner temporário para interpretar o HTML como elementos reais
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = florHtml.trim();

  // Adiciona os elementos ao body
  while (tempContainer.firstChild) {
    document.body.appendChild(tempContainer.firstChild);
  }
}


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

let flowerSpawned = false;

function checkScrollForFlower() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  const scrollPercentage = (scrollTop + windowHeight) / docHeight;

  if (scrollPercentage >= 0.95 && !flowerSpawned) {
    flowerSpawned = true;
    spawnFlower(); // chama sua função quando atinge ~95% do scroll
  }
}

window.addEventListener('scroll', checkScrollForFlower);

document.getElementById("loadBtn").addEventListener("click", () => {
  document.getElementById("loadContainer").remove();
  document.body.classList.remove("lock-scroll");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const music = document.getElementById("bgMusic");
  music.play();

  const scrollInterval = setInterval(() => {
    window.scrollBy(0, 1);
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight + 10)) {
      clearInterval(scrollInterval); // para o scroll ao chegar no final
    }
  }, 30);

  // Cria um container para aplicar fade-in
  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("fade-in");

  contentWrapper.innerHTML = `
    <h1>Noite com Estrelas</h1>
    <p class="quote">"Somos todos feitos de poeira de estrelas." – Carl Sagan</p>

    <div class="spotify-card">
      <img src="./css/img/picture.png" alt="Capa da música">
      <div class="track-info">
        <h3>Comum</h3>
        <p>ÀVUÀ</p>
        <h6>(Recomendado aumentar o som do dispositivo)</h6>
      </div>
    </div>

    <section class="musica-destaque">
      <div class="texto-musica">
        <p>Conheci alguém muito especial nos ultimos meses... A pessoa com os olhos mais bonitos de todos, que reluz uma imensa luz no meu coração: Giovanna Rodrigues.</p>
      </div>
      <div class="imagem-musica">
        <img src="./css/img/1.jpeg" alt="Cena em destaque">
      </div>
    </section>
    <canvas id="stars"></canvas>
    <section class="galeria-secundaria">
      <div class="bloco">
        <p>"Desde que te conheci, nunca estive decepcionado em ver o que você alcançava, muito pelo contrário, suas conquistas sempre me encheram de orgulho, sempre estive orgulhoso de te ter em minha vida..."</p>
        <img src="./css/img/2.jpeg" alt="Imagem 2">
      </div><br>
      <div class="bloco">
        <p>"Com o tempo você se tornou meu maior tesouro em vida, meu bem mais preciso que se destaca em meio as outras pessoas, uma pessoa com os olhos mais lindos cor de avelã agora estava juntinha comigo..."</p>
        <img src="./css/img/3.jpeg" alt="Imagem 3">
      </div><br>
      <div class="bloco">
        <p>"Sempre foi Esforçada, Guerreira e Genial, continuamente estuda em sua casa além de amar jogar beach tenis, sempre se superando a cada dia mais. Seus sonhos são gigantes e quero poder acompanhar a realização deles de pertinho.."</p>
        <img src="./css/img/4.jpeg" alt="Imagem 4">
      </div><br>
      <div class="bloco">
        <p>"A pessoa que me faz tão bem com sua incrível personalidade, me trazendo boas risadas e iluminando todo o ambiente em que está..."</p>
        <img src="./css/img/5.jpeg" alt="Imagem 5">
      </div><br>
      <div class="bloco">
        <p>"... E mesmo que não entenda o motivo e se pergunte <br><em>"quais são minhas intenções contigo?"</em><br>
        eu te respondo..."</p>
        <img src="./css/img/6.jpeg" alt="Imagem 6">
      </div><br>
      <div class="bloco">
        <h2>Eu desejo poder sempre:</h2>
        <br>
        <p>"Te fazer feliz em fala"</p>
        <p>"Te fazer feliz em ação"</p>
        <p>"Te fazer feliz com presentes"</p>
        <p>"Te fazer feliz com surpresas"</p>
        <p>"Te fazer feliz com abraços"</p>
        <p>"Te fazer feliz com beijos"</p>
        <p>"Te fazer feliz com tudo o que posso"</p>
        <p>"Pois em toda minha vida, nunca conheci uma garota tão linda, gentil, genial e incrível como você"</p>
        <p>"E quero para sempre te fazer feliz, você merece um mundo inteiro"</p>
        <p> Do fundo do meu coração: </p>
        <br>
      </div><br>
    </section>
    <div id="player-container" style="height: 0; overflow: hidden;">
        <div id="player"></div>
      </div>
      <div class="bloco">
        <h3>Você, Giovanna Rodrigues, é meu mais precioso bem sobre todas as coisas, Eu te amo! ❤</h3>
      </div>
  `;

  header.appendChild(contentWrapper);

  footer.innerHTML = `<p>Inspirado por noites silenciosas e pensamentos estrelados em você.</p>`;
  footer.classList.add("fade-in");

  // Trigger fade-in depois de um pequeno delay para o reflow
  setTimeout(() => {
    contentWrapper.classList.add("show");
    footer.classList.add("show");

  }, 100); // Pequeno delay para aplicar transição
});
