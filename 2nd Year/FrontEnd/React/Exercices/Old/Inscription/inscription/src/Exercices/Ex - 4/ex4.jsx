import  {useState} from 'react'

function Ex4() {
  const options = [
    { text: "Option 1", color: "lightblue" },
    { text: "Option 2", color: "lightgreen" },
    { text: "Option 3", color: "lightcoral" },
    { text: "Option 4", color: "lightgoldenrodyellow" },
  ];
  
  const [backgroundColor, setBackgroundColor] = useState("");
  
  const handleChange = (event) => {
    const selectedIndex = event.target.value;
    const selectedColor = options[selectedIndex].color;
    setBackgroundColor(selectedColor);
    console.log(`Selected: ${options[selectedIndex].text}, Color: ${selectedColor}`);
  };
  
    return (
      <select 
      onChange={handleChange}
      style={{ backgroundColor: backgroundColor, height: "100%", padding: "20px" }}
      >
        {options.map((option, index) => (
          <option key={index} value={index}>
            {option.text}
          </option>
        ))}
      </select>
    );
}

export default Ex4;