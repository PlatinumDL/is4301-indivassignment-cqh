import './Pages.css';

const admissionSteps = [
  'Understanding Admission requirements',
  'Submit application online',
  'Upload supporting documents',
  'Make application fee payment',
  'Check application status',
];

function Admission() {
  return (
    <main className="page">
      <h1>Admission</h1>
      <p>Admission process flow:</p>
      <ul className="admission-list">
        {admissionSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
    </main>
  );
}

export default Admission;
