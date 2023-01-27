import { useState } from "react";
import { useGetAllUsersQuery } from "../services/usersApi";

const UserForm = () => {
  const { data, isLoading, isError, error } = useGetAllUsersQuery();

  let content = (
    <>
      <div>
        {isLoading
          ? "loading..."
          : isError
          ? "error"
          : data?.map((i) => {
              return (
                <p key={i._id}>
                  {i.name} says 'Sup??, and his email addy is {i.email}
                </p>
              );
            })}
      </div>
    </>
  );

  return content;
};

export default UserForm;
