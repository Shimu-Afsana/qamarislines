'use client'

import Image from 'next/image'
import styles from './transport-business-flow.module.css'

const items = [
  { label: 'Last-mile delivery', kind: 'van' },
  { label: 'Logistics warehouse', kind: 'warehouse' },
  { label: 'Container trucking', kind: 'truck' },
  { label: 'Container terminal', kind: 'terminal' },
  { label: 'Cargo handling', kind: 'handling' },
  { label: 'Forklift operations', kind: 'forklift' },
  { label: 'Port crane', kind: 'crane' },
  { label: 'Ocean freight', kind: 'ship' },
  { label: 'Industrial production', kind: 'factory' },
]

const photoPaths = ['/images/QSL.20.png', '/images/Qamaris Progress.jpeg']

function Illustration({ kind }: { kind: string }) {
  return (
    <svg className={styles.illustration} viewBox="0 0 180 120" role="img" aria-label={items.find((item) => item.kind === kind)?.label}>
      <path d="M18 94h144l-26 13H44z" fill="#dbe5f3" />
      {kind === 'van' && <><path d="M38 54h67l18 18v22H38z" fill="#2b3386"/><path d="M105 62h14l10 12h-24z" fill="#79c6dd"/><circle cx="57" cy="96" r="9" fill="#15245f"/><circle cx="111" cy="96" r="9" fill="#15245f"/><path d="M50 63h32v18H50z" fill="#fff"/><path d="M57 70h18" stroke="#ef7120" strokeWidth="4"/></>}
      {kind === 'warehouse' && <><path d="m35 48 52-27 57 28-53 27z" fill="#4779b8"/><path d="M35 48v42l56 29V76z" fill="#2b3386"/><path d="M91 76v43l53-27V49z" fill="#6d9bd0"/><path d="M54 54h25v18H54zm35 18h17v25H89z" fill="#d9e9f7"/></>}
      {kind === 'truck' && <><path d="M22 62h91v31H22z" fill="#51c5d2"/><path d="M113 72h26l17 17v4h-43z" fill="#2b3386"/><path d="M123 76h15l8 10h-23z" fill="#a9d8e5"/><circle cx="45" cy="96" r="9" fill="#16235b"/><circle cx="126" cy="96" r="9" fill="#16235b"/><path d="M31 70h72M31 78h72" stroke="#a1e5e8" strokeWidth="2"/></>}
      {kind === 'terminal' && <><path d="M24 86h130v10H24z" fill="#2b3386"/><path d="M32 61h24v24H32zm28 8h24v17H60zm28-17h24v33H88zm28 13h25v20h-25z" fill="#ef7120"/><path d="M27 53h112M38 53V24m88 29V20M83 53V15" stroke="#2b3386" strokeWidth="5"/><path d="M27 26h112" stroke="#ef7120" strokeWidth="3"/></>}
      {kind === 'handling' && <><path d="M31 75h86v20H31z" fill="#6c95c7"/><path d="m45 62 39-20 38 20-39 20z" fill="#2b3386"/><path d="M64 60h24v15H64z" fill="#ef7120"/><circle cx="78" cy="36" r="12" fill="#ef7120"/><path d="M78 48v27m0-19 19 13" stroke="#2b3386" strokeWidth="6"/></>}
      {kind === 'forklift' && <><path d="M44 57h41l15 25H44z" fill="#ef7120"/><path d="M84 38h8v47h-8zM92 82h37" stroke="#2b3386" strokeWidth="6"/><path d="M101 54h35v25h-35z" fill="#4779b8"/><circle cx="58" cy="94" r="10" fill="#16235b"/><circle cx="106" cy="94" r="10" fill="#16235b"/></>}
      {kind === 'crane' && <><path d="M54 94V28h9v66zM58 28h91v7H58zM139 32l-28 54h-8l28-54z" fill="#2b3386"/><path d="M111 35v34" stroke="#ef7120" strokeWidth="3"/><path d="M102 68h19v18h-19z" fill="#ef7120"/><path d="M50 94h24" stroke="#2b3386" strokeWidth="8"/></>}
      {kind === 'ship' && <><path d="m18 75 126 0-18 25H40z" fill="#2b3386"/><path d="M38 56h75v20H38z" fill="#ef7120"/><path d="M53 40h63v16H53z" fill="#4779b8"/><path d="M29 76h100" stroke="#ef7120" strokeWidth="4"/><path d="M144 81h18" stroke="#2b3386" strokeWidth="3"/></>}
      {kind === 'factory' && <><path d="M30 47h112v48H30z" fill="#4779b8"/><path d="M47 47V23h15v24m35 0V16h15v31" fill="#2b3386"/><path d="M47 66h20v29H47zm36 0h20v29H83zm36 0h12v29h-12z" fill="#d9e9f7"/><path d="M28 49h116" stroke="#ef7120" strokeWidth="5"/></>}
    </svg>
  )
}

export default function TransportBusinessFlow() {
  return (
    <section className={styles.section} aria-labelledby="transport-flow-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>OUR BUSINESS IN MOTION</p>
        <h2 id="transport-flow-title" className={styles.title}>Transport Is Mother Of All Businesses And Maritime Transport Is Mother Of Transport Business.</h2>
        <div className={styles.flow}>
          <svg className={styles.arrows} viewBox="0 0 1200 520" aria-hidden="true" preserveAspectRatio="none">
            <path className={styles.arrowPath} d="M70 186H1120c48 0 48 74 0 74H80c-48 0-48 74 0 74h1040" />
            <path className={styles.arrowHead} d="m1130 238 42 22-42 22zM70 312l-42 22 42 22z" />
          </svg>
          <div className={styles.row}>
            {items.slice(0, 8).map((item, index) => <div className={`${styles.item} ${styles[`delay${index}`]}`} key={item.kind}><Illustration kind={item.kind} /><span>{item.label}</span></div>)}
          </div>
          <div className={`${styles.row} ${styles.bottomRow}`}>
            {items.slice(7).concat(items.slice(3, 8)).map((item, index) => <div className={`${styles.item} ${styles[`delay${index + 2}`]}`} key={`${item.kind}-${index}`}><Illustration kind={item.kind} /><span>{item.label}</span></div>)}
          </div>
        </div>
        <div className={styles.footerLine}>
          <h3>Maritime and Multimodal Transport Is Our Business</h3>
          <div className={styles.photos}>
            {photoPaths.map((src, index) => <div className={styles.photo}
             key={src}><Image src={src} alt={index === 0 ? 'Stacked shipping containers' : 'Cargo ship at port'} fill sizes="(max-width: 700px) 44vw, 170px" /></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
