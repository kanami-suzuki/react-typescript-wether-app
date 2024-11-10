type FormProps = {
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWether: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: FormProps) => {
  return(
    <form onSubmit={props.getWether}>
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} value={props.city}/>
      {/* onChange={e => setCity(e.target.value)}はinputに入力されたデータをsetCityに渡す仕組み */}

      <button type="submit">Get Weather</button>
    </form>
  )
}

export default Form