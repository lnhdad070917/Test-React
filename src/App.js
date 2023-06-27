import { useState } from "react";
import "./assets/index.css";

function App() {
  const [students, setStudents] = useState([
    {
      name: "Mahasiswa 1",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 2",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 3",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 4",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 5",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 6",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 7",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 8",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 9",
      aspects: ["1", "1", "1", "1"],
    },
    {
      name: "Mahasiswa 10",
      aspects: ["1", "1", "1", "1"],
    },
  ]);

  const handleSave = () => {
    const jsonData = {};

    students.forEach((student, studentIndex) => {
      const studentKey = `mahasiswa_${studentIndex + 1}`;
      student.aspects.forEach((aspect, aspectIndex) => {
        const aspectKey = `aspek_penilaian_${aspectIndex + 1}`;
        if (!jsonData[aspectKey]) {
          jsonData[aspectKey] = {};
        }
        jsonData[aspectKey][studentKey] = aspect;
      });
    });

    console.log(jsonData);
  };

  const handleInputChange = (e, studentIndex, aspectIndex) => {
    const { value } = e.target;
    const updatedStudents = [...students];
    updatedStudents[studentIndex].aspects[aspectIndex] = value;
    setStudents(updatedStudents);
  };

  const renderStudents = () => {
    return students.map((student, studentIndex) => (
      <tr key={studentIndex}>
        <td>
          <span>icon</span> {student.name}
        </td>
        {student.aspects.map((aspect, aspectIndex) => (
          <td key={aspectIndex}>
            <select
              value={aspect}
              onChange={(e) => handleInputChange(e, studentIndex, aspectIndex)}
            >
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
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <div className="text-center">
        <h2>Aplikasi Penilaian Mahasiswa</h2>
      </div>
      <div className="center-position">
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Aspek Penilaian 1</th>
              <th className="text-center">Aspek Penilaian 2</th>
              <th className="text-center">Aspek Penilaian 3</th>
              <th className="text-center">Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>{renderStudents()}</tbody>
        </table>
      </div>
      <div className="center-position">
        <div className="container-right-content">
          <button className="btn-submit" onClick={handleSave}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
