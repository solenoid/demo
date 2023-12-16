import Link from 'next/link'
import { readFile } from 'node:fs/promises'

const dirPath = 'src/app/advent-of-code-2023/16'
const sampleInput = String(await readFile(`${dirPath}/sampleInput.txt`))
const realInput = String(await readFile(`${dirPath}/realInput.txt`))

// const sumIt = (prev: number, item: number) => prev + item

const useTestInput = false
const input = useTestInput ? sampleInput : realInput

const wall = input.split('\n').map((line) => line.split(''))

// console.log('wall')
// console.log(wall.map((d) => d.join('')).join('\n'))

const width = wall[0].length
const height = wall.length
type dir = 'N' | 'E' | 'S' | 'W'

// next direction for /
const forwardSlash = (d: dir): dir =>
  d === 'N' ? 'E' : d === 'E' ? 'N' : d === 'S' ? 'W' : 'S'
// next direction for /
const backSlash = (d: dir): dir =>
  d === 'N' ? 'W' : d === 'W' ? 'N' : d === 'S' ? 'E' : 'S'

const serialize = (d: dir, x: number, y: number) => `${d}:${x}:${y}`

const findEnergizedCount = (initial: string) => {
  let beamTips = new Set([initial])
  let beams = new Set([initial])
  let energyChange = true
  let energizedCount = 0
  while (beamTips.size > 0 && energyChange) {
    const newTips = Array.from(beamTips)
      .map((tip) => {
        const parts = tip.split(':')
        let d = parts[0] as dir
        let x = Number(parts[1])
        let y = Number(parts[2])
        if (d === 'E') x++
        if (d === 'N') y--
        if (d === 'W') x--
        if (d === 'S') y++

        const next = wall?.[y]?.[x] ?? ''
        if (!next) {
          return ''
        } else {
          let nextMoves: string[] = []
          if (next === '/') {
            d = forwardSlash(d)
            nextMoves = [serialize(d, x, y)]
          }
          if (next === '\\') {
            d = backSlash(d)
            nextMoves = [serialize(d, x, y)]
          }
          if (next === '-' && (d === 'N' || d === 'S')) {
            nextMoves = [serialize('E', x, y), serialize('W', x, y)]
          }
          if (next === '|' && (d === 'E' || d === 'W')) {
            nextMoves = [serialize('N', x, y), serialize('S', x, y)]
          }
          if (nextMoves.length === 0) {
            nextMoves = [serialize(d, x, y)]
          }
          nextMoves.forEach((nextMove) => {
            beams.add(nextMove)
          })
          return nextMoves
        }
      })
      .flat()
      .filter(Boolean)
    newTips.forEach((tip) => {
      beamTips.add(tip)
    })

    // allow for loops where beams bounce around forever on the same path
    if (energizedCount === beams.size) {
      energyChange = false
    } else {
      energizedCount = beams.size
    }
  }
  const energized = Array.from(beams).map((d) => d.slice(2))
  // console.log('beams')
  // for (let y = 0; y < height; y++) {
  //   let line = Array(width).fill('.')
  //   for (let x = 0; x < width; x++) {
  //     if (energized.includes(`${x}:${y}`)) {
  //       line[x] = '#'
  //     }
  //   }
  //   console.log(line.join(''))
  // }
  const ret = new Set(energized).size - 1
  // console.log(ret, initial)
  return ret
}

const part1 = findEnergizedCount(serialize('E', -1, 0))
console.log(part1)

let part2 = 0
for (let y = 0; y < height; y++) {
  part2 = Math.max(part2, findEnergizedCount(serialize('E', -1, y)))
  part2 = Math.max(part2, findEnergizedCount(serialize('W', width, y)))
}
for (let x = 0; x < height; x++) {
  part2 = Math.max(part2, findEnergizedCount(serialize('S', x, -1)))
  part2 = Math.max(part2, findEnergizedCount(serialize('N', x, height)))
}
console.log(part2)

const CoDeO = () => {
  return (
    <main>
      <h2>Day 16</h2>
      <p>Part 1: calculated is {part1}, and answer is 7199.</p>
      <p>Part 2: calculated is {part2}, and answer is 7438.</p>
      <p>
        <Link href="/advent-of-code-2023">Back to Advent</Link>
      </p>
    </main>
  )
}

export default CoDeO
