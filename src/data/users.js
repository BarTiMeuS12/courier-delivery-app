export const couriers = [
  { email: 'tim@example.com', password: 'qwerty123', name: 'Тим' },
  { email: 'anna@example.com', password: 'anna123', name: 'Анна' },
  { email: 'oleg@example.com', password: 'oleg123', name: 'Олег' }
];
 
export function findCourier(email, password) {
  return couriers.find(c => c.email === email && c.password === password) || null;
}