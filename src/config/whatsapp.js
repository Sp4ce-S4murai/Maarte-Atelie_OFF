// Configuração centralizada dos números de WhatsApp e mensagens personalizadas

export const WHATSAPP_CONFIG = {
  // Número principal da empresa
  mainNumber: '5554981050464', // (54) 98105-0464
  
  // Mensagens padrão para diferentes categorias
  defaultMessages: {
    croche: 'Olá! Gostaria de saber mais sobre os produtos em crochê da Maarte Ateliê.',
    personalizados: 'Olá! Gostaria de saber mais sobre os produtos personalizados da Maarte Ateliê.',
    geral: 'Olá! Gostaria de saber mais sobre os produtos da Maarte Ateliê.'
  },
  
  // Mensagens personalizadas por produto
  productMessages: {
    // Produtos de Crochê
    'bolsa-croche-pequena': 'Olá! Gostaria de saber mais sobre a Bolsa de Crochê Pequena da Maarte Ateliê.',
    'bolsa-croche-media': 'Olá! Gostaria de saber mais sobre a Bolsa de Crochê Média da Maarte Ateliê.',
    'bolsa-croche-grande': 'Olá! Gostaria de saber mais sobre a Bolsa de Crochê Grande da Maarte Ateliê.',
    'bolsa-praia-croche': 'Olá! Gostaria de saber mais sobre a Bolsa de Praia em Crochê da Maarte Ateliê.',
    'necessaire-croche': 'Olá! Gostaria de saber mais sobre a Necessaire em Crochê da Maarte Ateliê.',
    'porta-moedas-croche': 'Olá! Gostaria de saber mais sobre o Porta-moedas em Crochê da Maarte Ateliê.',
    
    // Produtos Personalizados
    'kit-festa': 'Olá! Gostaria de saber mais sobre o Kit Festa personalizado da Maarte Ateliê.',
    'kit-festa-luxo': 'Olá! Gostaria de saber mais sobre o Kit Festa Luxo personalizado da Maarte Ateliê.',
    'kit-festa-premium': 'Olá! Gostaria de saber mais sobre o Kit Festa Premium personalizado da Maarte Ateliê.',
    'caixas-personalizadas': 'Olá! Gostaria de saber mais sobre as Caixas Personalizadas da Maarte Ateliê.',
    'convites-personalizados': 'Olá! Gostaria de saber mais sobre os Convites Personalizados da Maarte Ateliê.',
    'toppers-personalizados': 'Olá! Gostaria de saber mais sobre os Toppers Personalizados da Maarte Ateliê.'
  }
};

// Função para gerar URL do WhatsApp
// Se productId for fornecido, usa mensagem personalizada, senão usa mensagem padrão da categoria
export const getWhatsAppUrl = (productId = null, category = null) => {
  const { mainNumber, defaultMessages, productMessages } = WHATSAPP_CONFIG;
  
  let message = defaultMessages.geral;
  
  if (productId && productMessages[productId]) {
    message = productMessages[productId];
  } else if (category && defaultMessages[category]) {
    message = defaultMessages[category];
  }
  
  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${mainNumber}?text=${encodedMessage}`;
};

// Função para obter número formatado para exibição
export const getFormattedWhatsAppNumber = () => {
  const { mainNumber } = WHATSAPP_CONFIG;
  // Remove o código do país (55) e formata
  const localNumber = mainNumber.replace('5554', '(54) ');
  return `${localNumber.slice(0, 7)}-${localNumber.slice(7)}`;
};