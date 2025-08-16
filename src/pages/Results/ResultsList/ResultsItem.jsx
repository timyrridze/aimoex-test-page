import {getScoreColor} from "../getScoreColor"

export function ResultItem({score, date}) {
  let className = "result-list__item invisible"

  return (
    <li className={className + " " + getScoreColor(score)}><span>{score}/9</span> {date}</li>
  )
}