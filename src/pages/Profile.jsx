import { Section, Text } from "../components/common";
import { PreferredCurrency, ProfileInfo, UpdateProfile } from "../components/profile";

const Profile = () => {
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="profile.title"
        className="text-accent mb-5 md:mb-10 text-2xl md:text-4xl font-bold"
      />
      <ProfileInfo />
      <UpdateProfile />
      <PreferredCurrency />
    </Section>
  );
};

export default Profile;
