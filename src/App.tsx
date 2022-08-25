import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

interface Posts {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string
  },
  content: {
    type: 'paragraph' | 'link';
    content: string
  }[],
  publishedAt: Date
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lilicrst.png",
      name: "Lisandra Cristina",
      role: "Mobile Developer",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },       
    ],
    publishedAt: new Date('2022-08-18 15:07:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/fernnlcs.png",
      name: "Fernando Silva",
      role: "Backend Developer",
    },
    content: [
      { type: 'paragraph', content: 'Eae!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },       
    ],
    publishedAt: new Date('2022-07-05 19:40:00'),
  }
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
