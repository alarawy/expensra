import { Section, Text } from "../components/common";

const PageNotFound = () => {
  return (
    <Section className="h-full flex-center">
      <div className="mx-auto">
        <div className="mx-auto max-w-lg">
          <div className="space-y-5 text-center">
            <Text tagElement="p" i18nKey="errors.404" className="font-semibold text-accent" />
            <Text tagElement="h1" i18nKey="errors.pageNotFound" className="text-4xl font-semibold text-secondary" />
            <Text tagElement="p" i18nKey="errors.pageNotFoundDesc" className="text-muted" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PageNotFound;
