interface LoyaltyCard {
  loyalty_program_id: number;
  user_id: number;
  points: number;
  created_at: string;
}

export const LoyaltyCards: LoyaltyCard[] = [
  {
    loyalty_program_id: 1,
    user_id: 46521,
    points: 5,
    created_at: "2021-01-01T00:00:00.000Z",
  },
  {
    loyalty_program_id: 2,
    user_id: 46522,
    points: 4,
    created_at: "2021-02-01T00:00:00.000Z",
  },
  {
    loyalty_program_id: 3,
    user_id: 46523,
    points: 10,
    created_at: "2021-03-01T00:00:00.000Z",
  },

  {
    loyalty_program_id: 4,
    user_id: 46524,
    points: 3,
    created_at: "2021-04-01T00:00:00.000Z",
  },
  {
    loyalty_program_id: 5,
    user_id: 46525,
    points: 6,
    created_at: "2021-05-01T00:00:00.000Z",
  },
  {
    loyalty_program_id: 6,
    user_id: 46526,
    points: 5,
    created_at: "2021-06-01T00:00:00.000Z",
  },
];
