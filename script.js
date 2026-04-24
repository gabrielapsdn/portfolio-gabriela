// Filtro trimestre
document.getElementById('select-trimestre').addEventListener('change', function () {
    const v = this.value;
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = (v === 'todos' || card.getAttribute('data-trimestre') === v) ? 'block' : 'none';
    });
});

// Toggle apresentação
const toggleBtn = document.getElementById('toggle-apresentacao');
if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        const txt = document.querySelector('.perfil-text');
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!expanded));
        this.setAttribute('aria-label', !expanded ? 'Esconder apresentação' : 'Mostrar apresentação');
        this.textContent = !expanded ? '▴' : '▾';
        if (txt) txt.classList.toggle('collapsed');
    });
}

// =============================================
// DADOS DAS ATIVIDADES
// =============================================
const dados = {
    linguagens: {
        nome: 'Linguagens & Códigos',
        volume: 'Volume I — evermore',
        cor: '#7a5c2e',
        trimestres: {
            '1trim': [{ titulo: 'Atividade Avaliativa: A Paixão de G.H.', descricao: 'A produção do vídeo sobre a obra de Clarice Lispector me permitiu analisar a relação entre literatura e sociologia, focando nas tensões sociais presentes na narrativa. A atividade exercitou minha capacidade de síntese e interpretação crítica sobre o existencialismo.', justificativa: 'Esta atividade é importante pois conecta a teoria literária à realidade social, desenvolvendo o pensamento crítico e habilidades de comunicação audiovisual.', link: 'https://canva.link/lixqtkksiwe43jf' },
            { titulo: 'Atividade de aula: Game Literário (26/02)', descricao: 'A criação do jogo de memória em grupo foi uma maneira lúdica de fixar conceitos literários e trabalhar a colaboração. A atividade uniu criatividade e técnica para transformar o conteúdo teórico em uma experiência prática. Habilidade: H15', justificativa: 'É fundamental para estimular o aprendizado ativo e o trabalho em equipe, facilitando a memorização de temas complexos através da ludicidade.', link: 'https://canva.link/7c70e2mp451kqfb' }],
            '2trim': [],
            '3trim': []
        }
    },
    matematica: {
        nome: 'Matemática',
        volume: 'Volume II — folklore',
        cor: '#3a3a3a',
        trimestres: {
            '1trim': [
                { titulo: 'Atividade - Quebrando a banca', descricao: 'A atividade propõe analisar o filme relacionando-o com conceitos matemáticos, como probabilidade e estatística. Os alunos devem interpretar a história, identificar aplicações da matemática e refletir sobre decisões e consequências. Habilidades - H31, H32 e C5.', justificativa: 'Ela estimula a criatividade ao propor a criação de uma ideia de roteiro envolvendo matemática.', link: 'https://docs.google.com/document/d/13-Vf5ltNoN3zkUB8Bv5TrrODypVh4n6puyzQkFF5DeI/edit?usp=sharing' },
                { titulo: 'Atividade - Criando a banca da matemática AV1', descricao: 'A atividade consiste em criar um jogo baseado no filme, utilizando análise combinatória e probabilidade. Os alunos devem elaborar regras claras, incluir estratégias matemáticas e testar o jogo. Ao final, os grupos apresentam e participam de uma competição entre si. Habilidades - H30, H31, C5.', justificativa: 'A atividade desenvolve o raciocínio lógico e a aplicação prática de análise combinatória e probabilidade, estimulando o trabalho em equipe e a criatividade na criação de jogos matemáticos.', link: 'https://canva.link/bnquy1tz7un84jg' }
            ],
            '2trim': [],
            '3trim': []
        }
    },
    natureza: {
        nome: 'Ciências da Natureza',
        volume: 'Volume III — Midnights',
        cor: '#1a1a3a',
        trimestres: {
            '1trim': [{ titulo: 'Meme Sobre Evolucionismo', descricao: 'A criação do meme permitiu traduzir conceitos complexos da evolução biológica para uma linguagem moderna e acessível. A explicação técnica que acompanhou a imagem ajudou a consolidar o entendimento sobre seleção natural e adaptação. Habilidades/Competências: C3, H15, H18.', justificativa: 'É importante para desenvolver a capacidade de transpor o conhecimento científico para diferentes linguagens, facilitando a fixação do conteúdo.', link: 'https://canva.link/trvbe1cqan6njo7' },
            { titulo: 'Apresentação: Combustíveis Fósseis', descricao: 'A atividade abordou o impacto ambiental e a dependência social dos combustíveis fósseis. Através da pesquisa e apresentação, foi possível compreender as transformações de energia e os desafios para a implementação de fontes mais limpas. Habilidades/Competências: C1, H1, C2, H9, H11.', justificativa: 'Fundamental para conscientizar sobre o papel da química na sustentabilidade e desenvolver a habilidade de propor intervenções tecnológicas responsáveis.', link: 'https://canva.link/s1ua84o0upb0ywg' },
            { titulo: 'Relatório: Disputa de Eletricidade (Atrito)', descricao: 'O relatório da atividade prática sobre eletricidade por atrito explorou os fundamentos da eletrostática na prática. A experiência ajudou a observar a transferência de cargas e a entender fenômenos do cotidiano através da investigação científica. Habilidades/Competências: C1, H1, C2, H7, H9, H11, H12.', justificativa: 'Esta atividade é essencial para conectar a teoria física à experimentação, estimulando a curiosidade científica e o domínio do método de observação.', link: 'https://docs.google.com/document/d/1PiyhOeO2tA8AVcpkrQW_lo7eLTTO9yOACASRrnuEaiU/edit?usp=sharing' }],
            '2trim': [],
            '3trim': []
        }
    },
    humanas: {
        nome: 'Ciências Humanas',
        volume: 'Volume IV — reputation',
        cor: '#111111',
        trimestres: {
            '1trim': [{ titulo: 'Semana 1 - Geopolítica: Apresentação de País', descricao: 'A elaboração desta apresentação permitiu analisar a fundo a realidade de uma nação específica, utilizando dados confiáveis para entender sua formação e contexto atual. O trabalho em grupo facilitou a comparação de diferentes realidades e a compreensão da dinâmica geopolítica global. Habilidades/Competências: C1, H1, H2, H3, H4, H5.', justificativa: 'É importante para desenvolver a capacidade de pesquisa e análise crítica sobre como fatores históricos e geográficos influenciam as relações de poder e a organização das sociedades no mundo.', link: 'https://canva.link/kzoxj1ge8cavkxh' },
            { titulo: 'Projeto — Jornal Histórico', descricao: 'Criar a capa de um jornal standard (75×60cm) no estilo do início do século XX. O desafio foi atuar como um jornalista da época, escrevendo matérias autorais sobre a Grande Guerra e a Revolução Russa, respeitando o contexto político e a nacionalidade escolhida para o periódico. Habilidades: C3, H15, H16, H20, C6, H39', justificativa: 'Foi um exercício intenso de escrita e design histórico. Aprendi como o ponto de vista de um país altera a narrativa de um conflito e o quão denso era o jornalismo antes do domínio das imagens. Formatar tudo no Canva seguindo o padrão da época me ajudou a entender a comunicação como uma ferramenta geopolítica poderosa.', link: 'https://www.canva.com/design/DAHFtb6yBko/2SWn00G6YYWMpRfyGGa1UA/view?utm_content=DAHFtb6yBko&utm_campaign=designshare&utm_medium=link&utm_source=viewer' },
            { titulo: 'Imperialismo no séc. XIX — Exploração do Congo', descricao: ' Analisar como a Segunda Revolução Industrial impulsionou a corrida por colônias na África e Ásia. O trabalho consistiu em criar uma narrativa visual em 5 etapas sobre a história do Congo, desde o período pré-colonial até os dias atuais, focando nos impactos da exploração europeia. Habilidades: C2, H8, H10, H12', justificativa: 'Foi chocante compreender, através do exemplo do Congo, que a missão civilizadora europeia serviu apenas para mascarar um regime de exploração brutal. Aprendi que o desenvolvimento industrial das potências dependeu diretamente da violência colonial e que os problemas atuais do país são heranças dessa partilha forçada.', link: 'https://docs.google.com/document/d/1R-AshX_yxYoJiiS1ZQAV3x9Cpgb0LdwJV9smRF8oxX0/edit?usp=sharing' }],
            '2trim': [],
            '3trim': []
        }
    },
    tec: {
        nome: 'Técnico Dev. Sistemas',
        volume: 'Volume V — Lover',
        cor: '#c084b8',
        trimestres: {
            '1trim': [{ titulo: 'Título da Atividade', descricao: 'O que foi feito...', justificativa: 'Por que essa atividade é importante...', link: '#' }],
            '2trim': [],
            '3trim': []
        }
    }
};

const trimLabels = { '1trim': 'I Trimestre', '2trim': 'II Trimestre', '3trim': 'III Trimestre' };
let areaAtiva = null;
let trimAtivo = '1trim';

function abrirPopup(area) {
    areaAtiva = area;
    trimAtivo = '1trim';
    renderPopup();
    document.getElementById('popup-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function renderPopup() {
    const d = dados[areaAtiva];
    const book = document.querySelector('.popup-book');
    book.innerHTML = '';
    book.style.setProperty('--stripe-color', d.cor);

    // Faixa colorida do topo
    const stripe = document.createElement('div');
    stripe.className = 'popup-album-stripe';
    stripe.style.background = d.cor;
    book.appendChild(stripe);

    // Botão fechar
    const closeBtn = document.createElement('button');
    closeBtn.className = 'popup-close';
    closeBtn.innerHTML = '&#x2715;';
    closeBtn.onclick = fecharPopup;
    book.appendChild(closeBtn);

    // Header
    const header = document.createElement('div');
    header.className = 'popup-header';
    header.innerHTML = '<div class="popup-volume">' + d.volume + '</div><h2 class="popup-area-title">' + d.nome + '</h2>';
    book.appendChild(header);

    // Abas de trimestre
    const tabs = document.createElement('div');
    tabs.className = 'popup-tabs';
    Object.keys(trimLabels).forEach(function (trim) {
        const tab = document.createElement('div');
        tab.className = 'popup-tab' + (trim === trimAtivo ? ' active' : '');
        tab.textContent = trimLabels[trim];
        tab.onclick = function () { trimAtivo = trim; renderPopup(); };
        tabs.appendChild(tab);
    });
    book.appendChild(tabs);

    // Corpo
    const body = document.createElement('div');
    body.className = 'popup-body';
    const ativs = d.trimestres[trimAtivo] || [];
    if (ativs.length === 0) {
        const p = document.createElement('p');
        p.className = 'popup-vazio';
        p.textContent = 'Nenhuma atividade registrada neste trimestre.';
        body.appendChild(p);
    } else {
        ativs.forEach(function (a) {
            const div = document.createElement('div');
            div.className = 'popup-atividade';

            let htmlContent = '<h4>' + a.titulo + '</h4>'
                + '<p><strong>Descri\u00e7\u00e3o:</strong> ' + a.descricao + '</p>'
                + '<p><strong>Justificativa:</strong> ' + a.justificativa + '</p>';

            if (a.link) {
                htmlContent += '<a href="' + a.link + '" target="_blank" rel="noopener noreferrer" class="btn-atividade">Acessar Atividade</a>';
            }

            div.innerHTML = htmlContent;
            body.appendChild(div);
        });
    }
    book.appendChild(body);
}

function fecharPopup() {
    document.getElementById('popup-overlay').classList.add('hidden');
    document.body.style.overflow = '';
}

function fecharPopupFora(e) {
    if (e.target === document.getElementById('popup-overlay')) fecharPopup();
}

document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fecharPopup(); });
