##Museus das Capitais Brasileiras
Este projeto é uma aplicação web simples que permite pesquisar e visualizar informações sobre museus nas capitais brasileiras. A aplicação utiliza HTML, CSS e JavaScript para criar uma interface interativa onde os usuários podem buscar por museus com base no nome da capital, nome do museu ou descrição.

###Tecnologias Usadas
HTML: Estrutura a base do site e organiza o conteúdo.
CSS: Responsável pela estilização da página e pelo layout visual.
JavaScript: Manipula a lógica de pesquisa e a geração dinâmica de conteúdo.
Funcionalidades
Barra de Navegação: Permite navegar pelas seções da página como "Início", "Sobre", "Contato" e "Museus".
Campo de Pesquisa: Usuários podem digitar o nome de uma capital para buscar museus relacionados.
Exibição de Resultados: Mostra um card detalhado para cada museu encontrado com imagem, localização, horário e link para o site oficial.
Estrutura do Projeto
###1. HTML (index.html)
O arquivo HTML define a estrutura básica da página, incluindo o cabeçalho (header), o corpo principal (main), e o rodapé (footer). A página inclui um campo de pesquisa e um botão para iniciar a busca, bem como uma seção para exibir os resultados.

###2. CSS (styles.css)
O arquivo CSS é responsável pelo estilo visual da aplicação. Aqui, você pode definir o layout dos cards dos museus, a aparência do campo de pesquisa e do botão, e outros estilos de design.

###3. JavaScript (script.js e dados.js)
script.js: Contém a lógica para remover acentos do texto, criar o HTML dos cards dos museus e realizar a pesquisa baseada no input do usuário. A função pesquisar() é chamada quando o usuário clica no botão de pesquisa ou pressiona a tecla Enter no campo de pesquisa.
dados.js: Este arquivo deve conter a lista de museus e suas informações. Ele deve exportar um array de objetos, onde cada objeto representa um museu com propriedades como nome, localizacao, horario, descricao, imagem, link e capital.
Como Usar
Clone o Repositório:
git clone https://github.com/seu-usuario/museus-capitais.git
Abra o Projeto: Navegue até o diretório do projeto e abra o arquivo index.html em um navegador da sua escolha.

Adicione os Dados dos Museus: No arquivo dados.js, insira um array de objetos com informações sobre os museus das capitais brasileiras.

Personalize o Estilo: Modifique o arquivo styles.css para ajustar a aparência da página conforme suas necessidades.

Teste a Pesquisa: Utilize o campo de pesquisa para encontrar museus e verificar se os resultados são exibidos corretamente.

Exemplos de Uso
Digite o nome de uma capital ou museu no campo de pesquisa e clique no botão "Pesquisar" ou pressione a tecla Enter para ver os resultados. O card do museu será exibido com suas informações e um link para o site oficial.

Contribuindo
Se você gostaria de contribuir para o projeto, sinta-se à vontade para fazer um fork do repositório e enviar pull requests com melhorias ou correções. Certifique-se de seguir as diretrizes de contribuição e mantenha o código limpo e bem documentado.

Licença
Este projeto está licenciado sob a Licença MIT.
