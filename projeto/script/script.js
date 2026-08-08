// ===============================
// MENU RESPONSIVO
// ===============================

const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");

        menuBtn.textContent = menu.classList.contains("open")
            ? "✖"
            : "☰";
    });
}

// ===============================
// ANO ATUAL
// ===============================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ===============================
// ÚLTIMA MODIFICAÇÃO
// ===============================

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}

// ===============================
// SERVIÇOS (OBJETOS + ARRAY)
// ===============================

const servicos = [
    {
        id: 1,
        nome: "Corte Feminino",
        preco: 60
    },
    {
        id: 2,
        nome: "Escova",
        preco: 45
    },
    {
        id: 3,
        nome: "Coloração",
        preco: 150
    },
    {
        id: 4,
        nome: "Hidratação",
        preco: 80
    },
    {
        id: 5,
        nome: "Progressiva",
        preco: 250
    }
];

// ===============================
// BOAS-VINDAS COM LOCALSTORAGE
// ===============================

const boasVindas = document.querySelector("#boasVindas");

const ultimoCliente = localStorage.getItem("cliente");

if (boasVindas) {

    if (ultimoCliente) {

        boasVindas.innerHTML =
            `Bem-vinda novamente, <strong>${ultimoCliente}</strong>!`;

    } else {

        boasVindas.textContent =
            "Seja bem-vinda ao Studio Thamires Hair!";

    }

}

// ===============================
// FORMULÁRIO
// ===============================

const formulario = document.querySelector("#contatoForm");

if (formulario) {

    formulario.addEventListener("submit", salvarFormulario);

}

function salvarFormulario(event) {

    event.preventDefault();

    const nome = document.querySelector("#nome").value;

    const servicoEscolhido =
        document.querySelector("#servico").value;

    localStorage.setItem("cliente", nome);

    const resultado =
        servicos.find(servico =>
            servico.nome === servicoEscolhido);

    const mensagem =
        document.querySelector("#mensagem");

    if (resultado) {

        mensagem.innerHTML = `
            <h3>Obrigada, ${nome}!</h3>

            <p>
                Recebemos sua solicitação para
                <strong>${resultado.nome}</strong>.
            </p>

            <p>
                Valor aproximado:
                <strong>R$ ${resultado.preco}</strong>
            </p>
        `;

    } else {

        mensagem.innerHTML = `
            <h3>
                Obrigada, ${nome}!
            </h3>

            <p>
                Sua solicitação foi enviada.
            </p>
        `;

    }

    formulario.reset();

}

// ===============================
// LISTAR SERVIÇOS
// (ARRAY + forEach)
// ===============================

const listaServicos =
    document.querySelector("#listaServicos");

if (listaServicos) {

    servicos.forEach(servico => {

        listaServicos.innerHTML += `

        <article class="card">

            <h3>${servico.nome}</h3>

            <p>
                Valor inicial:
                R$ ${servico.preco}
            </p>

        </article>

        `;

    });

}