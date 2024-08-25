import "@/styles/globals.css";
import "@/styles/gallery.css";
import "@/styles/survey.css";
import "@/styles/intro.css";
import "@/styles/act.css";
import "@/styles/videoFormat.css";
import Layout from '../components/Layout';
export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} /> 
  </Layout>
  
  );
}
