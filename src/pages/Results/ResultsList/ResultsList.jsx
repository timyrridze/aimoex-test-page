import { useEffect, useRef } from "react"
import { ResultItem } from "./ResultsItem"

async function animation(node) {
  const resolveDelay = 200

  return await new Promise((resolve) => {
    node.classList.add("animation") 

    node.onanimationend = () => {
      node.classList.remove("animation-move-in")
      node.classList.remove("invisible") 
    } 

    setTimeout(resolve, resolveDelay)
  })
}

export function ResultsList({ results, lastResultIndex }) {
  const resultsListRef = useRef()

  useEffect(() => {
    const resultsListNode = resultsListRef.current

    ;(async () => {

      for (let i = lastResultIndex ? lastResultIndex + 1 : 0; i < results.length; i++) {
        const current = resultsListNode.children[i]
        await animation(current)
      }

    })()
    
  }, [results])

  return (
    <ul ref={resultsListRef} className="results-list">
      {results.map((result, index) => <ResultItem key={index} score={result.score} date={result.date} />)}
    </ul>
  )
}