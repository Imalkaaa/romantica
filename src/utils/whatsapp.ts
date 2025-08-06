export const createWhatsAppUrl = (product: { name: string; price: number }, message?: string) => {
  const phoneNumber = '94701234567'; // Replace with actual WhatsApp number
  const defaultMessage = `Hi! I'm interested in ordering "${product.name}" (LKR ${product.price.toLocaleString()}). Could you please provide more details?`;
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const createGeneralWhatsAppUrl = (customMessage?: string) => {
  const phoneNumber = '94701234567'; // Replace with actual WhatsApp number
  const message = customMessage || "Hi! I'd like to know more about your products at Romantica.lk";
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};