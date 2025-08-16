import "./Results.css"
import { useEffect, useRef, useState } from "react"
import { ResultsList } from "./ResultsList/ResultsList"
import { fetchResultsDataChunk } from "./fetchResultsDataChunk"
import { getScoreColor } from "./getScoreColor"

export function Results() {
  const [data, setData] = useState()
  const dataChunkNumber = useRef(1)
  const lastResultIndex = useRef(null)

  useEffect(loadNewData, [])

  function loadNewData() {
    const dataChunk = fetchResultsDataChunk(dataChunkNumber.current)

    if (data)
      lastResultIndex.current = data.results.length - 1

    setData({ ...dataChunk, results: [...(data ? data.results : []), ...dataChunk.results] })

    dataChunkNumber.current += 1
  }

  return (
    <div className="results-page">
      {data ? <h1 className={"results-page__title" + " " + getScoreColor(data?.avgScore)}>Средний балл: {data?.avgScore}/9</h1> : null}
      <main>
        <ResultsList results={data ? data.results : []} lastResultIndex={lastResultIndex?.current}/>
        {data ? <button type="button" className={"load-results" + (data?.isLastChunk === true ? " hidden" : "")} onClick={loadNewData}>Загрузить еще</button> : null}
      </main>
    </div>
  )
}