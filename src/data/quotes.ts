// src/data/quotes.ts

interface Quote {
  text: string;
  topic: string;
}

export const quotes: Quote[] = [
  { text: "Life is what happens when you're busy making other plans.", topic: "life" },
  { text: "Stay hungry, stay foolish.", topic: "life" },
  { text: "Your time is limited, don't waste it living someone else's life.", topic: "life" },
  { text: "The only way to do great work is to love what you do.", topic: "work" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", topic: "success" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", topic: "dreams" },
  { text: "Innovation distinguishes between a leader and a follower.", topic: "innovation" },
  { text: "Strive not to be a success, but rather to be of value.", topic: "success" },
  { text: "The best way to predict the future is to create it.", topic: "future" },
  { text: "Believe you can and you're halfway there.", topic: "motivation" },
  { text: "The only limit to our realization of tomorrow will be our doubts of today.", topic: "motivation" },
  { text: "Keep your eyes on the stars, and your feet on the ground.", topic: "dreams" },
  { text: "The power of imagination makes us infinite.", topic: "imagination" },
  { text: "It is during our darkest moments that we must focus to see the light.", topic: "challenges" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", topic: "life" },
];