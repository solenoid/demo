import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

const sumNumberFormat = d3.format('.2f')
const sumFormat = (val: number) =>
  val ? `${sumNumberFormat(val)} Inches Total on` : 'No Precipitation on'

const formatHour = (date: Date) =>
  d3.timeFormat('%-I %p')(date).replace('12 PM', 'noon')

const formatDay = d3.timeFormat('%a %d')
const blank = () => ''

const hourOnlyFormat = (date: Date) =>
  (d3.timeDay(date) < date ? formatHour : formatHour)(date)

// TODO see if we care about this ever
let yTickFormat: any = null

type d3Props = {
  color: string
  data: Array<{
    date: Date
    value: number
  }>
  sumData: any[]
}
type Props = d3Props & {
  noneTitle: string
  title: string
}
const d3Magic = (el: HTMLElement, config: d3Props) => {
  const { color, data, sumData } = config
  const dayOnlyFormat = (date: Date) => {
    const found = sumData.find((d: any) => {
      return d.date.getTime() === date.getTime()
    })
    let otherPart = ''
    if (found) {
      otherPart = sumFormat(found.value)
    }
    return otherPart + ' ' + (d3.timeDay(date) < date ? blank : formatDay)(date)
  }

  const HALF_MAGIC_BAR_WIDTH = 9
  // 1 pixel between bars
  const MAGIC_BAR_WIDTH = HALF_MAGIC_BAR_WIDTH * 2 - 1
  const width = 800
  const height = 140
  const margin = {
    top: 20,
    right: 40 + HALF_MAGIC_BAR_WIDTH,
    bottom: 30,
    left: 40 + HALF_MAGIC_BAR_WIDTH,
  }
  let vis = d3
    .select(el)
    .append('svg:svg')
    .attr('width', width)
    .attr('height', height)
    // TODO figure out if background and foreground colors can get worked out better
    .style('background', '#fff')
    .style('color', '#333')
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)
  const contentHeight = height - margin.top - margin.bottom
  const contentWidth = width - margin.right - margin.left
  let xScale = d3
    .scaleTime()
    .domain(d3.extent(data.map((d) => d.date)) as [Date, Date])
    .range([0, width - margin.left - margin.right])
  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => d.value)) as [number, number])
    .range([contentHeight, 0])
  let yAxis = d3
    .axisLeft(yScale)
    .ticks(5)
    .tickFormat(yTickFormat)
    .tickSizeInner(contentWidth)

  const EXTEND_UP_AXIS = 12
  let xAxisTop = d3
    .axisTop(xScale)
    .ticks(5)
    .tickSizeInner(contentHeight + EXTEND_UP_AXIS)
    // @ts-expect-error
    .tickFormat(dayOnlyFormat)
  let xAxisBottom = d3
    .axisBottom(xScale)
    .ticks(15)
    // @ts-expect-error
    .tickFormat(hourOnlyFormat)

  vis
    .append('g')
    .attr('class', 'y-axis')
    .attr('transform', `translate(${contentWidth},0)`)
    .call(yAxis)
  vis
    .append('g')
    .attr('class', 'x-axis x-axis-top')
    .attr('transform', `translate(0,${contentHeight})`)
    .call(xAxisTop)
    .selectAll('text')
    .attr('x', 3)
    .attr('dy', EXTEND_UP_AXIS)
  vis
    .append('g')
    .attr('class', 'x-axis x-axis-bottom')
    .attr('transform', `translate(0,${contentHeight})`)
    .call(xAxisBottom)
    .selectAll('text')
    .attr('x', 2)
    .attr('y', 3)

  vis
    .append('g')
    .attr('class', 'bars')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', ({ date }) => xScale(date) - MAGIC_BAR_WIDTH)
    .attr('y', ({ value }) => yScale(value))
    .attr('height', ({ value }) => contentHeight - yScale(value))
    .attr('width', MAGIC_BAR_WIDTH)
    .attr('fill', color)
    .attr('fill-opacity', '88%')

  vis
    .append('g')
    .attr('class', 'sums')
    .selectAll('text')
    .data(sumData)
    .enter()
    .append('text')
    .attr('x', (d) => xScale(d.date))
    .attr('y', -3)
    .style('font-size', 10)
    .style('text-anchor', 'start')
  // TODO figure out how to explain sum of partial days info
  // .text(d => sumFormat(d.date, d.value));
}

export const DateBar = (props: Props) => {
  const { noneTitle, title, color, data, sumData } = props
  const sumTotal = sumData.reduce(
    (memo: number, item: any) => memo + item.value,
    0
  )
  if (sumTotal === 0) return <h2>{noneTitle}</h2>

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (element) {
      const child = element.children[0]
      if (child) {
        child.remove()
      }
      d3Magic(element, { color, data, sumData })
    }
  }, [ref, data, color])
  return (
    <>
      <h2>{title}</h2>
      <div ref={ref} />
    </>
  )
}
