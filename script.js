// Filtro trimestre
const selectTrim = document.getElementById('select-trimestre');
if (selectTrim) {
    selectTrim.addEventListener('change', function () {
        const v = this.value;
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = (v === 'todos' || card.getAttribute('data-trimestre') === v) ? 'block' : 'none';
        });
    });
}

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
            '1trim': [{ titulo: 'Atividade Avaliativa: Grand Prix – Projeto Gammy', descricao: 'A participação no Grand Prix com o projeto Gammy permitiu a vivência de um desafio de inovação acelerada, focado no reaproveitamento de calor residual de sistemas de ar-condicionado. A atividade exigiu a estruturação rápida de um Lean Canvas para validar uma solução de eficiência energética que transforma desperdício térmico em economia real para edificações. O exercício aprimorou minha capacidade de trabalho em equipe, tomada de decisão sob pressão e síntese de modelos de negócio sustentáveis.', justificativa: 'Esta atividade é fundamental pois simula o ambiente dinâmico do mercado de trabalho, conectando conhecimentos técnicos de sustentabilidade e engenharia ao desenvolvimento de soft skills e visão empreendedora, essenciais para a criação de soluções de alto impacto em curtos espaços de tempo.', links: [{ label: 'Ver Apresentação', url: 'https://canva.link/sjpoqmpefi54brm' }, { label: 'Assistir Vídeo', url: 'https://youtu.be/CZZmJzWEinw?si=RyriPNuNhzM1VNXs' }], obs: 'Esta atividade vale para todas as matérias do 1º Trimestre.' }],
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

            if (a.links && a.links.length) {
                a.links.forEach(function (l) {
                    htmlContent += '<a href="' + l.url + '" target="_blank" rel="noopener noreferrer" class="btn-atividade">' + l.label + '</a> ';
                });
            } else if (a.link && a.link !== '#') {
                htmlContent += '<a href="' + a.link + '" target="_blank" rel="noopener noreferrer" class="btn-atividade">Acessar Atividade</a>';
            }

            if (a.obs) {
                    htmlContent += '<div class="popup-obs"><span class="popup-obs-icon">✦</span> ' + a.obs + '</div>';
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

/* =============================================
   PARTÍCULAS DE LUZ FLUTUANTES
   ============================================= */
(function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.cssText = [
        'position:fixed',
        'top:0',
        'left:0',
        'width:100%',
        'height:100%',
        'pointer-events:none',
        'z-index:999',
        'mix-blend-mode:screen'
    ].join(';');
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    // Paleta dourada/âmbar combinando com o site
    const CORES = [
        '255,220,120',
        '200,168,74',
        '255,245,190',
        '230,195,110',
        '255,255,200'
    ];

    function Particle() {
        this.reset(true);
    }

    Particle.prototype.reset = function (inicio) {
        this.x  = Math.random() * W;
        this.y  = inicio ? Math.random() * H : H + 10;
        this.r  = Math.random() * 1.8 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = -(Math.random() * 0.5 + 0.15);
        this.baseAlpha = Math.random() * 0.55 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.025 + 0.008;
        this.cor = CORES[Math.floor(Math.random() * CORES.length)];
    };

    function initParticles() {
        const qtd = Math.max(40, Math.floor((W * H) / 10000));
        particles = [];
        for (let i = 0; i < qtd; i++) {
            particles.push(new Particle());
        }
    }

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
        initParticles();
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        particles.forEach(function (p) {
            p.pulse += p.pulseSpeed;
            const alpha = p.baseAlpha * (0.55 + 0.45 * Math.sin(p.pulse));

            // Brilho externo (halo)
            const haloR = p.r * 5;
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloR);
            grad.addColorStop(0,   'rgba(' + p.cor + ',' + (alpha * 0.9).toFixed(2) + ')');
            grad.addColorStop(0.4, 'rgba(' + p.cor + ',' + (alpha * 0.4).toFixed(2) + ')');
            grad.addColorStop(1,   'rgba(' + p.cor + ',0)');
            ctx.beginPath();
            ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
            ctx.fillStyle = grad;
            ctx.fill();

            // Núcleo brilhante
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + p.cor + ',' + Math.min(alpha * 1.8, 1).toFixed(2) + ')';
            ctx.fill();

            // Movimento
            p.x += p.vx;
            p.y += p.vy;

            // Wrap horizontal
            if (p.x < -10) p.x = W + 10;
            if (p.x > W + 10) p.x = -10;
            // Reset quando sair pelo topo
            if (p.y < -15) p.reset(false);
        });

        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
}());
