const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const userName = req.query.name || 'Anonymous';
    const newKey = 'emo_' + Math.random().toString(36).substring(2, 10);

    const { data, error } = await supabase
      .from('Emo-key')
      .insert([{
        key_value: newKey,
        user_name: userName,
        created_at: new Date().toISOString()
      }]);

    if (error) {
      return res.status(400).json({ success: false, error: error.message });
    }

    return res.status(200).json({ success: true, key: newKey });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
