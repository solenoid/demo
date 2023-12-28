import Link from 'next/link'

const input = `Time:        56     71     79     99
Distance:   334   1135   1350   2430`

// @ts-ignore
const sampleInput = `Time:      7  15   30
Distance:  9  40  200`

const answerIt = (times: number[], distances: number[]) => {
  let part1 = 1
  for (let race = 0; race < times.length; race++) {
    const raceTime = times[race]
    const raceDistance = distances[race]
    let winners = []
    for (let delay = 1; delay < raceTime; delay++) {
      const timeLeft = raceTime - delay
      const newTime = timeLeft * delay
      if (newTime > raceDistance) {
        winners.push(newTime)
      }
    }
    part1 *= winners.length
    // console.log(winners)
  }
  return part1
}

let times: number[] = []
let distances: number[] = []

input.split('\n').forEach((line) => {
  const parts = line.split(/\s+/g)
  if (parts[0] === 'Time:') {
    times = parts.slice(1).map(Number)
  }
  if (parts[0] === 'Distance:') {
    distances = parts.slice(1).map(Number)
  }
})

const part1 = answerIt(times, distances)
console.log(part1)

let time: number = 0
let distance: number = 0

input
  .split('\n')
  .map((line) => line.replace(/\s*/g, ''))
  .forEach((line) => {
    const parts = line.split(/\:/g)
    if (parts[0] === 'Time') {
      time = Number(parts[1])
    }
    if (parts[0] === 'Distance') {
      distance = Number(parts[1])
    }
  })
console.log(time, distance)

const part2 = answerIt([time], [distance])
console.log(part2)

const CoDeO = () => {
  return (
    <main>
      <h2>Day 6</h2>
      <p>Part 1: calculated is {part1}, and answer is 211904.</p>
      <p>Part 2: calculated is {part2}, and answer is 43364472.</p>
      <p>
        <Link href="/advent-of-code-2023">Back to Advent</Link>
      </p>
    </main>
  )
}

export default CoDeO
