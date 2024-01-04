interface LoyaltyProgram {
  id: number;
  merchant_id: number;
  name: string;
  points: number;
  created_at: string;
}

export const LoyaltyPrograms: LoyaltyProgram[] = [
  { id: 1, merchant_id: 1, name: "Tea Haven", points: 6, created_at: "2021-01-01T00:00:00.000Z" },
  { id: 2, merchant_id: 2, name: "Scones & Crafts", points: 5, created_at: "2021-02-01T00:00:00.000Z" },
  { id: 3, merchant_id: 3, name: "Coffee Oasis", points: 10, created_at: "2021-03-01T00:00:00.000Z" },
  { id: 4, merchant_id: 4, name: "Café Serenity", points: 5, created_at: "2021-04-01T00:00:00.000Z" },
  { id: 5, merchant_id: 5, name: "Mocha Delights", points: 6, created_at: "2021-05-01T00:00:00.000Z" },
  { id: 6, merchant_id: 6, name: "Artistic Expressions", points: 5, created_at: "2021-06-01T00:00:00.000Z" },
];
