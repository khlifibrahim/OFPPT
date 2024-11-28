import { useState } from 'react';

function Inscription(props) {
    let [nom, setNom] = useState('');
    let [prenom, setPrenom] = useState('');
    let [messageInfo, setMessageInfo] = useState('');
    let [messageError, setMessageError] = useState('');
  
    let handleSubmit = (e) => {
        e.preventDefault();
        let rg = new RegExp("^[A-Za-z]+$");
        if (!rg.test(nom) || !rg.test(prenom)) {
            setMessageError("Erreur : nom et prénom ne doivent contenir que des caractères alphabétiques");
        } else {
            setMessageError("");
            setMessageInfo(`Nom = ${nom} et Prénom = ${prenom}`);
        }
    };
  
    let handlechangeNom = (e) => {
        setNom(e.target.value);
    };
  
    let handlechangePrenom = (e) => {
        setPrenom(e.target.value);
    };
  
    return (
        <form onSubmit={handleSubmit}>
            Nom:
            <input 
                type="text" 
                value={nom} 
                onChange={handlechangeNom} 
            />
            Prénom:
            <input 
                type="text" 
                value={prenom} 
                onChange={handlechangePrenom} 
            />
            <button type="submit">Afficher (Envoyer)</button>
            <div>{messageInfo}</div>
            <div className="error">{messageError}</div>
        </form>
    );
  }
  
  export default Inscription;