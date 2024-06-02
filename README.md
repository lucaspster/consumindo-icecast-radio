

```markdown
# Icecast Metadata Parser

Este projeto é uma aplicação Node.js que utiliza o módulo `icecast-parser` para extrair e exibir metadados de uma transmissão de rádio online.

## Funcionalidades

- Conecta-se a uma URL de transmissão de rádio Icecast.
- Extrai e exibe metadados da transmissão, como o título da música ou o nome do programa.

## Pré-requisitos

- Node.js instalado no sistema.
- Conexão com a internet para acessar a transmissão de rádio.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/icecast-metadata-parser.git
   cd icecast-metadata-parser
   ```

2. Instale as dependências:
   ```bash
   npm install icecast-parser
   ```

## Uso

1. Crie um arquivo JavaScript (por exemplo, `index.js`) e adicione o seguinte código:

   ```javascript
   const Parser = require("icecast-parser");

   const urls = "http://listen.42fm.ru:8000/stealkill-128";
   const radioStation = new Parser({
     url: urls,
     userAgent: "Parse-Icy",
     keepListen: false,
     autoUpdate: true,
     errorInterval: 10 * 60,
     emptyInterval: 5 * 60,
     metadataInterval: 5,
   });

   radioStation.on("metadata", function (metadata) {
     console.log(metadata.StreamTitle);
   });
   ```

2. Execute a aplicação:
   ```bash
   node index.js
   ```

   Você verá o título da música ou do programa sendo exibido no console.

## Configurações

- **url**: URL da transmissão de rádio Icecast.
- **userAgent**: User-agent usado na solicitação HTTP.
- **keepListen**: Se deve continuar ouvindo a stream após receber os metadados.
- **autoUpdate**: Atualiza automaticamente os metadados após um intervalo de tempo.
- **errorInterval**: Intervalo de tempo (em segundos) para tentar novamente em caso de erro.
- **emptyInterval**: Intervalo de tempo (em segundos) para tentar novamente se os metadados estiverem vazios.
- **metadataInterval**: Intervalo de tempo (em segundos) para solicitar novos metadados.

## Contribuição

Se desejar contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Agradecimentos

- [icecast-parser](https://www.npmjs.com/package/icecast-parser) por facilitar a extração de metadados de streams Icecast.
- A todos os contribuidores do projeto.

```

