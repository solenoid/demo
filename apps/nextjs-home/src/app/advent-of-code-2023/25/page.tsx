import Link from 'next/link'

const REAL_INPUT = ``

const SAMPLE_INPUT = ``

const sumIt = (prev: number, item: number) => prev + item

const useTestInput = true
const input = useTestInput ? SAMPLE_INPUT : REAL_INPUT

const part1 = input
  .split('\n')
  .map((line) => {
    console.log(line)
    return 1
  })
  .reduce(sumIt, 0)
console.log(part1)

const part2 = input
  .split('\n')
  .map((line) => {
    // console.log(line)
    return 1
  })
  .reduce(sumIt, 0)
// console.log(part2)

const CoDeO = () => {
  return (
    <main>
      <h2>Day 25</h2>
      <p>Part 1: calculated is {part1}, and answer is TBD.</p>
      <p>Part 2: calculated is {part2}, and answer is TBD.</p>
      <p>
        <Link href="/advent-of-code-2023">Back to Advent</Link>
      </p>
    </main>
  )
}

export default CoDeO
