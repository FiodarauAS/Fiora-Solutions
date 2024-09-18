import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>

      <Layout>
        <h2>Welcome to Fiora Solutions</h2>
        <p>This is the home page content.</p>
      </Layout>
    </div>
  );
}
