import AnimeTagsItem from "./AnimeTagsItem";

export default function AnimeTags() {

    const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <AnimeTagsItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
  )
}

