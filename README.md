# API Fatos Históricos

## Objetivo
O objetivo desse projeto foi desenvolver uma API de fatos históricos utilizando o <strong>Express</strong>, onde era feita uma requisição de um ano e retornava o fato histórico que marcou aquele ano.
<br>
Ex.: Método: Get -> Chave: ano | Valor: 1952
<br>
Retorno: {fato: "Os Estados Unidos detonam a primeira bomba de hidrogênio."}

## Fluxo da aplicação

Ao dar início no servidor com o método <strong>.listen</strong> e com a porta escolhida, ele irá aguardar até receber um valor numérico com a chave {ano}.
<br>
<br>
Após receber algum valor com a chave {ano}, ele armazena na variável anoFato.
<br>
<br>
Em seguida deve ser feita uma verificação que retorna um erro se o parâmetro recebido na chave {ano} for diferente de um número ou se o ano passado for algum que não há na base de dados.
<br>
<br>
Se ocorrer tudo bem na verificação, ele prossegue para o próximo passo onde é criada uma variável chamada "fato" que recebe o valor retornado da função responsável por buscar o fato.
<br>
<br>
Essa função cria uma variável que armazena o objeto da base de dados que corresponder ao ano que foi passado como parâmetro utilizando o método <strong>.find</strong>, que tem como objetivo 
percorrer a lista e retornar um objeto baseado na condição que foi imposta dentro dela. Após encontrar e retornar esse objeto, retornamos o valor "Fato" do objeto.
<br>
<br>
Depois do valor ser retornado da função e armazenado na variável "fato", mandamos um retorno em <strong>JSON</strong> com a chave nomeada como {fato} e o valor da variável "fato".
