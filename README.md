# Sistema Solar em TypeScript

Este é um projeto simples em TypeScript para criar e gerenciar um sistema solar virtual. Você pode adicionar, alterar e remover planetas, além de listar todos os planetas no sistema solar.

## Definições em TypeScript

### `State`

- Um tipo que representa o estado de um planeta.
- Pode ser um dos seguintes: `"habitado"`, `"habitável"`, `"inabitável"` ou `"inexplorado"`.

### `Planet`

- Representa um planeta com as seguintes propriedades:
  - `name`: string - O nome do planeta.
  - `mass`: number - A massa do planeta.
  - `coordinates`: [number, number] - As coordenadas do planeta no sistema solar.
  - `state`: State - O estado do planeta.

### `solarSystem`

- Um array contendo instâncias de `Planet`, representando o sistema solar.

## Funções

### `addPlanet()`

- Adiciona um novo planeta ao sistema solar.
- Solicita ao usuário que insira o nome, massa, coordenadas e estado do planeta.
- Valida a entrada e adiciona o novo planeta ao array `solarSystem`.
- Exibe uma mensagem de sucesso e os detalhes do planeta recém-adicionado.

### `changePlanet(planet: string)`

- Altera o estado de um planeta existente no sistema solar.
- Solicita ao usuário que insira o novo estado para o planeta especificado.
- Valida a entrada e atualiza o estado do planeta.
- Exibe uma mensagem de sucesso e os detalhes atualizados do planeta.

### `removePlanet(planet: string)`

- Remove um planeta existente do sistema solar.
- Solicita ao usuário que insira o nome do planeta a ser removido.
- Localiza e remove o planeta especificado do array `solarSystem`.
- Exibe uma mensagem de sucesso após a remoção bem-sucedida.

### `listPlanets()`

- Lista todos os planetas atualmente no sistema solar.
- Exibe os detalhes de cada planeta em um formato tabular.

### Loop Principal

- Executa um loop para solicitar continuamente ao usuário comandos até que o usuário escolha sair.
- Comandos suportados: `add`, `change`, `remove`, `list`, `exit`.
- Executa a função correspondente com base na entrada do usuário.

## Uso

Para usar este sistema solar:

1. Certifique-se de ter o TypeScript instalado em seu ambiente de desenvolvimento.
2. Compile o código TypeScript para JavaScript.
3. Execute o arquivo HTML em um navegador.

Divirta-se explorando o sistema solar! 🚀🌌
