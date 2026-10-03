export interface Testimonial {
  id: string
  quote: string
  name: string
  role?: string
  organization?: string
  image?: string
}

// Array is intentionally empty until verified real testimonials/recommendations are provided.
export const testimonialsData: Testimonial[] = []
