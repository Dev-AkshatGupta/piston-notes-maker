import { notifyError } from "./Notifications";
import { editUser } from "Redux/Reducers-Redux/authSlice";

export const settingsImageHandler = async (details,dispatch) => {
  try {
    const data = new FormData();
    data.append("file", details.profilePhoto.chosen);
    data.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME);
    data.append("upload_preset", "fridayaaa");

    fetch("https://api.cloudinary.com/v1_1/piston/image/upload" ?? "", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const obj = {
          ...details,
          profilePhoto: {
            default: details.profilePhoto.default,
            chosen: data.secure_url,
          },
        };

        dispatch(editUser(obj));
      });
  } catch (error) {
    notifyError("Can't uplaod image");
    console.log(error);
  }
};