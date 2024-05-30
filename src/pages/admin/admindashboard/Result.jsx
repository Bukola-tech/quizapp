import resultstyle from "./css/result.module.css";

const Table = ({ title, Gname, Pgroup, part, date }) => {
  return (
    <tr className={resultstyle.tr}>
      <td>{title}</td>
      <td>{Gname} </td>
      <td> {Pgroup}</td>
      <td>{part}</td>
      <td>{date}</td>
      <td>
        <button>View</button>
      </td>
    </tr>
  );
};

const Result = () => {
  const tableData = [
    {
      title: "hi",
      Gname: "heelo",
      Pgroup: "grop",
      part: "part",
      date: " date",
    },
    {
      title: "hi",
      Gname: "heelo",
      Pgroup: "grop",
      part: "part",
      date: " date",
    },
    {
      title: "hi",
      Gname: "heelo",
      Pgroup: "grop",
      part: "part",
      date: " date",
    },
  ];
  return (
    <div className={resultstyle.resultBox}>
      <h2>Completed Quiz</h2>

      <table className={resultstyle.table}>
        <tr>
          <th>Title</th>
          <th>Group Name</th>
          <th>No. of Persons in group</th>
          <th>Participants</th>
          <th>date</th>
          <th></th>
        </tr>
      
          {tableData.map(({ Gname, Pgroup, part, title, date }) => (
            <Table
              Gname={Gname}
              part={part}
              title={title}
              Pgroup={Pgroup}
              date={date}
            />
          ))}
        
      </table>
    </div>
  );
};

export default Result;
