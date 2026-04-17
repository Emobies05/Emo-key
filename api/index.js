const { createClient } = require('@supabase/supabase-client');

// Replace these with your actual Supabase project details
const supabaseUrl = 'https://pmamsuqpaphjrylgkaff.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYW1zdXFwYXBoanJ5bGdrYWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzExNTIsImV4cCI6MjA5MjAwNzE1Mn0.DMMV7uUDvCx3TRpJbKVMIG5HSl0zyphgq8i3owaxpzI'; 

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = async (req, res) => {
    // This takes the name from the URL, e.g., ?name=User1
    const userName = req.query.name || 'Default_User';
    const newKey = 'emo_' + Math.random().toString(36).substring(2, 10);

    const { data, error } = await supabase
        .from('Emo-key')
        .insert([{ 
            key_value: newKey, 
            user_name: userName 
        }]);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ 
        message: 'Success!', 
        new_key: newKey,
        user: userName 
    });
};
