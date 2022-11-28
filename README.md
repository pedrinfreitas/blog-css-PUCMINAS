# Projeto
Para esse exercício utilizei o svelteKit com tailwind, para o layout preferi utilizar o flexbox seguindo o mobile first.


# Tailwind

Um framework que vem ganhando notoriedade no mercado, criado em 2017, é baseado em utilidades e tem como prioridade a facilidade de customização.

Estilizar elementos com Tailwind é quase como escrever estilizações inline (escrever CSS dentro do atributo style), só que com classes. Por isso ele é um framework focado em utilidades. Classes como text-blue-500 para mudar a cor do texto de um elemento são muito utilizadas. A grande vantagem é que não precisamos seguir um padrão visual pré definido pelo framework.

Se você já tem mais afinidade com propriedades CSS, Tailwind permite um maior controle na estilização da página. Tailwind também consegue trabalhar com diversos plugins e ferramentas para facilitar o desenvolvimento, além de poder usar componentes criados por outras pessoas. Um ótimo exemplo de plugin é o _PurgeCSS_ que permite remover qualquer CSS não utilizado no projeto, diminuindo o tamanho dos arquivos de estilos.

Como Tailwind é um framework que usa classes de utilidades, os elementos podem ficar lotados de classes, sem contar a repetição e a manutenção para vários componentes ao mesmo tempo. Por isso, o Tailwind permite que você crie classes customizadas que recebem as classes de utilidade, e depois basta chamar as classes criadas que os componentes vão receber todas as propriedades selecionadas.

```css
.button {
  @apply text-base font-medium rounded-lg p-3;
}
```

Tailwind permite maior controle na linguagem visual e é a solução mais leve por usar apenas as classes necessárias para desenvolver a página. Caso precise de outras ferramentas e plugins, você pode instalar por opção e não obrigação. Por outro lado, ele requer um conhecimento maior das propriedades CSS e seus nomes de classes exigem uma curva de aprendizado maior comparado com outros fameworks.
