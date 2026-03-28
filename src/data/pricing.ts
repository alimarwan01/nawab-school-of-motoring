export interface PricingItem {
  label: string;
  price: string;
  note?: string;
}

export interface PricingCategory {
  title: string;
  items: PricingItem[];
}

export const hourlyRates: PricingCategory = {
  title: "Hourly Lesson Rates",
  items: [
    { label: "Standard Lesson (Leicester)", price: "\u00a330/hour" },
    { label: "Standard Lesson (Outside Leicester)", price: "\u00a335/hour" },
    { label: "Motorway Tuition", price: "\u00a345/hour" },
    { label: "Refresher Course", price: "\u00a337/hour" },
  ],
};

export const blockBookings: PricingCategory = {
  title: "Block Booking Discounts",
  items: [
    { label: "5 Hour Block", price: "\u00a3150", note: "\u00a330/hour" },
    { label: "10 Hour Block", price: "\u00a3290", note: "\u00a329/hour" },
    { label: "20 Hour Block", price: "\u00a3560", note: "\u00a328/hour" },
  ],
};

export const studentRates: PricingCategory = {
  title: "Student Rates",
  items: [
    { label: "Student First 10 Hour Block", price: "\u00a3280" },
    { label: "Standard First 10 Hour Block", price: "\u00a3290" },
  ],
};

export const passPlusCourse: PricingCategory = {
  title: "Pass Plus Course",
  items: [
    { label: "Minimum 6 Hours", price: "\u00a3225", note: "\u00a337.50/hour" },
  ],
};

export interface TestDayPricing {
  location: string;
  rows: {
    day: string;
    standard: string;
    early: string;
  }[];
}

export const testDayHire: TestDayPricing[] = [
  {
    location: "Cannock Street",
    rows: [
      { day: "Weekdays", standard: "\u00a3120", early: "\u00a3150" },
      { day: "Weekends", standard: "\u00a3150", early: "\u00a3180" },
    ],
  },
  {
    location: "Wigston",
    rows: [
      { day: "Weekdays", standard: "\u00a3180", early: "\u00a3210" },
      { day: "Weekends", standard: "\u00a3210", early: "\u00a3250" },
    ],
  },
  {
    location: "Outside Leicester",
    rows: [
      { day: "Weekdays", standard: "\u00a3210", early: "\u00a3250" },
      { day: "Weekends", standard: "\u00a3250", early: "\u00a3300" },
    ],
  },
];
