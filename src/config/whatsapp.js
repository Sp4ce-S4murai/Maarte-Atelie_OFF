// Configuração centralizada dos números de WhatsApp e mensagens personalizadas

export const WHATSAPP_CONFIG = {
  // Número principal da empresa
  mainNumber: '5554981050464', // (54) 98105-0464
  
  // Mensagens padrão para categorias ativas (crochê removido)
  defaultMessages: {
    personalizados: 'Olá! Gostaria de saber mais sobre os produtos personalizados da Maarte Ateliê.',
    geral: 'Olá! Gostaria de saber mais sobre os produtos da Maarte Ateliê.'
  },
  
  // Mensagens personalizadas por produto (apenas personalizados)
  productMessages: {
    'kit-classico': 'Olá! Gostaria de saber mais sobre o Kit Clássico (20 itens) da Maarte Ateliê.',
    'kit-premium': 'Olá! Gostaria de saber mais sobre o Kit Premium (30 itens) da Maarte Ateliê.',
    'kit-luxo': 'Olá! Gostaria de saber mais sobre o Kit Luxo da Maarte Ateliê.'
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