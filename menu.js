let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('menu-open')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('menu-open')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('menu-open')
})



// Função para carregar o conteúdo da página com base no URL
function loadPage() {
    const hash = window.location.pathname;
    const content = document.getElementById('content');


    switch (hash) {
        case '/':
        case '/home':
            content.innerHTML = `
            <section class="about">
            <div class="interface">
                <div class="flex">
        
                    <div class="txt-about">
                        <img src="Images/logo.jpg" alt="">
                    </div>
                    <div class="txt-about">
                        <h2>WELCOME, I AM <span>PEDRO COSTA.</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</p>
                        <div class="btn-social">
                            <a href="https://www.linkedin.com/in/pedrocosta15/">
                                <button>
                                    <i class="bi bi-linkedin"></i>
                                </button>
                            </a>
                            <a href="https://github.com/PCCP1234">
                                <button><i class="bi bi-github"></i></button>
                            </a>
                        </div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="specialities">
            <div class="interface">
                <h2 class="title">MY <span>SKILLS.</span></h2>
                <div class="flex">
                    <div class="specialities-box">
                    <i class="bi bi-filetype-java"></i>
                        <h3>JAVA</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="specialities-box">
                    <i class="bi bi-filetype-js"></i>
                        <h3>JAVA SCRIPT</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="specialities-box">
                    <i class="bi bi-filetype-html"></i>
                    <i class="bi bi-filetype-css"></i>
                        <h3>HTML || CSS</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="portefolio">
            <div class="interface">
                <h2 class="title">MY <span>PORTEFOLIO.</span></h2>
                <div class="flex">
                    <div class="img-port" style="background-image: url(Images/logo.jpg);">
                        <div class="overlay">
                            Projeto 1
                        </div>
                    </div>
                    <div class="img-port" style="background-image: url(Images/logo.jpg);">
                        <div class="overlay">
                            Projeto 2
                        </div>
                    </div>
                    <div class="img-port" style="background-image: url(Images/logo.jpg);">
                        <div class="overlay">
                            Projeto 3
                        </div>
                    </div>
                </div>
        </section>
        
        <section class="form">
        <div class="interface">
            <h2 class="title">TALK <span>WITH ME.</span></h2>
    
            <form action="https://formspree.io/f/mleqapen" method="POST">
                <input type="text" name="name" placeholder="Your name" required>
                <input type="email" name="email" placeholder="Your email" required>
                <input type="text" name="text" placeholder="Your phone">
                <textarea type="text" name="message" placeholder="Your message" required></textarea>
                <div class="btn-enviar">
                    <input type="submit" value="SEND">
                </div>
            </form>
        </div>
    </section>
            `;
            break;
        case '/about_me':
            content.innerHTML = `
            <section class="about">
            <div class="interface">
                <div class="flex">
        
                    <div class="txt-about">
                        <img src="Images/logo.jpg" alt="">
                    </div>
                    <div class="txt-about">
                        <h2>WELCOME, I AM <span>PEDRO COSTA.</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s</p>
                        <div class="btn-social">
                            <a href="https://www.linkedin.com/in/pedrocosta15/">
                                <button>
                                    <i class="bi bi-linkedin"></i>
                                </button>
                            </a>
                            <a href="https://github.com/PCCP1234">
                                <button><i class="bi bi-github"></i></button>
                            </a>
                        </div>
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
            `;
            break;
        case '/my_skills':
            content.innerHTML = `
            <section class="specialities">
            <div class="interface">
                <h2 class="title">MY <span>SKILLS.</span></h2>
                <div class="flex">
                    <div class="specialities-box">
                    <i class="bi bi-filetype-java"></i>
                        <h3>JAVA</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="specialities-box">
                    <i class="bi bi-filetype-js"></i>
                        <h3>JAVA SCRIPT</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="specialities-box">
                    <i class="bi bi-filetype-html"></i>
                    <i class="bi bi-filetype-css"></i>
                        <h3>HTML || CSS</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                </div>
            </div>
        </section>
            `;
            break;
        case '/projects':
            content.innerHTML = `
            <section class="portefolio">
            <div class="interface">
                <h2 class="title">MY <span>PORTEFOLIO.</span></h2>
                <div class="flex">
                    <div class="img-port" style="background-image: url(Images/logo.jpg);">
                        <div class="overlay">
                            Projeto 1
                        </div>
                    </div>
                    <div class="img-port" style="background-image: url(Images/logo.jpg);">
                        <div class="overlay">
                            Projeto 2
                        </div>
                    </div>
                    <div class="img-port" style="background-image: url(Images/logo.jpg);">
                        <div class="overlay">
                            Projeto 3
                        </div>
                    </div>
                </div>
        </section>
            `;
            break;
        case '/contact_me':
            content.innerHTML = `
            <section class="form">
    <div class="interface">
        <h2 class="title">TALK <span>WITH ME.</span></h2>

        <form action="https://formspree.io/f/mleqapen" method="POST">
            <input type="text" name="name" placeholder="Your name" required>
            <input type="email" name="email" placeholder="Your email" required>
            <input type="text" name="text" placeholder="Your phone">
            <textarea type="text" name="message" placeholder="Your message" required></textarea>
            <div class="btn-enviar">
                <input type="submit" value="SEND">
            </div>
        </form>
    </div>
</section>

            `;
            break;
        default:
            content.innerHTML = `
                <h1>404 - Page Not Found</h1>
                <p>A página solicitada não foi encontrada.</p>
            `;
            break;
    }
}


// Carregar a página correspondente sempre que o estado de pop é alterado (avançar ou voltar na história)
window.addEventListener('load', () => {
    // Define a página inicial como /home ao iniciar a aplicação
    history.replaceState({ path: '/home' }, '', '/home');
    loadPage();
});

// Função para navegar entre as páginas
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.getAttribute('href');
        history.pushState({ path: href }, '', href);
        history.replaceState({path:href}, '', href);
        loadPage();
    });
});

// Carregar a página correspondente sempre que o histórico de navegação for alterado
window.addEventListener('popstate', () => {
    loadPage();
});