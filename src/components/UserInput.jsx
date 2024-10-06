export default function UserInput({ onChangeInput, userInput }) {
    return (
        <section id="user-input" >
            <div className="input-group">
                <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
                <input required id="initialInvestment" type="number" value={userInput.initialInvestment} onChange={onChangeInput} />
                <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
                <input required id="annualInvestment" type="number" value={userInput.annualInvestment} onChange={onChangeInput} />
            </div>
            <div className="input-group">
                <label htmlFor="expectedReturn">EXPECTED RETURN</label>
                <input required id="expectedReturn" type="number" value={userInput.expectedReturn} onChange={onChangeInput} />
                <label htmlFor="duration" >DURATION</label>
                <input required id="duration" type="number" value={userInput.duration} onChange={onChangeInput} />
            </div>
        </section>
    );
}