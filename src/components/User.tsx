import { useState } from "react";

interface User {
  id: string;
  name: string;
}
export const User = () => {
  const [user, setUser] = useState<User>();
  const login = () => {
    setUser({
      id: "123",
      name: "Jose Cuenca",
    });
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>User: useState</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>

      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};
