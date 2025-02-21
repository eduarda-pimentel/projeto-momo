# Projeto MoMo(zão) :cupid:

Este é um projeto que eu fiz por diversão, depois de ver vários projetos de "Valentine's Day". Consiste numa página de _login_, onde o usuário deve inserir seu nome e email (o email não será usado para nada!). Uma vez inseridos, somos redirecionados para uma aparente homepage/menu do usuário. Clicando em "Clique aqui para explorar", somos levados ao projeto de verdade, onde teremos uma série de mini-jogos com tema romântico que devem ser completados para seguir para o próximo.

Neste repositório, o jogo está feito com  arquivos _placeholders_, mas você pode facilmente fazer um fork e substituir com seus próprios arquivos (ou fazer pull e alterar localmente).

## :video_game: Descrição dos mini-jogos

### :ballot_box_with_check: Jogo 1: Quizz
O usuário deve responder à pergunta "O que eu mais gosto em você?" num teste de escolha múltipla. 

### :grey_question: Jogo 2: Adivinha
O usuário precisa adivinhar a palavra secreta que responde à pergunta "Se eu pudesse te descrever numa palavra seria...".

### :black_square_button: Jogo 3: Captcha
Imitando um teste de captcha, o usuário precisa clicar nas fotos suas.

## :pencil2: Guia de Personalização

Todas as imagens estão na pasta /src/assets/images. 
O som está em /src/assets/sounds. 
Os textos são definidos nos arquivos JSON, na pasta /public/contents.

### Introdução: 

* Imagem:
    A imagem da introdução é dada por 'intro.jpg'. Mantenha o nome e o formato da imagem, ou altere a importação na linha 2 do arquivo _screen0.jsx_:

    `import intro from '../../assets/images/intro.jpg'`

* Texto:
    O texto é dado pela chave "introText", no arquivo _screen0.json_.

### Quizz: 
* Imagem:
    A imagem do quizz é dada por 'quizz.jpg'. Mantenha o nome e o formato da imagem, ou altere a importação na linha 1 do arquivo _screen1.jsx_

    `import quizz from '../../assets/images/quizz.jpg'`

* Texto:
    No arquivo _screen1.json_: 
    As opções são dadas pela chave "quizzOptions", e devem ser inseridas num array.
    O apelido é dado pela chave "apelidoFofo".
    A resposta correta é dada por "respostaCerta". Deve ser o índice da resposta certa no array "quizzOptions" (lembre-se que começamos a contar no 0!). 


### Adivinha

* Imagem:
    A imagem da adivinha é dada por 'adivinha.jpg'. Mantenha o nome e o formato da imagem, ou altere a importação na linha 2 do arquivo _screen2.jsx_

    `import quizz from '../../assets/images/adivinha.jpg'`

* Texto:
 No arquivo _screen2.json_: 
 A palavra secreta é dada pela chave "palavraSecreta". O apelido fofo é controlado por "apelidoFofo".

### Captcha

* Imagens:
As imagens aqui estão na pasta /captcha, dentro da pasta /images. As imagens "corretas", com as fotos que devem ser clicadas, são chamadas de "love1", "love2", "love3", "love4" e "love5", enquanto as incorretas são "not1", "not2", "not3", "not4", todas jpg. Matenha os nomes, ou altere a importação no arquivo _screen3.jsx_ (mas mantenha os nomes a, b, c, etc.):

    `import a from '../../assets/images/captcha/love1.jpg';

    import b from '../../assets/images/captcha/love2.jpg';

    import c from '../../assets/images/captcha/love3.jpg';

    import d from '../../assets/images/captcha/love4.jpg';

    import e from '../../assets/images/captcha/love5.jpg';

    import f from '../../assets/images/captcha/not1.jpg';

    import g from '../../assets/images/captcha/not2.jpg';

    import h from '../../assets/images/captcha/not3.jpg';
    
    import i from '../../assets/images/captcha/not4.jpg';`

### Mensagem final 
* Texto:
O texto final é dado no arquivo _finalMsg.json_, pela chave "finalMsg".

* Música:
A música que toca no final é dada pelo arquivo "end-song.mp3".

*** 
## Ferramentas utilizadas utilizadas

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)