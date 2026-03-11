import AvatarImage from "../../assets/images/avatar.png";

const Avatar = ({image, className= "h-10 w-10"}) => {
  return (
    <div className={className}>
      <img
        className="bg-accent  cursor-pointer rounded-full"
        src={AvatarImage || image}
        alt="User profile"
      />
    </div>
  );
};

export default Avatar;
