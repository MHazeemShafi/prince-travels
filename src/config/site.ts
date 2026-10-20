export const siteConfig = {
  name: "Prince Travels",
  description: "Online travel agency based in Kasaragod, Kerala, India",
  address: "Prince Complex, Vidyanagar, Kasaragod 671123, Kerala, India",
  phone: "+91 8301020143",
  whatsapp: "918301020143",
  email: "princetravelsksd@gmail.com",

  // Brand colors
  colors: {
    primaryTeal: "#087B8D",
    darkTeal: "#172B35",
    white: "#FFFFFF",
    darkText: "#172B35",
    lightBackground: "#DDF2F3",
    subtleBorder: "#DCE8EA",
  },

  // Services offered
  services: [
    {
      id: "air-ticket-booking",
      title: "Air Ticket Booking",
      description: "Domestic and international flight booking assistance, including travel from India to the UAE, Saudi Arabia, and other Gulf countries.",
      icon: "Plane",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: "train-ticket-booking",
      title: "Train Ticket Booking",
      description: "Help customers submit inquiries for train tickets.",
      icon: "Train",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: "bus-ticket-booking",
      title: "Bus Ticket Booking",
      description: "Allow customers to inquire about bus journeys.",
      icon: "Bus",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: "visa-services",
      title: "Visa Services",
      description: "Provide visa application assistance. Visa approval is determined by relevant authorities.",
      icon: "Passport",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: "passport-services",
      title: "Passport Services",
      description: "Information about passport-related assistance. Official passport issuance remains with government authorities.",
      icon: "Passport",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: "hotel-booking",
      title: "Hotel Booking",
      description: "Allow customers to inquire about hotel arrangements.",
      icon: "Hotel",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      id: "tour-packages",
      title: "Tour Packages",
      description: "Allow customers to request personalised tour packages.",
      icon: "MapPin",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    }
  ],

  // Destinations
  destinations: {
    "United Arab Emirates": [
      { name: "Dubai", country: "UAE" },
      { name: "Abu Dhabi", country: "UAE" },
      { name: "Sharjah", country: "UAE" }
    ],
    "Saudi Arabia": [
      { name: "Riyadh", country: "Saudi Arabia" },
      { name: "Jeddah", country: "Saudi Arabia" },
      { name: "Dammam", country: "Saudi Arabia" },
      { name: "Madinah", country: "Saudi Arabia" }
    ],
    "Other Gulf": [
      { name: "Doha", country: "Qatar" },
      { name: "Muscat", country: "Oman" },
      { name: "Kuwait City", country: "Kuwait" },
      { name: "Manama", country: "Bahrain" }
    ]
  }
};

export const config = siteConfig;