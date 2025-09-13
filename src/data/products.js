// Arquivo centralizado com todos os produtos do Maarte Ateliê
// Este arquivo permite visualizar e gerenciar todos os produtos em um único local

export const crocheProducts = [
  {
    id: 'bolsa-croche-pequena',
    title: 'Bolsa de Crochê Pequena',
    description: 'Bolsa de crochê pequena feita à mão com linha de alta qualidade.',
    longDescription: 'Nossa bolsa de crochê pequena é perfeita para ocasiões especiais ou uso diário. Feita à mão com linhas de alta qualidade, cada peça é única e possui acabamento impecável. O tamanho compacto é ideal para carregar seus itens essenciais como celular, carteira e chaves. Disponível em diversas cores, esta bolsa adiciona um toque artesanal e elegante ao seu visual. Por ser um produto artesanal, pequenas variações de tamanho e acabamento podem ocorrer, tornando sua bolsa verdadeiramente única.',
    price: 89.90,
    imageUrl: '/images/bolsa-croche.svg',
    category: 'croche',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Dimensões', value: '20cm x 15cm x 5cm (aproximadamente)' },
      { name: 'Material', value: 'Linha de algodão mercerizado' },
      { name: 'Cores Disponíveis', value: 'Bege, Preto, Azul Marinho, Rosa, Verde Oliva' },
      { name: 'Forro', value: 'Tecido 100% algodão' },
      { name: 'Alça', value: 'Alça de mão em crochê' },
      { name: 'Fechamento', value: 'Botão magnético' },
      { name: 'Prazo de Produção', value: '7 dias úteis' }
    ],
    images: [
      '/images/bolsa-croche.svg',
      '/images/bolsa-croche.svg',
      '/images/bolsa-croche.svg'
    ],
    careInstructions: 'Lavar à mão com água fria e sabão neutro. Não torcer. Secar à sombra em superfície plana.'
  },
  {
    id: 'bolsa-croche-media',
    title: 'Bolsa de Crochê Média',
    description: 'Bolsa de crochê de tamanho médio, ideal para uso diário.',
    longDescription: 'Nossa bolsa de crochê média é versátil e funcional, perfeita para o dia a dia. Confeccionada artesanalmente com linhas de alta qualidade, oferece espaço suficiente para seus itens pessoais como celular, carteira, chaves, maquiagem e outros pequenos objetos. O design elegante combina com diversos estilos e ocasiões, desde um dia casual até um evento mais sofisticado. Disponível em várias cores, esta bolsa é um acessório prático que adiciona um toque artesanal ao seu visual. Cada peça é feita à mão, o que pode resultar em pequenas variações que tornam sua bolsa única.',
    price: 129.90,
    imageUrl: '/images/bolsa-croche.svg',
    category: 'croche',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Dimensões', value: '30cm x 20cm x 8cm (aproximadamente)' },
      { name: 'Material', value: 'Linha de algodão mercerizado' },
      { name: 'Cores Disponíveis', value: 'Bege, Preto, Azul Marinho, Rosa, Verde Oliva, Terracota' },
      { name: 'Forro', value: 'Tecido 100% algodão com bolso interno' },
      { name: 'Alça', value: 'Alça de ombro ajustável em crochê' },
      { name: 'Fechamento', value: 'Zíper' },
      { name: 'Prazo de Produção', value: '10 dias úteis' }
    ],
    images: [
      '/images/bolsa-croche-media-1.jpg',
      '/images/bolsa-croche-media-2.jpg',
      '/images/bolsa-croche-media-3.jpg'
    ],
    careInstructions: 'Lavar à mão com água fria e sabão neutro. Não torcer. Secar à sombra em superfície plana.'
  },
  {
    id: 'bolsa-croche-grande',
    title: 'Bolsa de Crochê Grande',
    description: 'Bolsa de crochê grande com espaço para todos os seus itens essenciais.',
    longDescription: 'Nossa bolsa de crochê grande é espaçosa e funcional, perfeita para quem precisa carregar muitos itens no dia a dia. Confeccionada artesanalmente com linhas resistentes de alta qualidade, esta bolsa oferece amplo espaço interno para acomodar livros, notebook pequeno, necessaire, carteira, celular e outros objetos pessoais. O design elegante e atemporal se adapta a diversos estilos, enquanto o acabamento cuidadoso garante durabilidade e belleza. Disponível em cores neutras que combinam com qualquer look, esta bolsa é um acessório versátil que une funcionalidade e estilo artesanal. Por ser feita à mão, cada peça possui características únicas que a tornam especial.',
    price: 169.90,
    imageUrl: '/images/bolsa-croche-grande.jpg',
    category: 'croche',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Dimensões', value: '40cm x 30cm x 12cm (aproximadamente)' },
      { name: 'Material', value: 'Linha de algodão mercerizado reforçada' },
      { name: 'Cores Disponíveis', value: 'Bege, Preto, Azul Marinho, Cinza' },
      { name: 'Forro', value: 'Tecido 100% algodão com múltiplos bolsos internos' },
      { name: 'Alça', value: 'Alças de ombro reforçadas em crochê' },
      { name: 'Fechamento', value: 'Zíper e botão magnético' },
      { name: 'Prazo de Produção', value: '15 dias úteis' }
    ],
    images: [
      '/images/bolsa-croche-grande-1.jpg',
      '/images/bolsa-croche-grande-2.jpg',
      '/images/bolsa-croche-grande-3.jpg'
    ],
    careInstructions: 'Lavar à mão com água fria e sabão neutro. Não torcer. Secar à sombra em superfície plana. Evitar sobrecarga para manter a forma da bolsa.'
  },
  {
    id: 'bolsa-praia-croche',
    title: 'Bolsa de Praia em Crochê',
    description: 'Bolsa de praia espaçosa feita em crochê com materiais resistentes à água.',
    longDescription: 'Nossa bolsa de praia em crochê é o acessório perfeito para dias de sol e mar. Espaçosa e estilosa, foi desenvolvida especialmente para uso na praia ou piscina, com materiais resistentes à umidade e de secagem rápida. Comporta toalhas, protetor solar, livros, garrafas de água e todos os seus itens essenciais para um dia de lazer. O design exclusivo com padrões geométricos e cores vibrantes adiciona um toque de estilo ao seu visual praiano. A alça confortável permite carregar facilmente, mesmo quando a bolsa está cheia. Uma combinação perfeita de funcionalidade, durabilidade e beleza artesanal para acompanhar seus momentos de diversão ao ar livre.',
    price: 149.90,
    imageUrl: '/images/bolsa-praia-croche.jpg',
    category: 'croche',
    featured: false,
    inStock: true,
    specifications: [
      { name: 'Dimensões', value: '45cm x 35cm x 15cm (aproximadamente)' },
      { name: 'Material', value: 'Fio de polipropileno resistente à água' },
      { name: 'Cores Disponíveis', value: 'Azul Turquesa, Coral, Amarelo, Listrado Multicolorido' },
      { name: 'Forro', value: 'Tecido impermeável com bolso interno com zíper' },
      { name: 'Alça', value: 'Alças de ombro reforçadas em corda náutica' },
      { name: 'Fechamento', value: 'Botão de madeira' },
      { name: 'Prazo de Produção', value: '10 dias úteis' }
    ],
    images: [
      '/images/bolsa-praia-croche-1.jpg',
      '/images/bolsa-praia-croche-2.jpg',
      '/images/bolsa-praia-croche-3.jpg'
    ],
    careInstructions: 'Lavar à mão com água fria. Não usar alvejante. Secar à sombra. Remover areia sacudindo gentilmente após o uso.'
  },
  {
    id: 'necessaire-croche',
    title: 'Necessaire em Crochê',
    description: 'Necessaire delicada feita em crochê para guardar seus itens pessoais.',
    longDescription: 'Nossa necessaire em crochê é uma peça delicada e funcional para organizar seus itens de maquiagem, cosméticos ou pequenos objetos pessoais. Confeccionada artesanalmente com linhas de alta qualidade e forro impermeável, protege seus pertences com estilo. O tamanho compacto é perfeito para levar na bolsa ou para viagens, mantendo seus itens essenciais sempre organizados e acessíveis. Disponível em diversas cores, esta necessaire combina praticidade com o charme do trabalho manual, sendo também uma ótima opção de presente. Cada peça é única, com pequenos detalhes que refletem seu caráter artesanal.',
    price: 59.90,
    imageUrl: '/images/necessaire-croche.jpg',
    category: 'croche',
    featured: false,
    inStock: true,
    specifications: [
      { name: 'Dimensões', value: '20cm x 12cm x 8cm (aproximadamente)' },
      { name: 'Material', value: 'Linha de algodão mercerizado' },
      { name: 'Cores Disponíveis', value: 'Rosa, Azul Claro, Verde Menta, Lilás, Bege' },
      { name: 'Forro', value: 'Tecido impermeável lavável' },
      { name: 'Fechamento', value: 'Zíper' },
      { name: 'Prazo de Produção', value: '5 dias úteis' }
    ],
    images: [
      '/images/necessaire-croche-1.jpg',
      '/images/necessaire-croche-2.jpg',
      '/images/necessaire-croche-3.jpg'
    ],
    careInstructions: 'Lavar à mão com água fria e sabão neutro. Não torcer. Secar à sombra em superfície plana.'
  },
  {
    id: 'porta-moedas-croche',
    title: 'Porta-moedas em Crochê',
    description: 'Pequeno porta-moedas em crochê, prático e elegante.',
    longDescription: 'Nosso porta-moedas em crochê é uma peça pequena e charmosa, perfeita para guardar moedas, cartões ou pequenos objetos. Confeccionado artesanalmente com linhas de alta qualidade e forro interno, combina praticidade com o charme do trabalho manual. Seu tamanho compacto permite que seja facilmente carregado no bolso ou dentro de outra bolsa, mantendo seus pequenos itens organizados e acessíveis. Disponível em diversas cores, este porta-moedas é também uma ótima opção de lembrancinha ou presente para ocasiões especiais. Cada peça possui acabamento cuidadoso e detalhes únicos que só o trabalho artesanal proporciona.',
    price: 39.90,
    imageUrl: '/images/porta-moedas-croche.jpg',
    category: 'croche',
    featured: false,
    inStock: true,
    specifications: [
      { name: 'Dimensões', value: '10cm x 8cm (aproximadamente)' },
      { name: 'Material', value: 'Linha de algodão mercerizado fina' },
      { name: 'Cores Disponíveis', value: 'Rosa, Azul, Verde, Amarelo, Vermelho, Preto' },
      { name: 'Forro', value: 'Tecido 100% algodão' },
      { name: 'Fechamento', value: 'Botão de pressão' },
      { name: 'Prazo de Produção', value: '3 dias úteis' }
    ],
    images: [
      '/images/porta-moedas-croche-1.jpg',
      '/images/porta-moedas-croche-2.jpg',
      '/images/porta-moedas-croche-3.jpg'
    ],
    careInstructions: 'Lavar à mão com água fria e sabão neutro. Não torcer. Secar à sombra em superfície plana.'
  }
];

export const personalizadosProducts = [
  {
    id: 'kit-festa',
    title: 'Kit Festa',
    description: 'Kit completo para festas com itens personalizados para decoração e lembrancinhas.',
    longDescription: 'Nosso Kit Festa inclui todos os itens essenciais para tornar sua celebração inesquecível. Cada kit é cuidadosamente montado e personalizado de acordo com o tema escolhido, garantindo uma decoração harmoniosa e única. O kit inclui toppers para doces, caixinhas para lembrancinhas, bandeirolas decorativas, plaquinhas para mesa, e muito mais. Todos os itens são feitos com materiais de qualidade e podem ser personalizados com cores, temas e nomes à sua escolha.',
    price: 150.00,
    imageUrl: '/images/kit-festa.svg',
    category: 'personalizados',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Itens Inclusos', value: '20 toppers para doces, 15 caixinhas para lembrancinhas, 1 bandeirola decorativa, 5 plaquinhas para mesa' },
      { name: 'Personalização', value: 'Nome, idade, tema e cores' },
      { name: 'Material', value: 'Papel fotográfico, papel color plus, palitos de madeira' },
      { name: 'Prazo de Produção', value: '7 dias úteis' }
    ],
    images: [
      '/images/kit-festa.svg',
      '/images/kit-festa.svg',
      '/images/kit-festa.svg'
    ]
  },
  {
    id: 'kit-festa-luxo',
    title: 'Kit Festa Luxo',
    description: 'Kit festa com acabamentos premium e itens adicionais para uma decoração sofisticada.',
    longDescription: 'O Kit Festa Luxo é a opção perfeita para quem busca uma decoração mais sofisticada e completa. Além dos itens do kit básico, incluímos elementos premium como caixas personalizadas maiores, displays de mesa, painéis decorativos e itens com acabamento especial. Cada detalhe é pensado para criar um ambiente elegante e harmonioso, com materiais de alta qualidade e acabamento impecável. Personalize cada elemento de acordo com o tema da sua festa para uma experiência verdadeiramente única.',
    price: 259.99,
    imageUrl: '/images/kit-festa.svg',
    category: 'personalizados',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Itens Inclusos', value: '30 toppers para doces, 20 caixinhas para lembrancinhas, 1 bandeirola decorativa premium, 8 plaquinhas para mesa, 3 displays de mesa, 1 painel decorativo pequeno' },
      { name: 'Personalização', value: 'Nome, idade, tema, cores e elementos decorativos adicionais' },
      { name: 'Material', value: 'Papel fotográfico premium, papel color plus, papel metalizado, palitos de madeira, MDF' },
      { name: 'Prazo de Produção', value: '10 dias úteis' }
    ],
    images: [
      '/images/kit-festa.svg',
      '/images/kit-festa.svg',
      '/images/kit-festa.svg'
    ]
  },
  {
    id: 'kit-festa-premium',
    title: 'Kit Festa Premium',
    description: 'Nossa opção mais completa de kit festa com itens exclusivos e personalizações especiais.',
    longDescription: 'O Kit Festa Premium é nossa opção mais completa e exclusiva para decoração de festas. Este kit inclui todos os itens dos kits anteriores, além de elementos especiais como painel backdrop personalizado, caixas premium para presentes, convites personalizados e itens decorativos exclusivos. Cada elemento é cuidadosamente elaborado com os melhores materiais e técnicas de acabamento, garantindo uma decoração luxuosa e inesquecível. O Kit Premium também inclui uma consultoria personalizada para ajudar a planejar cada detalhe da decoração da sua festa.',
    price: 350.00,
    imageUrl: '/images/kit-festa-premium.jpg',
    category: 'personalizados',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Itens Inclusos', value: '40 toppers para doces, 25 caixinhas para lembrancinhas, 1 bandeirola decorativa premium, 10 plaquinhas para mesa, 5 displays de mesa, 1 painel backdrop personalizado, 20 convites personalizados, 3 caixas premium para presentes' },
      { name: 'Personalização', value: 'Nome, idade, tema, cores, elementos decorativos exclusivos e consultoria personalizada' },
      { name: 'Material', value: 'Papel fotográfico premium, papel color plus, papel metalizado, papel texturizado especial, palitos de madeira, MDF, acrílico' },
      { name: 'Prazo de Produção', value: '15 dias úteis' }
    ],
    images: [
      '/images/kit-festa-premium-1.jpg',
      '/images/kit-festa-premium-2.jpg',
      '/images/kit-festa-premium-3.jpg'
    ]
  },
  {
    id: 'caixas-personalizadas',
    title: 'Caixas Personalizadas',
    description: 'Caixas decorativas personalizadas para presentes ou lembrancinhas.',
    longDescription: 'Nossas caixas personalizadas são perfeitas para presentes especiais ou como lembrancinhas para seus convidados. Disponíveis em diversos tamanhos e formatos, cada caixa é cuidadosamente confeccionada e decorada de acordo com o tema escolhido. Você pode personalizar com nomes, datas, cores e elementos decorativos que combinem com sua ocasião especial. Feitas com materiais de qualidade, nossas caixas são resistentes e possuem acabamento impecável, garantindo que seu presente ou lembrancinha seja entregue de forma elegante e memorável.',
    price: 45.00,
    imageUrl: '/images/caixas-personalizadas.jpg',
    category: 'personalizados',
    featured: false,
    inStock: true,
    specifications: [
      { name: 'Tamanhos Disponíveis', value: 'Pequena (8x8x4cm), Média (12x12x6cm), Grande (15x15x8cm)' },
      { name: 'Personalização', value: 'Nome, data, tema, cores e elementos decorativos' },
      { name: 'Material', value: 'Papel color plus, papel fotográfico, papel metalizado, fitas decorativas' },
      { name: 'Prazo de Produção', value: '5 dias úteis' }
    ],
    images: [
      '/images/caixas-personalizadas-1.jpg',
      '/images/caixas-personalizadas-2.jpg',
      '/images/caixas-personalizadas-3.jpg'
    ]
  },
  {
    id: 'convites-personalizados',
    title: 'Convites Personalizados',
    description: 'Convites feitos sob medida para seu evento com design exclusivo.',
    longDescription: 'Nossos convites personalizados são a primeira impressão do seu evento, por isso criamos designs exclusivos que refletem o estilo e tema da sua celebração. Cada convite é cuidadosamente elaborado com atenção aos detalhes, utilizando papéis especiais e técnicas de impressão de alta qualidade. Oferecemos diversas opções de formatos, acabamentos e elementos decorativos, como laços, apliques, glitter e muito mais. Todos os convites incluyen envelopes combinando e podem ser personalizados com as informações do seu evento, cores e elementos visuais que tornam seu convite verdadeiramente único.',
    price: 3.50,
    imageUrl: '/images/convites-personalizados.jpg',
    category: 'personalizados',
    featured: false,
    inStock: true,
    specifications: [
      { name: 'Formatos Disponíveis', value: 'Tradicional (15x10cm), Especial (formatos variados), 3D (com elementos em relevo)' },
      { name: 'Personalização', value: 'Texto completo do convite, tema, cores, elementos decorativos' },
      { name: 'Material', value: 'Papel color plus, papel metalizado, papel texturizado, papel vegetal, elementos decorativos (laços, apliques, glitter)' },
      { name: 'Prazo de Produção', value: '7 dias úteis' }
    ],
    images: [
      '/images/convites-personalizados-1.jpg',
      '/images/convites-personalizados-2.jpg',
      '/images/convites-personalizados-3.jpg'
    ]
  },
  {
    id: 'toppers-personalizados',
    title: 'Toppers Personalizados',
    description: 'Toppers decorativos para bolos e cupcakes com temas variados.',
    longDescription: 'Nossos toppers personalizados são o toque final perfeito para bolos, cupcakes e doces da sua festa. Disponíveis em diversos temas e formatos, cada topper é cuidadosamente criado para complementar a decoração do seu evento. Feitos com materiais de qualidade e impressão de alta definição, nossos toppers são resistentes e seguros para uso em alimentos. Você pode personalizar com nomes, idades, datas e elementos decorativos que combinem com o tema da sua celebração, garantindo uma apresentação única e especial para os doces da sua festa.',
    price: 25.00,
    imageUrl: '/images/toppers-personalizados.jpg',
    category: 'personalizados',
    featured: false,
    inStock: true,
    specifications: [
      { name: 'Quantidade', value: 'Kit com 20 toppers sortidos' },
      { name: 'Personalização', value: 'Nome, idade, tema, cores e elementos decorativos' },
      { name: 'Material', value: 'Papel fotográfico, papel color plus, palitos de madeira (aprovados para contato com alimentos)' },
      { name: 'Prazo de Produção', value: '3 dias úteis' }
    ],
    images: [
      '/images/toppers-personalizados-1.jpg',
      '/images/toppers-personalizados-2.jpg',
      '/images/toppers-personalizados-3.jpg'
    ]
  }
];

// Funções úteis para gerenciamento de produtos
export const getAllProducts = () => [...crocheProducts, ...personalizadosProducts];

export const getProductById = (id) => 
  getAllProducts().find(product => product.id === id);

export const getProductsByCategory = (category) => 
  getAllProducts().filter(product => product.category === category);

export const getFeaturedProducts = () => 
  getAllProducts().filter(product => product.featured);

export const getProductsInStock = () => 
  getAllProducts().filter(product => product.inStock);

// Função para atualizar um produto
export const updateProduct = (id, updates) => {
  const allProducts = getAllProducts();
  const productIndex = allProducts.findIndex(p => p.id === id);
  
  if (productIndex !== -1) {
    allProducts[productIndex] = { ...allProducts[productIndex], ...updates };
    return allProducts[productIndex];
  }
  return null;
};

// Função para adicionar novo produto
export const addProduct = (product) => {
  const newProduct = {
    ...product,
    inStock: product.inStock !== undefined ? product.inStock : true,
    featured: product.featured !== undefined ? product.featured : false
  };
  
  if (newProduct.category === 'croche') {
    crocheProducts.push(newProduct);
  } else if (newProduct.category === 'personalizados') {
    personalizadosProducts.push(newProduct);
  }
  
  return newProduct;
};

// Função para remover produto
export const removeProduct = (id) => {
  let removed = false;
  
  // Remover de crocheProducts
  const crocheIndex = crocheProducts.findIndex(p => p.id === id);
  if (crocheIndex !== -1) {
    crocheProducts.splice(crocheIndex, 1);
    removed = true;
  }
  
  // Remover de personalizadosProducts
  const personalizadosIndex = personalizadosProducts.findIndex(p => p.id === id);
  if (personalizadosIndex !== -1) {
    personalizadosProducts.splice(personalizadosIndex, 1);
    removed = true;
  }
  
  return removed;
};