import React , { useState , useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [quote ,setQuote] = useState("");
  const [member,setMember] = useState("");
  
  const quoteAPI =  async () => {
      let arrayOfQuote =[];
      
      try{
        const data = await axios.get("https://bts-quotes-api.herokuapp.com/quote/random");
        arrayOfQuote = data.data;
        console.log(data);
      }catch(error){
        console.log(error);
      }
      try{
        setQuote(arrayOfQuote.quote);
        setMember(arrayOfQuote.member);
        
      }catch(error){
        console.log(error);
      }
  }


  useEffect(() => {
   quoteAPI()
  }, [])


  return (
    
    <div className="App">
    
    <div className="card-body card-color">
    <p className="card-heading">Quotes </p>
    <p className="card-text card-color">{quote}</p>
    <h5 className="card-title">- {member}</h5>
    <button className="btn card-color"
        onClick={quoteAPI}
        type="submit">
        <i class="fas fa-mouse"></i> Generate Quote</button>
        <button className="ml-3 btn card-color"
          onClick={() => {
                        
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"><i class="fab fa-twitter"></i> Share Quote</button>
            
      </div>
    </div>
    )
 
}

export default App;
