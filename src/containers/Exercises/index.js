import "./styles.scss";
import { data } from "./data";

const Exercises = () => {
  return (
    <div className="exercises container mt-5">
      {data.map((ex, index) => {
        return (
          <div key={`ex_${index}`} className="border-bottom pb-3 mb-3">
            <div className="font-weight-bold text-danger">Ex {index + 1} </div>
            {_renderQuestion(ex)}
            {_renderAnswer(ex)}
          </div>
        );
      })}
    </div>
  );
};

const _renderQuestion = (ex) => {
  return <div className="font-weight-bold mb-3">{ex.question}</div>;
};

const _renderAnswer = (ex) => {
  console.log(
    "ex.result.toString()",
    ex.result.toString().replace(/\n/gim, "<br />")
  );
  return (
    <div className="mt-3 text-primary font-weight-bold">
      <div
        className="text-secondary mb-2"
        dangerouslySetInnerHTML={{
          __html: ex.result
            .toString()
            .replace(/ /gim, "&nbsp&nbsp")
            .replace(/\/\//gim, "<br /><br />\\\\")
            .replace(/\n/gim, "<br />"),
        }}
      ></div>
      <div>Result: {ex.result()}</div>
    </div>
  );
};

export default Exercises;
