import { ILoginUser, IUser } from "@/interface/interfaces";


export const postSingUp = async (user: Omit<IUser, "id">) =>{
    const response = await fetch("http://localhost:5000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data;
}

export const postSingIn = async (credentials: ILoginUser) =>{
    const response = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      return data;
}