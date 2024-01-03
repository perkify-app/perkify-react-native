interface LoyaltyCard {
	loyalty_program_id: number;
	user_id: number;
    points: number;
    created_at: string;
}

export const LoyaltyCards: LoyaltyCard[] = [
    { loyalty_program_id: 1, user_id: 46521, points: 0, created_at: "2021-01-01T00:00:00.000Z" },
    { loyalty_program_id: 2, user_id: 46522, points: 0, created_at: "2021-02-01T00:00:00.000Z" },
    { loyalty_program_id: 3, user_id: 46523, points: 0, created_at: "2021-03-01T00:00:00.000Z" },
];
