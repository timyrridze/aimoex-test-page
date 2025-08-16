export function getScoreColor(score) {

  if (score >= 7) {
    return "green"
  }

  else if (score < 7 && score >= 6) {
    return "orange"
  }

  else if (score < 6) {
    return "red"
  }
  
}