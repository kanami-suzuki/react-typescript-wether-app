//App.tsx
//tsxはTypeScriptのjsx版。JavaScriptでReactを書くとjsxになる
//Reactでclassの指定は「className」と書く

//入力された都市名(データ)を送る仕組みはバックエンドで開発されるが、今回はAPIを使用する
//APIにデータを送る仕組みをつくるために、入力されたデータを保管する場所をつくる
//保管場所のことをReactではstateと呼ぶ
//stateをつくるために下記のようにuseStateを読み込む
import { useState } from "react"
import Title from "./components/title" //title.tsxからTitleを読み込んでいる
import Form from "./components/form"
import Result from "./components/result"

type ResultsState = {
  country: string
  cityName: string
  temperature: string
  conditionText: string
  icon: string
}

const App = () => {
  const [city, setCity] = useState<string>("")
  //[]の中は[state(ユーザーが入力した都市名)、stateにデータを書き込んだり操作したりする仕組み]
  //setCityを使うことで、city内のデータを操作することができる
  //[]内の名前は慣例的に[state名, setState名]という書き方をする
  //文字通りstateにデータをsetするという意味
  //=の右のuseStateは上のimportで読み込んでいるuseState
  //()内はstateの初期データ。初期段階で何も表示しないときは("")と記述する

  const [results, setResults] = useState<ResultsState>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  })

  const getWether = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`https://api.weatherapi.com/v1/current.json?key=320c58e03e324877a7d64924241011&q=${city}&aqi=no`) //APIに呼びかける(コールする)
      .then(res => res.json()) //APIにデータを送った後の処理
      .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })
      })
  }
  //form.tsxからAPIに都市名(データ)を送る仕組みをつくる

  return(
    <div className="wrapper">
      {/* コンポーネントをimportすると下記のようにタグみたいに記述できる
      普通のタグのような記述でも表示される(<Title></Title>)
      ただしコンポーネントのタグは必ず先頭を大文字にすること */}
      <div className="container">
        <Title/>
        <Form setCity={setCity} getWether={getWether}/>
        <Result results={results}/>
      </div>
    </div>
  )
}

export default App