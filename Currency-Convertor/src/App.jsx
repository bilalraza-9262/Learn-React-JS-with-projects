import { useState } from 'react'
import useCurrencyInfo from './ApiHooks/currency';
import './App.css'
import { Main } from './components/input/Input'

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr")
  const [convertAmount, setconvertAmount] = useState(0)

  const cur = useCurrencyInfo(from)
  const options = Object.keys(cur)

  const convertor = () => {
    setconvertAmount(amount * cur[to])
  }

  return (
    <div className='main'>
      <div className='box'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convertor()
        }}>
          <Main
            label="from"
            amount={amount}
            // onAmountChange={s}
            onCurrencyChange={(currency) => setAmount(amount)}
            currencyOptions={options}
            selectCurrency={from}
            onAmountChange={(amount)=>setAmount(amount)}
          />
          <hr />
          <Main
            label="to"
            amount={convertAmount} 
            // onAmountChange={s}
            onCurrencyChange={(currency) => setTo(amount)}
            currencyoptions={options}
            selectCurrency={to}
            amounDisable
          />
        </form>

      </div>
      <button className='convertButton'>Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
    </div>
  )
}

export default App
