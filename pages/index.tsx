import Link from 'next/link'
import Layout from '../components/Layout'
import UsersList from '../components/UsersList';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js22 👋</h1>
    <UsersList />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
