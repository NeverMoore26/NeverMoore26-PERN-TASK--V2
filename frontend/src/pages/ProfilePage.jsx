import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <div className="p-6 text-center">
          <img
            src={user.gravatar}
            alt={`${user.name}'s avatar`}
            className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-sky-500"
          />

          <h2 className="text-2xl font-bold mb-4">Perfil del Usuario</h2>

          <div className="text-left">
            <p className="mb-2"><strong>Nombre:</strong> {user.name}</p>
            <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProfilePage;
