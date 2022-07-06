import Link from 'next/link';

export default function A() {
  return (
    <div>
      <Link href="/">back to home</Link>
    </div>
  )
}

export const getStaticProps = () => ({
  props: {},
})
