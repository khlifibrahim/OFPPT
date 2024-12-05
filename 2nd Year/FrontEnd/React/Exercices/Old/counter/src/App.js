import {useState} from "react"
import './App.css';

function App() {
  const [value, setValue] = useState(0)
  const handlClickvaluePlus = ()=> {
    const plusValue = value + 1
    setValue(plusValue)
  }
  const handlClickvalueMins = ()=> {
    if(value > 0) {
      const minsValue = value - 1
      setValue(minsValue)
    }
  }
  const handlClickReset = ()=> {
    setValue(0)
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800">
      <h1 className="text-center mb-4 text-white font-bold text-2xl">
        Counter
      </h1>
      <div className="w-[480px] flex flex-col gap-4 items-center justify-center text-white font-medium ">
        <div className="w-full flex items-center justify-cente">
          <button
            className="min bg-indigo-500 w-full py-4 text-center rounded-l-xl border-r-2"
            onClick={handlClickvalueMins}
          >-</button>

          <div className="value w-1/2 text-center bg-indigo-500 py-4">{value}</div>

          <button
            className="plus bg-indigo-500 w-full py-4 text-center rounded-r-xl border-l-2"
            onClick={handlClickvaluePlus}
          >+</button>
        </div>
        <button className="w-full bg-indigo-500 py-4 text-center rounded-xl"
          onClick={handlClickReset}
        >Reset</button>
      </div>
    </div>
  );
}

export default App;
