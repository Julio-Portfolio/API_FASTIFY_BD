const Fastify = require("fastify");

const fastify = Fastify({
    logger: false,
});

// Conexão com o MySQL
fastify.register(require("@fastify/mysql"), {
    connectionString: "mysql://server:1234@localhost:3306/bancotest", 
});

// Hook para capturar erros na conexão do MySQL
{
    fastify.after((err) => {
        if (err) {
            console.error("Erro ao registrar o MySQL:", err);
            process.exit(1);
        }
    });
    
}

//ROTA para INSERÇÃO DE PRODUTOS NA BASE COM ID DINAMICO
{
    fastify.post("/products",function(req,res){
        fastify.mysql.query(
           `Insert into products(nome,price)values('${req.body.nome}','${req.body.price}')`,
           
            function onResult(erro,result){
                res.send(erro||result)
            }
        )
    })
}

//ROTA para SELECIONAR por ID do produto
{
    fastify.get("/products/:id",function(req,res){
        fastify.mysql.query(
            //o params é para buscar do link
            `SELECT id,nome,price FROM PRODUCTS WHERE id=${Number(req.params.id)}`,
            function onResult(erro,result){
                res.send(erro||result)
            }
        )
    })
    
}
//ROTA para SELECIONAR e listar TODOS
{
    fastify.get("/products", function (req, res) {
        fastify.mysql.query(
            "SELECT id, nome, price FROM products",
            function onResult(error, result) {
                if (error) {
                    console.error("Erro na consulta:", error);
                    res.status(500).send({ error: "Erro na consulta ao banco de dados" });
                } else {
                    res.send(result);
                }
            }
        );
    });
}
//ROTA para ALTERAÇÃO por ID do produto
{
    fastify.put("/products/:id",function(req,res){
        fastify.mysql.query(
            `UPDATE products set nome='${req.body.nome}',price='${req.body.price}' where id=${Number(req.params.id)}`,
            function onResult(erro,result){
                res.send(erro||result)
            }
        )
    })
    
}

//ROTA para exclusão por ID do produto
{
    fastify.delete("/products/:id",function (req,res){
        fastify.mysql.query(
            `DELETE FROM products WHERE id=${Number(res.params.id)}`,
            function onResult(erro,result){
                res.send(erro||result);
            }
    
        )
    })
    
}

// Inicializando o servidor
{
    fastify.listen({ port: 3000 }, function (error, address) {
        if (error) {
            console.error(error);
            process.exit(1); // Matar o processo
        }
        console.log("Servidor rodando:", address);
    });

}

