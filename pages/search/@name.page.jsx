import { useParams } from 'react-router-dom';

export { Page }

function Page(a) {
  console.log('useParams(): ', useParams());
  return <h1>Hello, {a}</h1>
}
