<h3 align="center">Processo seletivo Stefanini</h3>

---


### Installing

Com as dependencias devidamente isntaladas (yarn ou npm), editar a string de conexão do DocumentDB em src/database/database.js, executar o comando para deploy:

```
yarn serverless deploy -v
```

Os end points vão constar ao final da operação.

POST
body json
{
	"nome": "Nome Sobrenome",
	"idade": 00,
	"cargo": "Garçon"
}

GET
Query
nome=Nome Sobrenome

DEL
Router param
/{UUID}

PUT
Router param
/{UUID}
body json
{
	"nome": "Novos dados",
	"idade": 00,
	"cargo": "Garçon"
}
