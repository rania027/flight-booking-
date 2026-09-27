import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lyqxtrjwtwqduucaubsr.supabase.co";
const supabaseKey = "sb_publishable_mkcrayz0z5TICMGR6sZflA_JoqkUnPv";

export const supabase = createClient(supabaseUrl, supabaseKey);