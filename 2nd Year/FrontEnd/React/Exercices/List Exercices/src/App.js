import './App.css';
import { IconCircleCheck, IconSquareRoundedX, IconArrowUpRight } from '@tabler/icons-react';

function App() {
  const exList = [
    {
        "serie": "Series 1",
        "ex-number": "Exercice 1",
        "ex-note": "Exercice",
        "progress": true,
        "date": "2024-10-12",
        "link": "Exercices/Ex 1 - Books/"
    },
    {
        "serie": "Series 1",
        "ex-number": "Exercice 1",
        "ex-note": "Exercice",
        "progress": false,
        "date": "2024-10-12",
        "link": "Exercices/Ex 2 - Counter/"
    },
    {
        "serie": "Series 1",
        "ex-number": "Exercice 1",
        "ex-note": "Exercice",
        "progress": true,
        "date": "2024-10-12",
        "link": "Exercices/Ex 1 - Books/"
    }
];

  const checkProgress = (progress)=> progress === true ? "Completed" : "In progress";
  const checkIcon = (progress)=> progress === true ? <IconCircleCheck className="text-green-500" size={24} /> : <IconSquareRoundedX stroke={2} className='text-slate-400' />;
  const handleNavigation = (link) => {
    window.location.href = link
  }

  return (
    <div className="App  text-[#475467]">
      <div className="header mb-2 h-64  text-center flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
        <h1 className="text-3xl font-bold text-zinc-300">React Exercices list</h1>
      </div>
      <div className="mx-24 border rounded-lg overflow-hidden">
        <div className="table-head flex gap-2 bg-[#FCFAFF] font-medium px-4 py-2">
          <div className="serie flex-1 border-r">Status</div>
          <div className="serie flex-1 border-r">Serie</div>
          <div className="number flex-1 border-r">Ex. number</div>
          <div className="name flex-auto border-r">Ex. note</div>
          <div className="progress flex-1 border-r">Progress</div>
          <div className="date flex-1">Date</div>
          <div className="date flex-1">Action</div>
        </div>
        <div className="table-body">
          {exList.map((ex, i) => (
            <div className="row flex gap-2 px-4 py-2" key={i}>
              <div className="serie flex-1 border-r">{checkIcon(ex.progress)}</div>
              <div className="serie flex-1 border-r">{ex.serie}</div>
              <div className="number flex-1 border-r">{ex['ex-number']}</div>
              <div className="name flex-auto border-r">{ex['ex-note']}</div>
              <div className="progress flex-1 border-r">{checkProgress(ex.progress)}</div>
              <div className="date flex-1">{ex.date}</div>
              <div className="date flex-1 cursor-pointer" onClick={() => handleNavigation(ex.link)}><IconArrowUpRight stroke={2} className='text-[#475467]' /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
