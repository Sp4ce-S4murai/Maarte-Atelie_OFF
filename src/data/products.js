// Arquivo centralizado com todos os produtos do Maarte Ateliê
// Este arquivo permite visualizar e gerenciar todos os produtos em um único local

// Catálogo de crochê removido
export const crocheProducts = [];

export const personalizadosProducts = [
  {
    id: 'kit-classico',
    title: 'Kit Clássico',
    description: 'Kit com 20 itens personalizados para festa.',
    longDescription: 'O Kit Clássico é ideal para quem busca um conjunto essencial de peças personalizadas para a festa, com excelente custo-benefício e produção em alta qualidade.',
    price: 129.90,
    imageUrl: '/images/kit-festa.svg',
    category: 'personalizados',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Itens Inclusos', value: 'Caixinha Milk 5un, Pirâmide 5un, Meia Bala 5un, Caixa Cubo 5un' },
      { name: 'Papel', value: 'Offset 180g' },
      { name: 'Impressão', value: 'Alta resolução' },
      { name: 'Acabamento', value: 'Aplique dupla camada sobrepostas' },
      { name: 'Envio', value: 'Pré-montado, cortadas e prontas para encaixar' },
      { name: 'Personalização', value: 'Nome, idade' }
    ],
    images: [
      '/images/kit-festa.svg',
      '/images/kit-festa.svg',
      '/images/kit-festa.svg'
    ]
  },
  {
    id: 'kit-premium',
    title: 'Kit Premium',
    description: 'Kit com 30 itens personalizados para festa.',
    longDescription: 'O Kit Premium amplia a quantidade de peças e inclui modelos adicionais, mantendo o padrão de qualidade e acabamento. Perfeito para composições mais completas.',
    price: 227.00,
    imageUrl: '/images/kit-festa.svg',
    category: 'personalizados',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Itens Inclusos', value: 'Caixinha Milk 5un, Pirâmide 5un, Meia Bala 5un, Caixa Cubo 5un, Sacolinha Alça 5un, Caixa Bala 5un' },
      { name: 'Papel', value: 'Offset 180g' },
      { name: 'Impressão', value: 'Alta resolução' },
      { name: 'Acabamento', value: 'Aplique dupla camada sobrepostas' },
      { name: 'Envio', value: 'Pré-montado, cortadas e prontas para encaixar' },
      { name: 'Personalização', value: 'Nome, idade' }
    ],
    images: [
      '/images/kit-festa.svg',
      '/images/kit-festa.svg',
      '/images/kit-festa.svg'
    ]
  },
  {
    id: 'kit-luxo',
    title: 'Kit Luxo',
    description: 'Kit completo com acabamento especial e extras.',
    longDescription: 'O Kit Luxo oferece uma composição completa com maior quantidade de peças, acabamento refinado e elementos extras para destacar sua decoração.',
    price: 549.00,
    imageUrl: '/images/kit-festa.svg',
    category: 'personalizados',
    featured: true,
    inStock: true,
    specifications: [
      { name: 'Itens Inclusos', value: 'Caixinha Milk 10un, Pirâmide 10un, Meia Bala 10un, Caixa Cubo 10un, Sacolinha Alça 10un, Caixa Bala 10un, Topo de Bolo, Bandeirinha' },
      { name: 'Papel', value: 'Offset 180g' },
      { name: 'Impressão', value: 'Alta resolução' },
      { name: 'Acabamento', value: 'Aplique dupla camada sobrepostas' },
      { name: 'Envio', value: 'Pré-montado, cortadas e prontas para encaixar' },
      { name: 'Personalização', value: 'Nome, idade' }
    ],
    images: [
      '/images/kit-festa.svg',
      '/images/kit-festa.svg',
      '/images/kit-festa.svg'
    ]
  }
];

// Funções úteis para gerenciamento de produtos
export const getAllProducts = () => [...personalizadosProducts];

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
  
  if (newProduct.category === 'personalizados') {
    personalizadosProducts.push(newProduct);
  }
  
  return newProduct;
};

// Função para remover produto
export const removeProduct = (id) => {
  let removed = false;
  
  // Seção de crochê removida do catálogo; nada a remover aqui
  
  // Remover de personalizadosProducts
  const personalizadosIndex = personalizadosProducts.findIndex(p => p.id === id);
  if (personalizadosIndex !== -1) {
    personalizadosProducts.splice(personalizadosIndex, 1);
    removed = true;
  }
  
  return removed;
};