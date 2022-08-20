import Student from "./Student/Student";
import Examen from "./Examen/Examen";

const App = () => {
  return (
    <>
      <Student name="Tigran" surname="Harutyunyan">
        <Examen 
          title="Math"
          mid1={18}
          mid2={14}
          absences={3} 
        />
        <Examen
          title="JavaScript"
          mid1={18}
          mid2={17}
          absences={1} 
        />
        <Examen />
      </Student>
    </>
  );
};

export default App;
