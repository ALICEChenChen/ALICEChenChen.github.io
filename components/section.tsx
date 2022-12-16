import React from 'react'

export interface SectionProps {
  title: string
  noDot?: boolean
  middleDot?: boolean
  children?: React.ReactNode
}

export default function Section(props: SectionProps) {
  const { title, noDot, middleDot, children } = props

  return (
    <div className="flex flex-col gap-2 px-14">
      <p className="uppercase text-sm">
        {Array.from(title).map((c, i) =>
          c.toUpperCase() == c ? (
            <span className="text-xl" key={i}>
              {c}
            </span>
          ) : (
            c
          )
        )}
      </p>
      <hr className="mb-1" style={{ marginTop: '-0.5em' }} />
      {React.Children.map(children, (child, i) =>
        React.isValidElement(child) && typeof child.type != 'string' && child.type.name == SectionUnindented.name ? (
          child
        ) : (
          <div className={'flex gap-2' + (middleDot ? ' items-center' : '')} key={i}>
            <div className={middleDot ? '' : 'pt-2'}>
              <div className="w-1.5 h-1.5">{noDot ? '' : <Dot />}</div>
            </div>
            <div className="w-full">{child}</div>
          </div>
        )
      )}
    </div>
  )
}

export const SectionUnindented = (props: { children?: React.ReactNode }) => <>{props.children}</>

function Dot() {
  return (
    <svg viewBox="0 0 10 10">
      <circle className="fill-black dark:fill-white" cx="5" cy="5" r="5" />
    </svg>
  )
}
