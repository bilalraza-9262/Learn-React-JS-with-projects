import "./input.css"
import { useId } from "react"
export function Main(
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectCurrency = "usd",
	amountDisable = false,
	currencyDisable = false,
) {
	const uniqueId = useId();
	// console.log(uniqueId)
	return (
		<div className="inner">
			<div>
				<label className="labels" htmlFor={uniqueId}>{label}</label>
				<input
					id={uniqueId}
					className="userInput"
					type="number"
					placeholder="Amount"
					disabled={amountDisable}
					value={amount}
					onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
				/>
			</div>
			<div className="righter">
				<p className="labels">Your Currency Type</p>

				<select
					name=""
					id="selector"
					value={selectCurrency}
					disabled={currencyDisable}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
				>
					{currencyOptions.map((currency) => (
						<option value="usd" key={currency}>
							{currency}
						</option>
					))}

				</select>
			</div>
		</div>
	)
}