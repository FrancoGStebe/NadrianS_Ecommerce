

import Orders from "./orders/Orders";


export const UserProfile = () => {

  return (
    <div className="container mx-auto py-4 w-11/12 mt-20">
      <div className="bg-white rounded-lg shadow-lg p-4 mx-auto flex flex-row flex-wrap">
        <hr />
        <Orders />
      </div>
    </div>
  );
};

export default UserProfile;
