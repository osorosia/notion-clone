import axios from './axios';

export const fetchGetNotes = async () => {
  const url = '/api/note';
  const res = await axios.get(url);
  const json = res.data;

  console.log('DB', json.result);
  return json;
};

export const fetchGetNote = async (_id: string) => {
  const url = `/api/note?_id=${_id}`;
  const res = await axios.get(url);
  let json = res.data;
  
  if (json.notes.length !== 1)
    json.result = 'ng';

  console.log('DB', json.result);
  return json;
};

export const fetchDeleteNote = async (_id: string) => {
  const url = `/api/note/delete?_id=${_id}`;
  const res = await axios.delete(url);
  const json = res.data;

  console.log('DB', json.result);
  return json;
};

export const fetchPutNote = async (_id: string, params: any) => {
  const url = `/api/note/update?_id=${_id}`;
  const res = await axios.put(url, params);
  const json = res.data;

  console.log('DB', json.result);
  return json;
};

export const fetchSwapNotes = async (id1: string, id2: string) => {
  const url = `/api/note/swap?_id1=${id1}&_id2=${id2}`;
  const res = await axios.put(url);
  const json = res.data;
  
  console.log('DB', json.result);
  return json;
};

export const fetchPostNote = async (note: any) => {
  const url = '/api/note/new';
  const params = note;
  const res = await axios.post(url, params);
  const json = res.data;
  
  console.log('DB', json.result);
  return json;
};
