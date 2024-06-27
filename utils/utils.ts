export const formatNumber = (num: number) => {
  if (num < 1000) {
    return num.toString()
  }

  const units = ['', 'k', 'M', 'B', 'T']
  let unitIndex = 0

  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000
    unitIndex++
  }
  console.log(num, 'num')

  return num.toFixed(1).replace(/\.0$/, '') + units[unitIndex]
}
