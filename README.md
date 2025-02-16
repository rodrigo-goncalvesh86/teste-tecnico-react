Teste Técnico - Pokédex

Olá! Este é o meu primeiro teste técnico em React.js. O objetivo é desenvolver uma página simples que exiba uma lista de Pokémon, incluindo seus nomes, tipos e habilidades.

Funcionalidades

A página inicial conta com:

-Uma barra de pesquisa para encontrar um Pokémon específico pelo nome.

-Até 10 cards clicáveis exibindo diferentes Pokémon.

-Dois botões para carregar mais ou menos Pokémon na listagem.

-Ao clicar em um card, o usuário é direcionado para uma nova página contendo informações detalhadas sobre o Pokémon selecionado, como nome, habilidades e tipo.

Ferramentas Utilizadas

-Axios – Para realizar chamadas de API assíncronas.

-@mui/material – Para estilização de componentes como cards, botões e barra de navegação, com flexibilidade para personalização.

-useContext – Para facilitar o compartilhamento de dados entre componentes sem a necessidade de passar props manualmente.

-useNavigate – Para navegação entre rotas de componentes funcionais.

-useEffect – Para lidar com efeitos colaterais, como requisições à API.

-useState – Para gerenciar estados de forma simplificada.

-styled-components – Para aplicar estilos específicos a cada componente, utilizando CSS dentro do React.

Decisões, Planejamento e Execução

Inicialmente, considerei utilizar mais bibliotecas para facilitar a estilização da página, pesquisando diferentes estilos de botões e barras de pesquisa. No entanto, percebi que isso resultaria em muitas importações desnecessárias, então optei por finalizar o projeto utilizando styled-components.

Uma das minhas escolhas foi permitir que apenas os cards mudassem entre temas claro e escuro, em vez de alterar toda a página, proporcionando uma experiência visual diferenciada.

Durante o desenvolvimento, precisei revisar várias aulas do curso, fazer anotações à mão e consultar tutoriais e fóruns para solucionar dúvidas. Na execução, procurei manter a interface simples, semelhante a uma tela de descrição de personagens de jogos de RPG.


Como Rodar a Pokédex na Sua Máquina
Clique com o botão direito na pasta "desafio-teste-tecnico" e abra o projeto no VS Code.
No terminal (PowerShell), execute o comando:
npm run dev

Acesse o localhost e clique em "Seguir Link".

Agora, na página:

-O botão "Trocar Tema" alterna entre temas claro e escuro para os cards.

-A barra de pesquisa permite buscar Pokémon pelo nome.

-Os cards são clicáveis e levam para uma página com detalhes do Pokémon.

-Os botões "Carregar + Pokémons" e "Carregar - Pokémons" ajustam a quantidade exibida.

