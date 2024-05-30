import { createBrowserRouter } from "react-router-dom";
import quixstyle from "./css/createQuestion.module.css";
createBrowserRouter

const Select = ({ selText }) => {
  return (
    <div className={quixstyle.selectBox}>
      <div className={quixstyle.selectText}>{selText}</div>
      <select name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
};

const CreateQuestion = () => {
  const sellText = [
    {
      selText: "Duration (in minutes)",
    },
    {
      selText: "No. of questions",
    },
    {
      selText: "Score per question",
    },
  ];
  return (
    <div className={quixstyle.creation}>
      <div className={quixstyle.headSection}>
        <h3>Set up a new Quiz</h3>
        <div className={quixstyle.checkbox}>
          <div>✔</div>
          <div>✖</div>
        </div>
      </div>

      {/* <hr id={quixstyle.hr} /> */}

      <form className={quixstyle.form}>
        <div>
          <label htmlFor="">Details</label>
          <div className={quixstyle.titlebox}>
            <div className={quixstyle.title}>Title:</div>
            <input type="text" name="" id="" />
          </div>
        </div>

        <div className={quixstyle.allSelect}>
          {sellText.map(({ selText }) => {
            return <Select selText={selText} />;
          })}
        </div>

        <div className={quixstyle.descbox}>
          <div className={quixstyle.desc}>Description:</div>
          <input type="text" name="" id="" />
        </div>

        <div className={quixstyle.schelbox}>
          <div className={quixstyle.schel}>Schedule</div>
          <input type="datetime-local" name="" id="" />
        </div>
      </form>

      <form className={quixstyle.sect}>
        <div className={quixstyle.questions}>
          <section>
            <h3>Questions</h3>
            <div>
              <label htmlFor="">Use question Bank:</label>
              <select name="" id="" className={quixstyle.sectOpt}>
                <option value="">Bank one</option>
                <option value="">Bank Two</option>
                <option value="">Bank three</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Randomise question Order:</label>
              <select name="" id="" className={quixstyle.sectOpt}>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
          </section>
        </div>

        <div className={quixstyle.answers}>

        <section>
            <h3>Answers</h3>
            <div>
              <label htmlFor="">Reveal Answer after Quiz:</label>
              <select name="" id="" className={quixstyle.sectOpt}>
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default CreateQuestion;
