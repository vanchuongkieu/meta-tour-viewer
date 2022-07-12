import {useState} from 'react';

const useTest = (initialState: string) => {
  const [value, setValue] = useState<string>(initialState);

  return {value, setValue};
};

export default useTest;
