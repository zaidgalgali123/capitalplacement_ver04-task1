import BooleanQuestion from "./BooleanQuestion";
import ParagraphQuestion from "./ParagraphQuestion";
const SelectForm = ({ formType, handleHideQuestionForm }) => {
  if (formType === "yes_or_no") {
    return <BooleanQuestion handleHideQuestionForm={handleHideQuestionForm} />;
  } else if (formType === "paragraph") {
    return (
      <ParagraphQuestion handleHideQuestionForm={handleHideQuestionForm} />
    );
  } else {
    return null;
  }
};

export default SelectForm;
