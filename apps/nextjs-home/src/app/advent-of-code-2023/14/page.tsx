import Link from 'next/link'

const realInput = `#...#...O....OO.#O.O........#.OO.#.O..O.O.#.#..O#..O...#.#......#..O.....O.###O..OO.#.....O.O.......
O.#..#..O.O...O..#OO#...#.#.OO....O.#.....O.#OOO.#O.#O#O.......O......O.OO.#.#.........O..#.....#...
....O..O..O#...#O#......O...##O#.O.....#O..##..O...#O..O.O..#.O..O..#.....OO....O.O.O...O......#.O.O
##O....O....#.OOO...O.#....O#.O#OO....O....O#...O..O#O.#..O.OO...O..O..#.#O..OO.O...O..#.#OO#.......
.O.O#OO..#...#..........O#.O..##.O..OO.O...#........O##.OOOO..#.#....O..O#O.#O.##..OO..O...#..O##...
OO...O##.....#...O.#O.....#.OOO.#.##...##...##.O.....##....O..O..#..#..OO...#..........OO..#.O#...O.
.OO#..#.O.O##...O....O...O....#.O.O..#.OO........O..O..O..###..O...O#..#..#......OO.O..#O....O##.#..
#O.O..O#...O..O.O.O...#.....O..O......O....OO.OO..O#.O#..#.O......#..O...#.O.##.#....O.OO.#...O...O#
.#.O.....O...O...O...O.#.........OO.....#................O....O..#..........##.O#.OO..O###..#.......
#O...#O..O#.......O...#..O...OO..#...O........#....O#..OO...O.O..#.OOO.....O..O.#...O.OO#.OO#.OO.O#.
......#.O...O...O.O...#...#O.O#....#.O..###..O....#.#.O.OO#....O#.....O...#.O......##......#O..#OO..
#OO.##...#..O....#...#...OO...........OO.O.OOOO...#...#O..#...#O#.O.O......O....O..#.O..O...#O#.O.O.
#...O.OO...#.#.OO...O#O....OO....#O....O.O#..#....O...##..O..O.#..#..#...........O...OO#.#..O.....O#
..#..O.O#.....O....O#..#........OO#.#...#O.O....O#....O#...O..#....OO#.O.#........#O....O.O...##O.#O
....#O.....O#...O.......O.......OO..#.....#...O##.O.......#O#....O...O..O.O.......#.....#..#.O.O.O..
.....O.....O.O.O#O.O##.....OOO#...#O.O#O.....#.O#..........O#O.....O.OOO..##.#O....O.O.....#.O.O#O.#
O#O....O.#.......O.O.OO.#..#...#O#..O...O.......O.#........#O#....O....O.#...#.O.#O...O.#.........O.
........O.O...O.#O....#..O....#O.....OO#..O.O..####..#...O..O...OOO.#OO..#....#...OO..O.....#O..O..#
O#...##...#..#O#..#O#..O#....OO..O#O#.....OOOOOO#.#.O.O..O.OO.O........O...#.#......OO#...#..#.#...#
..OO.O..OO.OO....#........#O.#...#O....#...O.OO...O#..O......O.###....#O......#.....####...#..#.#OO.
..O.O..O#....#.O.#.#.#.O#..O.......OO.........##.O.....#OOO..O#..#OO#.....O...OO.O.O...#...OO#.O.#..
O...#........###..##..O#.#O.O..O.#OO.OO...#....#O.O#O..OO...##....O......OO..#...#.......#...#......
..O..#.O#...OO#O.O#....#.....O#..O..O#..O.O..O.#O.O.#O.#OO..#........#.#O..#O....O..#...#OO#...#.O.O
..#O..O.....#....O.O...O.#O.#.O#.O......#........OO...O....#.O........O#.OO#..........O.O..OOOOO#.#.
O..##.##...........O##.#...#.O.#.OO..O.O...OO#.#..#...O..O....#..#..#...O###......O#.#O#..O.#....O.#
#.O.O.O.###.##......#.OO...OO.O..OOO.O.OOO.....##..O#...O......O.#O..#...#...OO..O#......O....##.O.#
#...#.O.O....O..#...#........##O#O#O..##O.#......O...OO#O...OOOO#O..OO##..#......O.#O.#.O#.OO...O..#
#..#........#O.#O.#...O...O....#OO...O....#...O..#......#..O..O...##........O..#.O..#.#OO..OO.O##.O.
..#...#...OO.#.O#O.O.##..#..##..O#...O#....#..O....OO.OOO..O#.#....O.......OO.#.O#.....O.#O.O.#.....
.......O...O..O...#.O..OO...O.....O.O#..#OO#.O...O..O#O..O..#.OO.......O..O....OOOO..O.#.O#O#..O.##.
.####...O.....#...#......#.O...........O......O.#O.....O.#......#.#...O...#......#..O#.....O.O..O..#
O....O...#OO##.O.O...O....O..O......O.O..O..O..O#O..O.O#O.#O.#..OO.....#.O.#O#..##.#.O.O...OO....#..
....#.O..O..#...#....O............O.O.#O.#.O...O....O.#.OO....O..O##...O##......O....O...OO........#
.#O...O..O.O.#O.......O###OO.O.O.O.....##O..OO...#.O..#OO..#...#...#.O.O###.....#O#..##.#O.....O....
..#.###.#..##......#..#.#OO..O......O..#OOO.#O...#....OO.##O...O..#.#O....#OO....O.#.......#....O...
#OO...#......#..#........#.OO.##....#...OOOO..O#O..O.#..#O........#O.OO#..........OO..OO....O..#O.#.
..##.##.O....#.##O..#...###..O##.#.#......O#O..###..##......O...#.....##.#...........O.O.O....O.#...
...O.#..#......#.OO..#..O##...O..O...OO##...OO.O#....O.O.#.O.....O..#..O..#...O..#O.....O.O..O.O#.##
O......###OOO#.#.....OO...O.....O.##.....OO..........OO#O#.O.#.#O....O..#O.#..........##O...#O....O.
..#...#...OO.OO#.....OO...O.O.O.##.##O##..O.#.O#..O.O.....OOOO....#....O.O.#..##OO.O#..#O.O.#...O...
.#.OO.##....O..O...O..#.##.O#OO..#.....OO.........O.OOO.#..O....O....OOO.#.OO..O..#...O#OO.OO##.#.O.
.#.OO.O#.O.O.....#O..O.O..O......O.#O...O..O...##.O#..#.O.....O...O....OO.OOO..OO.O...OO..#.#..OOO#.
.#..O.#.O..#.OOO....#O#O#............##.#.O...O....O.OO..#.O....O#O#.O.#...#....#..OO.O.O#.#.....O.O
O....O.O#....O..#.......O..#O.##.#...O..O.......O#.#.....#..#..O......O..O.....#............##OO....
O#.O...O.##O..OO..O.O.O.#O.O..##..O#.#..#O..O#O...#...OO..#.O.O....OO..O..#..O.......O.O#....O..#.O#
#.O..##......#..O#O..........##O#.#O..O#.#..#.O..##O.O.#.OO....O#..........O..#.##..#..O.#...#O.OO..
.O..#....OO...O.......#...#...O.##...O..O.O.........OO#O.OO.O..O...O.##.....##.....##O..#......O....
#..O.O..OO....O.O#.#O#........O..OO#.OO#O.O..O..#......O#...##.......#..##..O.#..#.O.O...#....#.O...
#..O.#...OO#.OO#.O.OO.O##.#....OO....#........#.O.O....O.#..O#..#....#.O#..O#..O.....OO..OOOO.....O.
.O..OO#.O#OO..#O..O.#......O..O..O.#O.#..#.#.O..O.O..O.....##.OO..#O.#............O#...#......O.OO.#
O......##OO....O...O......#...O..O.#...OO#O..O.OOO..O.....O...#.##..OOO.##...O.O....O#O....##...#...
..OO..#.O.O..#O.O...O...#...O.O#.##O....##...###O..O...O.O##..........###...O...O..#...#.#.....O....
#..OO....O..#O..OO...OO.............O.O..OOO.O.#.....O#O....#O.....#.O..O....O..O....O..O....O.#....
OO.O##..O...#O........#O...#OOOO.O..O....O...O..O..O#.O.O..##.##..O.#O...O#...#..O...O...OO.......O.
#..O#..O...O.#......#OO.OO.O.#...O...O#...#...O..##O#....#......#.....#..#O...#.O.O..............O#.
##..OO#..........#.O..OOOOO..#...#....#.#..O#O...O....#.O.#O#OO.#......#...O........O...O#....#....O
.....O...O#....O..O..OO.O..#...O.#..#..#...O#..#O....O.#.....#O....O...##....#..#......###.O.....O#.
#...O#..O..O#..OO....#.#...#O#..#.....#..#..................OO....O......OO.........O###O#....OO.O..
O#...O.O.O..##.....##....#....#......#...O.#...O..##...O..O...##..#....#..O..O#...##..O.O..OOO..#...
..#.......#.O..O..#O....#...#.....OOO#...O#...O#.#.#O.....O#O.#.O.#.O......O.#..O.O..O#......O.O..O#
...O.#.#..O.#..###..#...#.....O..O.....OO#..O..#.O..#....OOO...........#.......#..OO..OO#.#O....#O..
.O.O...#....#.#O..#..OO#..#....OO....#O..O#.#..#..O.#..O.#O#..OO........#O.#...OO....OO......#.#O...
OO.O.O#..#.#.#.O.OOO...#....O..O##...O.OO#.#.....O.....#.....O....#.........O...O..........OOO.O.OOO
......O...O...###....##.O.O..OOO..O.O......O.#.......#..O..........O#..#..#O.#.##.....###.#O#O#O..#.
O..#..#O.OO.......#.OO...#OO..OO.O#O.....#.#.O..OOO.OO.##O.O#...#.O......#..#O#O...O#..........O.O#.
OO#...O..#..O.#..O........O.....O.....O........O..#....###..O..O..#...O...#.#.##.......O..#.O#O#O...
.......O..O...O...O.OO#.O.#..OO............O.O.O.#..OO#....##O.....O#.....O##O.....O.#...###O.....#.
.....O....OO..O..#O.....O#..O..O.#.#O#.#O#....O.#O..O#.O#.OO......#.O#..O.O...O...#...#..O....#...#O
#...#....#..O..#.O..#.##O..#O..#..OOO.#..##.....OO.O.....OOO.#..O.#.##O#..O.#..#.#.#....#O#...##....
.OO.O..###....#O....O..#.O.#.......#....O###..O.#......O#....#........O...#O..#..#.........O......##
O#......O#.....#.O....#..#.O.#O.......OO#...#..#.#O.#.O.##......#.#.#..O#O.#...O......O..OOO..OO.###
#O.#.O...O.....O....#OO##...OO..#...OO.#O.OOO.O..#O....O............#....#....#...........O.OOO#.OO.
.O.O.#OO#O.O.OO#..O..#....O.#..O...O....O.#OO#O...##.......O...O.....#.O...#...O.##O...OOO.O........
.O#..O.......#..##..OO#.....O.#.OO#...#O.O..O......O..OO.#...#.#............O#O.OO.......O#........#
.OO#..O##...........O.OO.....#.##....O#.#.#O..O...O..#..#..O.......#......#.#...........###O##......
...#...#.....O........OO..#.#...O.#.....#.OO.....#.O.#OO......#OO..#.....#..O##..O..#...O.O.......O#
O...O...#O..#O#O.......#..#O....#OO....#.#O.....O....O##.#...O.......#.....#........#O.O...O...O....
..#.....OO.#.OO....O#O....O#O...O.O...#O.##....##O...#..##O#.OO#O..OOO.#.#......O.OO.O..O.O.OO.#O.#.
.......O.....##...O#.#O.#....O.....O........#...#.OO...#...OO........#OO#...#..OO..O...#....O#.#OO.O
..#..O.OO....O...#.......OO.O.##...#...O...#.O#.OO#....O...O..O###.O.###O..#....##.O.##....O..##...#
.......OOO.....OO..#..O..#O.OOO#O.....O.O#.....O....###..O#..OO..O....###O.OO...#..#.O....#.O.O..#OO
.#...#.........#.###..#...#.#...#O.#..O#O#OOOO#.#.O.....O.#....#..O......#OO....O..O.O.#.O......O..O
O.O....O....O..O......O...#.....O##....OOO.....#.OO.#..O....O..O.O#.O#.OO......#....#......OO......O
..#O.#O.....O...#O...##.O#..O...#..##.O.O.O....#.....#.O#O.....#............O....#.#...#....###...#.
.O..O...OO.....#...........##...O#.O##O........OO..O.###O.#..#..#.O..O.......O....#O.#.........#...#
..##.O....O...O.O.O#O...#O..#..#.#.O...#O.O.O.....#....#...........O...O....O....OO#O.#.O....#..O..O
.#O#....O.....O#O..O##O#..O..O.O.....O........#.#......O#..O..OO.OO#.....OO........O......O#...O.#..
....#.....O..#......O...##.O.O.#..#.....O.O..#.O#.#O...##....O.......#O..O.....#..#.....#.....#.....
.OO....OOO.OO....O...#.......O......#O.#O..O.O#O..............O.#......#.#.......#....#.O....#.#O.#.
OO...OO.#.O#OO#........##.O.....#..#O.#....O..O..O.O#..........O..O.O....#..O.......O....O....O.OO.O
O.#O.......O#.#...#........O...O.O....O#OO....O.O.O...#.#.O#...#O#O.....##..O#O...#O....O....O#OOO.#
.OO#..#..O..........##.O.#OO#..O.O.#...#....O..O#.O..#.#.....O.O..#..OO..##O#...O.O.O#........O.....
.O............#.O...#...#....###.O#.#.#....O.....OO...#O.#.O..O##...#O.#O..OO#..#.O#.#.....O#.......
#..O#..#.OOO#O...O.O..O..#OOO....#...........O##...OOO##O....O.O...O..O#O.........O.OO.....O....O...
.#....#OO..##O..#O##O.#O....#......O.OO..........##.OO#O...#.....O.O.....O#..OO.#........O..O.O..O..
....O.##...#.O.........O.OO....#....##O..#O.......#..O.##O#..#O..#.....O.O#O....#...O..O.OO.........
..###.O.....##.....OO.O..OO.O..#...O.....#....O.O...............O.##.#.O#O#.#...O..#.OOOOO....#.#.#.
O...O....O.#.#.O#.O#..#......O#.....OO.##....OO.....O.......O....O.O.....#...O..OO#..OO..O....#OOO.#
#.#.#.O..#.O...#....#..O....O......O..#..O.OO#O......O.......O.O.........O...O.......OO.##.......#.#
O#..........O...#O.###....#O..O.#......O....#.O.O...O...O.....O#..#.O#..O.#.O..OOO#.O...#..O.#O.....`

const sampleInputPart1 = `O....#....
O.OO#....#
.....##...
OO.#O....O
.O.....O#.
O.#..O.#.#
..O..#O..O
.......O..
#....###..
#OO..#....`

// const sampleInputPart2 = ``

const sumIt = (prev: number, item: number) => prev + item

const useTestInput = true
const input = useTestInput ? sampleInputPart1 : realInput

const print = (plate: string[][]) => {
  console.log(plate.map((d) => d.join('')).join('\n'))
  console.log('---')
}

const rotate = (rows: string[][]): string[][] => {
  let n = []
  const len = rows[0].length
  // for (let i = 0; i < len; i++) {
  //   n.push(rows.map((row) => row[len - 1 - i]))
  // }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      n[i]
    }
    n.unshift(rows.map((row) => row[len - 1 - i]))
  }
  return n
}
const rows = input.split('\n')
const orig = rows.map((d) => d.split(''))
print(orig)
print(rotate(orig))
print(rotate(rotate(orig)))
let cols = rotate(rotate(rotate(orig)))
console.log('***')
// print(cols)
const pushToFront = (col: string[]): string[] => {
  const len = col.length
  let available = null
  for (let i = 0; i < len; i++) {
    // console.log(col, i, available)
    if (col[i] === 'O' && available != null) {
      col[available] = 'O'
      col[i] = '.'
      available++
    }
    if (col[i] === '.') {
      available = Math.min(available ?? len, i)
    }
    if (col[i] === '#') {
      available = null
    }
  }
  return col
}
const calcWeight = (col: string[]): number => {
  const len = col.length
  let sum = 0
  for (let i = 0; i < len; i++) {
    if (col[i] === 'O') {
      sum += len - i
    }
  }
  return sum
}

const part1 = cols
  // .filter((__, i) => i === 1)
  .map(pushToFront)
  .map((d) => {
    // console.log(d)
    return d
  })
  .map(calcWeight)
  .reduce(sumIt, 0)
// console.log(rotate(cols, 'L'))
// print(cols)
// print(rotate(cols))
console.log(part1)

const part2 = cols.map(calcWeight).reduce(sumIt, 0)
console.log(part2)

const CoDeO = () => {
  return (
    <main>
      <h2>Day 14</h2>
      <p>Part 1: calculated is {part1}, and answer is 111339.</p>
      <p>Part 2: calculated is {part2}, and answer is tbd.</p>
      <p>
        <Link href="/advent-of-code-2023">Back to Advent</Link>
      </p>
    </main>
  )
}

export default CoDeO
