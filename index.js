const { createClient } = require('@supabase/supabase-client');

// ശ്രദ്ധിക്കുക: URL-ഉം Key-യും ' ' എന്ന ചിഹ്നത്തിനുള്ളിൽ നൽകണം
const supabaseUrl = 'https://pmamsuqpaphjrylgkaff.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYjAwNzE1Mn0.DMMV7uUDvCx3TRpJbKVMIG5HSl0zyphgq8i3owaxpzI'; 
const supabase = createClient(supabaseUrl, supabaseKey);

async function createAndSaveKey(userName) {
    const newKey = 'emo_' + Math.random().toString(36).substring(2, 10);
    
    const { data, error } = await supabase
        .from('Emo-key') // നമ്മൾ നേരത്തെ ഉണ്ടാക്കിയ ടേബിൾ പേര്
        .insert([{ 
            key_value: newKey, 
            user_name: userName 
        }]);

    if (error) {
        console.error('സേവ് ചെയ്യാൻ പറ്റിയില്ല:', error.message);
    } else {
        console.log('വിജയിച്ചു! പുതിയ കീ:', newKey);
    }
}

// റൺ ചെയ്യാൻ വേണ്ടി
createAndSaveKey('Admin_Test');
