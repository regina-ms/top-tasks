export default async function getData(itemNumber) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  const tasks = await data.slice(0, itemNumber).map((task) => task.title);
  return tasks;
}
