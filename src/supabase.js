
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vcxbqzbdhqkunywyghqu.supabase.co";
const supabaseKey = "sb_publishable_n9jp4GUkgJjQAQxY-u-lww_NZyGx67V";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
