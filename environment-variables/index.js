/*
  No nosso SO(sistema operacional) temos variaveís de ambiente responsáveis por guardar valores globalmente, independente se o SO é Windows, Linux ou Mac, todos possuem 
  variáveis de ambiente.

  Criando variável de ambiente no Windows: 
  -> Navegue até Sistema > Definições avançadas do sistema > Variáveis de ambiente > Novo > Digite a chave e o valor > Clique em OK para salvar.
  Para visualizar a variável no Windows, vá até o terminal e digite:
  -> echo %<nome-variavel>% 
  Para Editar a váriavel no Windows use:
  -> set <nome-variavel>=<valor>

  Para visualizar a variável no Linux, vá até o terminal e digite:
  -> echo $<nome-variavel> 
  Criando variável de ambiente no Linux via terminal:
  -> export <nome-variavel>=<valor>
  Para Editar a váriavel no Linux use:
  -> export <nome-variavel>=<valor>

  é possível também visualizar as variáveis utlizando o node (REPL)
  -> node -p "console.log(process.env.<nome-variavel>)"
*/
