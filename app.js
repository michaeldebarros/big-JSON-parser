const fs = require("fs");
const JSONStream = require("JSONStream");

const rs = fs.createReadStream("../../Downloads/Ano-2016.json", {
  encoding: "latin1",
  start: 0
});

rs.pipe(JSONStream.parse("DESPESA.*")).on("data", data => {
  if (data.txtDescricao === "FORNECIMENTO DE ALIMENTAÇÃO DO PARLAMENTAR" && data.vlrLiquido > 200) {
    console.log(
      `Deputado ${data.txNomeParlamentar} gastou R$ ${
        data.vlrLiquido
      } no restaurante ${data.txtFornecedor} em ${data.datEmissao}.`
    );
  }
});
