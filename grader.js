function getAverage(grades){
  let result = 0
  for (const grade of grades) {
    result += grade
  }
  return result / grades.length 
}
function getGrade(score) {
  if (score === 100) {
    return "A+"
  } else if (score >= 90) {
    return "A"
  } else if (score >= 80) {
    return "B"
  } else if (score >= 70) {
    return "C"
  } else if (score >= 60) {
    return "D"
  }
  return "F"
}
function hasPassingGrade(score){
  const grade = getGrade(score)
  if (grade === "F") return false
  return true
}

function studentMsg(grades, score) {
  const average = getAverage(grades)
  const grade = getGrade(score)
  const hasPassed = hasPassingGrade(score)
  let result;
  if (hasPassed) {
    result = `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  } else {
    result = `Class average: ${average}. Your grade: ${grade}. You failed the course.`
  }
  return result
}

