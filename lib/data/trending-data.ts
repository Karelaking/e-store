export interface TrendingItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export const trendingItems: TrendingItem[] = [
  {
    id: 1,
    title: "The Column Dress",
    description: "Matte Silk • Evening",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-3XKDb0BcP_ZerbzvKQAT0XTKOyX9m-bets168U0B1dyS6dtIhek6Su5Flz_8QbCtMPFl9xNh0P_ghjFYm1baFbeZR5rlM0yKvRSjMG6Uw8FNPALgBdurBrhIXOHME9Ti5NkWpU54LFRbK3Wq9B86PS0Q3VzSp6debKZNRHbI_4DYJOX2_wgc8AkpwIOO2rud8fLY8zBeL0fHc3KnLITBGuJtNYhQ0uFXohyhg-5U7WjbdUAZXvn8vfDFGkbkWJnUmKyG9qcehqpp",
    price: 199.99
  },
  {
    id: 2,
    title: "The Artisan Coat",
    description: "Italian Wool • Outerwear",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkVoe7tDupJemoZb7dT8OhMw2LJKtpGNi7RCg0Cm4--z63WtS_0N6ch2l5MuXjQZe1nc8Mu9PgaHp87QWpawxBPjq5Y-giYiNBqp73n1PwAWTTjfxib_HIBR8vCAe0h4tjlry44g4OYQJ6bmYi7D3wVg4888F_-qpbmfkYcU8hnXv0gTBMYb0kbLegVKzmwQbb9P0o587T2RtOfXBvm4ob0pAbMCXKI1GMg5AUx_W9VYPG88iQDyopG0--8oWIfPRPX-SytjKjM3Gh",
    price: 149.99
  },
  {
    id: 3,
    title: "Sculpted Blazer",
    description: "Fine Linen • Tops",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGN2kuR49fN9R9PtxXrVaNJNx8PuzMnrgrwfVh7qqNT2X5bX802MRsdzcQC74UIjJ0DTMXhMXn8LOMkCb_0gAIc4jcHr7uC7qWO4ihdtmZMog6q3i5lu6SK5RA3-iDtq1IoImeUBykADSz8KkLAZ8a_BTqKmK7rz6rzvAe8ry6FUvPlYGc5go1pG8R3NQKkv8i8icePOqhZS7Naavq0rSyvBJ1KzK8EFGlxNEkDars5Z4RPxEUr8FwMsAxQWbcmX6C5gWqrswaQMEW",
    price: 179.99
  }
];