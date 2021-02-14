import { useHistory } from "react-router-dom";
import { AvatarGenerator } from "random-avatar-generator";

const generator = new AvatarGenerator();

const avatar = generator.generateRandomAvatar();

const Avatar = () => {
  const history = useHistory();
  return (
    <img
      // style={{ width: "30px" }}
      src={avatar}
      alt="Netflix Avatar"
      onClick={() => {
        history.push("/editProfile");
      }}
    />
  );
};

export default Avatar;