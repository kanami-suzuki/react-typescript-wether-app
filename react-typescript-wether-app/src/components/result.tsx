type ResultsProps = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string; 
    icon: string;
  }
}

const Result = (props: ResultsProps) => {
  return(
    <>
      {props.results.country && 
        <>
          <p className="results-country">{props.results.country}</p>
          <p className="results-city">{props.results.cityName}</p>
          <p className="results-temp">{props.results.temperature}<span>℃</span></p>
          <div className="results-condition">
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </>
      }
    </>
  )
}

export default Result