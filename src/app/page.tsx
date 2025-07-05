"use client"; // This directive should be at the very top

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card"; // CORRECTED: Removed unused CardDescription, CardHeader, CardTitle
import { quotes, Quote } from '@/data/quotes'; // CORRECTED: Changed allQuotes to quotes and confirmed path

export default function QuoteGenerator() {
  const [topic, setTopic] = useState<string>('');
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);

  const generateQuotes = () => {
    // Filter quotes based on topic (case-insensitive)
    const filteredQuotes = quotes.filter(quote => // CORRECTED: Used 'quotes'
      quote.topic.toLowerCase().includes(topic.toLowerCase())
    );

    // If no topic or no matching quotes, show a random selection
    let quotesToShow: Quote[] = [];
    if (topic === '' || filteredQuotes.length === 0) {
      // Get 3 random unique quotes if no specific topic or no matches
      const shuffledQuotes = [...quotes].sort(() => 0.5 - Math.random()); // CORRECTED: Used 'quotes'
      quotesToShow = shuffledQuotes.slice(0, 3);
    } else {
      // Otherwise, get 3 random unique quotes from the filtered list
      const shuffledFilteredQuotes = [...filteredQuotes].sort(() => 0.5 - Math.random());
      quotesToShow = shuffledFilteredQuotes.slice(0, 3);
    }

    setDisplayedQuotes(quotesToShow);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-gray-900 text-gray-100">
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          InspireMe!
        </h1>
        <p className="text-lg text-gray-400 text-center mb-8">
          Discover powerful quotes on any topic.
        </p>

        <div className="mb-8 space-y-4">
          <label htmlFor="topic-input" className="block text-lg font-medium text-gray-300 mb-2">
            Enter a topic
          </label>
          <Input
            id="topic-input"
            type="text"
            placeholder="e.g., life, success, happiness"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          />
          <Button
            onClick={generateQuotes}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition duration-200"
          >
            Generate Quotes
          </Button>
        </div>

        {displayedQuotes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-200 text-center">
              Your Quotes:
            </h2>
            {displayedQuotes.map((quote, index) => (
              <Card key={index} className="bg-gray-700 border border-gray-600 shadow-md">
                <CardContent className="p-4 text-center">
                  <p className="text-xl font-medium text-white">
                    &quot;{quote.text}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}