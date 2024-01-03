interface Merchant {
  merchant_id: number;
  company_name: string;
  logo_url: string;
  description: string;
  address: string;
  phone_number: string;
}

const mockMerchants: Merchant[] = [
  {
    merchant_id: 1,
    company_name: "Tea Haven",
    logo_url: "https://example.com/tea-haven-logo.png",
    description: "A cozy tea shop offering a variety of premium teas.",
    address: "42 High Street, Smalltown",
    phone_number: "+44 20 1234 5678",
  },
  {
    merchant_id: 2,
    company_name: "Scones & Crafts",
    logo_url: "https://example.com/scones-and-crafts-logo.png",
    description: "A quaint cafe and craft shop offering handmade delights.",
    address: "10 Baker Street, Miniville",
    phone_number: "+44 20 3456 7890",
  },

  {
    merchant_id: 3,
    company_name: "Coffee Oasis",
    logo_url: "https://example.com/coffee-oasis-logo.png",
    description: "A welcoming cafe serving freshly brewed coffee and pastries.",
    address: "8 Espresso Avenue, Miniville",
    phone_number: "+44 20 9012 3456",
  },
  {
    merchant_id: 7,
    company_name: "Café Serenity",
    logo_url: "https://example.com/cafe-serenity-logo.png",
    description:
      "A serene cafe offering a peaceful atmosphere and delicious beverages.",
    address: "5 Cappuccino Lane, Tinyville",
    phone_number: "+44 20 5678 9012",
  },
  {
    merchant_id: 8,
    company_name: "Mocha Delights",
    logo_url: "https://example.com/mocha-delights-logo.png",
    description: "A cafe specializing in delightful mochas and sweet treats.",
    address: "12 Latte Street, Smalltown",
    phone_number: "+44 20 1234 5678",
  },
];
