let categorias = [
    { id: 1, nome: "Entradas" },
    { id: 2, nome: "Hambúrgueres" },
    { id: 3, nome: "Bebidas" },
    { id: 4, nome: "Sobremesas" }
];

let produtos = [
    //======ENTRADAS======
    {
        categoriaId: 1,
        nome: "Onion Rings",
        descricao: "Onions rings crocantes com molho barbecue.",
        preco: 25.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/onion%20ring.png"
    },
    {
        categoriaId: 1,
        nome: "Batata Frita",
        descricao: "Porção generosa de batata frita crocante",
        preco: 20.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/batata%20frita.png"
    },
     {
        categoriaId: 1,
        nome: "Batata Rústica com cheddar e bacon",
        descricao: "Porção generosa de batata rústica com cheddar e bacon",
        preco: 29.99,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/batata%20rustica.png"
    },
     {
        categoriaId: 1,
        nome: "Mini Hamburgueres",
        descricao: "Porção generosa de mini hamburgueres com molho especial (escolha entre 3 sabores)",
        preco: 42.50,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/mini%20hamburguer.png"
    },
     {
        categoriaId: 1,
        nome: "Nuggets de Frango Artesanal",
        descricao: "Porção generosa de nuggets de frango artesanal com molho barbecue",
        preco: 34.99,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/nuggets.png"
    },

    //=====HAMBÚRGUERES======
    {
        categoriaId: 2,
        nome: "Burguer Club",
        descricao: "Hambúrguer original da casa, acompanha molho especial, quatro discos de carne smash, quatro tipos de queijo, bacon, salada e picles no pão brioche.",
        preco: 55.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/burguer%20club.png"
    },
    {
        categoriaId: 2,
        nome: "Spicy Burguer",
        descricao: "Carne angus, jalapeños, queijo pepper jack, alface e molho picante no pão de brioche.",
        preco: 38.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/spicy.png"
    },
     {
        categoriaId: 2,
        nome: "Classic Burguer",
        descricao: "Pão brioche, carne angus, queijo cheddar, alface, tomate e molho especial",
        preco: 30.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/cheesburguer.png"
    },
     {
        categoriaId: 2,
        nome: "BBQ Burguer",
        descricao: "Carne angus, queijo prato, cebola caramelizada, bacon crocante e molho barbecue",
        preco: 34.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/bbq.png"
    },
     {
        categoriaId: 2,
        nome: "Veggie Burguer",
        descricao: "hambúrguer de grão-de-bico, queijo vegano, rúcula e maionese de ervas",
        preco: 25.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/vegano.png"
    },
     {
        categoriaId: 2,
        nome: "Double Smash",
        descricao: "Dois discos de carne smash, cheddar duplo, picles e molho da casa",
        preco: 40.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/smash.png"
    },
    //=====BEBIDAS======
    {
        categoriaId: 3,
        nome: "Caipirinha clássica e versões com frutas",
        descricao: "Copo 300ml (limão, morango, maracujá, kiwi, amora, frutas vermelhas, manga)",
        preco: 18.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/caipirinha.png"
    },
    {
        categoriaId: 3,
        nome: "Suco Natural",
        descricao: "Copo 600ml (laranja, limão, maracujá, uva, abacaxi)",
        preco: 18.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/suco.png"
    },
     {
        categoriaId: 3,
        nome: "Refrigerante",
        descricao: "Lata 450ml",
        preco: 10.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/refri.png"
    },
     {
        categoriaId: 3,
        nome: "Chopp Artesanal",
        descricao: "Copo 500ml (pilsen, IPA, stout)",
        preco: 14.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/chopp.png"
    },
    //=====SOBREMESAS======
    {
        categoriaId: 4,
        nome: "Milkshake",
        descricao: "750ml (baunilha, chocolate, morango, oreo, doce de leite, ninho com nutella)",
        preco: 17.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/milkshake.png"
    },
    {
        categoriaId: 4,
        nome: "Churros recheados",
        descricao: "Churros recheados com doce de leite e cobertos com chocolate. (10 unidades)",
        preco: 18.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/churros.png"
    },
    {
        categoriaId: 4,
        nome: "Brownie com sorvete",
        descricao: "Fatia generosa de brownie com sorvete de sua escolha e calda de chocolate.",
        preco: 20.00,
        imagem: "https://vggochi.github.io/Big-Bite-Club/images/brownie.png"
    },
    
];
module.exports = { categorias, produtos };
