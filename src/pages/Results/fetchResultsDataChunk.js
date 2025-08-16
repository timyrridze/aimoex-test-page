import { resultsData } from "./resultsData";


export function fetchResultsDataChunk(chunkNumber) {
  const chunkSize = 10

  const sliceStart = (chunkNumber - 1) * chunkSize

  let sliceEnd = chunkNumber * chunkSize

  if (sliceEnd > resultsData.results.length) sliceEnd = resultsData.results.length

  const resultsArr = resultsData.results.slice(sliceStart, sliceEnd)

  return {
    userName: resultsData.userName,
    results: resultsArr,
    isLastChunk: sliceEnd === resultsData.results.length ? true : false,
    avgScore: resultsData.results.reduce((acc, result) => acc + result.score, 0) / resultsData.results.length,
  }
}