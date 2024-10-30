import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default DashboardPage;
