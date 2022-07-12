import Hello from '@/components/Hello';
import {TodoDto} from '@/services/dtos/TodoDto';
import todoService from '@/services/todoService';
import type {GetStaticProps, InferGetStaticPropsType} from 'next';

const Home = ({todos}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Hello title="Todo List" />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

interface Props {
  todos: TodoDto[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const todos = await todoService.getAll();
  return {
    props: {
      todos,
    },
  };
};

export default Home;
