export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  image: string
  rating: number
  project?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Okonkwo',
    role: 'CEO',
    company: 'TechStart Nigeria',
    content: 'Cedarvis transformed our digital presence completely. Their team\'s expertise in both technology and understanding of the African market helped us reach 10x more customers. The ROI has been phenomenal.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&q=80',
    rating: 5,
    project: 'Digital Marketing & Web Development'
  },
  {
    id: 2,
    name: 'Kwame Mensah',
    role: 'Product Manager',
    company: 'FinTech Ghana',
    content: 'The FTLAfrica bootcamp was life-changing! In just 12 weeks, I transitioned from a traditional banking role to leading product development at a fintech startup. The practical, hands-on approach made all the difference.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80',
    rating: 5,
    project: 'FTLAfrica Data Analytics Program'
  },
  {
    id: 3,
    name: 'Amina Diallo',
    role: 'Founder',
    company: 'EduTech Senegal',
    content: 'Professional team, innovative solutions, and exceptional results. Cedarvis didn\'t just deliver a product; they became our technology partners. Their cybersecurity implementation saved us from potential disasters.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80',
    rating: 5,
    project: 'Cybersecurity & Cloud Infrastructure'
  },
  {
    id: 4,
    name: 'David Osei',
    role: 'CTO',
    company: 'AgriTech Kenya',
    content: 'Working with Cedarvis on our digital transformation was the best decision we made. They helped us implement AI-powered solutions that increased our operational efficiency by 45%.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    rating: 5,
    project: 'AI & Data Analytics'
  },
  {
    id: 5,
    name: 'Grace Mwangi',
    role: 'Marketing Director',
    company: 'Retail Chain East Africa',
    content: 'The digital marketing strategies implemented by Cedarvis revolutionized our customer engagement. We saw a 300% increase in online sales within the first quarter.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80',
    rating: 5,
    project: 'Digital Marketing & E-commerce'
  },
  {
    id: 6,
    name: 'Emmanuel Adebayo',
    role: 'Operations Manager',
    company: 'Logistics Solutions Nigeria',
    content: 'The cloud migration project executed by Cedarvis was seamless. Zero downtime, improved performance, and 40% cost reduction. Their DevOps expertise is unmatched in the region.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=80',
    rating: 5,
    project: 'Cloud Migration & DevOps'
  }
]