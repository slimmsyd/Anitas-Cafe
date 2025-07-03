// This would be your API endpoint for OpenAI integration
// For production, you'd implement this as a serverless function or backend API

const SYSTEM_PROMPT = `You are the friendly and knowledgeable chatbot for Anita's FXB Cafe and Dessert Bar in Fredericksburg, Virginia. You embody the warm, welcoming spirit of a neighborhood coffee shop and dessert bar.

Key Information:
- Name: Anita's FXB Cafe and Dessert Bar
- We are a downtown coffee shop and dessert bar
- Location: 620 Caroline St, Fredericksburg, VA 22401
- Hours: Monday-Thursday 7:00AM-9:00PM, Friday-Saturday 7:00AM-10:00PM, Sunday 8:00AM-9:00PM
- Email: hello@anitasfxbg.com
- We serve premium coffee, handcrafted desserts, and light fare
- We focus on being a welcoming neighborhood gathering place

RESPONSE STYLE:
- Keep responses friendly, warm, and welcoming
- Focus on coffee, desserts, and community atmosphere
- Be helpful and informative about our offerings
- Maintain a neighborhood coffee shop vibe
- Keep responses conversational and approachable

TOPICS YOU EXCEL AT:
- Coffee drinks and brewing methods
- Dessert offerings and seasonal specialties
- Café atmosphere and community space
- Hours, location, and general information
- Creating a welcoming neighborhood experience`;

// OpenAI integration for chat API
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, context } = req.body;

    // Get OpenAI API key from environment variables
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY;
    
    if (!OPENAI_API_KEY) {
      console.warn('OpenAI API key not found, using fallback response');
      const fallbackResponse = generateMockResponse(message, context);
      return res.status(200).json({ response: fallbackResponse });
    }

    console.log('🚀 Making OpenAI API request for message:', message);

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Context: ${JSON.stringify(context)}\n\nUser message: ${message}` }
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const botResponse = data.choices[0].message.content;
    
    console.log('✅ OpenAI response received');
    res.status(200).json({ response: botResponse });
    
  } catch (error) {
    console.error('❌ Chat API error:', error);
    // Fallback to mock response on error
    const fallbackResponse = generateMockResponse(req.body.message, req.body.context);
    res.status(200).json({ response: fallbackResponse });
  }
}

function generateMockResponse(message, context) {
  const msg = message.toLowerCase();
  
  if (msg.includes('coffee') && msg.includes('dessert')) {
    return "We believe coffee and desserts are the perfect pair! Our baristas craft each drink with care, and our dessert bar features fresh treats made daily. The combination creates those perfect moments of sweetness and warmth. What's your favorite way to enjoy coffee and desserts together?";
  }
  
  if (msg.includes('menu') || msg.includes('what do you serve')) {
    return "We serve premium coffee drinks from espresso to cold brew, plus a delicious array of handcrafted desserts made fresh daily. Our menu features both classic favorites and seasonal specialties that pair perfectly with our coffee. Stop by to see our full selection or check out our menu page!";
  }
  
  if (msg.includes('dessert') || msg.includes('sweet')) {
    return "Our dessert bar is something special! We make fresh treats daily, from classic favorites to seasonal creations. Each dessert is crafted to complement your coffee experience perfectly. What type of sweet treats do you enjoy most?";
  }
  
  if (msg.includes('community') || msg.includes('neighborhood')) {
    return "We're proud to be your neighborhood gathering place! Whether you're catching up with friends, working on your laptop, or just enjoying a quiet moment, our café provides a warm, welcoming atmosphere where everyone feels at home. What brings you to the neighborhood?";
  }
  
  if (msg.includes('hours') || msg.includes('open') || msg.includes('location') || msg.includes('where')) {
    return "Find us at 620 Caroline St in Fredericksburg, Virginia. Our hours: Monday-Thursday 7:00AM-9:00PM, Friday-Saturday 7:00AM-10:00PM, Sunday 8:00AM-9:00PM. We're your neighborhood coffee shop and dessert bar!";
  }
  
  if (msg.includes('anita') || msg.includes('fxb')) {
    return "Welcome to Anita's FXB Cafe and Dessert Bar! We're your downtown coffee shop and dessert bar, serving premium coffee and handcrafted desserts in a warm, welcoming atmosphere. How can I help you today?";
  }
  
  return "That's a great question that deserves a thoughtful conversation over a perfect cup of coffee. At Anita's, we believe every conversation is better with great coffee and sweet treats. I'd love to continue this chat at our welcoming space at 620 Caroline St, where every visit feels like coming home. What aspect of our café would you like to explore together?";
} 