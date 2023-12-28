/*
  Para o gerenciamento das nossas versões do node temos duas principais ferramentas para gerencia-las, o N e NVM(Node Version Manager).
  O N não foi feito para funcionar no windows, apenas no linux.
  já o NVM é multiplataforma.

  Instalação N -> npm i -g n
  Listagem de versões do node instalado -> n
  Instalação da versão stable mais recente -> n stable
  Instalação da versão latest -> n latest
  Instalação de uma versão específica -> n <version>

  ----------------------------------------------

  Instalação do NVM -> 
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
  ou Instalar arquivo instalável do NVM disponível no github do nvm-sh
  Listagem de versões instalas na máquina -> nvm list
  Instalação de qualquer versão -> nvm install <node-version>
  ver qual versão do node instalado está em uso -> nvm current
  alternar versão para outra instalada -> nvm use <node-version>
  desinstalar versão do node -> nvm uninstall <node-version> 
  */
