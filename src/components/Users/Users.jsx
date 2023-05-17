import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllUsers from "../../store/actions/users";

const Users = () => {
  const { error, loading, users } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  console.log(loading, users);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
        {loading
          ? "loading..."
          : users.map((el) => {
              return (
                <div key={el.id}>
                  {el.email} - {el.username}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Users;
