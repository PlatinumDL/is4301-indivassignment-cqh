import './Pages.css';

const modules = [
  { code: 'BT1101', title: 'Introduction to Business Analytics' },
  { code: 'BT2101', title: 'Econometrics Modelling for Business Analytics' },
  { code: 'BT2102', title: 'Data Management and Visualisation' },
  { code: 'BT2103', title: 'Optimization Methods in Business Analytics' },
];

function Academics() {
  return (
    <main className="page">
      <h1>Academics</h1>
      <p>Modules taught at the university:</p>
      <table className="modules-table">
        <thead>
          <tr>
            <th>Module Code</th>
            <th>Module Title</th>
          </tr>
        </thead>
        <tbody>
          {modules.map((module) => (
            <tr key={module.code}>
              <td>{module.code}</td>
              <td>{module.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Academics;
