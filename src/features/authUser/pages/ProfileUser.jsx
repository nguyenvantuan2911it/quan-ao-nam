import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userApi from "../../../api/userApi";
import ProfileForm from "../components/ProfileForm";
import { toast } from "react-toastify";
ProfileUser.propTypes = {};

function ProfileUser(props) {
  const Profile = useSelector((state) => state.user.currentUser);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [ProfileValue, setProfileValue] = useState();

  useEffect(() => {
    if (!isLoggedIn) return;
    (async () => {
      try {
        const data = await userApi.getById(Profile.id);
        setProfileValue(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [Profile, isLoggedIn]);
  const initialValue = {
    name: "",
    accountname: "",
    email: "",
    password: "",
    age: "",
    gender: "female",
    birthday: "",
    city: "hn",
    ...ProfileValue,
  };

  const handleSubmitForm = (data) => {
    if (!isLoggedIn) return;

    (async () => {
      try {
        await userApi.update(data);
        toast.success("Cập nhật thông tin thành công");
      } catch (error) {
        toast.error("Cập nhật thông tin thất bại");
      }
    })();
  };
  return (
    <>
      {Boolean(ProfileValue) && (
        <ProfileForm initialValue={initialValue} onSubmit={handleSubmitForm} />
      )}
    </>
  );
}

export default ProfileUser;
