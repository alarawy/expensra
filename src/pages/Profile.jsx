import { Section, Text } from "../components/common";
import {
  PreferredCurrency,
  ProfileInfo,
  UpdateProfile,
} from "../components/profile";
import SEO from "../components/SEO";

const Profile = () => {
  return (
    <>
      <SEO
        title="Expensra | Profile"
        description="Manage your personal information and account settings."
      />
      <Section>
        <Text
          tagElement="h1"
          i18nKey="profile.title"
          className="text-accent mb-5 text-2xl font-bold md:text-4xl"
        />
        <ProfileInfo />
        <UpdateProfile />
        <PreferredCurrency />
      </Section>
    </>
  );
};

export default Profile;
