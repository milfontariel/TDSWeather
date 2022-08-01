
# TDS Weather
## Deploy
[TDS Weather](https://tdsweather.vercel.app)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar criar na raiz do projeto um arquivo .env e adicionar as seguintes variáveis:

`VITE_API_KEY=`[YOUR_API_KEY](https://www.weatherapi.com/signup.aspx)

`VITE_BASE_URL=https://api.weatherapi.com/v1/history.json`
## Rodando localmente

### Com o .env configurado, rode os seguintes comandos no terminal:

Clone o projeto

```bash
  git clone https://github.com/milfontariel/TDSWeather.git
```

Entre no diretório do projeto

```bash
  cd TDSWeather
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Rodando no Docker

### Com o docker instalado na sua máquina, siga os seguintes passos:

Clone o projeto

```bash
  git clone https://github.com/milfontariel/TDSWeather.git
```

Navegue até o diretório do projeto

```bash
  cd TDSWeather
```

Crie a imagem do projeto no docker

```bash
  docker build -t tdsweather .
```

Inicie o container

```bash
  docker run -p 5173:5173 -d --name tdsweather tdsweather
```

#### No seu navegador, navegue até:
[http://localhost:5173](http://localhost:5173)

#### Para parar o container

```bash
  docker stop tdsweather
```



## Stack utilizada

**React, TailwindCSS, Styled Components, Vite**


## Autores

- [@arielmilfont](https://www.github.com/milfontariel)


## Licença

[MIT](https://choosealicense.com/licenses/mit/)