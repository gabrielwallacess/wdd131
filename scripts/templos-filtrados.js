const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
    `Última Modificação: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const temples = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/500%2C/0/default"
},
{
    nomeDoTemplo: "Recife Brasil",
    localizacao: "Recife, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 47942,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/74d57cefebf31773df61b0b882067ee236de5279/full/500%2C/0/default"
},
{
    nomeDoTemplo: "Buenos Aires Argentina",
    localizacao: "Buenos Aires, Argentina",
    consagracao: "1986, 17 de janeiro",
    area: 17750,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/a3454a8b72b4cc972b3898805ec69cc901a89170/full/500%2C/0/default"
},
{
    nomeDoTemplo: "Rio de Janeiro Brasil",
    localizacao: "Rio de Janeiro, Brasil",
    consagracao: "2022, 17 de junho",
    area: 30000,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/500%2C/0/default"
},
{
    nomeDoTemplo: "Brasília Brasil",
    localizacao: "Brasília, Brasil",
    consagracao: "2023, 17 de setembro",
    area: 25000,
    urlDaImagem:
    "https://www.churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/500%2C/0/default"
},
];

const gallery = document.querySelector(".gallery");

function displayTemples(temples) {
    gallery.innerHTML = "";

    temples.forEach(temple => {

        const card = document.createElement("figure");
        const name = document.createElement("figcaption");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.nomeDoTemplo;

location.innerHTML =
`<strong>Localização:</strong> ${temple.localizacao}`;

dedicated.innerHTML =
`<strong>Consagração:</strong> ${temple.consagracao}`;

area.innerHTML =
`<strong>Área:</strong> ${temple.area.toLocaleString()} pés²`;

image.src = temple.urlDaImagem;
image.alt = temple.nomeDoTemplo;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

function getYear(date) {
    return Number(date.split(",")[0]);
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();

    const oldTemples = temples.filter(
        temple => getYear(temple.consagracao) < 1900
    );

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();

    const newTemples = temples.filter(
        temple => getYear(temple.consagracao) > 2000
    );

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => t.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(
        temples.filter(t => t.area < 10000)
    );
});