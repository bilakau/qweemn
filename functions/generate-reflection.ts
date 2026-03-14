import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only accept POST requests
    if (req.method !== 'POST') {
      throw new Error('Method not allowed')
    }

    // Inspirational quotes about moments and memories
    const reflections = [
      "Every moment is a fresh beginning ✨",
      "Collect moments, not things 💫",
      "Life is better through the lens 📸",
      "Chasing sunsets and dreams 🌅",
      "Making memories one click at a time 💜",
      "Today's mood: grateful 🙏",
      "Little moments, big memories ✨",
      "Living my best life 🌟",
      "Capture the magic in the mundane ✨",
      "Moments fade, memories last forever 💫",
      "Life is made of small moments like these 🌸",
      "Finding beauty in everyday moments 🦋",
      "Some moments are too precious to forget ⭐",
      "Treasure every moment, it becomes a memory 💖",
      "Life is a collection of beautiful moments 🌺",
      "In every moment, there is magic waiting ✨",
      "Memories are timeless treasures of the heart 💕",
      "The best things in life are the people we love 🤗",
      "Moments pass, but memories stay forever 🌟",
      "Life is short, make every moment count ⏰"
    ]

    // Select a random reflection
    const randomReflection = reflections[Math.floor(Math.random() * reflections.length)]

    const response = {
      reflection: randomReflection
    }

    return new Response(
      JSON.stringify(response),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})
