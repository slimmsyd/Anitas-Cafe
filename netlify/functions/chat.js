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
- Maintain a neighborhood coffee shop vibe`;

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message } = JSON.parse(event.body);
    
    // Simple response logic (in production, you'd use a real AI service)
    let response = "Thanks for visiting Anita's FXB Cafe and Dessert Bar! How can I help you today?";
    
    if (message.toLowerCase().includes('hours') || message.toLowerCase().includes('location')) {
      response = "Find us at 620 Caroline St in Fredericksburg, Virginia. Our hours: Monday-Thursday 7:00AM-9:00PM, Friday-Saturday 7:00AM-10:00PM, Sunday 8:00AM-9:00PM. We're your neighborhood coffee shop and dessert bar!";
    } else if (message.toLowerCase().includes('menu') || message.toLowerCase().includes('coffee') || message.toLowerCase().includes('dessert')) {
      response = "We serve premium coffee and handcrafted desserts! Visit our menu page to see all our delicious offerings, or stop by to experience our neighborhood atmosphere firsthand.";
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({ response })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 