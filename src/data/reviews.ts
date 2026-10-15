import type { Review } from '../types'

/**
 * Avaliações reais de clientes, transcritas do perfil da Premium Car no Google
 * (texto original, apenas com acentuação e pontuação ajustadas). Para atualizar, copie novas
 * avaliações do Google mantendo autor, nota e texto fiéis.
 */
export const reviews: Review[] = [
  {
    author: 'Edgard Chaves Fracassi',
    rating: 5,
    localGuide: true,
    text: 'Melhor lavagem do Recreio, ótimo custo-benefício, atentos a todos os detalhes! Super recomendo!!! Parabéns e espero que mantenham sempre esse nível!!',
  },
  {
    author: 'Lucas Rohen',
    rating: 5,
    text: 'Experiência Premium!!! Serviço e atendimento espetacular e diferenciado demais. Alan, parabéns para você e toda a sua equipe. Super indico!!!',
  },
  {
    author: 'Mayara Souza',
    rating: 5,
    text: 'Excelente serviço. Sou cliente há anos! Júlio é muito gente boa e atencioso. Super recomendo!!',
  },
  {
    author: 'Adelino Lessa',
    rating: 5,
    text: 'O ambiente é tranquilo, agradável e organizado, e os funcionários bastante atenciosos. O serviço de lavagem do meu carro foi muito bem realizado. Até agora foi o melhor lava-jato que encontrei no Recreio.',
  },
  {
    author: 'Rita Ferreira',
    rating: 5,
    text: 'Espaço limpo, confiável, competente, serviço de alta qualidade, prazo de entrega respeitado e preço justo.',
  },
  {
    author: 'Silvana Cavalcante',
    rating: 5,
    text: 'Só lavo meu carro na Premium Car. Excelente serviço, profissionais atenciosos e competentes.',
  },
  {
    author: 'Lucas Santiago',
    rating: 5,
    localGuide: true,
    text: 'Muito rápidos, educados e solícitos. Preço justo e sem enganação.',
  },
  {
    author: 'Josimar Martins',
    rating: 5,
    text: 'Quero agradecer pelo excelente serviço e pelo profissionalismo. Recomendo para todos os meus amigos.',
  },
  {
    author: 'Cristiane Hermida Alvim',
    rating: 5,
    localGuide: true,
    text: 'Limpeza muito bem feita, o carro fica impecável.',
  },
]
