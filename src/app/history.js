//历史搜索记录
function getHistory() {
  return JSON.parse(localStorage.getItem('history'))
}

function setHistory(value) {
  let history = JSON.parse(localStorage.getItem('history'))
  // let newArr = [].concat([value]).concat(history ? history : [])
  let newArr = Array.from(new Set(history))
  if (value && value !== '')
    localStorage.setItem('history', JSON.stringify([value, ...newArr]))
}

function clearHistory() {
  localStorage.removeItem('history')
}

export {
  getHistory,
  setHistory,
  clearHistory
}