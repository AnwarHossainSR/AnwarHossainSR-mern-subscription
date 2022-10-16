import { Text } from "components/atoms/text";

export interface QuestionProps {
  title: string;
  questionType: string,
  createDate: Date,
  createChildren?: String,
  modifyDate: Date,
  modifyChildren?: String,
}


export const Question: React.FC<QuestionProps> = ({ title, questionType, createDate, modifyDate, modifyChildren, createChildren }) => {

  // Months
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Created Date
  let create = new Date(createDate);
  let dateOne = months[create.getMonth()] + " " + create.getDate() + " " + create.getFullYear();

  // Modify Date
  let modify = new Date(modifyDate);
  let dateTwo = months[modify.getMonth()] + " " + modify.getDate() + " " + modify.getFullYear();

  return (
    <section className="m-question">
      <div className="m-question__type">
        <Text children={title} type="font18" color="primary" fontWeight="bold" lineHeight="line25" textAlign="left" />
        <Text children={questionType} type="font16" color="black-active" fontWeight="medium" lineHeight="line22" textAlign="left" />
      </div>

      <div>
        <Text children={createChildren + ": " + dateOne} type="font13" color="gray-light" fontWeight="regular" lineHeight="line20" textAlign="right" fontStyle="italic" />
        <Text children={modifyChildren + ": " + dateTwo} type="font13" color="gray-light" fontWeight="regular" lineHeight="line20" textAlign="right" fontStyle="italic" />
      </div>
    </section >
  );
};

