import './pendu.css';
import './main.css';
import App from './components/App';
import '../../public/images/le-pendu-title.png';
import '../../public/images/pendu_illustration.jpg';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <App />
    </main>
  )
}
