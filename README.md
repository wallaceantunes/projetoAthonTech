# Projeto Athon Tech 
## Descrição do Projeto
Projeto feito para a avaliação do processo seletivo a Athon Tech, o projeto se baseia em uma lista de crimes onde pode ser feito uma busca ( Filtros ), adicionar novos crimes e remover crimes. Também ver detalhes de um crime específico.
## Tecnologias Utilizadas
- Vue.js
- TypeScript
- HTML5
- CSS3
## Metodologias Utilizadas
Para o projeto foi utilizado a tecnologia Redux (VueX), as entidades da aplicação foram colocados na pasta domain assim como os providers (Api’s de acesso externo), as regras de negócio foram colocadas como modules do VueX 
## Justificativas sobre Alterações no Projeto
- Crime List  
  - Busca por texto foi removida, pois não é possível ser feita com a atual API;
- New Crime  
  - Botão “Add New Weapon” foi removido, pois, a API não tem essa função;
  - Botões “Add Criminal” e “Add Victim”, estão adicionando os inputs na vertical, pois fica mais simples para o usuário se direcionar na página.
