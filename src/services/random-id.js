export default function randomId() {
  const id = (new Date()).getTime() + (Math.random().toString(16).slice(2));
  return id;
}
