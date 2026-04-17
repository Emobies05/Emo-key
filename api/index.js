const { createClient } = require('@supabase/supabase-client');

const supabaseUrl = 'https://pmamsuqpaphjrylgkaff.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtYW1zdXFwYXBoanJ5bGdrYWZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MzExNTIsImV4cCI6MjA5MjAwNzE1Mn0.DMMV7uUDvCx3TRpJbKVMIG5HSl0zyphgq8i3owaxpzI'; 
const supabase = createClient(supabaseUrl, supabaseKey);

async function createAndSaveKey(userName) {
    const newKey = 'emo_' + Math.random().toString(36).substring(2, 10);
    
    const { data, error } = await supabase
        .from('Emo-key') 
        .insert([{ 
            key_value: newKey, 
            user_name: userName 
        }]);

    if (error) {
        console.error('Error:', error.message);
    } else {
        console.log('Success! New Key:', newKey);
    }
}

createAndSaveKey('Admin_Test');
