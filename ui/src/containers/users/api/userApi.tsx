import instance from "@/utils/axios";

const getUser = async (id: any) => {
  return await instance
    .get(`http://localhost:5000/users/${id}`)
    .then((response) => {
      return response.data;
    });
};

const getUsers = async () => {
  return await instance
    .get("http://localhost:5000/users")
    .then((response) => {
      return response.data;
    });
};

const UserApi = {
  getUsers,
  getUser,
};

export default UserApi;
