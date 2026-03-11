import { Avatar, Text } from "../common";

const ProfileInfo = () => {
  const user = {
    firstName: "Ahmed",
    lastName: "Reda",
    email: "ahmed@gmail.com",
  };

  return (
    <div className="card py-10 border-0 m-0">
      <div className="flex-center text-center flex-col md:text-start md:flex-row md:justify-start gap-10">
        <Avatar className="w-30 h-30"/>
        <div>
          <Text
            tagElement="h3"
            className="font-medium text-xl"
          >{`${user.firstName} ${user.lastName}`}</Text>
          <Text tagElement="p" className="text-secondary">
            {user.email}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
