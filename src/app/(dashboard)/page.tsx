import { Button } from "@/components/ui/button";
import { UserButton } from "@/features/auth/components/user-button";
import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();
  if (!user) redirect("/sign-in")
  return (
    <div>
      <Button>Hello</Button>
      <UserButton />
    </div>
  );
}
