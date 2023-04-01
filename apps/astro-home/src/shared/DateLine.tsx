import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

const formatHour = (date: Date) =>
  d3.timeFormat('%-I %p')(date).replace('12 PM', 'noon')

const formatDay = d3.timeFormat('%a %d')
const blank = () => ''

const hourOnlyFormat = (date: Date) =>
  (d3.timeDay(date) < date ? formatHour : formatHour)(date)

const dayOnlyFormat = (date: Date) =>
  (d3.timeDay(date) < date ? blank : formatDay)(date)

// TODO see if we care about this ever
const yTickFormat: any = null

type d3Props = {
  color: string
  data: Array<{
    date: Date
    value: number
  }>
  daylightData: any[]
  showFreezeLine?: boolean
}
type Props = d3Props & {
  title: string
}
const d3Magic = (el: HTMLElement, config: d3Props) => {
  const { color, data, daylightData, showFreezeLine } = config
  const HALF_MAGIC_BAR_WIDTH = 9
  const width = 800
  const height = 140
  const margin = {
    top: 20,
    right: 40 + HALF_MAGIC_BAR_WIDTH,
    bottom: 30,
    left: 40 + HALF_MAGIC_BAR_WIDTH,
  }
  const vis = d3
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
  // TODO see about getting rid of the castes safely
  const xExtent = d3.extent(data.map((d) => d.date)) as [Date, Date]
  const yExtent = d3.extent(data.map((d) => d.value)) as [number, number]
  const xRange = [0, width - margin.left - margin.right]
  const yRange = [contentHeight, 0]
  const xScale = d3.scaleTime().domain(xExtent).range(xRange).clamp(true)
  const yScale = d3.scaleLinear().domain(yExtent).range(yRange)
  const yAxis = d3
    .axisLeft(yScale)
    .ticks(5)
    .tickFormat(yTickFormat)
    .tickSizeInner(contentWidth)

  const xAxisTop = d3
    .axisTop(xScale)
    .ticks(5)
    .tickSizeInner(contentHeight)
    // @ts-expect-error
    .tickFormat(dayOnlyFormat)
  const xAxisBottom = d3
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
    .attr('x', -1)
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
    .data(daylightData)
    .enter()
    .append('rect')
    .attr('x', ([x1]) => xScale(x1))
    .attr('width', ([x1, x2]) => xScale(x2) - xScale(x1))
    .attr('height', contentHeight)
    .attr('fill', 'rgba(0,25,50,0.1)')

  if (showFreezeLine && yExtent[0] <= 32 && yExtent[1] >= 32) {
    vis
      .append('line')
      .attr('y1', yScale(32))
      .attr('y2', yScale(32))
      .attr('x2', xScale(xExtent[1]))
      .attr('stroke-width', 2)
      .attr('stroke-linecap', 'round')
      .style('stroke', '#2859a6')
  }

  const line = d3
    .line()
    .curve(d3.curveCatmullRom.alpha(1))
    // @ts-expect-error
    .x((d) => xScale(d.date))
    // @ts-expect-error
    .y((d) => yScale(d.value))

  vis
    .append('path')
    .datum(data)
    .attr('stroke', color)
    .attr('stroke-width', 2)
    .attr('stroke-linecap', 'round')
    // .attr("stroke-linejoin", "round")
    .attr('fill', 'none')
    // @ts-expect-error
    .attr('d', line)
}

export const DateLine = (props: Props) => {
  const { title, color, data, daylightData, showFreezeLine = true } = props
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (element) {
      const child = element.children[0]
      if (child) {
        child.remove()
      }
      d3Magic(element, { color, data, daylightData, showFreezeLine })
    }
  }, [ref, data, color])
  return (
    <>
      <h2>{title}</h2>
      <div ref={ref} />
    </>
  )
}
