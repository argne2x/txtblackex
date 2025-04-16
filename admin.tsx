
import { useSession } from "next-auth/react";

export default function AdminPage() {
  const { data: session } = useSession();

  if (!session || session.user.role !== "admin") {
    return <p>Access Denied</p>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <p>List of users here...</p>
    </div>
  );
}
