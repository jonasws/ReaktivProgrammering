const MyApp = ({ uppercase, setUpperCase }) =>
  <div>
    <p className={classNames({ uppercase })}>Her er noe tekst</p>
    {uppercase ? <p>Her er noe mer tekst</p> : null}
    <button onClick={setUpperCase}>Gjør ting stort!</button>
  </div>;
