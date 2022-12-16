export interface HighlightProps {
  query: string
  highlighted: React.ReactNode
  children: string
}

export default function Highlight(props: HighlightProps) {
  const { query, highlighted, children } = props

  return (
    <span>
      {children.split(query).flatMap((part, i) => (i == 0 ? [part] : [<span key={i}>{highlighted}</span>, part]))}
    </span>
  )
}
