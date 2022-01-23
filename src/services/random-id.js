const randomId = () => (
  (new Date()).getTime()
  + (Math.random().toString(16).slice(2)));

export default randomId;
