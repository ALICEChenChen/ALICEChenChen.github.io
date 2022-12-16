import Head from 'next/head'

import Section, { SectionUnindented } from '../components/section'
import Highlight from '../components/highlight'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chen Zhang's CV</title>
        <meta name="description" content="Chen Zhang's CV" />
      </Head>
      <main>
        {/* Title */}
        <div className="flex flex-col items-center pt-14 gap-2">
          <p className="text-3xl">Chen Chang</p>
          <p>
            Email: <a href="mailto:c.zhang@my.cityu.edu.hk">c.zhang@my.cityu.edu.hk</a>
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col items-stretch gap-2">
          <Section title="Education" middleDot>
            <EduItem
              lTitle="City University of Hong Kong"
              lBody="Doctor of Philosophy - Computer Science; GPA: 4.0/4.3"
              rAddr="Kowloon, Hong Kong SAR, China"
              rDate="Sep. 2019 - Aug. 2023 (expected)"
            />
          </Section>

          <Section title="Research Interests" noDot>
            Network Security, Mobile Edge Computing, and Blockchain
          </Section>

          <Section title="Paper in Submission">
            <PaperItem query="Chen Zhang">
              Chen Zhang, Qingyuan Xie, Yinbin Miao, Yu Guo, Hongwei Du, and Xiaohua Jia. Optimal Compression for
              Encrypted Key-Value Store in Cloud Systems. IEEE International Conference on Computer Communications
              (INFOCOM), Under Review, 2021.
            </PaperItem>
          </Section>

          <Section title="Publications">
            <PaperItem query="Chen Zhang">
              Chen Zhang, Yu Guo, Xiaohua Jia, Cong Wang, and Hongwei Du. Enabling Proxy-Free Privacy-Preserving and
              Federated Crowdsourcing by Using Blockchain. IEEE Internet of Things Journal (IoTJ), vol. 8, no. 8, pp.
              6624-6636, 2021, doi: 10.1109/JIOT.2021.3051295.
            </PaperItem>
          </Section>

          <Section title="Honors and Awards">
            <SectionUnindented>
              <p className="font-bold">Master:</p>
            </SectionUnindented>
            <p>Excellent Graduate Student</p>
            <p>National Scholarship for Graduate Students</p>
            <p>First Prize of Scholarship (twice)</p>
          </Section>
        </div>
      </main>
    </>
  )
}

// 'l' means left and 'r' means right
interface EduItemProps {
  lTitle: string
  lBody: string
  rAddr: string
  rDate: string
}

function EduItem(props: EduItemProps) {
  const { lTitle, lBody, rAddr, rDate } = props

  return (
    <div className="flex">
      <div className="flex flex-col">
        <p className="font-bold">{lTitle}</p>
        <p className="italic">{lBody}</p>
      </div>
      <div className="grow shrink-0 w-5" />
      <div className="flex flex-col items-end">
        <p>{rAddr}</p>
        <p className="italic">{rDate}</p>
      </div>
    </div>
  )
}

interface PaperItemProps {
  query: string
  children: string
}

function PaperItem(props: PaperItemProps) {
  const { query, children } = props

  const [authors, title] = children.split('. ', 2).map((s) => s + '.')
  const publication = children.substring(authors.length + title.length + 2 * '. '.length)

  return (
    <p>
      <Highlight query={query} highlighted={<span className="font-bold">{query}</span>}>
        {authors}
      </Highlight>{' '}
      {title} <span className="italic">{publication}</span>
    </p>
  )
}
