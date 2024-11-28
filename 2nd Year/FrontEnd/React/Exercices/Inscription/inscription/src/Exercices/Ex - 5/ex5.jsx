import React from 'react'
import CheckBox from "./checkbox";


const ex5() {

    const T = [
        { text: "Français", value: "fr", checked: true },
        { text: "Anglais", value: "en", checked: false },
        { text: "Espagnol", value: "es", checked: false },
      ];
  const [LangueChoix, setLangueChoix] = useState([]);

  const AfficherCaseCoche = (event) => {
    event.preventDefault();

    
    const selectedLangues = Array.from(
      document.querySelectorAll("input[type=checkbox]:checked")
    ).map((checkbox) => checkbox.value);

    setLangueChoix(selectedLangues); 
  };

  return (
    <form onSubmit={AfficherCaseCoche}>
      {T.map((item, index) => (
        <CheckBox
          key={index}
          text={item.text}
          value={item.value}
          checked={item.checked}
        />
      ))}
      <button>Envoyer</button>

      <div>
        {LangueChoix.map((lang, index) => (
          <span key={index}>{lang} </span>
        ))}
      </div>
    </form>
  );
};

export default ex5