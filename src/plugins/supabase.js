import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://altwaagyhepkswngdceu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDY2OTc0NSwiZXhwIjoxOTU2MjQ1NzQ1fQ.hwHNfjagCtHPcizXXIvT87SkUhpS4ZFZi-gkFndRaio"
);

export default supabase;
