import { Section, Text } from "../components/common";
import SEO from "../components/SEO";

const PageNotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Expensra"
        description="The page you are looking for does not exist. Return to Expensra and continue managing your finances."
        noIndex
      />
      <Section className="flex-center h-full">
        <div className="mx-auto">
          <div className="mx-auto max-w-lg">
            <div className="space-y-5 text-center">
              <Text
                tagElement="p"
                i18nKey="errors.404"
                className="text-accent font-semibold"
              />
              <Text
                tagElement="h1"
                i18nKey="errors.pageNotFound"
                className="text-secondary text-4xl font-semibold"
              />
              <Text
                tagElement="p"
                i18nKey="errors.pageNotFoundDesc"
                className="text-muted"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default PageNotFound;
