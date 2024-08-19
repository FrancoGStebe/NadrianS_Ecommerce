export const getUserOrders = async (token: string) =>{
    const response = fetch("http://localhost:5000/users/orders/", {
        headers: {
            Authorization: `${token}`,
        },
    });
    const data = (await response).json();
    return data;
}

